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
import { ProfileTemplateUI } from "./Profiles";
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const ProfileTemplateSchema = z.object({
  name: z.string(),
  role: z.string(),
  logo: z.string(),
  image: z.string(),
  website: z.string(),
  desc: z.string(),
  dark: z.boolean()
})

export type TProfileTemplate = z.infer<typeof ProfileTemplateSchema>

const defaultValue: TProfileTemplate = {
  name: "Elon Musk",
  logo: "http://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711152000&semt=ais",
  image: "https://dynamicog.com/fillers/elon-musk-profile.jpeg",
  role: "Tesla | SpaceX | X",
  website: "X Formerly Twitter",
  desc: "Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX",
  dark: false
}

const templateLiteral = `${DOMAIN}/${routes.profile}?${getTemplate(defaultValue)}`


export default function Profile() {

  const [t, setT] = useState<TProfileTemplate>(defaultValue)

  const { handleSubmit, formState: { errors }, getValues, reset, register } =
    useForm<z.input<typeof ProfileTemplateSchema>>({
      resolver: zodResolver(ProfileTemplateSchema),
      defaultValues: t
    });


  const onSubmit = () => {
    setT(getValues())
  }

  const getLink = (dark: boolean) => {
    let tem = t;
    if (dark) tem = { ...tem, dark: true }
    const link = `${DOMAIN}/${routes.profile}?${serialize(tem)}`
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
              <ProfileTemplateUI t={t} />
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
              <ProfileTemplateUI t={{ ...t, dark: true }} />
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
        <h1 className="text-xl font-semibold"> Profile Theme </h1>
        <hr className="mt-2"></hr>

        <form onSubmit={handleSubmit(onSubmit)} className="my-4 rounded-md space-y-5 grid grid-cols-1">
          <div className="w-full">
            <Label>Name</Label>
            <Input
              {...register('name')}
              error={errors.name?.message?.toString()}
            />
          </div>
          <div className="w-full">
            <Label>Role</Label>
            <Input
              {...register('role')}
              error={errors.role?.message?.toString()}
            />
          </div>

          <div className="w-full">
            <Label>Description</Label>
            <Input
              {...register('desc')}
              error={errors.desc?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center mt-6">
            <Label>Profile Image URL</Label>
            <Input
              {...register('image')}
              error={errors.image?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center mt-6">
            <Label>Logo URL</Label>
            <Input
              {...register('logo')}
              error={errors.logo?.message?.toString()}
            />
          </div>
          <div className="gap-3 items-center mt-6">
            <Label>Website</Label>
            <Input
              {...register('website')}
              error={errors.website?.message?.toString()}
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
