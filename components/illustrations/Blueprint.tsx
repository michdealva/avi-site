export default function Blueprint({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Grid dots */}
      {Array.from({ length: 15 }).map((_, i) =>
        Array.from({ length: 10 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={40 * i + 20}
            cy={40 * j + 20}
            r="0.8"
            fill="#9A9DA6"
            opacity="0.15"
          />
        ))
      )}

      {/* Crosshair marks - top left */}
      <line x1="30" y1="30" x2="70" y2="30" stroke="#2ECC52" strokeWidth="0.5" opacity="0.2" />
      <line x1="50" y1="10" x2="50" y2="50" stroke="#2ECC52" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="30" r="10" stroke="#2ECC52" strokeWidth="0.5" opacity="0.15" />

      {/* Crosshair marks - bottom right */}
      <line x1="530" y1="370" x2="570" y2="370" stroke="#2ECC52" strokeWidth="0.5" opacity="0.2" />
      <line x1="550" y1="350" x2="550" y2="390" stroke="#2ECC52" strokeWidth="0.5" opacity="0.2" />
      <circle cx="550" cy="370" r="10" stroke="#2ECC52" strokeWidth="0.5" opacity="0.15" />

      {/* Dimension line horizontal */}
      <line x1="100" y1="340" x2="400" y2="340" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />
      <line x1="100" y1="335" x2="100" y2="345" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />
      <line x1="400" y1="335" x2="400" y2="345" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />
      <text x="250" y="355" textAnchor="middle" fill="#9A9DA6" fontSize="7" fontFamily="monospace" opacity="0.1">300.00</text>

      {/* Dimension line vertical */}
      <line x1="520" y1="80" x2="520" y2="300" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />
      <line x1="515" y1="80" x2="525" y2="80" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />
      <line x1="515" y1="300" x2="525" y2="300" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />

      {/* Technical circles (drill holes) */}
      <circle cx="200" cy="150" r="25" stroke="#2ECC52" strokeWidth="0.5" opacity="0.1" />
      <circle cx="200" cy="150" r="3" stroke="#2ECC52" strokeWidth="0.5" opacity="0.15" />
      <line x1="200" y1="140" x2="200" y2="160" stroke="#2ECC52" strokeWidth="0.3" opacity="0.1" />
      <line x1="190" y1="150" x2="210" y2="150" stroke="#2ECC52" strokeWidth="0.3" opacity="0.1" />

      <circle cx="380" cy="120" r="18" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
      <circle cx="380" cy="120" r="2" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.15" />

      <circle cx="150" cy="280" r="20" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.08" />
      <circle cx="150" cy="280" r="2.5" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.12" />

      {/* Angle annotation */}
      <path d="M 420 200 L 470 200" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
      <path d="M 420 200 L 455 170" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
      <path d="M 435 200 A 15 15 0 0 1 440 190" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
      <text x="445" y="198" fill="#9A9DA6" fontSize="6" fontFamily="monospace" opacity="0.08">45°</text>

      {/* Rectangle outline (part profile) */}
      <rect x="130" y="100" width="140" height="80" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.06" strokeDasharray="8 4" />
    </svg>
  );
}
