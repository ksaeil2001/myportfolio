import { StatsCard } from './StatsCard'
import { getProjects } from '@/lib/projects'
import { getTranslations } from 'next-intl/server'
import { getGithubStats } from '@/lib/github'

export async function StatsSection() {
  const t = await getTranslations('stats');
  const github = await getGithubStats();

  const projectList = await getProjects();
  const projectCount = projectList.length;
  const stackList = projectList.flatMap((p) => p.stack);
  const uniqueStacks = Array.from(new Set(stackList));
  const stackFrequency = stackList.reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});
  const representativeTech = Object.entries(stackFrequency).sort(
    (a, b) => b[1] - a[1],
  )[0]?.[0];

  const stats = [
    { title: t('projects'), value: String(projectCount) },
    { title: t('stacks'), value: String(uniqueStacks.length) },
    { title: t('representative'), value: representativeTech ?? '-' },
    {
      title: t('stars'),
      value: github.error ? t('errorValue') : String(github.stars),
    },
  ];

  return (
    <section aria-labelledby="stats-heading" className="mt-12 w-full">
      <h2 id="stats-heading" className="sr-only">
        요약 통계 정보
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>
      {github.error && (
        <div aria-live="assertive" className="sr-only">
          {t('error')}
        </div>
      )}
    </section>
  );
}
