import { readFile } from 'fs/promises'
import path from 'path'

export async function getDictionary(locale: string) {
  const filePath = path.join(process.cwd(), 'src', 'dictionaries', `${locale}.json`)
  const data = await readFile(filePath, 'utf8')
  return JSON.parse(data)
}
