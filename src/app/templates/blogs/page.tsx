"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocsTemplateUI } from "@/components/templates/docs/Docs";
import { useForm } from "react-hook-form";
import { Input, Label } from "@/components/ui/Inputs";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Copy, CornerDownLeft, ExternalLink } from 'lucide-react';
import { routes, serialize, getTemplate } from "@/utils/commonUtils";
import Alert from "@/components/ui/Alert";
import { BlogTemplateUI } from "@/components/templates/blog/Blogs";
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const BlogsTemplateSchema = z.object({
  title: z.string(),
  logo: z.string().url(),
  name: z.string(),
  date: z.string(),
  dark: z.boolean()
})

export type TBlogsTemplate = z.infer<typeof BlogsTemplateSchema>
const defaultValue: TBlogsTemplate = {
  title: "10 Wildly-Successful Blogs That Earn Outlandish Incomes",
  logo: "https://asset.brandfetch.io/idP48RNgRN/idAMHRHf39.jpeg",
  name: "Forbes",
  date: "Aug 15, 2023",
  dark: false,
}

const templateLiteral = `${DOMAIN}/${routes.blog}?${getTemplate(defaultValue)}`


export default function Docs() {

  const [t, setT] = useState<TBlogsTemplate>(defaultValue)
  const { handleSubmit, formState: { errors }, getValues, reset, register } =
    useForm<z.input<typeof BlogsTemplateSchema>>({
      resolver: zodResolver(BlogsTemplateSchema),
      defaultValues: t
    });


  const onSubmit = () => {
    setT(getValues())
  }

  const getLink = (dark: boolean) => {
    let tem = t;
    if (dark) tem = { ...tem, dark: true }
    const link = `${DOMAIN}/${routes.blog}?${serialize(tem)}`
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
              <BlogTemplateUI t={t} />
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
              <BlogTemplateUI t={{ ...t, dark: true }} />
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
        <h1 className="text-xl font-semibold"> Blog Theme </h1>
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
            <Label>Name</Label>
            <Input
              {...register('name')}
              error={errors.name?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center">
            <Label>Date</Label>
            <Input
              {...register('date')}
              error={errors.date?.message?.toString()}
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
