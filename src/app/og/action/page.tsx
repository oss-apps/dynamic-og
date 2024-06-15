"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionTemplateUI } from "./Action";
import { useForm } from "react-hook-form";
import { Input, Label } from "@/components/ui/Inputs";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Copy, CornerDownLeft, ExternalLink } from 'lucide-react';
import { getTemplate, routes, serialize } from "@/utils/commonUtils";
import Alert from "@/components/ui/Alert";
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const ActionTemplateSchema = z.object({
  heading: z.string(),
  subHeading: z.string(),
  logo: z.string(),
  primary: z.string(),
  secondary: z.string(),
  dark: z.boolean()
})

export type TActionTemplate = z.infer<typeof ActionTemplateSchema>

const defaultValue: TActionTemplate = {
  heading: "Scheduling infrastructure for everyone.",
  logo: "https://cal.com/android-chrome-512x512.png",
  subHeading: "Focus on meeting, not making meetings.",
  primary: "Claim Username",
  secondary: "View Pricing",
  dark: false
}

const templateLiteral = `${DOMAIN}/${routes.action}?${getTemplate(defaultValue)}`


export default function Action() {

  const [t, setT] = useState<TActionTemplate>(defaultValue)

  const { handleSubmit, formState: { errors }, getValues, reset, register } =
    useForm<z.input<typeof ActionTemplateSchema>>({
      resolver: zodResolver(ActionTemplateSchema),
      defaultValues: t
    });


  const onSubmit = () => {
    setT(getValues())
  }

  const getLink = (dark: boolean) => {
    let tem = t;
    if (dark) tem = { ...tem, dark: true }
    const link = `${DOMAIN}/${routes.action}?${serialize(tem)}`
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
              <ActionTemplateUI t={t} />
            </div>
            <div className="mt-4 flex justify-center gap-x-4">
              <Button variant="solid" onClick={() => copyUrl(false)}>
                <Copy className="w-4 h-4 mr-1" />
                Copy as URL</Button>
              <Button variant="outline" onClick={() => openImage(false)} >
                <ExternalLink className="w-4 h-4 mr-1" />
                View as Image</Button>

            </div>
          </div>
          <div>
            <div className="shadow-md rounded-xl">
              <ActionTemplateUI t={{ ...t, dark: true }} />
            </div>
            <div className="mt-4 flex justify-center gap-x-4">
              <Button variant="solid" onClick={() => copyUrl(true)}>
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
        <h1 className="text-xl font-semibold"> Call to Action Theme </h1>
        <hr className="mt-2"></hr>

        <form onSubmit={handleSubmit(onSubmit)} className="my-4 rounded-md space-y-5 grid grid-cols-1">
          <div className="w-full">
            <Label>Heading</Label>
            <Input
              {...register('heading')}
              error={errors.heading?.message?.toString()}
            />
          </div>
          <div className="w-full">
            <Label>Sub Heading</Label>
            <Input
              {...register('subHeading')}
              error={errors.subHeading?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center">
            <Label>Primary Button</Label>
            <Input
              {...register('primary')}
              error={errors.primary?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center">
            <Label>Secondary Button</Label>
            <Input
              {...register('secondary')}
              error={errors.secondary?.message?.toString()}
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