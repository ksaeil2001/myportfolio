import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
};

export function ProjectCard({ title, description, image, stack, slug }: ProjectCardProps) {
  return (
    <article
      className="flex flex-col rounded-xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition overflow-hidden"
      tabIndex={0}
      role="group"
      aria-label={title}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} 대표 이미지`}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="사용 기술">
          {stack.map((tech, i) => (
            <li
              key={i}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded px-2 py-0.5"
            >
              {tech}
            </li>
          ))}
        </ul>
        <Link
          href={`/projects/${slug}`}
          className="mt-6 inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={`${title} 프로젝트 상세 보기`}
        >
          자세히 보기
        </Link>
      </div>
    </article>
  );
}
