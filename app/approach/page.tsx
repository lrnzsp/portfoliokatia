import KrNav from "@/components/KrNav";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";

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

export default function ApproachPage() {
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
      <KrNav active="Approach" tone="light" />
      <div
        style={{
          flex: 1,
          padding: "40px var(--kr-margin) 56px",
          display: "flex",
          flexDirection: "column",
          gap: 56,
        }}
      >
        <div
          className="kr-grid"
          style={{
            gridTemplateColumns: "1.1fr 1fr",
            gap: 80,
          }}
        >
          <section>
            <Eyebrow>Approach</Eyebrow>
            <h2
              className="kr-display-m"
              style={{
                margin: "36px 0 36px",
                fontSize: 44,
                lineHeight: 1.2,
                fontWeight: 400,
                maxWidth: 580,
              }}
            >
              Un buon insight deve essere
              <br />
              semplice da spiegare, forte da
              <br />
              visualizzare e capace di reggere
              <br />
              tutto il peso creativo di quello
              <br />
              che viene dopo.
            </h2>
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
              Quello che mi interessa costruire sono idee riconoscibili subito,
              con una direzione chiara abbastanza solida da trasformarsi in
              contenuti, attivazioni o campagne integrate.
            </p>
          </section>
          <section>
            <PhotoSlot
              label="STUDIO · DESKLAMP · MOODBOARD WALL · NIGHT"
              ratio="4/3"
              tone="dark"
              style={{ width: "100%", height: "100%" }}
            />
          </section>
        </div>

        <div
          className="kr-split-3"
          style={{
            display: "grid",
            gap: 56,
            borderTop: "1px solid var(--kr-rule-ink)",
            paddingTop: 36,
          }}
        >
          {APPROACH_STEPS.map((s) => (
            <div key={s.n}>
              <div
                className="kr-meta"
                style={{ fontFamily: "var(--kr-font-mono, ui-monospace)" }}
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
