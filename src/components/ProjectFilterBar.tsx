'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export function ProjectFilterBar({
  stacks,
  years,
}: {
  stacks: string[]
  years: number[]
}) {
  const router = useRouter()
  const params = useSearchParams()
  const t = useTranslations('filter')

  const selectedStacks = params.get('stack')?.split(',').filter(Boolean) ?? []
  const year = params.get('year') ?? ''
  const contribution = params.get('contribution') ?? ''
  const sort = params.get('sort') ?? ''

  const updateSearch = (key: string, value: string | null) => {
    const next = new URLSearchParams(Array.from(params.entries()))
    if (value === null || value === '') {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    router.push('?' + next.toString())
  }

  const toggleStack = (stack: string) => {
    const current = new URLSearchParams(Array.from(params.entries()))
    const value = current.get('stack')
    const list = value ? value.split(',').filter(Boolean) : []
    const idx = list.indexOf(stack)
    if (idx > -1) {
      list.splice(idx, 1)
    } else {
      list.push(stack)
    }
    if (list.length) {
      current.set('stack', list.join(','))
    } else {
      current.delete('stack')
    }
    router.push('?' + current.toString())
  }

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end">
      <fieldset className="flex flex-wrap gap-2" aria-label={t('stack')}>
        {stacks.map((s) => (
          <label key={s} className="flex items-center gap-1 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={selectedStacks.includes(s)}
              onChange={() => toggleStack(s)}
            />
            {s}
          </label>
        ))}
      </fieldset>

      <label className="text-sm">
        {t('year')}
        <select
          className="ml-2 rounded border p-1 text-sm"
          value={year}
          onChange={(e) => updateSearch('year', e.target.value || null)}
        >
          <option value="">{t('all')}</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>

      <label className="text-sm">
        {t('contribution')}
        <select
          className="ml-2 rounded border p-1 text-sm"
          value={contribution}
          onChange={(e) => updateSearch('contribution', e.target.value || null)}
        >
          <option value="">{t('all')}</option>
          <option value="30">30% 이상</option>
          <option value="50">50% 이상</option>
          <option value="70">70% 이상</option>
          <option value="100">100%</option>
        </select>
      </label>

      <label className="text-sm">
        {t('sort')}
        <select
          className="ml-2 rounded border p-1 text-sm"
          value={sort}
          onChange={(e) => updateSearch('sort', e.target.value || null)}
        >
          <option value="">선택</option>
          <option value="latest">{t('latest')}</option>
          <option value="oldest">{t('oldest')}</option>
          <option value="name">{t('name')}</option>
          <option value="contribution">{t('contributionSort')}</option>
          <option value="usage">{t('usage')}</option>
        </select>
      </label>

      <button
        type="button"
        onClick={() => router.push('/projects')}
        className="text-sm text-blue-600 hover:underline"
      >
        {t('reset')}
      </button>
    </div>
  )
}
