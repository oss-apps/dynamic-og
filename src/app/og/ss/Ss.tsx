import { Template } from "./page";

const themeConfigs = {
  light: {
    background: '#eff6ff',
    color: '#2563eb',
    text : 'black'

  },
  dark: {
    background: '#172554',
    color: '#93c5fd',
    text: 'white'

  }
}

export function TemplateOG({ t }: { t: Template }) {
  const theme = t.dark ? themeConfigs['dark'] : themeConfigs['light']
  return (
    <div
      style={{

        background: theme.background,
        width: '100%',
        color: theme.text,
        padding: "24px",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        margin: '6px', padding: "24px", width: "100%", fontWeight: "lighter",
        borderRadius: "24px", height: "100%", fontSize: 44, display: "flex", flexDirection : "column"      
      }}>
        <div style={{display :"flex" , justifyContent: "center"}}>
        <p style={{ textAlign : "center", fontSize: "larger" }}>{t.domain}<b style={{ color: theme.color }}>{t.param}</b> </p>
        </div>
        <img src={t.image} style={{ borderRadius: "6px", marginTop: "12px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="w-full h-56 object-cover object-top mx-auto shadow-md" />

      </div>

    </div>
  )
}

export function TemplateUI({ t }: { t: Template }) {
  const theme = t.dark ? themeConfigs['dark'] : themeConfigs['light']
  return (
    <div
      className="items-center justify-center flex-row pt-7 px-7  h-72 shadow-md border rounded w-full"
      style={{
        background: theme.background,
        fontFamily: 'Poppins',
        color : theme.text
      }}
    >
     <p style={{textAlign: "center", fontSize: "larger"}}>{t.domain}<b style={{color : theme.color}}>{t.param}</b> </p>
    <img src={t.image} style={{borderRadius : "6px"}} className="w-full h-56 object-cover object-top mx-auto shadow-md mt-1"/>

    </div>
  )
}
