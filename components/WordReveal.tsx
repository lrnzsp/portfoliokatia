"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type Props = {
  text: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  style?: CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

export default function WordReveal({
  text,
  stagger = 0.06,
  delay = 0,
  duration = 0.7,
  amount = 0.4,
  className,
  style,
  as = "h2",
}: Props) {
  const lines = text.split("\n");
  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
      style={{ display: "block", ...style }}
    >
      {lines.map((line, lineIdx) => (
        <span
          key={lineIdx}
          style={{
            display: "block",
            overflow: "hidden",
            paddingBottom: "0.06em",
          }}
        >
          {line.split(" ").map((word, wordIdx) => (
            <motion.span
              key={`${lineIdx}-${wordIdx}`}
              variants={{
                hidden: { y: "115%", opacity: 0 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration,
                    ease: [0.22, 0.65, 0.18, 1],
                  },
                },
              }}
              style={{
                display: "inline-block",
                marginRight: word ? "0.27em" : 0,
                willChange: "transform",
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionTag>
  );
}
