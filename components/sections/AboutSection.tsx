"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

const STILL_LIFE =
  "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80&auto=format&fit=crop";

const MANIFESTO_LINES = ["IDEAS", "IN CULTURE", "NOT JUST", "CONTENT"];

const PARAGRAPHS = [
  "Un comportamento reale, una tensione quotidiana, un dettaglio che le persone riconoscono prima ancora di capire perché.",
  "Da lì costruisco concept, campagne e contenuti pensati per funzionare dentro la conversazione culturale contemporanea — non sopra, non accanto.",
  "Mi muovo tra advertising, social content e creative strategy con una prospettiva digital-first.",
  "Questo non significa lavorare “per i social”: significa pensare in formati, in velocità, in linguaggi che già esistono nella vita delle persone. TikTok e Instagram non sono canali, sono ambienti con regole proprie — e il mio lavoro è capirle prima di usarle.",
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={ref}
      data-section="About"
      data-tone="light"
      className="theme-light"
      style={{
        background: "var(--kr-bone)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "120px 0 96px",
      }}
    >
      <div
        className="kr-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 64,
          padding: "0 var(--kr-margin)",
        }}
      >
        <div style={{ paddingRight: 24 }}>
          <Reveal kind="up">
            <h2
              className="kr-display-m"
              style={{ margin: 0, fontSize: 64, lineHeight: 1.1 }}
            >
              About
            </h2>
          </Reveal>
          <WordReveal
            text={"Il mio punto di partenza\nè sempre concreto."}
            as="p"
            stagger={0.08}
            duration={0.85}
            style={{
              marginTop: 56,
              marginBottom: 28,
              maxWidth: 480,
              fontFamily: "var(--kr-font-display)",
              fontSize: 28,
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 460,
              color: "var(--kr-ink-soft)",
            }}
          >
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={i} kind="up" delay={i * 0.08} duration={0.7}>
                <p
                  className="kr-body-s"
                  style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <motion.div style={{ y: imgY }}>
            <PhotoSlot
              label="STILL LIFE · MOLESKINE + PEN · OVERHEAD"
              ratio="4/3"
              tone="dark"
              src={STILL_LIFE}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.13 }}
            className="theme-dark"
            style={{
              aspectRatio: "4/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 36,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                color: "var(--kr-bone)",
                fontFamily: "var(--kr-font-display)",
                fontSize: 38,
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                textAlign: "center",
              }}
            >
              {MANIFESTO_LINES.map((line) => (
                <span
                  key={line}
                  style={{
                    display: "block",
                    overflow: "hidden",
                    paddingBottom: "0.04em",
                  }}
                >
                  <motion.span
                    variants={{
                      hidden: { y: "110%" },
                      show: {
                        y: "0%",
                        transition: {
                          duration: 0.9,
                          ease: [0.22, 0.65, 0.18, 1],
                        },
                      },
                    }}
                    style={{ display: "inline-block", whiteSpace: "nowrap" }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
