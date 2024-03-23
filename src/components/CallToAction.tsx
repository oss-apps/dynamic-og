import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-stone-900 py-32"
    >

      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your open graph images.
            If you&apos;re looking to customize Dynamic OG Images to match your brand, contact us at
            <b> hey@docsai.app </b> or schedule a meeting
          </p>
          <div className='flex gap-4 flex-wrap mt-10 justify-center'>

            <Button href="/templates/docs" color="white" >
            Get free templates
          </Button>
            <Button target='_blank' className='min-w-56'
              href="https://cal.com/shrihari.dev/10min"
              variant="outline"
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-stone-300 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3 text-stone-300">Schedule a meeting</span>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  )
}
