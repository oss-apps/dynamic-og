import { ProfileTemplate } from '@/components/templates/profile/Profiles';
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
  const role: string = params.get("role") || "No role"
  const dark = params.get('dark') == 'true'
  const desc = params.get("desc") || "No description"
  const logo: string = params.get("logoUrl") || "https://docsai.app/images/logo.png"
  const website: string = params.get("website") || "No website"
  const image: string = params.get("image") || "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1505"



  const t = {
    name, dark, logo, desc, website, image, role
  }

  return new ImageResponse(
    (
      <ProfileTemplate t={t} />
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