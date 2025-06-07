import { StatsCard } from "./StatsCard"

const stats = [
  { title: "프로젝트 수", value: "8" },
  { title: "사용 기술 수", value: "12" },
  { title: "공부 시간", value: "350h+" },
]

export function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="mt-12 w-full">
      <h2 id="stats-heading" className="sr-only">
        요약 통계 정보
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>
    </section>
  )
}
