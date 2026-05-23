import Link from "next/link";
import { notFound } from "next/navigation";
import KrLogo from "@/components/KrLogo";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";
import { ArrowLeft } from "@/components/Arrow";
import { PROJECTS, getProject } from "@/lib/projects";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

type Params = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main
      className="theme-dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "28px var(--kr-margin)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/#work"
          className="kr-eyebrow"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "var(--kr-bone)",
          }}
        >
          <ArrowLeft size={14} /> Back to work
        </Link>
        <KrLogo size={20} color="var(--kr-bone)" href="/" />
      </div>

      <div
        className="kr-grid"
        style={{
          flex: 1,
          padding: "0 var(--kr-margin) 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 56,
        }}
      >
        <section style={{ paddingTop: 12 }}>
          <Eyebrow style={{ color: "var(--kr-paper-soft)" }}>
            {project.brand}
          </Eyebrow>
          <h1
            className="kr-display-m"
            style={{
              margin: "20px 0 8px",
              fontSize: 56,
              lineHeight: 1.05,
              fontWeight: 400,
              color: "var(--kr-bone)",
            }}
          >
            {project.title}
          </h1>
          <div
            className="kr-body-s"
            style={{ color: "var(--kr-paper-soft)", marginBottom: 48 }}
          >
            {project.tag}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              maxWidth: 460,
            }}
          >
            <ProjectBlock label="Insight" body={project.insight} />
            <ProjectBlock label="Idea" body={project.idea} />
            <ProjectBlock label="Esecuzione" body={project.execution} />
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <PhotoSlot
            label={`HERO · ${project.brand}`}
            ratio="1/1"
            tone="dark"
            src={project.hero}
            style={{ flex: 1 }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {project.thumbs.map((t) => (
              <PhotoSlot
                key={t.label}
                label={t.label}
                ratio="3/4"
                tone="dark"
                src={t.src}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectBlock({ label, body }: { label: string; body: ReactNode }) {
  return (
    <div>
      <Eyebrow style={{ color: "var(--kr-paper-soft)" }}>{label}</Eyebrow>
      <p
        className="kr-body-s"
        style={{
          marginTop: 10,
          color: "var(--kr-bone)",
          fontSize: 15,
          lineHeight: 1.55,
        }}
      >
        {body}
      </p>
    </div>
  );
}
