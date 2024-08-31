import { Template } from "./page";
import Image from "next/image"

const themeConfigs = {
  light: {
    background: '#f5f5f5',
    color: '#404040',
    secondary: "#525252"

  },
  dark: {
    background: '#404040',
    color: '#f5f5f5',
    secondary: "#d4d4d4"

  }
}

export function TemplateImg({ t }: { t: Template }) {
  const theme = t.dark ? themeConfigs['dark'] : themeConfigs['light']
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        letterSpacing: '-.02em',
        fontWeight: 700,
        color : theme.color,
        backgroundColor : theme.background,
        justifyContent: 'flex-start'
      }}
    >

      <div
        style={{
          left: 60,
          top: 52,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >

        <img src={t.logo} style={{ width: "58px", height: "58px", borderRadius: "18px" }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16, }}>
          <span
            style={{
              fontSize: 34,
              color: theme.color,
              fontWeight: 600
            }}
          >
            {t.website}
          </span>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize : 48,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '120px 20px 20px 50px',
            margin: '0 0',
            maxWidth: 550,
            borderBottomLeftRadius: "18px",
            textAlign: 'left',
            color: theme.color,
            lineHeight: 1.4,
            fontWeight: 500
          }}
        >
          {t.title}
        </div>

        <div
          style={{
            fontSize: 28,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '0px 20px 20px 50px',
            margin: '0 0',
            maxWidth: 550,
            borderBottomLeftRadius: "18px",
            textAlign: 'left',
            color: theme.secondary,
            lineHeight: 1.4,
            fontWeight: 400
          }}
        >
          {t.sub}
        </div>

      </div>
      <img src={t.image} style={{objectFit: "cover", width : "100%", flex : 1, borderTopLeftRadius : "18px"}} />
    </div>
  )
}

export function TemplateUI({ t }: { t: Template }) {
  const theme = t.dark ? themeConfigs['dark'] : themeConfigs['light']
  return (   
    <div className="flex rounded-xl shadow-md border" style={{backgroundColor: theme.background , color: theme.color}}>
    <div style={{flex : 1  , padding : '20px' }} className="min-h-72">
        <div className="flex gap-3 items-center">
          <img  src={t.logo} style={{ width: "35px", height: "35px", borderRadius: "12px" }} />
          <span className="font-semibold"> {t.website}</span>
        </div>
      <div>
      <h2 className="mt-7 text-lg font-medium">{t.title}</h2>
          <p className=" mt-2 font-medium" style={{color : theme.secondary}}>{t.sub} </p>
      </div>

    </div>
      <div style={{ flex: 1 ,display: 'flex' }}>
      <img src={t.image} className="bg-cover object-cover rounded-xl"/>
    </div>
  </div>
  )
}
