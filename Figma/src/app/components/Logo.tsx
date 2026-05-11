interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({ size = 80, showText = true, textColor = 'white' }: LogoProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background shape */}
        <div
          className="absolute inset-0 bg-[#EAB308] rounded-[20px] rotate-45"
          style={{ borderRadius: size * 0.25 }}
        />

        {/* Building structure */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Blueprint grid lines */}
            <line x1="20" y1="30" x2="80" y2="30" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="70" x2="80" y2="70" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.3" />

            {/* Building outline */}
            <path
              d="M 30 70 L 30 35 L 50 25 L 70 35 L 70 70 Z"
              fill="#1E3A8A"
              stroke="#1E3A8A"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Windows */}
            <rect x="37" y="42" width="8" height="8" fill="#EAB308" rx="1" />
            <rect x="55" y="42" width="8" height="8" fill="#EAB308" rx="1" />
            <rect x="37" y="55" width="8" height="8" fill="#EAB308" rx="1" />
            <rect x="55" y="55" width="8" height="8" fill="#EAB308" rx="1" />

            {/* Ruler/Scale element */}
            <line x1="25" y1="75" x2="75" y2="75" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="73" x2="30" y2="77" stroke="#1E3A8A" strokeWidth="2" />
            <line x1="40" y1="73" x2="40" y2="77" stroke="#1E3A8A" strokeWidth="2" />
            <line x1="50" y1="73" x2="50" y2="77" stroke="#1E3A8A" strokeWidth="2" />
            <line x1="60" y1="73" x2="60" y2="77" stroke="#1E3A8A" strokeWidth="2" />
            <line x1="70" y1="73" x2="70" y2="77" stroke="#1E3A8A" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="text-center">
          <h1
            className={`text-${textColor} font-bold tracking-tight`}
            style={{ fontSize: size * 0.35 }}
          >
            BuildMate
          </h1>
          <p
            className={`text-${textColor === 'white' ? 'blue-100' : 'gray-600'}`}
            style={{ fontSize: size * 0.14 }}
          >
            Smart Construction Estimation
          </p>
        </div>
      )}
    </div>
  );
}
