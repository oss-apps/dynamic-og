import { TemplateOG } from '../Ss';
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

  const param: string = params.get("param") || "No title";
  const image : string = params.get("image") || "NO Image";
  const domain: string = params.get("domain") || "No website"
  const dark = params.get('dark') == 'true'


  const t = {
    domain, param, image , dark
  }

  return new ImageResponse(
    (
      <TemplateOG t={t} />
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