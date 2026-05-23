import KrNav from "@/components/KrNav";
import KrLogo from "@/components/KrLogo";
import Eyebrow from "@/components/Eyebrow";
import NoteRow from "@/components/NoteRow";
import { ArrowRight, ArrowUp } from "@/components/Arrow";

const NOTES = [
  { date: "13.05.24", title: "Perché i trend non bastano" },
  { date: "22.04.24", title: "TikTok non è un canale" },
  { date: "07.04.24", title: "Insight > Idea > Impatto" },
];

export default function NotesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Cream top: Notes */}
      <div
        className="theme-light"
        style={{ background: "var(--kr-bone)" }}
      >
        <KrNav active="Notes" tone="light" />
        <div
          className="kr-grid"
          style={{
            padding: "12px var(--kr-margin) 48px",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 80,
          }}
        >
          <section>
            <Eyebrow>Notes</Eyebrow>
            <h2
              className="kr-display-m"
              style={{
                margin: "28px 0 28px",
                fontSize: 36,
                lineHeight: 1.25,
                fontWeight: 400,
                maxWidth: 420,
              }}
            >
              Studio la cultura per
              <br />
              scrivere ciò che le persone
              <br />
              vorranno condividere.
            </h2>
            <a
              className="kr-eyebrow"
              href="#all-notes"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--kr-ink)",
                borderBottom: "1px solid currentColor",
                paddingBottom: 4,
              }}
            >
              Leggi gli appunti <ArrowRight size={14} />
            </a>
          </section>
          <section
            style={{
              background: "var(--kr-bone-3)",
              padding: "20px 28px",
            }}
          >
            {NOTES.map((n, i) => (
              <NoteRow
                key={n.date}
                date={n.date}
                title={n.title}
                last={i === NOTES.length - 1}
              />
            ))}
          </section>
        </div>
      </div>

      {/* Dark bottom: Contact */}
      <div
        id="contact"
        className="theme-dark"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="kr-grid"
          style={{
            flex: 1,
            padding: "56px var(--kr-margin) 32px",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 80,
          }}
        >
          <section>
            <h2
              className="kr-display-m"
              style={{
                margin: 0,
                fontSize: 56,
                lineHeight: 1.05,
                fontWeight: 400,
                color: "var(--kr-bone)",
              }}
            >
              Let&apos;s create
              <br />
              something real.
            </h2>
          </section>
          <section>
            <div
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
              <a
                className="kr-btn"
                href="mailto:kat.retillo@gmail.com"
                style={{
                  background: "transparent",
                  color: "var(--kr-bone)",
                  border: "1px solid var(--kr-bone)",
                  textDecoration: "none",
                }}
              >
                Scrivimi <ArrowRight size={14} />
              </a>
            </div>
            <div
              className="kr-split-3"
              style={{
                marginTop: 56,
                display: "grid",
                gap: 32,
                paddingTop: 28,
                borderTop: "1px solid var(--kr-rule-bone)",
              }}
            >
              <ContactCol
                label="Email"
                value="kat.retillo@gmail.com"
                href="mailto:kat.retillo@gmail.com"
              />
              <ContactCol
                label="Instagram"
                value="@kat.retillo"
                href="https://instagram.com/kat.retillo"
              />
              <ContactCol
                label="LinkedIn"
                value="/katretillo"
                href="https://www.linkedin.com/in/katretillo"
              />
            </div>
          </section>
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
          <a href="#top" style={{ color: "var(--kr-bone)" }} aria-label="Back to top">
            <ArrowUp size={16} />
          </a>
        </footer>
      </div>
    </main>
  );
}

function ContactCol({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <Eyebrow style={{ color: "var(--kr-paper-soft)" }}>{label}</Eyebrow>
      <a
        href={href}
        className="kr-body-s"
        style={{
          display: "block",
          marginTop: 12,
          color: "var(--kr-bone)",
          textDecoration: "none",
        }}
      >
        {value}
      </a>
    </div>
  );
}
