"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Arrow";
import { PROJECTS } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section
      id="work"
      data-section="Work"
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
          gap: 64,
        }}
      >
        <div
          className="kr-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 80,
            alignItems: "end",
          }}
        >
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.14 }}
            style={{
              margin: 0,
              fontFamily: "var(--kr-font-display)",
              fontSize: 96,
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            {["Selected", "Work"].map((w) => (
              <span
                key={w}
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
                  style={{ display: "inline-block" }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h2>
          <Reveal kind="up" delay={0.2}>
            <div style={{ paddingBottom: 12 }}>
              <p
                className="kr-body-s"
                style={{
                  margin: 0,
                  color: "var(--kr-ink-soft)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  maxWidth: 380,
                }}
              >
                Progetti, campagne, contenuti e concept. Ogni lavoro parte da
                un insight e prende forma in un&apos;idea pensata per la
                cultura contemporanea.
              </p>
              <a
                className="kr-eyebrow"
                href="#notes"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#notes")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 36,
                  color: "var(--kr-ink)",
                  borderBottom: "1px solid currentColor",
                  paddingBottom: 4,
                }}
              >
                Continua a leggere <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.1 }}
          className="kr-split-4"
          style={{ display: "grid", gap: 28 }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 44 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: [0.2, 0.6, 0.2, 1] },
        },
      }}
    >
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "3/4",
            background: "var(--kr-bone-2)",
          }}
        >
          <motion.img
            src={project.cover}
            alt={`${project.brand} — ${project.title}`}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.2, 0.6, 0.2, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "112%",
              objectFit: "cover",
              y: imgY,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(14,14,14,0) 60%, rgba(14,14,14,0.35) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 14,
              bottom: 14,
              font: "400 10px/1.3 var(--kr-font-mono, ui-monospace)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(239,235,225,0.7)",
            }}
          >
            {project.brand}
          </div>
        </div>
        <div className="kr-eyebrow" style={{ marginTop: 6 }}>
          {project.brand}
        </div>
        <div className="kr-body" style={{ fontSize: 17, lineHeight: 1.3 }}>
          {project.title}
        </div>
        <div className="kr-meta" style={{ color: "var(--kr-ink-soft)" }}>
          {project.tag}
        </div>
      </Link>
    </motion.div>
  );
}
