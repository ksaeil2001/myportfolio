# 💼 MyPortfolio

개인 포트폴리오 웹사이트 저장소입니다.  
개발자로서의 역량과 프로젝트 경험을 효과적으로 보여주기 위해 설계되었으며,  
**Next.js 기반 최신 기술 스택**과 **실제 배포 환경**을 통해 **실전 수준의 UI/UX 구현**을 목표로 합니다.

[![Deploy to Vercel](https://img.shields.io/badge/Vercel-Live-black?style=flat-square&logo=vercel)](https://myportfolio-kseail.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/Repository-myportfolio-blue?style=flat-square&logo=github)](https://github.com/ksaeil2001/myportfolio)

---

## 🚀 개발 스택 (Tech Stack)

**🧱 프레임워크 & 라이브러리**  
> App Router 구조를 기반으로 페이지 구성과 라우팅을 담당합니다.

<p>
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
</p>

**💻 언어 & 타입 시스템**  
> 정적 타입을 통한 안정적인 개발을 위해 TypeScript만 사용합니다.

<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

**🎨 스타일링 도구**  
> 빠른 UI 프로토타이핑과 반응형 대응을 위해 Tailwind CSS를 사용하며, PostCSS로 CSS를 후처리합니다.

<p>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" />
</p>

**🧹 코드 품질 도구**  
> ESLint로 코드 정적 분석을 수행하며, Prettier는 사용하지 않습니다.

<p>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
</p>

**🔌 외부 API 연동**  
> EmailJS로 연락 폼을 처리하고, GitHub API를 통해 통계 정보를 가져옵니다.

<p>
  <img src="https://img.shields.io/badge/EmailJS-DDD?style=for-the-badge&logo=gmail&logoColor=EA4335" />
  <img src="https://img.shields.io/badge/GitHub API-181717?style=for-the-badge&logo=github&logoColor=white" />
</p>

**🚀 CI/CD 및 환경변수**  
> Vercel을 통해 GitHub 연동 자동 배포를 수행하며, 환경변수는 `.env.local` 또는 Vercel 설정에서 관리합니다.

<p>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/.env 관리-lightgrey?style=for-the-badge" />
</p>

> ❗ 현재 테스트 프레임워크는 사용하지 않으며, 모든 기능은 수동 브라우저 테스트를 통해 검증했습니다.

---

## 📌 주요 기능 및 UI 구성 요약

### 🏠 홈 (Home)
- 자기소개, 통계 카드, 대표 프로젝트 요약
- `HeroSection`, `StatsSection`, `ProjectsSection` 컴포넌트 구성

### 📂 프로젝트 목록 (/projects)
- 프로젝트 카드 + 필터/정렬 기능
- `ProjectCard`, `ProjectFilterBar` UI 사용
- `projects.ts`로 데이터 관리

### 🔍 프로젝트 상세 페이지 ([slug])
- 동적 라우팅 + 상세 설명 구성
- 기술 배지, 회고, 주요 기능 포함

### 🙋‍♂️ 자기소개 페이지 (/about)
- 타임라인 구성, 철학/가치관 요약
- `TimelineItem` 컴포넌트 기반

### ✉️ 연락처 페이지 (/contact)
- GitHub, 블로그, 이메일 링크
- `ContactForm.tsx` + EmailJS 연동
- `public/resume.pdf` 존재 시 다운로드 버튼 표시

---

## 📁 폴더 구조

```plaintext
myportfolio/
├── public/
│   ├── projects/             # 프로젝트 썸네일 이미지 저장 위치 (image URL 경로 참조)
│   └── resume.pdf            # PDF 이력서 (존재 시 contact 페이지에 다운로드 버튼 표시)
│
├── src/
│   ├── app/                  # Next.js App Router 기반 페이지 디렉터리
│   │   ├── layout.tsx        # 전역 레이아웃 구성 (헤더, 메타데이터, 폰트 포함)
│   │   ├── page.tsx          # 홈 페이지 (Hero, Stats, ProjectsSection 포함)
│   │
│   │   ├── about/
│   │   │   └── page.tsx      # 자기소개 페이지 (타임라인 및 기술 철학 시각화)
│   │
│   │   ├── projects/
│   │   │   ├── page.tsx      # 프로젝트 목록 페이지 (필터/정렬 UI 포함)
│   │   │   └── [slug]/       
│   │   │       └── page.tsx  # 개별 프로젝트 상세 페이지 (동적 라우팅 기반)
│   │
│   │   ├── contact/
│   │   │   └── page.tsx      # 연락처 페이지 (EmailJS 연동 ContactForm)
│   │
│   │   └── not-found.tsx     # 커스텀 404 페이지
│
│   ├── components/           # 재사용 가능한 UI 컴포넌트 모음
│   │   ├── Header.tsx             # 반응형 상단 내비게이션 바
│   │   ├── HeroSection.tsx        # 홈 상단 자기소개 섹션
│   │   ├── StatsSection.tsx       # 통계 카드 리스트
│   │   ├── StatsCard.tsx          # 개별 통계 카드
│   │   ├── ProjectsSection.tsx    # 홈에 표시되는 대표 프로젝트 3개 카드
│   │   ├── ProjectCard.tsx        # 목록/홈에서 사용되는 프로젝트 카드
│   │   ├── ProjectFilterBar.tsx   # 프로젝트 필터링/정렬 UI
│   │   ├── TimelineItem.tsx       # 소개 페이지에서 타임라인 항목 렌더링
│   │   └── ContactForm.tsx        # EmailJS 연동 연락 폼
│
│   ├── data/
│   │   └── projects.ts        # 프로젝트 메타데이터 배열 (title, slug, stack 등 포함)
│
│   ├── styles/
│   │   └── globals.css        # Tailwind 전역 스타일, 커스텀 클래스 정의
│
│   └── utils/
│       └── github.ts          # GitHub API 통계를 호출하는 함수 (stargazers 수 등)
│
├── .env.local                 # 로컬 개발용 환경변수 설정 파일 (Git에 커밋 금지)
├── next.config.ts            # Next.js 설정 파일 (i18n 제거, 이미지 도메인 등)
├── tailwind.config.ts        # Tailwind CSS 설정 파일 (color, font 등 테마 설정)
├── tsconfig.json             # TypeScript 설정 파일
├── package.json              # 프로젝트 의존성 및 명령어 스크립트 정의
└── README.md                 # 프로젝트 문서
```

---

## 📝 작업 내역

### 📌 라우팅 및 레이아웃 구성
- [x] App Router 기반 폴더 구조 구성 (`src/app/`)
- [x] 공통 레이아웃 파일(`layout.tsx`) 작성
- [x] 커스텀 404 페이지 (`not-found.tsx`) 구현

### 🏠 홈 페이지
- [x] HeroSection: 자기소개 및 CTA 버튼 구현
- [x] StatsSection: GitHub API 연동 통계 카드 구성
- [x] ProjectsSection: 대표 프로젝트 3개 하이라이트

### 📂 프로젝트 목록 페이지 (/projects)
- [x] ProjectCard: 카드형 프로젝트 구성
- [x] ProjectFilterBar: 기술/연도/기여도 필터링
- [x] 정렬 기능 (최신순/이름순 등)
- [x] 초기화 버튼 포함

### 🔍 프로젝트 상세 페이지 ([slug])
- [x] 동적 라우팅(slug 기반) 페이지 구성
- [x] 기술 스택 배지 및 프로젝트 설명 섹션
- [x] 존재하지 않는 slug 접근 시 404 처리

### 🙋‍♂️ 소개 페이지 (/about)
- [x] 개발자 타임라인 구성
- [x] 기술 철학 및 가치관 표현
- [x] 대표 기술 스택 배지 형태 시각화

### ✉️ 연락처 페이지 (/contact)
- [x] GitHub, 블로그, 이메일 링크 연결
- [x] EmailJS 연동 ContactForm 구현
- [x] 전송 성공/실패 시 피드백 출력
- [x] resume.pdf 존재 시 이력서 다운로드 버튼 활성화

### 🌍 전역 기능 및 접근성
- [x] 반응형 레이아웃 구현 (모바일/태블릿 대응)
- [x] 다크 모드 시스템 연동
- [x] 이미지 alt 속성 및 시멘틱 태그 사용
- [x] ESLint 기반 코드 린팅
- [x] GitHub API를 통한 통계 데이터 연결

### 🧪 추후 예정 작업
- [ ] Jest, React Testing Library 기반 테스트 도입
- [ ] GitHub Actions 기반 CI 파이프라인 구성
- [ ] 프로젝트 상세 스크린샷 lazy loading 적용
- [ ] 소개 페이지에 기술 스택 애니메이션 추가
