import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Alert({ text }: { text: string }) {
  return (
    <div className="rounded-md bg-stone-100 border p-4">
      <p className="text-sm text-stone-700">{text}</p>
    </div>
  )
}