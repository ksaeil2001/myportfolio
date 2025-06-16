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
>   - 개발 환경에서 누락되면 빌드가 중단되지 않고 경고만 출력됩니다.
>   - 프로덕션 빌드에서는 위 값들이 모두 필요하며, 누락 시 오류로 처리됩니다.
> - `OFFLINE_MODE`: `npm run generate:resume` 실행 시 `true`로 설정하면 폰트 다운로드를 시도하지 않습니다.
> - `NEXT_PUBLIC_CONTACT_EMAIL`: Contact 페이지에 표시할 이메일 주소

### GitHub Actions EmailJS Secret 등록

GitHub Actions에서 EmailJS 연동을 사용하려면 아래 세 가지 값을 반드시
`Settings > Secrets and variables > Actions`에 등록해야 합니다.

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_USER_ID`

등록 절차는 다음과 같습니다.

1. 저장소의 **Settings** 탭으로 이동합니다.
2. 좌측 메뉴에서 **Secrets and variables > Actions** 를 선택합니다.
3. **New repository secret** 버튼을 눌러 위 세 이름으로 값을 입력합니다.

예시 값은 다음과 같이 입력할 수 있습니다.

| Name | Example |
| --- | --- |
| EMAILJS_SERVICE_ID | `service_xxxxx` |
| EMAILJS_TEMPLATE_ID | `template_xxxxx` |
| EMAILJS_USER_ID | `user_xxxxx` |

해당 입력 화면은 GitHub 웹 UI의 "Settings > Secrets and variables > Actions" 페이지에서 확인할 수 있습니다.

등록되지 않으면 CI 단계에서 `scripts/checkEmailJsSecrets.ts`가 오류를 출력하고
빌드가 중단됩니다.

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
> 로컬에서도 `npm run check:secrets` 명령어를 실행해 환경변수 설정 상태를 점검할 수 있습니다.
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

### GitHub Actions 워크플로 실행 가이드

1. 커밋 또는 PR 생성 시 `check-secrets` 작업이 먼저 실행됩니다.
2. 이 작업에서 `scripts/checkEmailJsSecrets.ts`가 EmailJS 시크릿 존재 여부를 검사합니다.
3. 누락된 변수가 있으면 `EMAILJS_SERVICE_ID: Not Set` 형식으로 표시하고 워크플로가 실패합니다.
4. 시크릿을 추가한 뒤 워크플로를 다시 실행하면 이후 lint · test · build 단계가 진행됩니다.

로컬 환경에서도 `npm run check:secrets` 명령으로 동일한 검사를 수행할 수 있습니다.

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

### 머지 충돌 방지 가이드

코드 병합 시 `<<<<<<<`, `=======`, `>>>>>>>` 와 같은 충돌 마커가 남아있지 않도록 꼭 확인하세요.
PR 생성 전 다음 명령어로 전체 소스에서 충돌 마커를 검색하면 좋습니다.

```bash
grep -R "<<<<<<<" -n
```

### App Router 페이지 타입 가이드

Next.js 15부터는 App Router의 `PageProps`가 비동기 형태로 전달됩니다. `params`
와 `searchParams` 모두 `Promise` 타입이므로 아래와 같이 `await`해 사용하세요.

```ts
interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  // ...
}
```

`searchParams` 사용 시에도 동일하게 `const query = await searchParams;` 형태로
작성하면 빌드 타임 타입 오류를 방지할 수 있습니다.

**주의:** 다국어 경로(`[locale]/...`)의 페이지 파일은 반드시 `export default`로
React 함수 컴포넌트를 반환해야 합니다. 객체나 변수 등을 기본 내보내기로 지정하면
빌드 시 `TypeError: e is not a function` 오류가 발생합니다.

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
  - 현재 로그인이나 이메일 인증 기능은 제공하지 않습니다.
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

## Changelog

### 2025-06-13 ~ 2025-06-16

| 날짜 | 주요 변경 사항 |
| --- | --- |
| 2025-06-13 | UI/UX 개선 및 로딩 관리: `LoadingProvider` 도입, 이력서 다운로드 토스트 알림, `ProgressBar` 제거 |
| 2025-06-14 | 테스트 & CI 강화: `resume.pdf` 존재 확인, Jest+RTL 환경 구성, GitHub Actions 워크플로우 추가, 소개 페이지 애니메이션 |
| 2025-06-15 | i18n 및 기능 개선: 다국어 라우팅, GitHub 통계 안내 개선, PDF 이력서 확장, 컴포넌트 테스트 확대 |
| 2025-06-16 | UI/로직 품질 및 국제화 개선: BlogSection·ProjectFilterBar 테스트, 로케일 스위처, 전 페이지 다국어화, 이력서 스크립트 TS 전환 |

### 다국어 전환 방법
기본 언어는 한국어이며 `/en` 경로로 접속하면 영어 페이지가 제공됩니다. 예) `/en/projects`.

