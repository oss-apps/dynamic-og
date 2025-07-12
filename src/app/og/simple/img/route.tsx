import { SimpleTemplate } from '../Simple';
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

  const quality = parseInt(params.get('quality') || '1');

  const t = {
    title, website, dark, quality
  }

  return new ImageResponse(
    (
      <SimpleTemplate t={t} />
    ),
    {
      width: 1200/quality,
      height: 630/quality,
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