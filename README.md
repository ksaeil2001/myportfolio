# 💼 MyPortfolio

개인 포트폴리오 웹사이트 저장소

[Demo Site](https://your-deployed-site.vercel.app/)  
[GitHub Repository](https://github.com/ksaeil2001/myportfolio)

---

## 📦 환경설정 및 리소스 준비

- **Email 전송용 환경 변수**
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
위 값을 `.env` 파일에 정확히 기입해야 Contact Form가 정상 작동합니다.

- **PDF 이력서 업로드**
- `public/resume.pdf` 경로에 본인 이력서 PDF 파일을 배치해야 연락처 페이지의 다운로드 링크가 활성화됩니다.
- (개인정보 보호를 위해 저장소에는 포함되지 않습니다.)

- **프로젝트 썸네일 이미지**
- 각 프로젝트의 대표 이미지는 `public/projects` 폴더에 배치합니다.
- 실제 파일명과 프로젝트 데이터의 image 필드를 일치시켜 관리하세요.

---

## 📌 핵심 기능 및 UI/UX 요약

### 🌐 전역 레이아웃 및 내비게이션
- 상단 고정 내비게이션(데스크톱) 및 햄버거 메뉴(모바일)
- 홈, 소개, 프로젝트, 연락처 간 신속한 이동 및 접근성(ARIA, 키보드 내비게이션) 완비

### 🚩 히어로 섹션 (홈)
- 자기소개, "프로젝트 보기"/"이력서 다운로드" 버튼 제공
- 크고 깔끔한 타이포그래피, 모든 버튼/링크에 시각적 인터랙션 및 접근성 적용

### 📊 요약 통계 카드 (홈)
- 프로젝트 수, 기술 스택 수, 대표 기술, GitHub 총 별(star) 수
- 실시간 GitHub API 호출로 별 개수 합산, 카드별 아이콘/숫자 표시

### 📂 프로젝트 목록 페이지 (/projects)
- 카드형 프로젝트 리스트(반응형)
- ProjectFilterBar: 기술 스택, 연도, 기여도별 필터 및 최신순/이름순 등 정렬 옵션, 초기화 버튼

### 📖 프로젝트 상세 페이지 (/projects/[slug])
- 프로젝트 제목, 설명, 대표 이미지, 사용 기술(배지), 주요 기능/배운 점 bullet list
- 예외처리(404), 접근성(alt, 시멘틱 마크업)

### 🙋‍♂️ 소개 페이지 (About)
- 개발자 성장 타임라인, 철학/가치관, 대표 기술 스택 배지 형태로 시각화

### 📬 연락처 페이지 (Contact)
- 이메일, GitHub, 블로그, PDF 이력서 다운로드 링크
- EmailJS 연동 실시간 Contact Form (이름/이메일/메시지, 제출 성공/실패 안내)

### 🌟 전역 UX·접근성 개선
- Tailwind CSS 기반 반응형
- 일관된 타이포그래피 및 컬러 시스템, 다크 모드(시스템 연동)
- 시각적 피드백(hover, focus 트랜지션/그림자)
- NotFound 페이지 및 공통 레이아웃

---

## 📝 작업 내역

- [x] 프로젝트 목록 페이지 필터/정렬 기능 구현
- [x] 실시간 GitHub API 연동 통계 카드 개발
- [x] 소개 페이지 타임라인 및 가치관 섹션 구현
- [x] ContactForm + EmailJS 연동 및 입력 검증
- [x] 반응형 내비게이션 및 모바일 햄버거 메뉴 구현
- [x] 다크 모드 및 접근성(키보드, ARIA) 강화
- [x] PDF 이력서/프로젝트 이미지 리소스 구조화

---

## 🚀 배포 및 운영

- **배포:** Vercel 자동 배포 파이프라인 연동
- **코드 품질:** ESLint, TypeScript, Prettier, 환경변수 관리
- **문서화:** README, 코드 주석, 환경설정 안내 등 정기 유지보수

---

## 📚 참고/관련 링크

- [ksaeil2001/myportfolio (GitHub)](https://github.com/ksaeil2001/myportfolio)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [EmailJS 공식 문서](https://www.emailjs.com/docs/)

## 📁 폴더 구조 & 구성요소 설명

본 프로젝트는 **Next.js App Router** 기반 구조로 구성되어 있으며,  
**Tailwind CSS**, **TypeScript**, **EmailJS**, **GitHub API 연동** 등을 포함하고 있습니다.

```
myportfolio/
├── public/
│ ├── projects/ # 프로젝트 썸네일 이미지 저장 폴더
│ └── resume.pdf # 연락처 페이지에서 다운로드할 이력서 PDF
├── src/
│ ├── app/
│ │ ├── layout.tsx # 공통 레이아웃 (헤더, 메타데이터 포함)
│ │ ├── page.tsx # 홈 페이지 (Hero, Stats, Projects 섹션 포함)
│ │ ├── about/
│ │ │ └── page.tsx # 자기소개 페이지 (타임라인, 기술 철학 등)
│ │ ├── projects/
│ │ │ ├── page.tsx # 프로젝트 목록 페이지 (필터링/정렬 포함)
│ │ │ └── [slug]/
│ │ │ └── page.tsx # 개별 프로젝트 상세 페이지
│ │ ├── contact/
│ │ │ └── page.tsx # 연락처 페이지 (이메일/ContactForm)
│ │ └── not-found.tsx # 404 페이지
│ ├── components/
│ │ ├── Header.tsx # 전역 내비게이션 헤더 (반응형 지원)
│ │ ├── HeroSection.tsx # 홈 상단 히어로 섹션
│ │ ├── StatsSection.tsx # 통계 카드 섹션
│ │ ├── StatsCard.tsx # 개별 통계 카드 컴포넌트
│ │ ├── ProjectsSection.tsx # 홈 페이지 내 프로젝트 하이라이트
│ │ ├── ProjectCard.tsx # 개별 프로젝트 카드 (목록용)
│ │ ├── ProjectFilterBar.tsx # 프로젝트 목록 페이지용 필터/정렬 UI
│ │ ├── TimelineItem.tsx # 소개 페이지 내 타임라인 항목 컴포넌트
│ │ └── ContactForm.tsx # EmailJS 연동 연락 폼
│ ├── data/
│ │ └── projects.ts # 프로젝트 메타데이터 배열 (slug, title, stack 등)
│ ├── styles/
│ │ └── globals.css # 전역 Tailwind CSS 스타일 및 변수
│ └── utils/
│ └── github.ts # GitHub API 통계 호출 함수 (stargazer 수 등)
├── .env.local # EmailJS 관련 환경변수 설정 (로컬용, gitignore 대상)
├── next.config.ts # Next.js 설정 파일 (i18n 제거, 이미지 도메인 등)
├── tailwind.config.ts # Tailwind CSS 설정 파일
├── tsconfig.json # TypeScript 설정 파일
├── package.json # 프로젝트 메타데이터 및 의존성
└── README.md # 프로젝트 설명 문서
```
