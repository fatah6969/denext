'use client'

/* HeroVisual — ilustrasi server rack & monitoring. Satu fokus yang jelas,
   tanpa badge mengambang yang terasa seperti template SaaS. */
export function HeroVisual() {
  return (
    <svg
      viewBox="0 0 620 560"
      width="100%"
      height="auto"
      role="img"
      aria-label="Ilustrasi teknisi DENEXT memantau server dan jaringan kantor"
      style={{ display: 'block', maxWidth: '100%' }}
    >
      <defs>
        <linearGradient id="hvBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ecfdf3" />
          <stop offset="100%" stopColor="#f0f9ff" />
        </linearGradient>
        <filter id="hvShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Panel latar */}
      <rect x="8" y="8" width="604" height="544" rx="28" fill="url(#hvBg)" />

      {/* Server rack — konkret & relevan */}
      <g filter="url(#hvShadow)">
        <rect x="60" y="60" width="230" height="440" rx="18" fill="#0f172a" />
      </g>
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 92 + i * 76
        return (
          <g key={i}>
            <rect x="82" y={y} width="186" height="60" rx="8" fill="#1e293b" />
            <circle cx="102" cy={y + 20} r="5" fill={i === 2 ? '#f59e0b' : '#22c55e'} />
            <rect x="118" y={y + 16} width="90" height="6" rx="3" fill="#475569" />
            <rect x="118" y={y + 30} width="60" height="5" rx="2.5" fill="#334155" />
            <rect x="218" y={y + 14} width="36" height="30" rx="5" fill="#020617" />
            <path d={`M226 ${y + 29} h20`} stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
          </g>
        )
      })}

      {/* Kartu monitoring — menyatu, tidak mengambang */}
      <g filter="url(#hvShadow)">
        <rect x="318" y="108" width="244" height="200" rx="18" fill="#ffffff" />
      </g>
      <text x="340" y="140" fontSize="14" fontWeight="700" fill="#0f172a">Monitoring Server</text>
      <circle cx="536" cy="135" r="6" fill="#22c55e" />
      <line x1="318" y1="158" x2="562" y2="158" stroke="#e2e8f0" />

      {[
        { label: 'Uptime', value: '99.9%', w: 176 },
        { label: 'Beban CPU', value: '42%', w: 90 },
        { label: 'Jaringan', value: 'Stabil', w: 140 },
      ].map((row) => {
        const y = 190 + [0, 1, 2][row.label === 'Uptime' ? 0 : row.label === 'Beban CPU' ? 1 : 2] * 42
        return (
          <g key={row.label}>
            <text x="340" y={y} fontSize="12" fill="#64748b">{row.label}</text>
            <text x="544" y={y} fontSize="12" fontWeight="700" fill="#166534" textAnchor="end">{row.value}</text>
            <rect x="340" y={y + 9} width="204" height="6" rx="3" fill="#f1f5f9" />
            <rect x="340" y={y + 9} width={row.w} height="6" rx="3" fill="#16a34a" />
          </g>
        )
      })}

      {/* Kartu jaringan */}
      <g filter="url(#hvShadow)">
        <rect x="318" y="332" width="244" height="126" rx="18" fill="#ffffff" />
      </g>
      <text x="340" y="362" fontSize="14" fontWeight="700" fill="#0f172a">Jaringan Kantor</text>
      <circle cx="380" cy="404" r="10" fill="#166534" />
      <circle cx="470" cy="392" r="8" fill="#22c55e" />
      <circle cx="530" cy="416" r="8" fill="#0ea5e9" />
      <path d="M380 404 L470 392 L530 416" fill="none" stroke="#166534" strokeOpacity="0.35" strokeWidth="2" />
      <text x="340" y="444" fontSize="12" fill="#64748b">MikroTik · VLAN · WiFi</text>
    </svg>
  )
}
