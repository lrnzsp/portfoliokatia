import { ArrowRight } from "./Arrow";

type Props = {
  date: string;
  title: string;
  last?: boolean;
};

export default function NoteRow({ date, title, last }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr 32px",
        gap: 24,
        alignItems: "center",
        padding: "22px 0",
        borderBottom: last ? "none" : "1px solid var(--kr-rule-ink)",
      }}
    >
      <div
        className="kr-meta"
        style={{
          fontFamily: "var(--kr-font-mono, ui-monospace)",
          color: "var(--kr-ink-soft)",
        }}
      >
        {date}
      </div>
      <div className="kr-body" style={{ fontSize: 17 }}>
        {title}
      </div>
      <div style={{ justifySelf: "end", color: "var(--kr-ink)" }}>
        <ArrowRight />
      </div>
    </div>
  );
}
