type TprofileTemplate = {
  heading: string,
  logo: string,
  name: string,
  sub: string,
  website: string,
  desc: string,
  proImg: string

}

export function ProfileLight({ t }: { t: TprofileTemplate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#f0f9ff', borderRight: "12px solid #ef4444" }}>
      <div style={{ display: "flex", maxWidth: "1100px", alignItems: "center", padding: "70px", paddingTop: "90", paddingBottom: "30", justifyContent: 'flex-start' }} >
        <div style={{ display: "flex" }}>

          <div style={{ display: 'flex', flexDirection: 'column', marginRight: 26, borderLeft: "8px solid black", paddingLeft: "18px" }}>
            <span
              style={{
                fontSize: 46,
                color: "#0a0a0a",
                fontWeight: 800,
              }}
            >
              {t.name}
            </span>
            <span style={{
              fontSize: 30,
              color: "#0a0a0a",
              fontWeight: 400,
            }}> {t.sub}</span>


          </div>
          <img src={t.proImg} style={{ width: "95px", height: "95px", borderRadius: "14px" }} />

        </div>
      </div>
      <div style={{ display: "flex", maxWidth: "1100px", alignItems: "center", paddingLeft: "70px", paddingRight: "50px", marginBottom: "20px", justifyContent: 'flex-start' }}>
        <p style={{ fontSize: 30, lineHeight: "34px" }}> {t.desc}
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
        <img src={t.logo} style={{ width: "35px", height: "35px" }} />


      </div>

      <span
        style={{
          fontSize: 24,
          color: "#0a0a0a",
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


      <span
        style={{
          fontSize: 22,
          color: "#0a0a0a",
          fontWeight: 600,
          right: 0,
          bottom: 0,
          width: "100%",
          position: 'absolute',
          display: 'flex',
          gap: "6",
          border: "6px solid #ef4444",
          alignItems: 'center',
          background: "red"
        }}
      >
      </span>
    </div >
  )
}

export function ProfileDark({ t }: { t: TprofileTemplate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#020617', borderRight: "12px solid #ef4444" }}>
      <div style={{ display: "flex", maxWidth: "1100px", alignItems: "center", padding: "70px", paddingTop: "90", paddingBottom: "30", justifyContent: 'flex-start' }} >
        <div style={{ display: "flex" }}>

          <div style={{ display: 'flex', flexDirection: 'column', marginRight: 26, borderLeft: "8px solid black", paddingLeft: "18px" }}>
            <span
              style={{
                fontSize: 46,
                color: "#f4f4f5",
                fontWeight: 800,
              }}
            >
              {t.name}
            </span>
            <span style={{
              fontSize: 30,
              color: "#f4f4f5",
              fontWeight: 400,
            }}> {t.sub}</span>


          </div>
          <img src={t.proImg} style={{ width: "95px", height: "95px", borderRadius: "18px", border: "1px solid #e5e5e5" }} />

        </div>
      </div>
      <div style={{ display: "flex", maxWidth: "1100px", alignItems: "center", paddingLeft: "70px", paddingRight: "50px", marginBottom: "20px", justifyContent: 'flex-start' }}>
        <p style={{ fontSize: 30, lineHeight: "34px", color: "#e5e5e5" }}> {t.desc}
        </p>

      </div>
      {/* <span style={{ width: "100%", borderBottom: "4px solid #0a0a0a", }}></span> */}

      <div
        style={{
          left: 70,
          bottom: 40,
          position: 'absolute',
          display: 'flex',
          gap: "6",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={t.logo} style={{ width: "40px", height: "40px", border: "1px solid #e5e5e5", borderRadius: "18px" }} />


      </div>

      <span
        style={{
          fontSize: 28,
          color: "#e5e5e5",
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


      <span
        style={{
          fontSize: 22,
          color: "#0a0a0a",
          fontWeight: 600,
          right: 0,
          bottom: 0,
          width: "100%",
          position: 'absolute',
          display: 'flex',
          gap: "6",
          border: "6px solid #ef4444",
          alignItems: 'center',
          background: "red"
        }}
      >
      </span>
    </div >
  )
}