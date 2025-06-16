import { readFileSync } from 'fs'

function printSummary() {
  const readme = readFileSync('README.md', 'utf8')
  const match = readme.match(/### 패치 내역 요약.*?(?:\n\|.*)+/s)
  if (match) {
    console.log(match[0].trim())
  } else {
    console.error('Summary not found.')
  }
}

printSummary()
