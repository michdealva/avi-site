export default function GearSystem({ className = "" }: { className?: string }) {
  const teeth = (cx: number, cy: number, r: number, count: number, color: string, opacity: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x1 = cx + r * Math.cos(angle);
      const y1 = cy + r * Math.sin(angle);
      const x2 = cx + (r + 8) * Math.cos(angle);
      const y2 = cy + (r + 8) * Math.sin(angle);
      items.push(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" opacity={opacity} />
      );
    }
    return items;
  };

  return (
    <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Large gear */}
      <g>
        {teeth(120, 130, 55, 16, "#9A9DA6", 0.6)}
        <circle cx="120" cy="130" r="55" stroke="#9A9DA6" strokeWidth="1.5" opacity="0.6" />
        <circle cx="120" cy="130" r="40" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
        <circle cx="120" cy="130" r="12" stroke="#9A9DA6" strokeWidth="1.5" opacity="0.6" />
        <circle cx="120" cy="130" r="4" fill="#9A9DA6" opacity="0.3" />
      </g>

      {/* Small gear (meshed) - signal green accent */}
      <g>
        {teeth(210, 85, 35, 12, "#2ECC52", 0.7)}
        <circle cx="210" cy="85" r="35" stroke="#2ECC52" strokeWidth="1.5" opacity="0.7" />
        <circle cx="210" cy="85" r="25" stroke="#2ECC52" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
        <circle cx="210" cy="85" r="8" stroke="#2ECC52" strokeWidth="1.5" opacity="0.7" />
        <circle cx="210" cy="85" r="3" fill="#2ECC52" opacity="0.4" />
      </g>

      {/* Tiny gear */}
      <g>
        {teeth(245, 170, 22, 10, "#9A9DA6", 0.4)}
        <circle cx="245" cy="170" r="22" stroke="#9A9DA6" strokeWidth="1" opacity="0.4" />
        <circle cx="245" cy="170" r="6" stroke="#9A9DA6" strokeWidth="1" opacity="0.4" />
        <circle cx="245" cy="170" r="2.5" fill="#9A9DA6" opacity="0.2" />
      </g>

      {/* Rotation arrows */}
      <path d="M 120 65 A 65 65 0 0 1 165 80" stroke="#9A9DA6" strokeWidth="0.5" opacity="0.3" fill="none" />
      <polygon points="165,77 168,84 161,83" fill="#9A9DA6" opacity="0.3" />
    </svg>
  );
}
