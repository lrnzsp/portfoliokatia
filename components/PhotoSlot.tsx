import type { CSSProperties } from "react";

type Props = {
  label: string;
  ratio?: string;
  tone?: "dark" | "light";
  src?: string;
  alt?: string;
  style?: CSSProperties;
};

export default function PhotoSlot({
  label,
  ratio = "1/1",
  tone = "dark",
  src,
  alt,
  style,
}: Props) {
  const bg = tone === "dark" ? "#1a1916" : "#dcd6c6";
  const stripe = tone === "dark" ? "rgba(239,235,225,0.04)" : "rgba(14,14,14,0.05)";
  const fg = tone === "dark" ? "rgba(239,235,225,0.7)" : "rgba(14,14,14,0.7)";

  const background = `repeating-linear-gradient(135deg, ${bg} 0 18px, ${stripe} 18px 19px)`;

  return (
    <div
      style={{
        aspectRatio: ratio,
        background,
        display: "flex",
        alignItems: "flex-end",
        padding: 18,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: tone === "dark" ? "brightness(0.78) contrast(1.05)" : "none",
          }}
        />
      )}
      <span
        style={{
          position: "relative",
          font: "400 10px/1.3 var(--kr-font-mono, ui-monospace)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: src ? "rgba(239,235,225,0.85)" : fg,
          mixBlendMode: src ? "difference" : undefined,
        }}
      >
        {label}
      </span>
    </div>
  );
}
