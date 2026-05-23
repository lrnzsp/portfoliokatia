"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type RevealKind = "up" | "down" | "left" | "right" | "fade" | "scale";

type Props = {
  children: ReactNode;
  kind?: RevealKind;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  as?: "div" | "section" | "header" | "footer" | "article";
  className?: string;
  style?: CSSProperties;
};

const distance = 28;

const buildVariants = (kind: RevealKind): Variants => {
  switch (kind) {
    case "down":
      return { hidden: { opacity: 0, y: -distance }, show: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { opacity: 0, x: -distance }, show: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: distance }, show: { opacity: 1, x: 0 } };
    case "scale":
      return { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } };
    case "fade":
      return { hidden: { opacity: 0 }, show: { opacity: 1 } };
    case "up":
    default:
      return { hidden: { opacity: 0, y: distance }, show: { opacity: 1, y: 0 } };
  }
};

export default function Reveal({
  children,
  kind = "up",
  delay = 0,
  duration = 0.8,
  amount = 0.25,
  once = true,
  as = "div",
  className,
  style,
}: Props) {
  const variants = buildVariants(kind);
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.6, 0.2, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
