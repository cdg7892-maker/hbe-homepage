export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="w-full h-full"
      role="img"
      aria-label="정밀 진단으로 해충을 찾아내고 안전하게 방역하는 한국방역환경"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c4736" />
          <stop offset="100%" stopColor="#4a8a68" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="520" height="420" rx="28" fill="url(#heroBg)" />
      <rect x="0" y="0" width="520" height="420" rx="28" fill="url(#heroGlow)" />

      {/* 스캔 그리드 라인 — 정밀 진단 이미지 */}
      <g stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1">
        <line x1="0" y1="140" x2="520" y2="140" />
        <line x1="0" y1="280" x2="520" y2="280" />
        <line x1="130" y1="0" x2="130" y2="420" />
        <line x1="390" y1="0" x2="390" y2="420" />
      </g>

      {/* 중앙 방패 + 체크 */}
      <g transform="translate(260,190)">
        <circle r="92" fill="#ffffff" fillOpacity="0.08" />
        <circle r="70" fill="#ffffff" fillOpacity="0.12" />
        <path
          d="M0 -46 L40 -30 V8 C40 34 22 52 0 60 C-22 52 -40 34 -40 8 V-30 Z"
          fill="#fbf1d6"
        />
        <path
          d="M-16 4 L-4 18 L20 -10"
          fill="none"
          stroke="#2c4736"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* 스캔 포인트 점들 */}
      <g fill="#ffffff" fillOpacity="0.55">
        <circle cx="130" cy="140" r="4" />
        <circle cx="390" cy="140" r="4" />
        <circle cx="130" cy="280" r="4" />
        <circle cx="390" cy="280" r="4" />
        <circle cx="70" cy="70" r="3" />
        <circle cx="450" cy="350" r="3" />
      </g>

      {/* 제거 대상 해충 아이콘 (심볼화된 점+금지선) */}
      <g transform="translate(100,320)">
        <circle r="22" fill="#ffffff" fillOpacity="0.14" />
        <circle r="7" fill="#fdfcf8" />
        <line x1="-14" y1="-14" x2="14" y2="14" stroke="#fdfcf8" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(420,90)">
        <circle r="18" fill="#ffffff" fillOpacity="0.14" />
        <circle r="6" fill="#fdfcf8" />
        <line x1="-11" y1="-11" x2="11" y2="11" stroke="#fdfcf8" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* 하단 안전 배지 */}
      <g transform="translate(90,90)">
        <rect x="-46" y="-18" width="92" height="36" rx="18" fill="#ffffff" fillOpacity="0.14" />
        <text x="0" y="6" textAnchor="middle" fill="#fdfcf8" fontSize="13" fontWeight="700" fontFamily="inherit">
          SAFE
        </text>
      </g>
    </svg>
  )
}
