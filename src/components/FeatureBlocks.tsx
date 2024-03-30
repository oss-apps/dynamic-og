import { CodeBracketIcon, PencilSquareIcon, PhotoIcon, RectangleStackIcon } from "@heroicons/react/16/solid"

const features = [
  {
    name: '1. Choose your template',
    description:
      'Go through the templates and find the ones that match your theme.',
    icon: <RectangleStackIcon />
    ,
  },
  {

    name: '2. Edit the content',
    description: 'Update the logos , title and description!',
    icon: <PencilSquareIcon />
    ,
  },
  {
    name: '3. Copy as URL',
    description: 'You have a custom link that generates a OG Image',
    icon: <PhotoIcon />
    ,
  },
  {
    name: '4. In your meta tags!',
    description: 'Place the image url in the image meta tags and share!',
    icon: <CodeBracketIcon />
    ,
  }


]

export function FeatureBlocks() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <p className="text-base font-semibold leading-7 text-slate-600">Get started now</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dynamic OG Images in 4 steps!
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-10 sm:pl-16">
                  <dt className="text-lg font-semibold leading-7 text-stone-900">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg">
                      {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div></>
  )
}