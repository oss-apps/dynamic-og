"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input, Label } from "@/components/ui/Inputs";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Copy, CornerDownLeft, ExternalLink } from 'lucide-react';
import { getTemplate, routes, serialize } from "@/utils/commonUtils";
import Alert from "@/components/ui/Alert";
import { SimpleTemplateUI } from "./Simple";
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const SimpleTemplateSchema = z.object({
  title: z.string(),
  website: z.string(),
  dark: z.boolean(),
  quality : z.number()
})

export type TSimpleTemplate = z.infer<typeof SimpleTemplateSchema>

const defaultValue: TSimpleTemplate = {
  title: "Every moment is a fresh beginning.",
  website: "blogs.gratitude.com",
  dark: false,
  quality : 1
}

const templateLiteral = `${DOMAIN}/${routes.simple}?${getTemplate(defaultValue)}`


export default function Simple() {

  const [t, setT] = useState<TSimpleTemplate>(defaultValue)

  const { handleSubmit, formState: { errors }, getValues, reset, register } =
    useForm<z.input<typeof SimpleTemplateSchema>>({
      resolver: zodResolver(SimpleTemplateSchema),
      defaultValues: t
    });


  const onSubmit = () => {
    setT(getValues())
  }

  const getLink = (dark: boolean) => {
    let tem = t;
    if (dark) tem = { ...tem, dark: true }
    const link = `${DOMAIN}/${routes.simple}?${serialize(tem)}`
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
          <div className="w-full">
            <div className="w-full shadow-md rounded-xl border">
              <SimpleTemplateUI t={t} />
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
          <div className="w-full">
            <div className="w-full shadow-md rounded-xl">
              <SimpleTemplateUI t={{ ...t, dark: true }} />
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
        <h1 className="text-xl font-semibold"> Simple Theme </h1>
        <hr className="mt-2"></hr>

        <form onSubmit={handleSubmit(onSubmit)} className="my-4 rounded-md space-y-5 grid grid-cols-1">
          <div className="w-full">
            <Label>Title</Label>
            <Input
              {...register('title')}
              error={errors.title?.message?.toString()}
            />
          </div>
          <div className="w-full">
            <Label>Website</Label>
            <Input
              {...register('website')}
              error={errors.website?.message?.toString()}
            />
          </div>
          <div className="w-full">
            <Label>Quality (1 = High, 3 = Low)</Label>
            <Input type="number"
              {...register('quality', {valueAsNumber: true}) }
              error={errors.quality?.message?.toString()}
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
