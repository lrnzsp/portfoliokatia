"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Arrow";
import { NOTES } from "@/lib/notes";

export default function NotesSection() {
  return (
    <section
      id="notes"
      data-section="Notes"
      data-tone="light"
      className="theme-light"
      style={{
        background: "var(--kr-bone)",
        padding: "120px 0 120px",
      }}
    >
      <div
        className="kr-grid"
        style={{
          padding: "0 var(--kr-margin)",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 80,
        }}
      >
        <div>
          <Reveal kind="up">
            <Eyebrow>Notes</Eyebrow>
          </Reveal>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="kr-display-m"
            style={{
              margin: "28px 0 28px",
              fontSize: 36,
              lineHeight: 1.25,
              fontWeight: 400,
              maxWidth: 460,
            }}
          >
            {[
              "Studio la cultura per",
              "scrivere ciò che le persone",
              "vorranno condividere.",
            ].map((line, i) => (
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
          <Reveal kind="up" delay={0.15}>
            <a
              className="kr-eyebrow"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--kr-ink)",
                borderBottom: "1px solid currentColor",
                paddingBottom: 4,
              }}
            >
              Scrivimi <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
          style={{
            background: "var(--kr-bone-3)",
            padding: "20px 28px",
          }}
        >
          {NOTES.map((n, i) => (
            <motion.div
              key={n.date}
              variants={{
                hidden: { opacity: 0, x: 30 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] },
                },
              }}
              whileHover={{ x: 6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 32px",
                gap: 24,
                alignItems: "center",
                padding: "22px 0",
                borderBottom:
                  i === NOTES.length - 1
                    ? "none"
                    : "1px solid var(--kr-rule-ink)",
                cursor: "pointer",
              }}
            >
              <div
                className="kr-meta"
                style={{
                  fontFamily: "var(--kr-font-mono, ui-monospace)",
                  color: "var(--kr-ink-soft)",
                }}
              >
                {n.date}
              </div>
              <div className="kr-body" style={{ fontSize: 17 }}>
                {n.title}
              </div>
              <div style={{ justifySelf: "end", color: "var(--kr-ink)" }}>
                <ArrowRight />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
