"use client"
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import Feed from '@/components/Feed'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import PaidFeatures from '@/components/PaidFeatures'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <FeatureBlocks /> */}
        {/* <SecondaryFeatures /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Feed />
        <PaidFeatures />
        <Faqs />

        <CallToAction />
      </main>
      {/* <Footer /> */}
    </>
  )
}
