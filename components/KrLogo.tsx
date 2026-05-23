import Link from "next/link";
import type { CSSProperties } from "react";

type Props = {
  size?: number;
  color?: string;
  href?: string;
  style?: CSSProperties;
};

export default function KrLogo({ size = 18, color, href = "/", style }: Props) {
  const base: CSSProperties = {
    font: `500 ${size}px/1 var(--kr-font-display)`,
    letterSpacing: "-0.01em",
    color: color || "currentColor",
    ...style,
  };
  return (
    <Link href={href} aria-label="Kat Retillo — Home" style={base}>
      KR.
    </Link>
  );
}
