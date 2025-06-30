import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { Github, Search } from 'lucide-react'

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
            It&apos;s time to take control of your open graph images.
            If you&apos;re looking to customize Dynamic OG Images to match your brand, contact us at
            <b> hey@docsai.app </b> or schedule a meeting
          </p>
          <div className='flex gap-4 flex-wrap mt-10 justify-center'>

            <Button href="/search" color="white" >
              <Search className='h-4 w-4 mr-2'/>
              Search All Templates
            </Button>
            <Button href="/og/docs" color="white" variant="outline">
            View templates
          </Button>
          </div>

        </div>
      </Container>
    </section>
  )
}


