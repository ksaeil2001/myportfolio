import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { PDFDocument, StandardFonts } from 'pdf-lib'

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
  const font = await doc.embedFont(StandardFonts.Helvetica)
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

  const pdfBytes = await doc.save()
  await fs.writeFile(path.join(__dirname, '../public/resume.pdf'), pdfBytes)
  console.log('Resume PDF generated at public/resume.pdf')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
