import { TemplateOG } from '../Pnl';
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

  const header: string = params.get("header") || "No title";
  const amount: string = params.get("amount") || "No Amount"
  const tag: string = params.get("tag") || "No tag"
  const image : string = params.get("image") || "NO Image";
  const domain: string = params.get("domain") || "No website";
  const description: string = params.get("description") || "No description";
  const dark = params.get('dark') == 'true'
  let quality = parseInt(params.get('quality') || '1');
  if ( quality > 3) quality = 3;


  const t = {
    domain, header, image, dark, amount, tag, quality, description
  }

  return new ImageResponse(
    (
      <TemplateOG t={t} />
    ),
    {
      width: 1200 / quality,
      height: 630 / quality,
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