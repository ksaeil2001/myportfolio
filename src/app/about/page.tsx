import { TimelineItem } from "@/components/TimelineItem";

export const metadata = {
  title: "About",
  openGraph: {
    images: [
      {
        url: "/api/og?title=About",
        width: 1200,
        height: 630,
        alt: "About",
      },
    ],
  },
};

const timeline = [
  {
    year: "2019",
    title: "컴퓨터공학과 입학",
    description: "본격적으로 개발 세계에 발을 들였습니다.",
  },
  {
    year: "2021",
    title: "첫 개인 프로젝트 시작",
    description: "React를 활용한 웹앱을 제작하며 경험을 쌓았습니다.",
  },
  {
    year: "2022",
    title: "스타트업 인턴",
    description: "실제 서비스 개발과 협업을 배웠습니다.",
  },
  {
    year: "2023",
    title: "프론트엔드 개발자 취업",
    description: "사용자 중심 UI를 고민하며 다양한 프로젝트에 참여 중입니다.",
  },
  {
    year: "2024",
    title: "포트폴리오 사이트 개설",
    description: "그간의 경험과 배움을 정리하기 위해 이 사이트를 만들었습니다.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl space-y-16 p-8 sm:p-20">
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="text-3xl font-bold text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          안녕하세요, 사람을 위한 UI를 고민하는 프론트엔드 개발자 김세일입니다.
          아름답고 접근성 높은 인터페이스를 만들기 위해 꾸준히 노력하고 있습니다.
        </p>
      </section>

      <section aria-labelledby="timeline-heading">
        <h2
          id="timeline-heading"
          className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          개발자 여정
        </h2>
        <ol className="relative border-l border-gray-300 dark:border-gray-700">
          {timeline.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="philosophy-heading">
        <h2
          id="philosophy-heading"
          className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          기술 철학 & 가치관
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          사용자의 문제를 해결하는 도구로서의 기술을 추구합니다. 협업을 중시하며
          지속적인 학습과 지식 공유를 통해 모두가 성장하는 문화를 지향합니다.
        </p>
      </section>

      <section aria-labelledby="skills-heading" className="pb-8">
        <h2
          id="skills-heading"
          className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          핵심 스킬
        </h2>
        <ul className="flex flex-wrap gap-2" aria-label="주요 기술">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
          ].map((skill) => (
            <li
              key={skill}
              className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
