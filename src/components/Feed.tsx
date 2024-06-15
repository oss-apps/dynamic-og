import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { DollarSign, Joystick, LayoutTemplate, Server } from 'lucide-react'

const features = [
  {
    name: 'Pricing',
    description:
      `Get lifetime access for just $10 per template.  Customize them to match your style. Own your templates for ever.`,
    icon: DollarSign,
  },
  {
    name: 'Servers',
    description:
      `Leave server setup to us. Deploy on your preferred platform: Cloudflare Workers, Netlify Functions, Vercel, or even machines.`,
    icon: Server,
  },
  {
    name: 'Control',
    description:
      'You own the source code of your templates. This means your designs are yours, not ours. We simply provide the tools.',
    icon: Joystick,
  },
  {
    name: 'Pre-designed templates',
    description:
      'Get started with our pre-designed Dynamic OG templates for free. we offer a self-hosted solution for those who need a customized look.',
    icon: LayoutTemplate,
  },
]

export default function Feed() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-fuchsia-600">Self Hosted</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customize Your OG  templates
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            and deploy it on your own servers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
