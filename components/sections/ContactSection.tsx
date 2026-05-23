"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import KrLogo from "@/components/KrLogo";
import { ArrowRight, ArrowUp } from "@/components/Arrow";

const CONTACTS = [
  { label: "Email", value: "kat.retillo@gmail.com", href: "mailto:kat.retillo@gmail.com" },
  { label: "Instagram", value: "@kat.retillo", href: "https://instagram.com/kat.retillo" },
  { label: "LinkedIn", value: "/katretillo", href: "https://www.linkedin.com/in/katretillo" },
];

const HEADLINE_LINES = ["Let's create", "something real."];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-section="Contact"
      data-tone="dark"
      className="theme-dark"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        padding: "120px 0 0",
      }}
    >
      <div
        className="kr-grid"
        style={{
          flex: 1,
          padding: "0 var(--kr-margin) 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          gap: 80,
        }}
      >
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.16 }}
          style={{
            margin: 0,
            fontFamily: "var(--kr-font-display)",
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 400,
            color: "var(--kr-bone)",
          }}
        >
          {HEADLINE_LINES.map((line) => (
            <span
              key={line}
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.06em",
              }}
            >
              <motion.span
                variants={{
                  hidden: { y: "110%", opacity: 0 },
                  show: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      duration: 1,
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
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              alignItems: "start",
              flexWrap: "wrap",
            }}
          >
            <p
              className="kr-body-s"
              style={{
                color: "var(--kr-paper-soft)",
                maxWidth: 220,
                fontSize: 14,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Hai un progetto o vuoi collaborare?
              <br />
              Scrivimi.
            </p>
            <motion.a
              className="kr-btn"
              href="mailto:kat.retillo@gmail.com"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "transparent",
                color: "var(--kr-bone)",
                border: "1px solid var(--kr-bone)",
                textDecoration: "none",
              }}
            >
              Scrivimi <ArrowRight size={14} />
            </motion.a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.4 }}
            className="kr-split-3"
            style={{
              marginTop: 56,
              display: "grid",
              gap: 32,
              paddingTop: 28,
              borderTop: "1px solid var(--kr-rule-bone)",
            }}
          >
            {CONTACTS.map((c) => (
              <motion.div
                key={c.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
              >
                <Eyebrow style={{ color: "var(--kr-paper-soft)" }}>
                  {c.label}
                </Eyebrow>
                <a
                  href={c.href}
                  className="kr-body-s"
                  style={{
                    display: "block",
                    marginTop: 12,
                    color: "var(--kr-bone)",
                    textDecoration: "none",
                  }}
                >
                  {c.value}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <footer
        style={{
          padding: "24px var(--kr-margin)",
          borderTop: "1px solid var(--kr-rule-bone)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "var(--kr-paper-soft)",
        }}
      >
        <KrLogo size={20} color="var(--kr-bone)" />
        <div className="kr-meta">© 2024 Kat Retillo. All rights reserved.</div>
        <a
          href="#top"
          style={{ color: "var(--kr-bone)" }}
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ArrowUp size={16} />
        </a>
      </footer>
    </section>
  );
}
