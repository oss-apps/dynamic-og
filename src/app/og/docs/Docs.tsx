import { TDocsTemplate } from "./page"
import { fontSizeCalculator } from "@/components/utils"
import Image from "next/image"

const themeConfigs = {
  light: {
    grad: ['#f5f5f4', '#dbeafe'],
    color: '#0a0a0a'

  },
  dark: {
    grad: ['#020617', '#082f49'],
    color: '#fafaf9'

  }
}

export function DocsTemplate({ t }: { t: TDocsTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light

  return (
    <div

      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        letterSpacing: '-.02em',
        fontWeight: 700,
        padding: "32px",
        justifyContent: 'flex-start',
        backgroundImage: `linear-gradient(110deg, ${theme.grad[0]}, ${theme.grad[1]})`
      }}
    >

      <div
        style={{
          left: 80,
          top: 52,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >

        <img src={t.logo} style={{ width: "58px", height: "58xpx", borderRadius: "18px" }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16, }}>
          <span
            style={{
              fontSize: 34,
              color: theme.color,
              fontWeight: 600
            }}
          >
            {t.name}
          </span>
          <span style={{
            color: theme.color,

          }}> {t.website}</span>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '120px 20px 20px 50px',
            margin: '0 0',
            fontSize: fontSizeCalculator(t.title),
            maxWidth: 1050,
            borderBottomLeftRadius: "18px",
            textAlign: 'left',
            color: theme.color,
            lineHeight: 1.4,
            fontWeight: 900
          }}
        >
          {t.title?.slice(0, 120)}
        </div>

      </div>

      <span style={{
        fontSize: 24,
        color: theme.color,
        fontWeight: 400,
        left: 80,
        bottom: 52,
        position: 'absolute',
      }}> {t.sub}</span>

    </div>
  )
}

export function DocsTemplateUI({ t }: { t: TDocsTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light

  return (
    <div className="w-full relative min-h-72 rounded-xl px-2" style={{
      backgroundImage: `linear-gradient(110deg, ${theme.grad[0]}, ${theme.grad[1]})`,
      fontWeight: 700, fontFamily: 'Poppins'
    }}>

      <div
        style={{
          left: 40,
          top: 26,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src={t.logo} width={38} height={38} style={{ borderRadius: "8px" }} alt="og" />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 12, }}>
          <span
            style={{
              fontSize: 19,
              color: theme.color,
              fontWeight: 600
            }}
          >
            {t.name}
          </span>
          <span style={{
            color: theme.color,
            fontSize: 12

          }}> {t.website}</span>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          className="text-xl lg:text-3xl"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: "0px 30px",
            paddingTop: "80px",
            margin: '0 0',
            maxWidth: 1050,
            borderBottomLeftRadius: "18px",
            textAlign: 'left',
            color: theme.color,
            lineHeight: 1.4,
            fontWeight: 700
          }}
        >
          {t.title?.slice(0, 120)}
        </div>

      </div>

      <span
        className="text-base lg:text-xl"
        style={{
          color: theme.color,
          fontWeight: 600,
          left: 40,
          bottom: 26,
          position: 'absolute',
        }}> {t.sub}</span>
    </div>
  )
}
