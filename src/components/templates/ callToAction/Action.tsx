export type TCallToAction = {
  heading: string,
  subHeading: string,
  buttonOne: string,
  buttonTwo: string,
  dark: boolean,
  logo: string,

}

export function CallToActionDark({ t }: { t: TCallToAction }) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111827' }}>
      <div style={{ display: 'flex', maxWidth: '600px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 12, paddingLeft: 4, paddingRight: 4, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 40, color: 'white', textAlign: 'center' }}>
            {t.heading}
          </div>
          <h2 style={{ display: 'flex', flexDirection: 'column', fontSize: 30, fontWeight: 'bold', letterSpacing: 'tight', color: '#E4E8EB', textAlign: 'center' }}>
            <span>{t.subHeading}</span>
          </h2>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-start', gap: "12px" }}>
            <div style={{ display: 'flex', borderRadius: 14, boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 14, border: 'none', backgroundColor: '#0891b2', padding: '1rem 1.5rem', fontSize: 16, fontWeight: 'medium', color: '#FFFFFF' }}>
                {t.buttonOne}
              </a>
            </div>
            <div style={{ marginLeft: 3, display: 'flex', borderRadius: 14, boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 14, backgroundColor: '#FFFFFF', padding: '1rem 1.5rem', fontSize: 16, fontWeight: 'medium', color: '#3498DB' }}>
                {t.buttonTwo}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          right: 70,
          top: 42,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={t.logo} style={{ width: "50px", height: "50px", borderRadius: "14px", border: "1px solid #e5e5e5" }} />


      </div>
    </div>

  )
}

export function CallToActionLight({ t }: { t: TCallToAction }) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f9ff' }}>
      <div style={{ display: 'flex', maxWidth: '600px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 12, paddingLeft: 4, paddingRight: 4, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 40, color: '#0ea5e9', textAlign: 'center' }}>
            {t.heading}
          </div>
          <h2 style={{ display: 'flex', flexDirection: 'column', fontSize: 30, fontWeight: 'bold', letterSpacing: 'tight', color: '#020617', textAlign: 'center' }}>
            <span>{t.subHeading}</span>
          </h2>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-start', gap: "12px" }}>
            <div style={{ display: 'flex', borderRadius: 14, boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', borderRadius: 14, justifyContent: 'center', border: 'none', backgroundColor: '#3498DB', padding: '1rem 1.5rem', fontSize: 16, fontWeight: 'medium', color: '#FFFFFF' }}>
                {t.buttonOne}
              </a>
            </div>
            <div style={{ marginLeft: 3, display: 'flex', borderRadius: 14, boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05), 0 3px 8px rgba(0, 0, 0, 0.15)' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', borderRadius: 14, justifyContent: 'center', backgroundColor: '#FFFFFF', padding: '1rem 1.5rem', fontSize: 16, fontWeight: 'medium', color: '#3498DB' }}>
                {t.buttonTwo}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          right: 70,
          top: 42,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={t.logo} style={{ width: "50px", height: "50px", borderRadius: "14px" }} />


      </div>
    </div>
  )
}