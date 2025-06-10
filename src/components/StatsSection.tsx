import { StatsCard } from "./StatsCard";
import { getProjects } from "@/lib/projects";

async function getGithubStats() {
  try {
    const res = await fetch("https://api.github.com/users/ksaeil2001", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch GitHub data");
    const data = await res.json();

    const repoRes = await fetch(
      "https://api.github.com/users/ksaeil2001/repos?per_page=100",
      { next: { revalidate: 3600 } },
    );
    if (!repoRes.ok) throw new Error("Failed to fetch repo list");
    const repos: { stargazers_count?: number }[] = await repoRes.json();
    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count ?? 0),
      0,
    );

    return {
      followers: data.followers as number,
      stars: totalStars,
    };
  } catch {
    return {
      followers: 0,
      stars: 0,
    };
  }
}

export async function StatsSection() {
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
    { title: "프로젝트 수", value: String(projectCount) },
    { title: "사용 기술 수", value: String(uniqueStacks.length) },
    { title: "대표 기술", value: representativeTech ?? "-" },
    { title: "GitHub Stars", value: String(github.stars) },
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
    </section>
  );
}
