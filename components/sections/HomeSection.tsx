"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Eyebrow from "@/components/Eyebrow";
import { ArrowDown } from "@/components/Arrow";

const PORTRAIT =
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=80&auto=format&fit=crop";

export default function HomeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-section="Work"
      data-tone="dark"
      className="theme-dark"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 88,
        overflow: "hidden",
      }}
    >
      <div
        className="kr-grid"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 0,
        }}
      >
        <motion.div
          style={{
            padding: "40px var(--kr-margin) 56px",
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 88px)",
            y: heroY,
            opacity: heroOpacity,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--kr-font-display)",
                fontSize: "clamp(80px, 13vw, 168px)",
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--kr-bone)",
              }}
            >
              {["Kat", "Retillo"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.15 + i * 0.18,
                    ease: [0.22, 0.65, 0.18, 1],
                  }}
                  style={{ display: "block", overflow: "hidden" }}
                >
                  <span style={{ display: "inline-block" }}>{word}</span>
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              style={{ marginTop: 36 }}
            >
              <Eyebrow style={{ color: "var(--kr-paper-soft)" }}>
                Copywriter &nbsp;&amp;&nbsp; Creative Strategist
              </Eyebrow>
              <p
                className="kr-lead"
                style={{
                  marginTop: 22,
                  maxWidth: 460,
                  color: "var(--kr-bone)",
                  fontSize: 22,
                  lineHeight: 1.4,
                }}
              >
                Lavoro sulle idee che entrano
                <br />
                nella cultura senza chiedere permesso.
              </p>
            </motion.div>
          </div>
          <motion.a
            className="kr-eyebrow"
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              color: "var(--kr-bone)",
              textDecoration: "none",
              alignSelf: "flex-start",
              opacity: arrowOpacity,
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scroll down
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ display: "inline-flex" }}
            >
              <ArrowDown size={14} />
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: 480,
            y: imgY,
            scale: imgScale,
          }}
        >
          <motion.img
            src={PORTRAIT}
            alt="Portrait — Kat Retillo"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 0.65, 0.18, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(0.15) contrast(1.05) brightness(0.85)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(115deg, rgba(14,14,14,0.45) 0%, rgba(14,14,14,0) 50%, rgba(14,14,14,0.25) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 18,
              bottom: 18,
              font: "400 10px/1.3 var(--kr-font-mono, ui-monospace)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(239,235,225,0.55)",
            }}
          >
            HERO PORTRAIT · KAT · SIDE PROFILE · MOODY LOW-KEY
          </div>
        </motion.div>
      </div>
    </section>
  );
}
