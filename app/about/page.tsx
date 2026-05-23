import KrNav from "@/components/KrNav";
import PhotoSlot from "@/components/PhotoSlot";

export default function AboutPage() {
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
      <KrNav active="About" tone="light" />
      <div
        className="kr-grid"
        style={{
          flex: 1,
          gridTemplateColumns: "1.15fr 1fr",
          gap: 64,
          padding: "24px var(--kr-margin) 56px",
        }}
      >
        <section style={{ paddingTop: 24, paddingRight: 24 }}>
          <h1
            className="kr-display-m"
            style={{ margin: 0, fontSize: 64, lineHeight: 1.1 }}
          >
            About
          </h1>
          <p
            className="kr-display-s"
            style={{
              marginTop: 56,
              marginBottom: 28,
              maxWidth: 460,
              fontSize: 28,
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          >
            Il mio punto di partenza
            <br />è sempre concreto.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 460,
              color: "var(--kr-ink-soft)",
            }}
          >
            <p
              className="kr-body-s"
              style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}
            >
              Un comportamento reale, una tensione quotidiana, un dettaglio che
              le persone riconoscono prima ancora di capire perché.
            </p>
            <p
              className="kr-body-s"
              style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}
            >
              Da lì costruisco concept, campagne e contenuti pensati per
              funzionare dentro la conversazione culturale contemporanea — non
              sopra, non accanto.
            </p>
            <p
              className="kr-body-s"
              style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}
            >
              Mi muovo tra advertising, social content e creative strategy con
              una prospettiva digital-first.
            </p>
            <p
              className="kr-body-s"
              style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}
            >
              Questo non significa lavorare &quot;per i social&quot;: significa
              pensare in formati, in velocità, in linguaggi che già esistono
              nella vita delle persone. TikTok e Instagram non sono canali, sono
              ambienti con regole proprie — e il mio lavoro è capirle prima di
              usarle.
            </p>
          </div>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingTop: 24,
          }}
        >
          <PhotoSlot
            label="STILL LIFE · MOLESKINE + PEN · OVERHEAD"
            ratio="4/3"
            tone="dark"
          />
          <div
            className="theme-dark"
            style={{
              aspectRatio: "4/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 36,
            }}
          >
            <div
              className="kr-display-s"
              style={{
                color: "var(--kr-bone)",
                fontSize: 38,
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                fontFamily: "var(--kr-font-display)",
                textAlign: "center",
              }}
            >
              IDEAS
              <br />
              IN CULTURE
              <br />
              NOT&nbsp;JUST
              <br />
              CONTENT
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
