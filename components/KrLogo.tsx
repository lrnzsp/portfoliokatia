import type { CSSProperties } from "react";

type Props = {
  size?: number;
  color?: string;
  href?: string;
  style?: CSSProperties;
};

export default function KrLogo({ size = 18, color, href = "#top", style }: Props) {
  const base: CSSProperties = {
    font: `500 ${size}px/1 var(--kr-font-display)`,
    letterSpacing: "-0.01em",
    color: color || "currentColor",
    textDecoration: "none",
    ...style,
  };
  return (
    <a href={href} aria-label="Kat Retillo — Home" style={base}>
      KR.
    </a>
  );
}
