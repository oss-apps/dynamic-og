"use client"
import { BuyButton } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { FeatureBlocks } from '@/components/FeatureBlocks'
import Feed from '@/components/Feed'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import PaidFeatures from '@/components/PaidFeatures'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Slideover from '@/components/ui/Slideover'
import Script from 'next/script'
import { useState } from 'react'

export default function Home() {
  const title: string = "hey this a new blog with 100 words or less what happens. we will never know man. hey hey hey lets go man";
  const website: string = "docsai.app";
  const date: string = "11/02/2024";
  const name: string = "Shrihari"
  const logoUrl: string = "https://docsai.app/images/logo.png"

  const template = {
    title, date, name, logoUrl
  }
  const [open, setOpen] = useState(false)

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
