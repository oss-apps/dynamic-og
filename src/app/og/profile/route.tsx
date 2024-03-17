import { ProfileDark, ProfileLight } from '@/components/templates/profile/Profiles';
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


  const name: string = params.get("name") || "No Name";
  const heading: string = params.get("heading") || "No Heading";
  const sub: string = params.get("sub") || "No Sub"
  const dark = params.get('dark') == 'true'
  const desc = params.get("heading") || "I am a little boy and i dont know how to code man. I just code man heheheh. I am a little boy and i dont know how to code man. I just code man heheheh"
  const logo: string = params.get("logoUrl") || "https://docsai.app/images/logo.png"
  const website: string = params.get("website") || "docsai.app"
  const proImg: string = params.get("proImg") || "https://docsai.app/images/logo.png"



  const t = {
    heading, name, sub, dark, logo, desc, website, proImg
  }

  return new ImageResponse(
    (
      dark ? <ProfileDark t={t} /> : <ProfileLight t={t} />
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