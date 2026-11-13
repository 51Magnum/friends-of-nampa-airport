/** Simple original mark: a top-view airplane over a short runway stripe. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="9" fill="#ffffff" />
      <rect x="6" y="31" width="28" height="2.4" rx="1.2" fill="#0b2545" />
      <rect x="18.4" y="30.4" width="3.2" height="3.6" rx="0.4" fill="#e09a2d" />
      <path
        fill="#0b2545"
        d="M20 5.8c1.15 0 1.95 2.2 1.95 4.7v4.4l11.4 3.3v2.55l-11.4-1.35v5.7l4.4 2.7v2.05L20 27.4l-6.35 2.85V28.2l4.4-2.7v-5.7L6.65 20.85V18.3l11.4-3.3V10.5c0-2.5.8-4.7 1.95-4.7z"
      />
    </svg>
  );
}

/** Dawn sky, sun, and clouds behind the hero copy. */
export function HeroSky() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ec9ea" />
          <stop offset="42%" stopColor="#cfe4f6" />
          <stop offset="78%" stopColor="#eaf4fb" />
          <stop offset="100%" stopColor="#e4edd6" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe08a" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f4c56a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f4c56a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="720" fill="url(#hero-sky)" />
      <circle cx="1200" cy="130" r="170" fill="url(#hero-sun)" />
      <circle cx="1200" cy="130" r="52" fill="#ffe9a8" />

      <ellipse cx="220" cy="140" rx="96" ry="28" fill="#ffffff" opacity="0.55" />
      <ellipse cx="286" cy="132" rx="64" ry="22" fill="#ffffff" opacity="0.5" />
      <ellipse cx="168" cy="150" rx="52" ry="18" fill="#ffffff" opacity="0.4" />

      <ellipse cx="640" cy="196" rx="120" ry="30" fill="#ffffff" opacity="0.32" />
      <ellipse cx="714" cy="188" rx="74" ry="22" fill="#ffffff" opacity="0.28" />

      <ellipse cx="1320" cy="250" rx="86" ry="22" fill="#ffffff" opacity="0.4" />
      <ellipse cx="1372" cy="242" rx="52" ry="16" fill="#ffffff" opacity="0.34" />
    </svg>
  );
}

/** High-wing light aircraft, shown on the right of the hero on larger screens. */
export function HeroPlane({ className }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute right-[6%] top-[28%] hidden h-auto w-48 sm:w-56 md:block lg:w-64 ${className ?? ""}`}
      viewBox="0 0 260 90"
      aria-hidden="true"
      focusable="false"
    >
      {/* Prop disc */}
      <ellipse cx="22" cy="46" rx="7" ry="18" fill="#d7e8f7" opacity="0.7" />
      {/* High wing */}
      <path
        d="M70 28 C 90 18, 130 16, 168 22 L 200 26 C 208 27, 208 33, 200 34 L 164 30 C 126 24, 92 26, 74 34 Z"
        fill="#0b2545"
      />
      {/* Fuselage */}
      <path
        d="M28 46 C 28 36, 48 30, 78 31 L 168 34 C 186 35, 196 32, 214 22 L 222 16 C 226 13, 232 16, 230 21 L 226 34 C 236 36, 242 42, 238 48 C 234 54, 168 58, 96 58 C 58 58, 34 54, 28 46 Z"
        fill="#0b2545"
      />
      {/* Horizontal stabilizer */}
      <path
        d="M200 34 L 236 30 L 244 32 L 236 38 L 208 40 Z"
        fill="#163256"
      />
      {/* Vertical fin is the upward tail already in the fuselage path */}
      <path
        d="M198 34 L 216 14 L 226 16 L 216 34 Z"
        fill="#0b2545"
      />
      {/* Windows */}
      <rect x="86" y="36" width="14" height="7" rx="2" fill="#cfe4f6" />
      <rect x="104" y="36.5" width="12" height="6.5" rx="1.8" fill="#cfe4f6" />
      <rect x="120" y="37" width="12" height="6.5" rx="1.8" fill="#cfe4f6" />
      {/* Strut */}
      <path d="M96 34 L 90 56" stroke="#0b2545" strokeWidth="2.4" />
      {/* Gear */}
      <path d="M88 56 L 88 68" stroke="#0b2545" strokeWidth="2.2" />
      <path d="M150 56 L 150 66" stroke="#0b2545" strokeWidth="2.2" />
      <circle cx="88" cy="70" r="3.2" fill="#3e4754" />
      <circle cx="150" cy="68" r="3.2" fill="#3e4754" />
      {/* Spinner */}
      <circle cx="24" cy="46" r="5" fill="#e09a2d" />
      <circle cx="24" cy="46" r="2.2" fill="#f8edd8" />
    </svg>
  );
}

/** Perspective runway band that sits below the hero copy. */
export function HeroRunway() {
  return (
    <div className="relative h-36 overflow-hidden sm:h-44" aria-hidden="true">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-b from-transparent to-sky-pale" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient id="runway-field" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e4edd6" />
            <stop offset="100%" stopColor="#cfdcb8" />
          </linearGradient>
          <linearGradient id="runway-pavement" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6a7380" />
            <stop offset="100%" stopColor="#4a5360" />
          </linearGradient>
        </defs>
        <rect width="1440" height="200" fill="url(#runway-field)" />
        <path
          d="M250 200 L 1190 200 L 820 18 L 620 18 Z"
          fill="url(#runway-pavement)"
        />
        <path d="M620 18 L 820 18 L 830 4 L 610 4 Z" fill="#d9dee5" />
        {Array.from({ length: 8 }, (_, i) => {
          const t = i / 8;
          const y = 28 + t * 168;
          const width = 10 + t * 18;
          const height = 8 + t * 8;
          return (
            <rect
              key={i}
              x={720 - width / 2}
              y={y}
              width={width}
              height={height}
              rx="1"
              fill="#f4e3b0"
            />
          );
        })}
        {Array.from({ length: 7 }, (_, i) => {
          const t = (i + 0.2) / 7;
          const y = 36 + t * 160;
          const w = 16 + t * 28;
          const h = 4 + t * 3;
          const inset = 70 + t * 200;
          return (
            <g key={`edge-${i}`} fill="#e09a2d" opacity="0.9">
              <rect x={720 - inset} y={y} width={w} height={h} rx="0.5" />
              <rect x={720 + inset - w} y={y} width={w} height={h} rx="0.5" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
