import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function Eyebrow({ children, style }: Props) {
  return (
    <div className="kr-eyebrow" style={style}>
      {children}
    </div>
  );
}
