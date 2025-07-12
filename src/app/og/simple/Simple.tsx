import { TSimpleTemplate } from "./page";

const themeConfigs = (quality: number) => {
  return { 
    light: {
    background: '#f7fee7',
    color: '#1a2e05',
    padding: `${24 / quality}px`,
    margin: `${6 / quality}px`,
    borderRadius: `${24 / quality}px`,
    fontSize: 72 / quality,
    fontWeight: 'lighter',
    borderWidth: `${2 / quality}px`,
    hrBorderWidth: `${1 / quality}px`,
    websiteFontSize: `${52 / quality}`,
    websiteFontWeight: '700',
    },
    dark: {
    background: '#1a2e05',
    color: '#f7fee7',
    padding: `${24 / quality}px`,
    margin: `${6 / quality}px`,
    borderRadius: `${24 / quality}px`,
    fontSize: 72 / quality,
    fontWeight: 'lighter',
    borderWidth: `${2 / quality}px`,
    hrBorderWidth: `${1 / quality}px`,
    websiteFontSize: `${52 / quality}`,
    websiteFontWeight: '700',
    }
  }
}

export function SimpleTemplate({ t }: { t: TSimpleTemplate }) {
  const theme = t.dark ? themeConfigs(t.quality)['dark'] : themeConfigs(t.quality)['light']
  return (
    <div
      style={{
        background: theme.background,
        width: '100%',
        color: theme.color,
        padding: theme.padding,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        margin: theme.margin,
        padding: theme.padding,
        width: "100%",
        fontWeight: theme.fontWeight,
        borderRadius: theme.borderRadius,
        height: "100%",
        fontSize: theme.fontSize,
        display: "flex",
        flexDirection: "column",
        border: `${theme.color} ${theme.borderWidth} solid`,
        color: theme.color
      }}>
        {t.title?.slice(0, 80)}
        <hr style={{ border: `${theme.color} ${theme.hrBorderWidth} solid`, width: "100%" }}></hr>
        <p style={{ fontSize: theme.websiteFontSize, fontWeight: theme.websiteFontWeight, display: 'flex', justifyContent: 'center', color: theme.color }}> {t.website}</p>
      </div>
    </div>
  )
}

export function SimpleTemplateUI({ t }: { t: TSimpleTemplate }) {
  const theme = t.dark ? themeConfigs(2)['dark'] : themeConfigs(2)['light']
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
