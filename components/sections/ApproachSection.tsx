"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";

const STUDIO =
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=80&auto=format&fit=crop";

const APPROACH_STEPS = [
  {
    n: "01",
    label: "Osservazione",
    body: "Studio comportamenti, tendenze e linguaggi culturali.",
  },
  {
    n: "02",
    label: "Insight",
    body: "Trovo il punto vero che genera identificazione.",
  },
  {
    n: "03",
    label: "Idea",
    body: "Costruisco concetti che entrano nella cultura in modo naturale.",
  },
];

const MANIFESTO_LINES = [
  "Un buon insight deve essere",
  "semplice da spiegare, forte da",
  "visualizzare e capace di reggere",
  "tutto il peso creativo di quello",
  "che viene dopo.",
];

export default function ApproachSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section
      id="approach"
      ref={ref}
      data-section="Approach"
      data-tone="light"
      className="theme-light"
      style={{
        background: "var(--kr-bone)",
        padding: "120px 0 120px",
      }}
    >
      <div
        style={{
          padding: "0 var(--kr-margin)",
          display: "flex",
          flexDirection: "column",
          gap: 80,
        }}
      >
        <div
          className="kr-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 80,
          }}
        >
          <div>
            <Reveal kind="up">
              <Eyebrow>Approach</Eyebrow>
            </Reveal>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
              className="kr-display-m"
              style={{
                margin: "36px 0 36px",
                fontSize: 44,
                lineHeight: 1.2,
                fontWeight: 400,
                maxWidth: 580,
              }}
            >
              {MANIFESTO_LINES.map((line, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    overflow: "hidden",
                    paddingBottom: "0.05em",
                  }}
                >
                  <motion.span
                    variants={{
                      hidden: { y: "110%", opacity: 0 },
                      show: {
                        y: "0%",
                        opacity: 1,
                        transition: {
                          duration: 0.85,
                          ease: [0.22, 0.65, 0.18, 1],
                        },
                      },
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
            <Reveal kind="up" delay={0.1}>
              <p
                className="kr-body-s"
                style={{
                  maxWidth: 460,
                  color: "var(--kr-ink-soft)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Quello che mi interessa costruire sono idee riconoscibili
                subito, con una direzione chiara abbastanza solida da
                trasformarsi in contenuti, attivazioni o campagne integrate.
              </p>
            </Reveal>
          </div>
          <div
            style={{
              overflow: "hidden",
              alignSelf: "stretch",
              minHeight: 360,
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                scale: imgScale,
                transformOrigin: "center",
              }}
            >
              <PhotoSlot
                label="STUDIO · DESKLAMP · MOODBOARD WALL · NIGHT"
                ratio="4/3"
                tone="dark"
                src={STUDIO}
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.18 }}
          className="kr-split-3"
          style={{
            display: "grid",
            gap: 56,
            borderTop: "1px solid var(--kr-rule-ink)",
            paddingTop: 36,
          }}
        >
          {APPROACH_STEPS.map((s) => (
            <motion.div
              key={s.n}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.2, 0.6, 0.2, 1] },
                },
              }}
            >
              <div
                className="kr-meta"
                style={{
                  fontFamily: "var(--kr-font-mono, ui-monospace)",
                }}
              >
                {s.n}
              </div>
              <div className="kr-eyebrow" style={{ marginTop: 14 }}>
                {s.label}
              </div>
              <p
                className="kr-body-s"
                style={{
                  marginTop: 18,
                  color: "var(--kr-ink-soft)",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
