export type StatsCardProps = {
  title: string
  value: string
  description?: string
}

export function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <article
      className="rounded-xl bg-white dark:bg-neutral-900 shadow-md p-6 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition"
      tabIndex={0}
      role="group"
      aria-label={title}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
      {description && (
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{description}</p>
      )}
    </article>
  )
}
