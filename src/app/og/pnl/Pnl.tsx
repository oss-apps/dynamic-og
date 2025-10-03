import { number } from "zod";
import { Template } from "./page";
import Image from "next/image";


const themeConfigs = (quality: number) => {
  return {
  light: {
    background: '#ffffff', // White background
    card: '#f9fafb',      // Light gray card background
    textPrimary: '#111827', // Dark gray for primary text
    textSecondary: '#6b7280', // Lighter gray for secondary text
    profit: '#10b981',      // Green for profit
    loss: '#ef4444',        // Red for loss
    border: '#e5e7eb',      // Border color
  },
  dark: {
    background: '#111827', // Dark gray background
    card: '#1f2937',      // Slightly lighter dark for the card
    textPrimary: '#f9fafb', // Off-white for primary text
    textSecondary: '#9ca3af', // Lighter gray for secondary text
    profit: '#34d399',      // Lighter green for profit
    loss: '#f87171',        // Lighter red for loss
    border: '#374151',      // Border color
  },
  settings : {
    borderRadius : `${24/quality}px` ,
    padding : `${10/quality}px ${40/quality}px` ,
    fsHeader : `${36/quality}px`,
    fsAmount : `${72/quality}px`,
    fsDesc : `${28/quality}px`,
    fsTag : `${20/quality}px`,
    fsDomain : `${24/quality}px`,
    imgSize : `${64/quality}px`,
    paddingTag : `${6/quality}px ${8/quality}px`,
    marginTop : `${20/quality/2}px`,
    marginAmount : `${12/quality}px 0px`,
    gap : `${8/quality}px`,
  }
};
}

const ArrowUpIcon = ({ className  } : {className : string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

// SVG icon for a downward-pointing arrow (loss)
const ArrowDownIcon = ({ className } : {className : string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export function TemplateOG({ t }: { t: Template }) {
  // Select the theme based on the 'dark' flag
  const theme = t.dark ? themeConfigs(t.quality)['dark'] : themeConfigs(t.quality)['light']
  const s = themeConfigs(t.quality)['settings']

  const isProfit = t.amount?.trim().startsWith("+");
  // Determine the color for text and icons based on profit or loss
  const pnlColor = isProfit ? theme.profit : theme.loss;

  return  (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: theme.background,
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
            borderRadius: s.borderRadius,
            padding: s.padding,
            width: "95%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontSize: s.fsHeader, fontWeight: 600, color: theme.textPrimary }}>
              {t.header}
            </h2>
            <span
              style={{
                fontSize: s.fsTag,
                padding: s.paddingTag,
                borderRadius: "9999px",
                backgroundColor: pnlColor,
                color: theme.card,
                fontWeight: 600,
              }}
            >
              {t.tag}
            </span>
          </div>

          {/* Amount */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap:s.gap }}>
            <p
              style={{
                fontSize: s.fsAmount,
                fontWeight: 800,
                color: pnlColor,
                margin: s.marginAmount,
              }}
            >
              {t.amount}
            </p>

            {/* Description */}
            <div style={{ display: "flex", alignItems: "center", gap: s.gap }}>
              <p style={{ fontSize: s.fsDesc, color: theme.textSecondary }}>{t.description}</p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" , marginTop : s.marginTop}}>
            <p style={{ fontSize: s.fsDomain, color: theme.textPrimary }}>{t.domain}</p>
            {/* Brand Image */}
            <img
              src={t.image}
              width={s.imgSize}
              height={s.imgSize}
              style={{ borderRadius: "16px" }}
              alt="brand"
            />
          </div>
        </div>
      </div>
    );

}

export function TemplateUI({ t }: { t: Template }) {
  const isProfit = t.amount?.trim().startsWith("+"); 
  // Select the theme based on the 'dark' flag
  const theme = t.dark ? themeConfigs(t.quality)['dark'] : themeConfigs(t.quality)['light']

  // Determine the color for text and icons based on profit or loss
  const pnlColor = isProfit ? theme.profit : theme.loss;

  // Format the PNL amount to a currency string (e.g., +$1,234.56 or -$50.00)
 

  return (
    <div
      className="p-6 rounded-xl shadow-md border w-full min-h-72 relative"
      style={{
        backgroundColor: theme.background,
        borderColor: theme.border,
        color: theme.textPrimary,
        fontFamily: "'Inter', sans-serif", // A clean, modern font
      }}
    >
      <div style={{ backgroundColor: theme.card }} className="min-h-64 p-2 border rounded-lg" >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4" >
        <h2
          className="text-xl font-semibold"
          style={{ color: theme.textPrimary }}
        >
          {t.header}
        </h2>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: pnlColor,
            color: theme.card
          }}
        >
          {t.tag}
          
        </span>
      </div>

      {/* Main PNL Value */}
      <div className="mb-4">
        <p className="text-5xl font-bold tracking-tight" style={{ color: pnlColor }} >
          {t.amount}
        </p>
      </div>

      {/* Percentage Change */}
      <div className="flex items-center space-x-1">
        <p className="text-sm" style={{ color: theme.textSecondary }}>
          {t.description}
        </p>
      </div>

      {/* Brand Logo */}
      <div className="absolute bottom-8 right-8">
        <Image src={t.image} width={38} height={38} style={{ borderRadius: "16px" }} alt="og" />
      </div>
      <div className="absolute bottom-8 left-8">
        {t.domain}
      </div>
      </div>
    </div>
  );
}
