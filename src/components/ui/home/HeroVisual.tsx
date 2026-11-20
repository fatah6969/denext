'use client'

/* HeroVisual — ilustrasi dashboard IT yang bersih, menggantikan kolase stok.
   Satu fokus utama + dua badge kecil. Semua vektor, tidak ada gambar luar. */
export function HeroVisual() {
  return (
    <svg
      viewBox="0 0 620 560"
      width="100%"
      height="auto"
      role="img"
      aria-label="Dashboard pemantauan sistem IT DENEXT"
      style={{ display: 'block', maxWidth: '100%' }}
    >
      <defs>
        <linearGradient id="hvBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ecfdf3" />
          <stop offset="100%" stopColor="#f0f9ff" />
        </linearGradient>
        <linearGradient id="hvBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#166534" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <filter id="hvShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background panel */}
      <rect x="8" y="8" width="604" height="544" rx="28" fill="url(#hvBg)" />
      {[80, 160, 240, 320, 400, 480].map((y) => (
        <line key={`h${y}`} x1="32" y1={y} x2="588" y2={y} stroke="#166534" strokeOpacity="0.05" />
      ))}
      {[80, 160, 240, 320, 400, 500].map((x) => (
        <line key={`v${x}`} x1={x} y1="32" x2={x} y2="528" stroke="#166534" strokeOpacity="0.05" />
      ))}

      {/* Main dashboard card */}
      <g filter="url(#hvShadow)">
        <rect x="70" y="76" width="480" height="340" rx="22" fill="#ffffff" />
      </g>

      {/* Header */}
      <circle cx="106" cy="116" r="7" fill="#22c55e" />
      <text x="124" y="122" fontFamily="inherit" fontSize="15" fontWeight="700" fill="#0f172a">
        System Status
      </text>
      <rect x="452" y="104" width="70" height="26" rx="13" fill="#dcfce7" />
      <text x="470" y="122" fontSize="12" fontWeight="700" fill="#166534">LIVE</text>
      <line x1="70" y1="144" x2="550" y2="144" stroke="#e2e8f0" />

      {/* Rows */}
      {[
        { label: 'Server & Virtualisasi', value: '98%', w: 274 },
        { label: 'Jaringan Kantor', value: '92%', w: 230 },
        { label: 'Backup & Recovery', value: '86%', w: 190 },
      ].map((row, i) => {
        const y = 186 + i * 62
        return (
          <g key={row.label}>
            <text x="106" y={y} fontSize="14" fontWeight="600" fill="#334155">{row.label}</text>
            <text x="514" y={y} fontSize="14" fontWeight="700" fill="#166534" textAnchor="end">{row.value}</text>
            <rect x="106" y={y + 14} width="408" height="8" rx="4" fill="#f1f5f9" />
            <rect x="106" y={y + 14} width={row.w} height="8" rx="4" fill="url(#hvBar)" />
          </g>
        )
      })}

      {/* Uptime line */}
      <text x="106" y="382" fontSize="13" fontWeight="600" fill="#64748b">Uptime 30 hari</text>
      <path
        d="M106 400 L160 392 L214 398 L268 380 L322 388 L376 372 L430 384 L484 374 L514 380"
        fill="none"
        stroke="#166534"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Floating badge: uptime */}
      <g filter="url(#hvShadow)">
        <rect x="380" y="36" width="170" height="76" rx="18" fill="#ffffff" />
      </g>
      <text x="402" y="68" fontSize="26" fontWeight="800" fill="#166534">99.9%</text>
      <text x="402" y="90" fontSize="12" fontWeight="600" fill="#64748b">UPTIME TERJAMIN</text>

      {/* Floating badge: support */}
      <g filter="url(#hvShadow)">
        <rect x="38" y="428" width="180" height="76" rx="18" fill="#ffffff" />
      </g>
      <circle cx="70" cy="466" r="10" fill="#dcfce7" />
      <path d="M65 466 l4 4 l8 -9" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="90" y="462" fontSize="20" fontWeight="800" fill="#0f172a">24/7</text>
      <text x="90" y="482" fontSize="12" fontWeight="600" fill="#64748b">SUPPORT RESPONSIF</text>

      {/* Small nodes */}
      <circle cx="470" cy="466" r="8" fill="#22c55e" />
      <circle cx="504" cy="446" r="5" fill="#166534" />
      <circle cx="524" cy="482" r="5" fill="#0ea5e9" />
      <path d="M470 466 L504 446 L524 482 Z" fill="none" stroke="#166534" strokeOpacity="0.25" strokeWidth="2" />
    </svg>
  )
}
