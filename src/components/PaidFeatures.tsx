import { Server, Settings, ContactRound } from 'lucide-react'
import image from '@/images/paid-features.png'
import Image from 'next/image'
import { BuyButton } from './Button'

const features = [
  {
    name: 'Customize',
    description:
      'Add your fonts , colors and much more. You can request a custom template too! that fits exactly your needs.',
    icon: Settings,
  },
  {
    name: 'Full Refund + Free self hosted',
    description: `If we don't get back to you within 2 days of payment, you can claim Full Refund and Self hosted template of your choice`,
    icon: Server,
  },
  {
    name: 'Contact us',
    description: 'You can join our discord channel for any queries , drop a mail hey@docsai.app or the chatbot on your bottom right!',
    icon: ContactRound,
  }
]

export default function PaidFeatures() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-fuchsia-600">Deploy faster</h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">What do I get after purchase ?</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We will help you deploy your application, either as a standalone service or integrated with your existing Next.js project.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-fuchsia-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className='flex justify-center xl:mt-6 mt-4'>
              <BuyButton />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={image}
              alt="Product screenshot"
              className="w-[48rem] border-2 max-w-none rounded-xl shadow-md shadow-fuchsia-300 ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
