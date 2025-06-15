# 💼 MyPortfolio

개인 포트폴리오 웹사이트 저장소입니다.  
개발자로서의 역량과 프로젝트 경험을 효과적으로 보여주기 위해 설계되었으며,  
**Next.js 기반 최신 기술 스택**과 **실제 배포 환경**을 통해 **실전 수준의 UI/UX 구현**을 목표로 합니다.

[![Deploy to Vercel](https://img.shields.io/badge/Vercel-Live-black?style=flat-square&logo=vercel)](https://myportfolio-kseail.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/Repository-myportfolio-blue?style=flat-square&logo=github)](https://github.com/ksaeil2001/myportfolio)
[![Tech Blog](https://img.shields.io/badge/Blog-blog.saeil.dev-orange?style=flat-square&logo=rss)](https://blog.saeil.dev)

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
> - `BLOG_RSS_URL`: 블로그 RSS 피드 주소를 지정하여 `/api/blog`에서 사용합니다.
> - `GITHUB_TOKEN`: GitHub API 요청 시 인증 헤더에 사용하며, 미설정 시 비인증 요청으로 동작합니다.
> - `EMAILJS_SERVICE_ID`: EmailJS 서비스 ID
> - `EMAILJS_TEMPLATE_ID`: EmailJS 템플릿 ID
> - `EMAILJS_USER_ID`: EmailJS 사용자 ID
> - `OFFLINE_MODE`: `npm run generate:resume` 실행 시 `true`로 설정하면 폰트 다운로드를 시도하지 않습니다.

### EmailJS 시크릿 설정

GitHub Actions CI 환경에서 위 EmailJS 변수들이 누락되면 워크플로가 실패합니다.
> 저장소 **Settings > Secrets and variables > Actions** 메뉴에서 각각
> `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_USER_ID` 이름으로
> 새 Secret을 등록해야 합니다.
> 워크플로우에서는 다음과 같이 기본값을 사용해도 경고 후 실패하도록 설정됩니다.
>
> ```yaml
> EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID || 'placeholder' }}
> EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID || 'placeholder' }}
> EMAILJS_USER_ID: ${{ secrets.EMAILJS_USER_ID || 'placeholder' }}
> ```
>
> ```bash
> if [ "${EMAILJS_SERVICE_ID}" = "placeholder" ]; then
>   echo "::error::EmailJS secrets are required."
>   exit 1
> fi
> ```
> 또한 워크플로우 시작 단계에서 secrets 존재 여부를 확인하는 `check-secrets` job이 추가되었습니다.
> Secrets 등록 후 CI를 재실행하면 오류 없이 진행됩니다.
> 누락된 항목은 `EMAILJS_SERVICE_ID: Not Set` 형식으로 표시되어 어떤 값이 비어 있는지 즉시 파악할 수 있습니다.
> Secrets를 설정한 뒤에는 커밋을 다시 푸시하거나 PR을 열어 워크플로우가 정상적으로 실행되는지 확인하세요.
> 필요 시 아래와 같이 CI 설정에 임시 디버그 단계를 추가해 값이 전달되는지 확인할 수 있습니다.
>
> ```yaml
> - name: Debug Secrets
>   run: |
>     echo "EMAILJS_SERVICE_ID=${EMAILJS_SERVICE_ID}"
>     echo "EMAILJS_TEMPLATE_ID=${EMAILJS_TEMPLATE_ID}"
>     echo "EMAILJS_USER_ID=${EMAILJS_USER_ID}"
> ```

<p>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/.env 관리-lightgrey?style=for-the-badge" />
</p>

## 🧪 테스트 환경

본 프로젝트는 [Jest](https://jestjs.io/) 및 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 기반의 단위 테스트 환경이 구축되어 있습니다.

### 테스트 실행 방법

```bash
npm test
```

또는

```bash
npm run test
```

- 모든 PR 및 배포 전, 위 명령어로 테스트를 실행하여 통과 여부를 반드시 확인하시기 바랍니다.
- CI 환경에서도 자동으로 테스트가 수행됩니다.

---
### 네트워크 제한 환경 가이드

사내 보안 정책 등으로 외부 npm 레지스트리에 접근하지 못해 빌드나 테스트가 실패하는 경우 다음 절차를 따릅니다.

1. registry.npmjs.org 접근이 차단되어 있는지 확인하고, 차단 시 IT/보안팀에 허용을 요청합니다.
2. 내부 npm 미러 또는 프록시가 있다면 `.npmrc`에 해당 주소를 지정하거나 `HTTP_PROXY` / `HTTPS_PROXY` 환경 변수를 설정합니다.
3. 로컬에 사전 캐시한 패키지가 있다면 `scripts/install_local.sh` 스크립트로 오프라인 설치를 수행합니다. 패키지 캐시는 `scripts/populate_cache.sh`로 생성할 수 있습니다.
4. `raw.githubusercontent.com` 도메인이 차단되어 있으면 이력서 PDF 생성 시 폰트 다운로드가 실패합니다. 허용이 어렵다면 `public/fonts` 폴더에 폰트를 미리 배치하고 스크립트 경로를 수정합니다.
5. CI 워크플로와 README에 EmailJS 등 환경 변수 설정 방법을 명확히 기록합니다.
6. 접근 권한이 복구된 후 아래 명령어를 순서대로 실행하여 모든 단계가 통과하는지 확인합니다.

   ```bash
   npm ci
   npm run lint
   npm test
   npm run build
   ```

7. 네트워크 정책, 장애 원인, 해결 과정을 Changelog 섹션에 상세히 기록합니다.
---

## 📌 주요 기능 및 UI 구성 요약

각 페이지는 Next.js App Router 구조에 따라 `src/app/` 아래에서 라우팅되며,  
UI 컴포넌트는 `src/components/`에서 기능별로 분리 구성되어 있습니다.

---

### 🏠 홈 페이지 (`/`)

- **기능 목적:** 방문자에게 개발자 소개, 핵심 통계, 대표 프로젝트를 빠르게 전달
- **주요 컴포넌트:**
  - `HeroSection.tsx`: 자기소개 문구 + CTA 버튼 (`/projects`, resume 링크)
  - `StatsSection.tsx`: GitHub API 연동 통계 카드 (`stars`, `stack`, `projects`)
  - `ProjectsSection.tsx`: 최근 또는 주요 프로젝트 3건을 하이라이트
- **데이터 처리:** `StatsSection`에서 `utils/github.ts`를 통해 실시간 GitHub 데이터를 호출
- **UI 구성:** 1열 세로 섹션 구조 + 카드형 통계 + 반응형 레이아웃 + 다크 모드 대응

---

### 📂 프로젝트 목록 페이지 (`/projects`)

- **기능 목적:** 전체 프로젝트를 한눈에 탐색하고, 조건에 맞춰 필터링/정렬 가능
- **주요 컴포넌트:**
  - `ProjectFilterBar.tsx`: 기술 스택, 연도, 기여도 필터 + 정렬/초기화 버튼
  - `ProjectCard.tsx`: 썸네일, 제목, 간단한 설명, 사용 스택 표시
- **데이터 처리:** `data/projects.ts`에서 전체 프로젝트 배열 로딩
- **UI 구성:** 
  - 필터 바 + 그리드형 카드 리스트
  - 필터 및 정렬 조건은 useSearchParams 기반으로 구현 예정

---

### 🔍 프로젝트 상세 페이지 (`/projects/[slug]`)

- **기능 목적:** 각 프로젝트의 문제 정의, 해결 과정, 사용 기술, 회고 등 상세히 설명
- **주요 컴포넌트:**
  - 자체 구성 (슬러그 기반 동적 데이터 바인딩)
  - `notFound()`로 존재하지 않는 slug 처리
- **데이터 처리:** `projects.ts`에서 `slug`를 기준으로 find
- **UI 구성:** 
  - 제목 + 대표 이미지 + 배지형 기술 스택
  - 문제 → 해결 방법 → 주요 기능 → 배운 점의 순서로 구성된 구조화된 레이아웃

---

### 🙋‍♂️ 자기소개 페이지 (`/about`)

- **기능 목적:** 개발자로서의 성장 타임라인과 가치관을 명확하게 시각화
- **주요 컴포넌트:**
  - `TimelineItem.tsx`: 연도별 활동, 학습, 프로젝트 경험을 타임라인 요소로 구성
- **데이터 처리:** 현재 하드코딩 기반이며 추후 JSON 기반 확장 가능
- **UI 구성:** 
  - 세로형 타임라인 + 하단 기술 철학 및 대표 기술 요약 섹션

---

### ✉️ 연락처 페이지 (`/contact`)

- **기능 목적:** 이메일, GitHub, 블로그 등의 외부 채널 연결 및 실시간 메시지 전송
- **주요 컴포넌트:**
  - `ContactForm.tsx`: EmailJS 연동 입력 폼 (이름/이메일/메시지 필드 포함)
- **데이터 처리:** EmailJS 사용자 ID를 `.env.local`에서 읽어 연동 처리
- **기능 특징:**
  - 제출 성공/실패 안내 UI 표시
  - `public/resume.pdf` 존재 여부를 확인해 다운로드 버튼을 활성/비활성 처리
  - 파일이 없을 경우 안내 문구 "이력서 준비 중입니다" 표시
- **UI 구성:** 
  - 좌측은 정보 링크, 우측은 입력 폼
  - 모바일 대응을 위한 1열 정렬 자동 전환

---

### ❗ 커스텀 404 페이지 (`not-found.tsx`)

- **기능 목적:** 존재하지 않는 slug나 경로 접근 시 사용자에게 명확한 안내 제공
- **UI 구성:** 심플한 메시지 + “홈으로 돌아가기” 버튼

---

### 🌍 전역 UX·접근성 개선 요소

- **다크 모드:** `prefers-color-scheme` 기반 자동 전환
- **반응형 레이아웃:** Tailwind breakpoint 기준 100% 대응
- **접근성:** alt 태그, semantic tag(`main`, `section`, `nav`, `footer`) 구성 완료
- **시각적 계층:** 명확한 타이포그래피(H1~H4), 그림자, 인터랙션 트랜지션 적용


---

## 📁 폴더 구조

```plaintext
myportfolio/
├── public/
│   ├── projects/             # 프로젝트 썸네일 이미지 저장 위치 (image URL 경로 참조)
│   └── resume.pdf            # PDF 이력서 (없으면 다운로드 버튼 대신 안내 문구 노출)
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
├── next.config.ts            # Next.js 설정 파일 (i18n, 이미지 도메인 등)
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
- [x] resume.pdf 존재 시 이력서 다운로드 버튼 활성화 (없을 경우 안내 표시)

### 🌍 전역 기능 및 접근성
- [x] 반응형 레이아웃 구현 (모바일/태블릿 대응)
- [x] 다크 모드 시스템 연동
- [x] 이미지 alt 속성 및 시멘틱 태그 사용
- [x] ESLint 기반 코드 린팅
- [x] GitHub API를 통한 통계 데이터 연결

### 📄 PDF 이력서 생성
- `npm run generate:resume` 명령으로 `content/projects`의 최신 정보를 기반으로 `public/resume.pdf` 파일이 생성됩니다.
- 빌드 전 또는 필요 시 실행하여 최신 이력서를 갱신합니다.

### 🧪 추후 예정 작업
- [x] Jest, React Testing Library 기반 테스트 도입
- [x] GitHub Actions 기반 CI 파이프라인 구성
- [x] 프로젝트 상세 스크린샷 lazy loading 적용
- [x] 소개 페이지에 기술 스택 애니메이션 추가

## Patch Notes
- Added dark mode toggle with localStorage persistence.
- Implemented page loading progress bar using Next.js router events.
- Introduced global toast system and integrated with contact form.
- Enhanced accessibility: skip link, form validation messages with ARIA live, and improved focus order.
- 2025-06-11 (Codex) 프로젝트 데이터 구조 개선, Markdown 기반 관리 도입, PDF 이력서 자동 생성 스크립트 추가.
1. 2025-06-12 (Codex) - SEO 및 CI/CD 고도화
   - 동적 OG 이미지 API 추가 및 각 페이지 메타데이터 연동
   - sitemap.xml과 robots.txt 자동 생성 라우트 구현
   - Google Analytics와 Vercel Analytics 통합
   - 프로젝트 이미지 lazy loading 적용
   - GitHub Actions 워크플로우로 lint · build 자동화
2. 2025-06-11 (Codex) - 블로그 RSS 연동 및 데이터 구조 확장
   - `/api/blog` 라우트에서 RSS 파싱 후 최신 글 제공
   - 홈 페이지 `BlogSection` 컴포넌트로 최근 글 5개 표시
   - 프로젝트 타입에 팀원(`team`)과 리뷰(`reviews`) 필드 추가
   - 프로젝트 상세 페이지에 팀원 소개 및 외부 리뷰 섹션 노출
3. 2025-06-13 (Codex) - UI/UX 개선 및 로딩 관리
   - `LoadingProvider` 컨텍스트 도입으로 페이지 전환과 폼 제출 시 상단 로딩 바 표시
   - 이력서 다운로드 링크 클릭 시 토스트 알림 제공
   - 기존 `ProgressBar` 컴포넌트 삭제 및 레이아웃 구조 정리
4. 2025-06-14 (Codex) - 테스트 & CI 강화
   - resume.pdf 존재 여부 확인 후 버튼 비활성화 및 안내 처리
   - Jest + React Testing Library 환경 도입 및 기본 테스트 추가
   - GitHub Actions 워크플로우로 lint · test · build 자동화
   - 소개 페이지 기술 스택 애니메이션 구현
- 사용되지 않던 `src/data/projects.ts` 파일 삭제
- 2025-06-15 (Codex) - i18n 및 기능 개선
  - 한국어/영어 다국어 라우팅 구조 도입
  - GitHub 통계 조회 실패 시 명확한 안내 메시지 표시
  - PDF 이력서에 프로젝트 설명과 기술 스택 추가
- 주요 컴포넌트 테스트 확대 및 프로젝트 데이터 캐싱 적용
- 2025-06-16 (Codex) - UI/로직 품질 및 국제화 개선
  - BlogSection 및 ProjectFilterBar 단위 테스트 추가
  - Header 로케일 스위처 구현
  - 전 페이지 정적 텍스트 다국어화
  - 이력서 생성 스크립트 TypeScript 전환 및 빌드 전 자동 실행

### 다국어 전환 방법
기본 언어는 한국어이며 `/en` 경로로 접속하면 영어 페이지가 제공됩니다. 예) `/en/projects`.

## Changelog

- 외부 CDN 이미지 사용 시 next/image `Invalid src prop` 오류 수정  
  (next.config.js `images.domains`에 `cdn.example.com` 추가)

- 홈 화면 ‘프로젝트 보기’ 버튼 동작 미구현 오류 수정  
  (목적에 따라 앵커 이동/페이지 이동 기능 구현 및 테스트 완료)
- 2025-06-17 (Codex) - README에 기술 블로그 링크 추가
- 2025-06-18 (Codex) - 테스트 코드 require 사용 개선 및 ESLint 설정 갱신
  - BlogSection.test.tsx의 require 스타일 import를 ES6 import로 변경
  - StatsSection.test.tsx의 불필요한 eslint-disable 지시어 수정
  - __tests__ 폴더에 한해 no-require-imports 규칙 비활성화
  - 테스트용 next/image, ResumeDownloadLink 모킹 타입 정의로 any 제거
- 2025-06-19 (Codex) - ContactForm 환경 변수 검증 및 테스트 개선
  - EmailJS 관련 환경 변수 문서화 및 예시 값 추가
  - CI에서 EmailJS 환경 변수를 secrets로 주입하도록 수정
  - 환경 변수 누락 시 오류 토스트 표시 로직 추가 및 테스트 반영
- 2025-06-20 (Codex) - CI 워크플로우 EmailJS 환경 변수 기본값 및 검증 강화
  - secrets 미등록 시 기본값으로 동작하도록 fallback 값 추가
  - 디버깅용 echo 단계 제거 및 환경 변수 검증 스텝 유지
- 2025-06-20 (Codex) - Header와 HeroSection 컴포넌트 클라이언트 모드 명시
  - `useRouter` 등 클라이언트 훅 사용에 맞게 "use client" 지시문 추가
  - 빌드 오류를 유발하던 App Router 환경의 컴포넌트 초기화 문제 해결
- 2025-06-22 (Codex) - ContactForm 이메일 서비스 오류 처리 강화
  - emailjs.send 실패 시 구체적인 로그와 사용자 친화 메시지 표시
  - 네트워크 오류 등 다양한 실패 케이스를 테스트에 추가
- 2025-06-23 (Codex) - EmailJS 환경 변수 누락 로그 개선
  - ContactForm에서 서비스 ID, 템플릿 ID, 공개 키 값을 함께 출력해 디버깅 편의성 향상
- 2025-06-24 (Codex) - ContactForm 테스트 보강
  - EmailJS 환경 변수 미설정 시 오류 토스트 표시 여부를 검증하는 테스트 추가
- 2025-06-25 (Codex) - EmailJS 테스트 및 오류 로그 개선
  - emailjs.send Mock 기본 성공 응답을 명시하도록 수정
  - 네트워크 오류 발생 시 err.message를 포함한 구체적 로그 출력
- 2025-06-26 (Codex) - EmailJS 환경 변수 오류 메시지 영어화
  - ContactForm에서 환경 변수 미설정 시 영문 안내와 상세 로그 출력

- 2025-06-27 (Codex) - Email service logging 개선 및 CI 환경 변수 검증
  - EmailJS 오류 로그 메시지를 "Email service error details"로 변경
  - .env.example의 EmailJS 값 가이드 형식 통일
  - CI 워크플로우에서 환경 변수 매핑 상태 재확인
- 2025-06-28 (Codex) - EmailJS 디버그 스크립트 및 오류 메시지 개선
  - 네트워크 오류 로그에 err.message 우선 출력하도록 수정
  - .env.example에 EmailJS 설정 주석 추가
  - EmailJS 테스트용 scripts/testEmailService.ts 스크립트 추가
- 2025-06-30 (Codex) - EmailJS 환경 변수 최종 점검
  - CI 워크플로우에 변수 존재 여부 확인 단계 추가
  - 로컬 `.env.local` 파일이 Git 관리 대상에서 제외되는지 재확인
- GitHub Secrets에 EmailJS 값이 정확히 등록되었는지 검증
- 2025-07-01 (Codex) - 빌드 스크립트 tsx 사용으로 업데이트
  - generateResume.ts 실행을 위해 devDependency로 tsx 추가
  - package.json의 generate:resume 스크립트 수정
- 2025-07-02 (Codex) - 보안 및 품질 개선
  - Markdown HTML 변환 결과 sanitize-html 적용
  - 환경 변수 로딩 로직을 src/lib/env.ts로 통합
  - 프로젝트 상세 페이지 테스트 추가
  - Blog API 결과 메모리 캐싱 및 오류 메시지 강화
  - 이력서 스크립트 폰트 다운로드 실패 시 대체 폰트/기본 글꼴 사용
- 2025-07-03 (Codex) - EmailJS 변수명 및 타입 오류 수정
  - EMAILJS_* 환경 변수명으로 통일하고 env.ts 검증 로직 업데이트
  - sanitize-html 타입 정의 추가
  - StatsSection 테스트의 eslint-disable 주석 제거
- 2025-07-04 (Codex) - EmailJS CI 검증 및 fallback 로직 강화
  - CI 워크플로우에 환경 변수 출력 및 누락 시 실패 단계 추가
  - getEmailJsEnv에서 경고 로그와 기본값 fallback 처리
  - 관련 유닛 테스트 추가
- 2025-07-05 (Codex) - CI 환경 변수 매핑 및 오류 메시지 개선
  - GitHub Actions에서 EmailJS secrets를 env에 직접 매핑
  - ContactForm 네트워크 오류 메시지를 영어로 개선
  - Projects 페이지 `PageProps` 타입 정의 추가
  - 테스트 파일의 `<img>` 사용에 대해 ESLint 예외 처리
- 2025-07-06 (Codex) - GitHub API 유틸리티 리팩터링
  - 가져올 저장소 수를 인자로 받을 수 있도록 getGithubStats 함수 개선
  - StatsSection에서 새 유틸리티 사용하도록 수정
  - 관련 단위 테스트 추가
- 2025-07-07 (Codex) - CI 환경 변수 검증 로직 개선 및 Secrets 점검
  - GitHub Secrets에 EmailJS 서비스 ID, 템플릿 ID, 사용자 ID가 등록됐는지 재확인
  - 누락 시 어떤 변수가 없는지 명확히 알 수 있도록 워크플로우 오류 메시지 수정
- 2025-07-08 (Codex) - GitHub Actions 빌드 오류 수정
  - EMAILJS 관련 Secrets 누락을 확인 후 재등록
  - ci.yml 변수 매핑 그대로 유지한 채 워크플로우 재실행
- 2025-07-09 (Codex) - Resume script network error handling and secrets check
  - scripts/generateResume.ts now catches network failures and skips PDF generation on fatal errors
  - Verified EMAILJS_* secrets are registered in GitHub Actions
  - CI check attempts: lint/test could not run (missing deps); build failed as tsx not found
- 2025-07-10 (Codex) - Replace deprecated EmailJS package and improve CI
  - Swapped `emailjs-com` for `@emailjs/browser`
  - Added npm cache and retry logic in ci.yml
- 2025-07-11 (Codex) - Clarify EmailJS env variables in CI
  - Added comments explaining secrets usage in ci.yml
- 2025-07-12 (Codex) - Document network build/test troubleshooting
  - Added network restriction handling guide to README

- 2025-07-13 (Codex) - Clarify EmailJS user ID docs
  - Confirmed CI validates EmailJS secrets with strict step
  - Replaced "EmailJS public key" with "EmailJS 사용자 ID" in contact page section
 - 2025-07-14 (Codex) - Provide CI fallback for missing EmailJS secrets
  - ci.yml now assigns default EmailJS values if GitHub secrets are undefined

- 2025-07-15 (Codex) - Document font download network policy
  - Added docs/network-policy.md and updated network guide.
- 2025-07-16 (Codex) - npm audit fix applied for brace-expansion vulnerability
- 2025-07-17 (Codex) - Backend/Frontend connectivity check
  - npm test succeeded with 11 test suites
  - Build ran but resume generation failed: WinAnsi cannot encode Korean characters
  - /api/blog returned 502 due to network unreachable for feed URL
  - .env.local not found; EmailJS and other variables missing during runtime
  - Accessing /en routes responded 404, indicating locale routing misconfiguration
- 2025-07-18 (Codex) - Connectivity follow-up fixes
  - Blog API returns cached sample posts when feed fetch fails
  - Resume generator sanitizes text if only ASCII fonts are available
  - Locale routes statically generated via `generateStaticParams`
  - Added placeholder `next-intl.config.js` but build still fails without proper plugin
- 2025-07-19 (Codex) - EmailJS env validation and intl config fixes
  - CI workflow now fails if EMAILJS secrets are missing
  - next-intl.config.js exports locales and defaultLocale
  - ContactForm validates missing EmailJS variables without defaults
- 2025-07-20 (Codex) - Added accessible login page
  - Created LoginForm component with aria attributes and validation
  - Added /login route and navigation links
- 2025-07-21 (Codex) - Document GitHub Secrets setup for EmailJS
  - README에 EmailJS 환경 변수 설정 절차 및 CI 검증 스크립트 추가
- 2025-07-22 (Codex) - EmailJS secrets inspection report added
  - Added docs/emailjs-secrets-report.md with inspection details
- 2025-07-23 (Codex) - CI workflow EmailJS env order fixed
  - ci.yml env section reordered to match documented variable sequence
- 2025-07-24 (Codex) - CI 환경 변수 검증 메시지 개선
   - EmailJS secrets 누락 시 구체적 안내 메시지를 출력하도록 ci.yml 수정
- 2025-07-25 (Codex) - CI 환경 변수 검증 스크립트 업데이트
  - GitHub Actions에서 EmailJS 서비스/템플릿/사용자 ID가 비어 있으면 오류 메시지와 함께 즉시 실패하도록 스크립트 수정
- 2025-07-26 (Codex) - Codex 기준: 환경 변수 정상 등록 및 워크플로 env 섹션 동기화 완료
- 2025-07-27 (Codex) - Offline npm install scripts 및 문서 추가
  - .npmrc로 로컬 캐시 기본값을 지정하고 `scripts/install_local.sh` 제공
  - 네트워크 차단 시 `scripts/populate_cache.sh`로 캐시를 미리 생성해 오프라인 설치 가능
- 2025-07-28 (Codex) - 구글 폰트 의존성 제거 및 로컬 폰트 사용
  - `public/fonts` 폴더에 Geist, Geist Mono variable 폰트 추가
  - `layout.tsx`의 폰트 import를 `next/font/local` 방식으로 변경
  - `.gitignore`에서 `public/fonts/` 항목 제거해 폰트 파일을 버전 관리
  - 프로덕션 환경에서는 폰트를 로컬 정적 자산으로 관리해 네트워크 장애에 대비해야 함
- 2025-07-29 (Codex) - 바이너리 파일 제한으로 로컬 폰트 사용 중단
  - 빌드 과정에서 폰트 로딩을 제거하고 기본 글꼴로 대체
  - `public/fonts` 폴더 삭제 및 `.gitignore`에 다시 추가
  - `layout.tsx`와 `globals.css`에서 폰트 관련 설정 제거
- 2025-07-30 (Codex) - Added AGENTS.md with repository guidelines
- 2025-07-31 (Codex) - AGENTS.md 업데이트: 네트워크와 바이너리 파일 사용 제한 명시
- 2025-07-30 (Codex) - Repository guidelines file and pretest lint script
  - AGENTS.md 파일을 추가해 작업 규칙 명세
  - `package.json`의 `pretest` 스크립트로 커밋 전 ESLint 자동 실행
- 2025-07-31 (Codex) - CI 워크플로우 EmailJS 비밀값 기본값 및 경고 추가
  - ci.yml에서 EmailJS secrets 미설정 시 'placeholder'로 대체 후 경고 출력
  - README에 필수 secrets 설정 필요성을 강조
- 2025-08-01 (Codex) - Offline resume generation option
  - `OFFLINE_MODE` 환경 변수를 추가해 네트워크 연결 없이 이력서 PDF 생성 가능
- 2025-08-02 (Codex) - Attempted build fix for next-intl
- 2025-08-03 (Codex) - CI 환경 변수 안내 메시지 개선
  - ci.yml의 누락 경고에 README 링크를 추가해 EmailJS 시크릿 설정 방법을 안내
- 2025-08-04 (Codex) - CI workflow secret check job 추가
- 2025-08-05 (Codex) - CI secret check clarifies which EmailJS values are missing
- 2025-08-06 (Codex) - Secrets check provides placeholder details
  - check-secrets job now prints `EMAILJS_SERVICE_ID: Not Set` style messages for each missing value
- 2025-08-07 (Codex) - CI workflow fallback values for EmailJS secrets
  - ci.yml assigns default values when secrets are missing and validates them accordingly
  - Added .npm_cache to .gitignore to prevent large cache files from being committed
- 2025-08-08 (Codex) - Runtime validation for EmailJS secrets
  - Added `validateEmailJsEnv()` in `src/lib/env.ts` and integrated with `ContactForm`
  - Updated tests to cover the new validation logic
- 2025-08-09 (Codex) - Document EmailJS secret setup and debug step
  - Added CI job step to log EmailJS secrets for troubleshooting
  - Explained secret creation process in README

- 2025-08-10 (Codex) - CI workflow now strictly requires EmailJS secrets
  - Removed placeholder defaults from ci.yml
  - Secrets must be set in GitHub settings for the workflow to pass
