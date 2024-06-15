import { DocsTemplate } from '../Docs'

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

// Route segment config
export const runtime = 'edge'



// Image generation
export async function GET(request: NextRequest) {

  const fontData = await fetch(
    new URL('@/styles/Poppins.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const params = request.nextUrl.searchParams

  const template = {
    title: params.get('title') || 'No Title',
    sub: params.get('sub') || 'No Sub',
    name: params.get('name') || 'No name',
    logo: params.get('logo') || 'https://docsai.app/images/logo.png',
    dark: params.get('dark') == 'true',
    website: params.get('website') || 'No website'
  }
  console.log("🔥 ~ GET ~ template:", template)

  return new ImageResponse(
    (
      <DocsTemplate t={template} />
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Poppins',
          data: fontData,
          style: 'normal',
          weight: 900
        },
      ],
      headers: {
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    },
  )
}