"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocsTemplateUI } from "@/components/templates/docs/Docs";
import { useForm } from "react-hook-form";
import { Input, Label } from "@/components/ui/Inputs";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Copy, CornerDownLeft, ExternalLink } from 'lucide-react';
import { getTemplate, routes, serialize } from "@/utils/commonUtils";
import Alert from "@/components/ui/Alert";
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const DocsTemplateSchema = z.object({
  title: z.string(),
  logo: z.string().url(),
  name: z.string(),
  sub: z.string(),
  website: z.string(),
  dark: z.boolean()
})

export type TDocsTemplate = z.infer<typeof DocsTemplateSchema>

const defaultValue: TDocsTemplate = {
  logo: "https://w7.pngwing.com/pngs/750/733/png-transparent-logo-stripe-brand-stripes-miscellaneous-purple-blue-thumbnail.png",
  title: "Find a guide to integrate Stripe's payments APIs | Stripe",
  sub: "Payments infrastructure for the internet",
  name: "Stripe",
  website: "stripe.com",
  dark: false
}

const templateLiteral = `${DOMAIN}/${routes.docs}?${getTemplate(defaultValue)}`


export default function Docs() {

  const [t, setT] = useState<TDocsTemplate>(defaultValue)
  const { handleSubmit, formState: { errors }, getValues, reset, register } =
    useForm<z.input<typeof DocsTemplateSchema>>({
      resolver: zodResolver(DocsTemplateSchema),
      defaultValues: t
    });


  const onSubmit = () => {
    setT(getValues())
  }

  const getLink = (dark: boolean) => {
    let tem = t;
    if (dark) tem = { ...tem, dark: true }
    const link = `${DOMAIN}/${routes.docs}?${serialize(tem)}`
    return link
  }

  const openImage = (dark: boolean) => {
    window.open(getLink(dark), '_blank')
  }

  const copyUrl = async (dark: boolean) => {
    await navigator.clipboard.writeText(getLink(dark))
  }

  const copyLiteral = async () => {
    await navigator.clipboard.writeText(templateLiteral)
  }


  return (
    <section className="flex gap-8 flex-wrap lg:flex-nowrap">

      <div className="w-full lg:w-1/2">
        <div className="  flex items-baseline flex-wrap gap-y-4">
          <div >
            <div className="shadow-md rounded-xl border">
              <DocsTemplateUI t={t} />
            </div>
            <div className="mt-4 flex justify-center gap-x-4">
              <Button variant="outline" onClick={() => copyUrl(false)}>
                <Copy className="w-4 h-4 mr-1" />
                Copy as URL</Button>
              <Button variant="outline" onClick={() => openImage(false)} >
                <ExternalLink className="w-4 h-4 mr-1" />
                View as Image</Button>

            </div>
          </div>
          <div>
            <div className="shadow-md rounded-xl">
              <DocsTemplateUI t={{ ...t, dark: true }} />
            </div>
            <div className="mt-4 flex justify-center gap-x-4">
              <Button variant="outline" onClick={() => copyUrl(true)}>
                <Copy className="w-4 h-4 mr-1" />
                Copy as URL</Button>
              <Button variant="outline" onClick={() => openImage(true)} >
                <ExternalLink className="w-4 h-4 mr-1" />
                View as Image</Button>

            </div>
          </div>

        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl font-semibold"> Docs Theme </h1>
        <hr className="mt-2"></hr>

        <form onSubmit={handleSubmit(onSubmit)} className="my-4 rounded-md space-y-5 grid grid-cols-1">
          <div className="w-full">
            <Label>Title</Label>
            <Input
              {...register('title')}
              error={errors.title?.message?.toString()}
            />
          </div>
          <div>
            <Label>Sub</Label>
            <Input
              {...register('sub')}
              error={errors.sub?.message?.toString()}
            />
          </div>
          <div className="w-full">
            <Label>Name</Label>
            <Input
              {...register('name')}
              error={errors.name?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center">
            <Label>Website</Label>
            <Input
              {...register('website')}
              error={errors.website?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center mt-6">
            <Label>Logo URL</Label>
            <Input
              {...register('logo')}
              error={errors.logo?.message?.toString()}
            />
          </div>
          <div>
            <Label>Template</Label>
            <Alert text={templateLiteral} />
          </div>
          <div className="flex justify-center items-center gap-1 mt-10">
            <Button variant="outline" type="button" onClick={copyLiteral}>
              <Copy className="w-4 h-4 mr-1" />
              Copy Template</Button>
            <Button variant="solid" type="submit" >
              <CornerDownLeft className="w-4 h-4 mr-1" />
              Generate</Button>

          </div>
        </form>
      </div>
    </section>
  )
}
