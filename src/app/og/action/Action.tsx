import { TActionTemplate } from "@/app/og/action/page"

const themeConfigs = {
  light: {
    background: '#e4e4e7',
    color: '#09090b',
    headingColor: "#09090b",
    btnOneBg: '#09090b',
    btnOneColor: "#fafaf9",
    btnTwoBg: '#FFF',

  },
  dark: {
    background: '#09090b',
    color: '#e4e4e7',
    headingColor: "#fafaf9",
    btnOneBg: '#fafaf9',
    btnOneColor: "#09090b",
    btnTwoBg: '#71717a',
  }
}


export function ActionTemplate({ t }: { t: TActionTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.background, fontFamily: "Poppins" }}>
      <div style={{ display: 'flex', maxWidth: '700px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 12, paddingLeft: 4, paddingRight: 4, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 46, color: theme.headingColor, textAlign: 'center' }}>
            {t.heading}
          </div>
          <h2 style={{ display: 'flex', flexDirection: 'column', fontSize: 30, fontWeight: 'bold', letterSpacing: 'tight', color: theme.color, textAlign: 'center' }}>
            <span>{t.subHeading}</span>
          </h2>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-start', gap: "12px" }}>
            <div style={{ display: 'flex', borderRadius: 14, boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', borderRadius: 14, justifyContent: 'center', border: 'none', backgroundColor: theme.btnOneBg, padding: '1rem 1.5rem', fontSize: 20, fontWeight: 'medium', color: theme.btnOneColor }}>
                {t.primary}
              </a>
            </div>
            <div style={{ marginLeft: 3, display: 'flex', borderRadius: 14, boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', borderRadius: 14, justifyContent: 'center', backgroundColor: theme.btnTwoBg, padding: '1rem 1.5rem', fontSize: 20, fontWeight: 'medium', color: theme.headingColor }}>
                {t.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          right: 60,
          top: 60,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={t.logo} style={{ width: "50px", height: "50px", borderRadius: "14px", border: "1px solid white" }} />


      </div>
    </div>
  )
}

export function ActionTemplateUI({ t }: { t: TActionTemplate }) {
  const theme = t.dark ? themeConfigs.dark : themeConfigs.light

  return (
    <div className="w-full relative min-h-72 rounded-xl p-2 lg:p-12 " style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: theme.background, fontFamily: "Poppins" }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 12, paddingLeft: 4, paddingRight: 4, alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="text-xl lg:text-3xl font-medium" style={{ display: 'flex', color: theme.headingColor, textAlign: 'center' }}>
            {t.heading}
          </div>
          <h2 className="text-base lg:text-xl mt-4" style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', letterSpacing: 'tight', color: theme.color, textAlign: 'center' }}>
            <span>{t.subHeading}</span>
          </h2>
          <div className="mt-4" style={{ display: 'flex', justifyContent: 'flex-start', gap: "12px" }}>
            <div className="rounded-2xl" style={{ display: 'flex', boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a className="text-base font-bold rounded-2xl p-2 px-4" href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', backgroundColor: theme.btnOneBg, fontWeight: 'medium', color: theme.btnOneColor }}>
                {t.primary}
              </a>
            </div>
            <div className="rounded-2xl" style={{ marginLeft: 3, display: 'flex', boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a className="text-base font-semibold rounded-2xl py-2 px-4" href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.btnTwoBg, fontWeight: 'medium', color: theme.headingColor }}>
                {t.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          right: 20,
          top: 20,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img className="border border-white" src={t.logo} style={{ width: "35px", height: "35px", borderRadius: "12px" }} />


      </div>
    </div>
  )
}
