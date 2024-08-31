import { TemplateImg } from '../SplitImage';
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

  const title: string = params.get("title") || "No title";
  const website: string = params.get("website") || "No website"
  const dark = params.get('dark') == 'true'
  const logo: string = params.get("logo") || "https://dynamicog.com/fillers/cal-logo.png"
  const sub: string = params.get("sub") || "No sub"
  const image: string = params.get("image") || "https://dynamicog.com/fillers/stock-kitchen.jpeg"




  const t = {
    title, website, dark, logo, sub, image
  }

  return new ImageResponse(
    (
      <TemplateImg t={t} />
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Poppins',
          data: fontData,
          style: 'normal',
        },
      ],
      headers: {
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    },
  )
}