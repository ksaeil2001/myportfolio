# 💼 MyPortfolio

개발자로서의 역량과 프로젝트 경험을 효과적으로 보여주기 위한 개인 포트폴리오 웹사이트입니다.  
Next.js 기반의 최신 기술 스택을 활용하여, 반응형 디자인, 접근성, 다크모드 지원 등 실무 중심의 UI/UX 구현을 목표로 개발하였습니다.

[![Deploy to Vercel](https://img.shields.io/badge/Vercel-Live-black?style=flat-square&logo=vercel)](https://myportfolio-kseail.vercel.app)
---
[![GitHub Repo](https://img.shields.io/badge/Repository-myportfolio-blue?style=flat-square&logo=github)](https://github.com/ksaeil2001/myportfolio)

---

### 🚀 개발 스택 (Tech Stack)

**🧱 프레임워크 & 라이브러리**  
<p>
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
</p>

**💻 언어 & 타입 시스템**  
<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

**🎨 스타일링 도구**  
<p>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" />
</p>

**🧹 코드 품질 도구**  
<p>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
</p>

**🔗 외부 API 연동**  
<p>
  <img src="https://img.shields.io/badge/EmailJS-DDD?style=for-the-badge&logo=gmail&logoColor=EA4335" />
  <img src="https://img.shields.io/badge/GitHub API-181717?style=for-the-badge&logo=github&logoColor=white" />
</p>

**🚀 CI/CD 및 환경변수**  
<p>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/.env 관리-lightgrey?style=for-the-badge" />
</p>

> ❗ 테스트 프레임워크는 사용하지 않았습니다. 주요 기능은 수동 테스트 및 브라우저 확인으로 검증했습니다.


---

## 📦 환경설정 및 리소스 준비

- **Email 전송용 환경 변수**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
위 값을 `.env` 파일에 정확히 기입해야 Contact Form가 정상 작동합니다.

- **PDF 이력서 업로드**
- `public/resume.pdf` 경로에 본인 이력서 PDF 파일을 배치해야 연락처 페이지의 다운로드 링크가 활성화됩니다.
- (개인정보 보호를 위해 저장소에는 포함되지 않습니다.)

- **프로젝트 썸네일 이미지**
- 각 프로젝트의 대표 이미지는 `public/projects` 폴더에 배치합니다.
- 실제 파일명과 프로젝트 데이터의 image 필드를 일치시켜 관리하세요.

---

## 📌 주요 기능 및 UI 구성 요약

웹사이트는 아래와 같은 섹션으로 구성되며, 각 기능은 명확한 역할과 UI 구성 기준에 따라 구현되었습니다.

---

### 🏠 홈 (Home Page)

- **기능:** 간단한 자기소개, 통계 요약, 주요 프로젝트 하이라이트
- **UI 구성:**  
  - `HeroSection.tsx`: 상단 소개 텍스트 + CTA 버튼  
  - `StatsSection.tsx`: GitHub API 기반 실시간 통계 (별 개수 등)  
  - `ProjectsSection.tsx`: 대표 프로젝트 3개 하이라이트 출력

---

### 📂 프로젝트 목록 (/projects)

- **기능:** 필터링 및 정렬 가능한 프로젝트 리스트 제공
- **UI 구성:**  
  - `ProjectFilterBar.tsx`: 기술 스택, 연도, 기여도 기준 필터링  
  - `ProjectCard.tsx`: 프로젝트 카드 레이아웃  
  - `projects.ts`: 프로젝트 데이터(JSON) 관리

---

### 🔍 프로젝트 상세 페이지 (/projects/[slug])

- **기능:** 프로젝트 설명, 사용 기술, 배운 점 정리
- **UI 구성:**  
  - 대표 이미지, 기술 배지, 프로젝트 설명, 기능 목록, 회고  
  - NotFound 페이지(존재하지 않는 slug 접근 시 처리)

---

### 🙋‍♂️ 자기소개 페이지 (/about)

- **기능:** 개발자 성장 과정과 철학, 기술 스택 요약
- **UI 구성:**  
  - `TimelineItem.tsx`: 연도별 타임라인 구성  
  - `about/page.tsx`: 기술 철학 요약 + 시각적 배지 제공

---

### ✉️ 연락처 페이지 (/contact)

- **기능:** 이메일, GitHub, 블로그 링크, PDF 이력서 다운로드, 메시지 전송
- **UI 구성:**  
  - `ContactForm.tsx`: EmailJS 연동 폼  
  - `resume.pdf`: 존재 시 다운로드 버튼 활성화

---

### ❗ NotFound 페이지

- 잘못된 URL 접근 시 커스텀 404 메시지 출력  
- `not-found.tsx`에서 구성


---

## 📝 작업 내역

### ✅ 페이지 라우팅 및 전역 레이아웃
- [x] App Router 기반 Next.js 페이지 구조 구성 (`/app`)
- [x] 공통 레이아웃 `layout.tsx` 구현 (메타데이터, 폰트 포함)
- [x] 커스텀 404 페이지 (`not-found.tsx`) 작성

### ✅ 홈 페이지 (Hero, Stats, Projects)
- [x] `HeroSection.tsx` 구현: 소개 문구 + CTA 버튼
- [x] `StatsSection.tsx` 구현: GitHub API 기반 통계
- [x] `ProjectsSection.tsx` 구현: 대표 프로젝트 카드 3개 하이라이트

### ✅ 프로젝트 목록 페이지 (/projects)
- [x] 프로젝트 목록 페이지 라우팅 구성
- [x] 프로젝트 카드(`ProjectCard.tsx`) 목록 출력
- [x] 프로젝트 필터/정렬 바 UI 구현 (`ProjectFilterBar.tsx`)
- [x] 기술, 기여도, 연도 기준 필터링 기능
- [x] 최신순, 이름순 정렬 기능

### ✅ 프로젝트 상세 페이지 ([slug])
- [x] 동적 라우팅 기반 상세 페이지 구성 (`projects/[slug]/page.tsx`)
- [x] 프로젝트별 설명, 스택, 이미지, 배운 점 출력
- [x] 존재하지 않는 slug 접근 시 `notFound()` 처리

### ✅ 자기소개 페이지 (/about)
- [x] 자기소개 페이지 구성 (`about/page.tsx`)
- [x] 개발자 여정 타임라인 구현 (`TimelineItem.tsx`)
- [x] 기술 철학, 가치관 요약 표시

### ✅ 연락처 페이지 (/contact)
- [x] 이메일, GitHub, 블로그 링크 출력
- [x] PDF 이력서 다운로드 버튼 활성화 (`resume.pdf` 존재 시)
- [x] EmailJS 연동 ContactForm 구현
- [x] 메시지 전송 성공/실패 안내 처리

### ✅ 전역 기능
- [x] 반응형 디자인 적용 (Tailwind 기반)
- [x] 다크 모드 시스템 연동
- [x] ESLint 설정 및 타입 검사 완료
- [x] GitHub API 연동 (별 수 통계)

### 🚧 향후 개선 예정
- [ ] GitHub Actions 기반 CI/CD 도입
- [ ] 테스트 프레임워크 도입 (Jest / React Testing Library)
- [ ] 프로젝트 스크린샷 lazy loading 처리
- [ ] About 페이지 기술 스택에 animation 추가


---

## 추가로 고려할 수 있는 향후 항목 (예정 체크박스)

- [ ] GitHub Actions를 이용한 CI/CD 설정 추가
- [ ] Lighthouse를 활용한 성능 최적화 점검 및 개선
- [ ] 프로젝트별 스크린샷 이미지 최적화 및 lazy loading 적용
- [ ] 방문자 트래킹을 위한 Google Analytics 연동
- [ ] 기술 스택/기여도/기간별 프로젝트 정렬 알고리즘 고도화

---

## 🚀 배포 정보

- 본 프로젝트는 [Vercel](https://vercel.com/) 플랫폼을 통해 배포됩니다.
- GitHub 저장소와 연동된 자동 빌드 및 배포(CI/CD)가 설정되어 있습니다.
- `next.config.ts` 파일을 통해 이미지 도메인, output 디렉터리 등 기본 설정이 구성되어 있습니다.
- 배포 명령어:
```bash
npm run build && npm run start
```
---

### 🧩 2. 환경 변수 설정 안내 → 🔄 부분 누락

- `.env.local` 예시는 일부 제공되었지만, 어떤 값이 필수인지 명확하지 않음
- `EmailJS` 설정 외에 `.env` 파일 유무, Vercel 환경변수 연결 방식 누락

✅ **보완 예시:**

## 🔐 환경 변수 설정
EmailJS 연동을 위해 다음 변수를 `.env.local` 또는 Vercel 환경 변수에 설정해야 합니다:


```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
.env.local 파일은 Git에 커밋되지 않도록 .gitignore에 등록되어 있습니다.
배포 환경에서는 Vercel 대시보드 → Project Settings → Environment Variables에서 동일하게 설정해야 합니다.

---

### 🧩 3. 테스트 전략 → ❗ 완전 누락

- Jest, React Testing Library 등 **테스트 도구는 전혀 사용되지 않음**
- 그러나 수동 테스트 기반으로 개발이 완료된 점을 **명확히 서술**하는 것이 중요

✅ **보완 예시:**

## 🧪 테스트 전략

현재 본 프로젝트는 테스트 프레임워크를 도입하지 않았습니다.  
주요 기능들은 브라우저 기반의 수동 테스트를 통해 기능 정상 작동을 검증하였습니다.

추후 다음 도구 도입 예정:
- [ ] Jest
- [ ] React Testing Library

---

🧩 4. SEO 및 메타데이터 설정 → 🔄 언급 없음
layout.tsx 파일에서 <head> 구성 및 메타 태그 설정이 존재하는 것으로 확인됨

그러나 README에서 SEO 대응 여부에 대한 설명 없음

✅ 보완 예시:

## 🌐 SEO 대응

Next.js App Router 구조에 따라 각 페이지는 메타데이터를 통해 기본 SEO 최적화가 구성되어 있습니다.

- `layout.tsx`에서 `<title>`, `<meta name="description">` 등 주요 태그 설정
- Open Graph 및 Twitter Card 등 소셜 미리보기 정보는 추후 추가 예정
🧩 5. 접근성(A11y) 고려 → ❗ 완전 누락
Tailwind CSS 기반의 시멘틱 마크업, 다크 모드, 키보드 네비게이션 등 부분 구현됨

명시적으로 설명되어야 함

✅ 보완 예시:

## ♿ 접근성(A11y) 고려 사항

- 시멘틱 HTML 태그 사용 (`<main>`, `<section>`, `<header>`, `<nav>` 등)
- 모든 링크와 버튼에 키보드 포커스 대응
- 이미지에는 `alt` 속성 명시
- 다크 모드/라이트 모드 자동 전환 (`prefers-color-scheme`)
🧩 6. UX 특성 강조 → 🔄 부분 언급
다크 모드, 반응형, 트랜지션 등 시각적 UX는 구성되어 있음

단, 인터랙션과 시각적 위계에 대한 구체적인 기술이 부족

✅ 보완 예시:

## ✨ 사용자 경험(UX) 설계 포인트

- Tailwind CSS 기반 반응형 레이아웃 (모바일/태블릿/PC 완전 대응)
- 다크 모드 시스템 연동 및 커스텀 테마 대응 준비됨
- 버튼/카드 hover 시 트랜지션 및 shadow 적용
- 시각적 위계를 고려한 타이포그래피 적용
🧩 7. 라이선스 및 사용 권한 → ❗ 완전 누락
오픈소스 저장소인 경우 반드시 명시해야 함 (MIT 등)

개인 포트폴리오 목적이라도 비상업적 허용 여부 정도는 표시 필요

✅ 보완 예시:

## 📄 라이선스

본 저장소의 소스 코드는 개인 포트폴리오 목적에 한해 참고 및 활용 가능합니다.  
상업적 사용은 금지되며, 무단 복제 또는 배포는 허용되지 않습니다.
---

## 📁 폴더 구조 & 구성요소 설명

본 프로젝트는 **Next.js App Router** 기반 구조로 구성되어 있으며,  
**Tailwind CSS**, **TypeScript**, **EmailJS**, **GitHub API 연동** 등을 포함하고 있습니다.

```plaintext
myportfolio/
├── public/
│   ├── projects/             # 프로젝트 썸네일 이미지 저장 폴더
│   └── resume.pdf            # 연락처 페이지에서 다운로드할 이력서 PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 공통 레이아웃 (헤더, 메타데이터 포함)
│   │   ├── page.tsx          # 홈 페이지 (Hero, Stats, Projects 섹션 포함)
│   │   ├── about/
│   │   │   └── page.tsx      # 자기소개 페이지 (타임라인, 기술 철학 등)
│   │   ├── projects/
│   │   │   ├── page.tsx      # 프로젝트 목록 페이지 (필터링/정렬 포함)
│   │   │   └── [slug]/       
│   │   │       └── page.tsx  # 개별 프로젝트 상세 페이지
│   │   ├── contact/
│   │   │   └── page.tsx      # 연락처 페이지 (이메일/ContactForm)
│   │   └── not-found.tsx     # 404 페이지
│   ├── components/
│   │   ├── Header.tsx        # 전역 내비게이션 헤더 (반응형 지원)
│   │   ├── HeroSection.tsx   # 홈 상단 히어로 섹션
│   │   ├── StatsSection.tsx  # 통계 카드 섹션
│   │   ├── StatsCard.tsx     # 개별 통계 카드 컴포넌트
│   │   ├── ProjectsSection.tsx # 홈 페이지 내 프로젝트 하이라이트
│   │   ├── ProjectCard.tsx   # 개별 프로젝트 카드 (목록용)
│   │   ├── ProjectFilterBar.tsx # 프로젝트 목록 페이지용 필터/정렬 UI
│   │   ├── TimelineItem.tsx  # 소개 페이지 내 타임라인 항목 컴포넌트
│   │   └── ContactForm.tsx   # EmailJS 연동 연락 폼
│   ├── data/
│   │   └── projects.ts       # 프로젝트 메타데이터 배열 (slug, title, stack 등)
│   ├── styles/
│   │   └── globals.css       # 전역 Tailwind CSS 스타일 및 변수
│   └── utils/
│       └── github.ts         # GitHub API 통계 호출 함수
├── .env.local                # EmailJS 관련 환경변수 설정 (로컬용, gitignore 대상)
├── next.config.ts            # Next.js 설정 파일 (i18n 제거, 이미지 도메인 등)
├── tailwind.config.ts        # Tailwind CSS 설정 파일
├── tsconfig.json             # TypeScript 설정 파일
├── package.json              # 프로젝트 메타데이터 및 의존성
└── README.md                 # 프로젝트 설명 문서
```
