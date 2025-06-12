import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { PDFDocument, StandardFonts } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'

interface ProjectFrontmatter {
  title: string
  description: string
  year: number
  stack?: string[]
  features?: string[]
}

async function loadProjects(): Promise<ProjectFrontmatter[]> {
  const dir = path.join(__dirname, '../content/projects')
  const files = await fs.readdir(dir)
  const result: ProjectFrontmatter[] = []
  for (const file of files) {
    if (!file.endsWith('.md')) continue
    const raw = await fs.readFile(path.join(dir, file), 'utf-8')
    const { data } = matter(raw)
    result.push(data as ProjectFrontmatter)
  }
  return result
}

async function generate() {
  const projects = await loadProjects()
  const doc = await PDFDocument.create()
  doc.registerFontkit(fontkit)
  const fontPath = path.join(__dirname, '../public/fonts/NotoSansKR-Regular.otf')
  let font
  let canGenerate = true
  try {
    let fontBytes = await fs.readFile(fontPath)
    font = await doc.embedFont(fontBytes)
  } catch {
    console.log('Font not found locally. Downloading...')
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/OTF/Korean/NotoSansCJKkr-Regular.otf'
      )
      if (!res.ok) throw new Error('Failed to download font')
      const arrayBuf = await res.arrayBuffer()
      const fontBytes = new Uint8Array(arrayBuf)
      await fs.mkdir(path.dirname(fontPath), { recursive: true })
      await fs.writeFile(fontPath, fontBytes)
      font = await doc.embedFont(fontBytes)
    } catch (err) {
      console.error('Font download failed:', (err as Error).message)
      try {
        const fallbackPath = path.join(__dirname, '../public/fonts/Fallback.ttf')
        const fallbackBytes = await fs.readFile(fallbackPath)
        font = await doc.embedFont(fallbackBytes)
      } catch {
        console.warn('Fallback font not found. Using standard font.')
        try {
          font = await doc.embedFont(StandardFonts.Helvetica)
        } catch (embedErr) {
          console.error('Embedding standard font failed:', embedErr)
          canGenerate = false
        }
      }
    }
  }
  let page = doc.addPage([595, 842])
  let y = 800
  page.drawText('Resume Projects Overview', { x: 50, y, size: 20, font })
  y -= 40

  for (const p of projects) {
    const lines = [
      `${p.title} (${p.year})`,
      `- ${p.description}`,
      `Stack: ${(p.stack || []).join(', ')}`,
      ...((p.features || []).slice(0, 3).map((f) => `• ${f}`)),
    ]
    for (const line of lines) {
      page.drawText(line, { x: 50, y, size: 12, font })
      y -= 18
      if (y < 50) {
        page = doc.addPage([595, 842])
        y = 800
      }
    }
    y -= 10
  }

  if (!canGenerate) {
    console.warn('Skipping resume PDF generation due to font errors')
    return
  }

  const pdfBytes = await doc.save()
  await fs.writeFile(path.join(__dirname, '../public/resume.pdf'), pdfBytes)
  console.log('Resume PDF generated at public/resume.pdf')
}

generate().catch((err) => {
  console.error('Resume generation failed:', err)
})
