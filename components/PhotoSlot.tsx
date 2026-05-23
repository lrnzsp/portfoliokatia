import type { CSSProperties } from "react";

type Props = {
  label: string;
  ratio?: string;
  tone?: "dark" | "light";
  style?: CSSProperties;
};

export default function PhotoSlot({
  label,
  ratio = "1/1",
  tone = "dark",
  style,
}: Props) {
  const bg = tone === "dark" ? "#1a1916" : "#dcd6c6";
  const stripe = tone === "dark" ? "rgba(239,235,225,0.04)" : "rgba(14,14,14,0.05)";
  const fg = tone === "dark" ? "rgba(239,235,225,0.45)" : "rgba(14,14,14,0.42)";
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: `repeating-linear-gradient(135deg, ${bg} 0 18px, ${stripe} 18px 19px)`,
        display: "flex",
        alignItems: "flex-end",
        padding: 18,
        position: "relative",
        ...style,
      }}
    >
      <span
        style={{
          font: "400 10px/1.3 var(--kr-font-mono, ui-monospace)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: fg,
        }}
      >
        {label}
      </span>
    </div>
  );
}
