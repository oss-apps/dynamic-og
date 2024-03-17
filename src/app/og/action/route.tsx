import { CallToActionDark, CallToActionLight } from '@/components/templates/ callToAction/Action'
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

// Route segment config
export const runtime = 'edge'


// Image generation
export async function GET(request: NextRequest) {

  const fontData = await fetch(
    new URL('../../../styles/Poppins.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const params = request.nextUrl.searchParams

  const heading: string = params.get("heading") || "No heading";
  const subHeading: string = params.get("subHeading") || "No sub heading";
  const buttonOne: string = params.get("buttonOne") || "Button One"
  const buttonTwo: string = params.get("buttonTwo") || "Button Two"
  const dark = params.get("dark") == 'true'
  const logo = params.get('logoUrl') || 'https://docsai.app/images/logo.png'


  const template = {
    heading, subHeading, buttonOne, buttonTwo, dark, logo
  }

  return new ImageResponse(
    (
      dark ? <CallToActionDark t={template} /> : <CallToActionLight t={template} />

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