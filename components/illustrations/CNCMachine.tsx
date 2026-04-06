export default function CNCMachine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Machine base/bed */}
      <rect x="40" y="220" width="320" height="40" rx="2" stroke="#9A9DA6" strokeWidth="1.5" />
      <line x1="60" y1="240" x2="340" y2="240" stroke="#9A9DA6" strokeWidth="0.5" strokeDasharray="4 4" />

      {/* Work table */}
      <rect x="80" y="190" width="200" height="30" rx="2" stroke="#2ECC52" strokeWidth="1.5" />
      <line x1="100" y1="205" x2="260" y2="205" stroke="#2ECC52" strokeWidth="0.5" />

      {/* T-slots on table */}
      {[120, 160, 200, 240].map((x) => (
        <line key={x} x1={x} y1="193" x2={x} y2="217" stroke="#9A9DA6" strokeWidth="0.5" />
      ))}

      {/* Column (vertical) */}
      <rect x="290" y="60" width="50" height="170" rx="2" stroke="#9A9DA6" strokeWidth="1.5" />
      <line x1="315" y1="70" x2="315" y2="220" stroke="#9A9DA6" strokeWidth="0.5" strokeDasharray="2 3" />

      {/* Spindle head */}
      <rect x="160" y="60" width="130" height="60" rx="3" stroke="#9A9DA6" strokeWidth="1.5" />
      <rect x="170" y="70" width="40" height="20" rx="2" stroke="#2ECC52" strokeWidth="1" />

      {/* Spindle */}
      <rect x="200" y="120" width="30" height="50" rx="2" stroke="#2ECC52" strokeWidth="1.5" />
      <line x1="215" y1="170" x2="215" y2="188" stroke="#2ECC52" strokeWidth="2" />
      <circle cx="215" cy="188" r="3" stroke="#2ECC52" strokeWidth="1.5" />

      {/* Tool holder */}
      <rect x="205" y="130" width="20" height="15" rx="1" stroke="#9A9DA6" strokeWidth="1" />

      {/* Control panel */}
      <rect x="40" y="80" width="80" height="130" rx="3" stroke="#9A9DA6" strokeWidth="1.5" />
      <rect x="50" y="90" width="60" height="35" rx="2" stroke="#2ECC52" strokeWidth="1" />
      {/* Screen lines */}
      <line x1="55" y1="100" x2="105" y2="100" stroke="#2ECC52" strokeWidth="0.5" opacity="0.5" />
      <line x1="55" y1="107" x2="95" y2="107" stroke="#2ECC52" strokeWidth="0.5" opacity="0.5" />
      <line x1="55" y1="114" x2="85" y2="114" stroke="#2ECC52" strokeWidth="0.5" opacity="0.5" />
      {/* Buttons */}
      <circle cx="60" cy="145" r="4" stroke="#9A9DA6" strokeWidth="1" />
      <circle cx="80" cy="145" r="4" stroke="#2ECC52" strokeWidth="1" />
      <circle cx="100" cy="145" r="4" stroke="#9A9DA6" strokeWidth="1" />
      {/* Keypad */}
      {[160, 172, 184, 196].map((y) =>
        [55, 70, 85, 100].map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="10" height="8" rx="1" stroke="#9A9DA6" strokeWidth="0.5" />
        ))
      )}

      {/* Dimension annotations */}
      <line x1="80" y1="275" x2="280" y2="275" stroke="#9A9DA6" strokeWidth="0.5" />
      <line x1="80" y1="270" x2="80" y2="280" stroke="#9A9DA6" strokeWidth="0.5" />
      <line x1="280" y1="270" x2="280" y2="280" stroke="#9A9DA6" strokeWidth="0.5" />
      <text x="180" y="285" textAnchor="middle" fill="#9A9DA6" fontSize="8" fontFamily="monospace">X-AXIS</text>
    </svg>
  );
}
