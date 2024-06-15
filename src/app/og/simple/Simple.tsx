import { TSimpleTemplate } from "./page";

const themeConfigs = {
  light: {
    background: '#f7fee7',
    color: '#1a2e05',

  },
  dark: {
    background: '#1a2e05',
    color: '#f7fee7',
  }
}

export function SimpleTemplate({ t }: { t: TSimpleTemplate }) {
  const theme = t.dark ? themeConfigs['dark'] : themeConfigs['light']
  return (
    <div
      style={{

        background: theme.background,
        width: '100%',
        color: theme.color,
        padding: "24px",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        margin: '6px', padding: "24px", width: "100%", fontWeight: "lighter",
        borderRadius: "24px", height: "100%", fontSize: 72, display: "flex", flexDirection: "column",
        border: `${theme.color} 2px solid`, color: theme.color
      }}>
        {t.title?.slice(0, 80)}
        <hr style={{ border: `${theme.color} 1px solid`, width: "100%" }}></hr>
        <p style={{ fontSize: "52", fontWeight: "700", display: 'flex', justifyContent: 'center', color: theme.color }}> {t.website}</p>

      </div>

    </div>
  )
}

export function SimpleTemplateUI({ t }: { t: TSimpleTemplate }) {
  const theme = t.dark ? themeConfigs['dark'] : themeConfigs['light']
  return (
    <div
      className="flex items-center justify-center p-4  min-h-72 shadow-md border rounded w-full"
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: 'Poppins'
      }}
    >
      <div className="py-2 font-medium px-6 w-full h-full min-h-64 text-xl lg:text-3xl m-2 rounded-lg flex flex-col"
        style={{
          border: `${theme.color} 2px solid`, color: theme.color
        }}>
        {t.title?.slice(0, 80)}
        <hr className="my-4" style={{ border: `${theme.color} 1px solid`, width: "100%" }}></hr>
        <p className="text-base lg:text-xl flex justify-center" style={{ color: theme.color }}> {t.website}</p>

      </div>

    </div>
  )
}
