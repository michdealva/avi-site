export function StudioLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src="/avi-logo.svg"
        alt="AVI Industriel"
        style={{
          height: "28px",
          width: "auto",
          filter:
            "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)",
        }}
      />
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: "#1A1D23",
          textTransform: "uppercase",
        }}
      >
        AVI Inventory
      </span>
    </div>
  );
}
