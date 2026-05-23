import KrNav from "@/components/KrNav";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";
import { ArrowDown } from "@/components/Arrow";

export default function HomePage() {
  return (
    <main
      className="theme-dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <KrNav active="Work" tone="dark" />
      <div
        className="kr-grid"
        style={{
          flex: 1,
          gridTemplateColumns: "1.05fr 1fr",
          gap: 0,
        }}
      >
        <section
          style={{
            padding: "40px var(--kr-margin) 56px",
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 88px)",
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
              className="kr-display-xl"
              style={{
                margin: 0,
                fontSize: "clamp(80px, 13vw, 168px)",
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "-0.025em",
              }}
            >
              Kat
              <br />
              Retillo
            </h1>
            <div style={{ marginTop: 36 }}>
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
            </div>
          </div>
          <a
            className="kr-eyebrow"
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              color: "var(--kr-bone)",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            Scroll down <ArrowDown size={14} />
          </a>
        </section>
        <section style={{ position: "relative", minHeight: 480 }}>
          <PhotoSlot
            label="HERO PORTRAIT · KAT · SIDE PROFILE · MOODY LOW-KEY"
            ratio="auto"
            tone="dark"
            style={{
              width: "100%",
              height: "100%",
              aspectRatio: "auto",
              position: "absolute",
              inset: 0,
            }}
          />
        </section>
      </div>
    </main>
  );
}
