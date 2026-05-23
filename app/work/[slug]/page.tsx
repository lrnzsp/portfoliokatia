import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import KrLogo from "@/components/KrLogo";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";
import { ArrowLeft } from "@/components/Arrow";

type Project = {
  slug: string;
  brand: string;
  title: string;
  tag: string;
  hero: string;
  thumbs: { label: string }[];
  insight: ReactNode;
  idea: ReactNode;
  execution: ReactNode;
};

const PROJECTS: Record<string, Project> = {
  nike: {
    slug: "nike",
    brand: "Nike",
    title: "Just Do It. Tomorrow",
    tag: "Campaign Concept",
    hero: "HERO · NIKE HOODIE · 'JUST DO IT. TOMORROW.'",
    thumbs: [
      { label: "PHONE · STORY" },
      { label: "OOH · NIGHT" },
      { label: "STILL · MUG" },
    ],
    insight: (
      <>
        La motivazione non è costante.
        <br />
        La rimandiamo. Sempre.
      </>
    ),
    idea: "Rendiamo il rimando parte del messaggio.",
    execution: (
      <>
        Campagna integrata con OOH, social film,
        <br />
        storie, copy e attivazioni.
      </>
    ),
  },
  netflix: {
    slug: "netflix",
    brand: "Netflix",
    title: "Banner Series",
    tag: "Social Campaign",
    hero: "HERO · NETFLIX PHONE · BANNER FRAMES",
    thumbs: [
      { label: "PHONE · MOCKUP" },
      { label: "STORY · LOOP" },
      { label: "GRID · POST" },
    ],
    insight: "Lo scroll è il nuovo trailer.",
    idea: "Trasformiamo i banner social in piccoli pilot.",
    execution: "Serie di banner episodici su Instagram e TikTok, con call to next episode.",
  },
  dove: {
    slug: "dove",
    brand: "Dove",
    title: "Real Beauty, Real Talk",
    tag: "Social Idea",
    hero: "HERO · DOVE · TOTE BAG STILL",
    thumbs: [
      { label: "TOTE · STILL" },
      { label: "LIVE · CHAT" },
      { label: "WALL · QUOTE" },
    ],
    insight: "Le persone non vogliono altre rassicurazioni. Vogliono parlare.",
    idea: "Una conversazione vera, non una dichiarazione.",
    execution: "Live talks, content episodici e drop di merch con copy diretto.",
  },
  spotify: {
    slug: "spotify",
    brand: "Spotify",
    title: "Playlist Personality",
    tag: "OOH Campaign",
    hero: "HERO · SPOTIFY · BILLBOARD NIGHT",
    thumbs: [
      { label: "OOH · CITY" },
      { label: "OOH · METRO" },
      { label: "POSTER · WHEATPASTE" },
    ],
    insight: "La playlist dice di te più di un profilo.",
    idea: "Le playlist diventano ritratti pubblici.",
    execution: "OOH cittadini con quote-as-portrait, accompagnati da social cut e cover personalizzate.",
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

type Params = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Params) {
  const project = PROJECTS[params.slug];
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
          href="/work"
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
        <KrLogo size={20} color="var(--kr-bone)" />
      </div>

      <div
        className="kr-grid"
        style={{
          flex: 1,
          padding: "0 var(--kr-margin) 32px",
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
              maxWidth: 420,
            }}
          >
            <ProjectBlock label="Insight" body={project.insight} />
            <ProjectBlock label="Idea" body={project.idea} />
            <ProjectBlock label="Esecuzione" body={project.execution} />
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <PhotoSlot
            label={project.hero}
            ratio="1/1"
            tone="dark"
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
              <PhotoSlot key={t.label} label={t.label} ratio="3/4" tone="dark" />
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
