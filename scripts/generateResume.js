const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');
const { PDFDocument, StandardFonts } = require('pdf-lib');

async function loadProjects() {
  const dir = path.join(__dirname, '../content/projects');
  const files = await fs.readdir(dir);
  const result = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const raw = await fs.readFile(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    result.push(data);
  }
  return result;
}

async function generate() {
  const projects = await loadProjects();
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  let page = doc.addPage([595, 842]);
  let y = 800;
  page.drawText('Resume Projects Overview', { x: 50, y, size: 20, font });
  y -= 40;

  for (const p of projects) {
    const line = `${p.slug} (${p.year})`;
    page.drawText(line, { x: 50, y, size: 12, font });
    y -= 20;
    if (y < 50) {
      page = doc.addPage([595, 842]);
      y = 800;
    }
  }

  const pdfBytes = await doc.save();
  await fs.writeFile(path.join(__dirname, '../public/resume.pdf'), pdfBytes);
  console.log('Resume PDF generated at public/resume.pdf');
}

generate();
