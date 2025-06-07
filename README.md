This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 💼 MyPortfolio

개인 개발자로서의 정체성과 프로젝트 경험을 소개하는 포트폴리오 웹사이트입니다.  
Next.js(App Router) + Tailwind CSS + TypeScript 기반으로 제작되었으며, 반응형 UI와 시각적 정보 전달에 중점을 두었습니다.

---

## ✨ 주요 특징 (Features)

- ✅ **App Router 기반의 최신 Next.js 구조**
- 🎨 **Tailwind CSS로 빠르게 구성된 반응형 UI**
- ⚙️ **ESLint + TypeScript로 안정적인 코드 품질 확보**
- 🌐 **Vercel 자동 배포 지원 (GitHub 연동)**
- 📊 **기술 스택, 프로젝트 이력, 자기소개, 연락처 등 구성**

---

## 🛠️ 사용 기술 (Tech Stack)

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</p>

---

## 📁 폴더 구조

```bash
myportfolio/
├── app/                # Next.js App Router 기반 라우팅
│   ├── page.tsx        # 메인 페이지
│   └── layout.tsx      # 공통 레이아웃
├── src/
│   └── components/     # UI 컴포넌트
├── public/             # 정적 자산 (이미지, resume.pdf 등)
├── styles/             # 글로벌 스타일
├── .eslintrc.json      # ESLint 설정
├── tailwind.config.ts  # Tailwind 설정
├── package.json        # 의존성 정보
└── tsconfig.json       # TypeScript 설정
```
