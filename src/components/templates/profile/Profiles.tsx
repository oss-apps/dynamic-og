import { TProfileTemplate } from "@/app/templates/profiles/page"
import Image from "next/image"

const themeConfigs = {
  light: {
    background: '#fafafa',
    color: '#0a0a0a',
    border: "#dc2626",

  },
  dark: {
    background: '#0a0a0a',
    color: '#fafafa',
    border: "#dc2626",
  }
}

export function ProfileTemplate({ t }: { t: TProfileTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: theme.background, borderRight: `14px solid ${theme.border}`, borderBottom: `14px solid ${theme.border}` }}>
      <div style={{ display: "flex", maxWidth: "1100px", alignItems: "center", padding: "70px", paddingTop: "90", paddingBottom: "30", justifyContent: 'flex-start' }} >
        <div style={{ display: "flex" }}>

          <div style={{ display: 'flex', flexDirection: 'column', marginRight: 26, borderLeft: `8px solid ${theme.color}`, paddingLeft: "18px" }}>
            <span
              style={{
                fontSize: 46,
                color: theme.color,
                fontWeight: 800,
              }}
            >
              {t.name}
            </span>
            <span style={{
              fontSize: 30,
              color: theme.color,
              fontWeight: 400,
            }}> {t.role}</span>


          </div>
          <img src={t.image} style={{ width: "95px", height: "95px", borderRadius: "14px", objectFit: "cover" }} />

        </div>
      </div>
      <div style={{ display: "flex", maxWidth: "1100px", alignItems: "center", paddingLeft: "70px", paddingRight: "50px", marginBottom: "20px", justifyContent: 'flex-start' }}>
        <p style={{ fontSize: 30, lineHeight: "34px", color: theme.color }}> {t.desc}
        </p>

      </div>
      {/* <span style={{ width: "100%", borderBottom: "4px solid #0a0a0a", }}></span> */}

      <div
        style={{
          left: 70,
          bottom: 42,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={t.logo} style={{ width: "40px", height: "40px", border: "0.75px solid #f0f9ff", borderRadius: "8" }} />


      </div>

      <span
        style={{
          fontSize: 24,
          color: theme.color,
          fontWeight: 600,
          right: 50,
          bottom: 42,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {t.website}
      </span>

    </div >
  )
}

export function ProfileTemplateUI({ t }: { t: TProfileTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light

  return (
    <div className="w-full relative min-h-72 shadow-md border rounded" style={{ height: '100%', backgroundColor: theme.background, borderRight: `10px solid ${theme.border}`, borderBottom: `10px solid ${theme.border}`, fontFamily: 'Poppins' }}>
      <div className="p-8 w-full" style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start' }} >
        <div className="w-full" style={{ display: "flex", alignItems: 'center' }}>

          <div className="text-xl lg:text-3xl"
            style={{ display: 'flex', flexDirection: 'column', marginRight: 26, borderLeft: `8px solid ${theme.color}`, paddingLeft: "18px" }}>
            <span
              style={{
                color: theme.color,
                fontWeight: 800,
              }}
            >
              {t.name}
            </span>
            <span
              className="text-base lg:text-xl"
              style={{
                color: theme.color,
              fontWeight: 400,
              }}> {t.role}</span>


          </div>
          <Image alt="Profile" className="rounded" objectFit="cover" src={t.image} width={65} height={65} style={{ height: 65, objectFit: "cover" }} />

        </div>
      </div>
      <div className="px-8" style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start' }}>
        <p style={{ fontSize: 16, color: theme.color }}> {t.desc}
        </p>

      </div>
      {/* <span style={{ width: "100%", borderBottom: "4px solid #0a0a0a", }}></span> */}

      <span
        style={{
          fontSize: 18,
          color: theme.color,
          fontWeight: 600,
          right: 20,
          bottom: 10,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {t.website}
      </span>

      <Image alt="Logo" width={35} objectFit="cover" height={35} src={t.logo} style={{ position: "absolute", bottom: 10, left: 20, width: "35px", height: "35px", border: "1px solid #f0f9ff", borderRadius: "8px" }} />


    </div >
  )
}