export default function CircuitBoard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Horizontal traces */}
      <line x1="20" y1="50" x2="180" y2="50" stroke="#2ECC52" strokeWidth="1" opacity="0.15" />
      <line x1="220" y1="50" x2="380" y2="50" stroke="#9A9DA6" strokeWidth="1" opacity="0.1" />
      <line x1="40" y1="100" x2="150" y2="100" stroke="#9A9DA6" strokeWidth="1" opacity="0.1" />
      <line x1="200" y1="100" x2="350" y2="100" stroke="#2ECC52" strokeWidth="1" opacity="0.15" />
      <line x1="60" y1="150" x2="300" y2="150" stroke="#9A9DA6" strokeWidth="1" opacity="0.08" />
      <line x1="100" y1="200" x2="280" y2="200" stroke="#2ECC52" strokeWidth="1" opacity="0.12" />

      {/* Vertical traces */}
      <line x1="100" y1="30" x2="100" y2="120" stroke="#2ECC52" strokeWidth="1" opacity="0.12" />
      <line x1="180" y1="50" x2="180" y2="150" stroke="#9A9DA6" strokeWidth="1" opacity="0.1" />
      <line x1="250" y1="50" x2="250" y2="200" stroke="#2ECC52" strokeWidth="1" opacity="0.1" />
      <line x1="320" y1="80" x2="320" y2="170" stroke="#9A9DA6" strokeWidth="1" opacity="0.08" />

      {/* Junction points (solder pads) */}
      {[
        [100, 50], [180, 50], [100, 100], [250, 50], [250, 100],
        [180, 150], [250, 150], [250, 200], [320, 100], [150, 100],
        [350, 100], [300, 150], [100, 200], [280, 200],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" stroke="#2ECC52" strokeWidth="1" fill="none" opacity="0.2" />
      ))}

      {/* Filled active junctions */}
      {[
        [100, 50], [250, 100], [250, 200],
      ].map(([x, y], i) => (
        <circle key={`f${i}`} cx={x} cy={y} r="2" fill="#2ECC52" opacity="0.3" />
      ))}

      {/* IC Chips */}
      <rect x="130" y="70" width="40" height="20" rx="2" stroke="#9A9DA6" strokeWidth="1" opacity="0.12" />
      {[135, 145, 155, 165].map((x) => (
        <g key={x}>
          <line x1={x} y1="70" x2={x} y2="63" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
          <line x1={x} y1="90" x2={x} y2="97" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
        </g>
      ))}

      <rect x="280" y="120" width="50" height="25" rx="2" stroke="#2ECC52" strokeWidth="1" opacity="0.12" />
      {[290, 300, 310, 320].map((x) => (
        <g key={x}>
          <line x1={x} y1="120" x2={x} y2="113" stroke="#2ECC52" strokeWidth="0.5" opacity="0.1" />
          <line x1={x} y1="145" x2={x} y2="152" stroke="#2ECC52" strokeWidth="0.5" opacity="0.1" />
        </g>
      ))}

      {/* Capacitor/resistor symbols */}
      <rect x="210" y="95" width="15" height="8" rx="1" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.1" />
      <rect x="60" y="145" width="12" height="8" rx="1" stroke="#2ECC52" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}
