import { TBlogsTemplate } from "./page"
import Image from "next/image"


const themeConfigs = {
  light: {
    background: '#f0f9ff',
    color: '#082f49'

  },
  dark: {
    background: '#082f49',
    color: '#f0f9ff',

  }
}

export function BlogTemplate({ t }: { t: TBlogsTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        letterSpacing: '-.02em',
        fontWeight: 700,
        padding: "32px",
        background: theme.background,
      }}
    >

      <div
        style={{
          left: 80,
          bottom: 42,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={t.logo} style={{ width: "55px", height: "55px", borderRadius: "14px" }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>

          <span
            style={{
              fontSize: 28,
              color: theme.color,
              fontWeight: 600
            }}
          >
            {t.name}
          </span>
          <span style={{
            fontSize: 20,
            color: theme.color,
            fontWeight: 400
          }}> {t.date}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '20px 0px',
            margin: '0 0',
            fontSize: 52,
            maxWidth: 1050,

            borderBottomLeftRadius: "18px",
            textAlign: 'left',
            color: theme.color,
            lineHeight: 1.4,
          }}
        >
          {t.title}
        </div>
        <span style={{ width: "300px", borderBottom: `6px solid ${theme.color}`, paddingTop: "20px" }}></span>

      </div>

    </div>
  )
}

export function BlogTemplateUI({ t }: { t: TBlogsTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light
  return (
    <div className="w-full relative min-h-52 lg:min-h-72  rounded-xl px-4 lg:px-8"
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        letterSpacing: '-.02em',
        fontWeight: 700,
        background: theme.background,
      }}
    >

      <div
        style={{
          left: 28,
          bottom: 10,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src={t.logo} width={42} height={42} style={{ borderRadius: "8px" }} alt="og" />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>

          <span
            className="text-base lg:text-lg"
            style={{
              color: theme.color,
              fontWeight: 600
            }}
          >
            {t.name}
          </span>
          <span
            className="text-xs lg:text-sm"
            style={{
              color: theme.color,
              fontWeight: 400
            }}> {t.date}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          className="text-xl lg:text-3xl"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '18px 0px',
            margin: '0 0',
            borderBottomLeftRadius: "18px",
            textAlign: 'left',
            color: theme.color,
            lineHeight: 1.4,
          }}
        >
          {t.title}
        </div>
        <span className="w-48" style={{ borderBottom: `6px solid ${theme.color}`, paddingTop: "20px" }}></span>

      </div>

    </div>
  )
}

