import { classNames } from '@/utils/classNames'

export default function Alert({ text, color = 'stone' }: { text: string, color?: 'stone' | 'amber' }) {
  const bg = `bg-${color}-100`
  const col = `text-${color}-700`

  return (
    <div className={classNames("rounded-md border p-4", color == 'amber' ? 'bg-amber-100' : 'bg-stone-100')}>
      <p className={classNames("text-sm", color == 'amber' ? 'text-amber-700' : 'text-stone-700')} >{text}</p>
    </div>
  )
}