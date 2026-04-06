export default function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer circle */}
      <circle cx="100" cy="100" r="80" stroke="#2ECC52" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="60" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="40" stroke="#2ECC52" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="20" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.15" />

      {/* Center dot */}
      <circle cx="100" cy="100" r="3" fill="#2ECC52" opacity="0.5" />

      {/* Cross lines */}
      <line x1="100" y1="10" x2="100" y2="190" stroke="#2ECC52" strokeWidth="0.5" opacity="0.25" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="#2ECC52" strokeWidth="0.5" opacity="0.25" />

      {/* Tick marks on horizontal */}
      {[-60, -40, -20, 20, 40, 60].map((offset) => (
        <line
          key={`h${offset}`}
          x1={100 + offset}
          y1="95"
          x2={100 + offset}
          y2="105"
          stroke="#9A9DA6"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}

      {/* Tick marks on vertical */}
      {[-60, -40, -20, 20, 40, 60].map((offset) => (
        <line
          key={`v${offset}`}
          x1="95"
          y1={100 + offset}
          x2="105"
          y2={100 + offset}
          stroke="#9A9DA6"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}

      {/* Coordinate labels */}
      <text x="185" y="96" fill="#9A9DA6" fontSize="6" fontFamily="monospace" opacity="0.2">X</text>
      <text x="103" y="18" fill="#9A9DA6" fontSize="6" fontFamily="monospace" opacity="0.2">Y</text>

      {/* Measurement annotation */}
      <text x="145" y="96" fill="#2ECC52" fontSize="5" fontFamily="monospace" opacity="0.25">+0.001</text>
    </svg>
  );
}
