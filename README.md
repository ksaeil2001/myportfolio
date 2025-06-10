# 💼 MyPortfolio

개인 개발자로서의 정체성과 프로젝트 경험을 소개하는 포트폴리오 웹사이트입니다.  
Next.js(App Router) + Tailwind CSS + TypeScript 기반으로 제작되었으며, 반응형 UI와 시각적 정보 전달에 중점을 두었습니다.

---

## ✨ 주요 특징 (Features)

- ✅ App Router 기반의 최신 Next.js 구조
- 🎨 Tailwind CSS로 빠르게 구성된 반응형 UI
- ⚙️ ESLint + TypeScript로 안정적인 코드 품질 확보
- 🌐 Vercel 자동 배포 지원 (GitHub 연동)
- 📊 기술 스택, 프로젝트 이력, 자기소개, 연락처 등 구성

---

## 🛠️ 사용 기술 (Tech Stack)

### 🧑‍🎨 프론트엔드

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

### 🔧 개발 도구 및 배포

<p>
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

---

## 🚀 실행 방법 (Local Development)

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

이메일 전송을 위해 `.env` 파일에 다음 값을 설정합니다.

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

`public/resume.pdf` 경로에 PDF 이력서 파일을 두면 연락처 페이지에서 다운로드
링크가 활성화됩니다. 저장소에는 포함하지 않으므로 배포 전에 직접 추가하세요.

## 📌 포트폴리오 웹사이트 UI/UX 핵심 기능 요약

### 🌐 전역 레이아웃 및 네비게이션
- **기능 목적:** 핵심 섹션(홈, 자기소개, 프로젝트, 연락처) 간 편리한 이동
- **UI 구성:** 상단 고정 네비게이션 바 또는 반응형 햄버거 메뉴로 간결하게 섹션 연결

---

### 🚩 히어로 섹션 (홈)
- **기능 목적:** 방문자의 즉각적인 관심 유도 및 핵심 정보 제공
- **UI 구성:** 큼직하고 깔끔한 타이포그래피, 간단한 소개 문구, 프로젝트/이력서 보기 버튼 강조

---

### 📊 요약 통계 카드 (홈)
- **기능 목적:** 핵심 성과와 통계를 시각적으로 신속히 전달
- **UI 구성:** 아이콘과 숫자가 결합된 시각적으로 간결한 카드로 프로젝트 수, 사용 기술 수 등 표현

---

### 📂 프로젝트 목록
- **기능 목적:** 진행한 프로젝트들을 명확하고 구조적으로 전달
- **UI 구성:** 그리드 기반 카드 레이아웃으로 썸네일 이미지, 프로젝트 제목, 짧은 설명 포함, 기술별 필터링 기능 추가 가능

---

### 📖 프로젝트 상세 페이지
- **기능 목적:** 개별 프로젝트의 배경, 기술, 성과, 학습 내용을 상세히 전달
- **UI 구성:** 프로젝트 개요, 문제 정의, 해결 방법, 주요 스크린샷, 기술 스택 시각화(아이콘 및 기여도 그래프), 배운 점으로 명확히 구분된 섹션 구조

---

### 🙋‍♂️ 자기소개 페이지 (타임라인 + 소개)
- **기능 목적:** 개인의 성장 과정과 개발자로서의 철학을 전달
- **UI 구성:** 주요 활동을 시간 순서대로 정리한 세로형 타임라인, 짧고 간결한 문장으로 표현된 철학과 가치관

---

### 📬 연락처 섹션
- **기능 목적:** 방문자가 쉽게 연락할 수 있도록 명확한 소통 경로 제공
- **UI 구성:** 이메일, GitHub, 블로그 링크와 PDF 이력서 다운로드 버튼을 포함하며 실제 동작하는 연락 폼(Contact Form)을 제공합니다

---

### 🌟 전역 UX 개선 요소
- **기능 목적:** 접근성 향상, 반응형 지원 및 사용성을 높이는 시각적 세부 요소 추가
- **UI 구성:** 모바일 최적화 레이아웃, 일관된 타이포그래피와 색상, 다크 모드 지원, 상호작용을 돕는 간단한 애니메이션과 명확한 시각적 위계 구성

