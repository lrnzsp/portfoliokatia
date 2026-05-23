import Link from "next/link";
import KrNav from "@/components/KrNav";
import PhotoSlot from "@/components/PhotoSlot";
import { ArrowRight } from "@/components/Arrow";

const PROJECTS = [
  {
    slug: "nike",
    brand: "NIKE",
    title: "Just Do It. Tomorrow",
    tag: "Campaign Concept",
    label: "NIKE · CAMPAIGN · PORTRAIT",
  },
  {
    slug: "netflix",
    brand: "NETFLIX",
    title: "Banner Series",
    tag: "Social Campaign",
    label: "NETFLIX · PHONE MOCKUP",
  },
  {
    slug: "dove",
    brand: "DOVE",
    title: "Real Beauty, Real Talk",
    tag: "Social Idea",
    label: "DOVE · TOTE BAG · STILL",
  },
  {
    slug: "spotify",
    brand: "SPOTIFY",
    title: "Playlist Personality",
    tag: "OOH Campaign",
    label: "SPOTIFY · BILLBOARD · OOH",
  },
];

export default function WorkPage() {
  return (
    <main
      className="theme-light"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--kr-bone)",
      }}
    >
      <KrNav active="Work" tone="light" />
      <div
        style={{
          flex: 1,
          padding: "24px var(--kr-margin) 56px",
          display: "flex",
          flexDirection: "column",
          gap: 56,
        }}
      >
        <div
          className="kr-grid"
          style={{
            gridTemplateColumns: "1.2fr 1fr",
            gap: 80,
            alignItems: "end",
          }}
        >
          <h1
            className="kr-display-l"
            style={{
              margin: 0,
              fontSize: 96,
              lineHeight: 1.0,
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            Selected
            <br />
            Work
          </h1>
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
              Progetti, campagne, contenuti e concept. Ogni lavoro parte da un
              insight e prende forma in un&apos;idea pensata per la cultura
              contemporanea.
            </p>
            <a
              className="kr-eyebrow"
              href="#all-projects"
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
              Vedi tutti i progetti <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div
          className="kr-split-4"
          style={{
            display: "grid",
            gap: 28,
            flex: 1,
          }}
        >
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <PhotoSlot
                label={p.label}
                ratio="3/4"
                tone="dark"
                style={{ flex: 1 }}
              />
              <div className="kr-eyebrow" style={{ marginTop: 6 }}>
                {p.brand}
              </div>
              <div className="kr-body" style={{ fontSize: 17, lineHeight: 1.3 }}>
                {p.title}
              </div>
              <div
                className="kr-meta"
                style={{ color: "var(--kr-ink-soft)" }}
              >
                {p.tag}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
