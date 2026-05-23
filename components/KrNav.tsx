import Link from "next/link";
import KrLogo from "./KrLogo";

export type NavTone = "dark" | "light";
export type NavActive = "Work" | "About" | "Approach" | "Notes" | "Contact" | null;

const NAV_ITEMS: { label: NonNullable<NavActive>; href: string }[] = [
  { label: "Work",     href: "/work" },
  { label: "About",    href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Notes",    href: "/notes" },
  { label: "Contact",  href: "/notes#contact" },
];

type Props = {
  active?: NavActive;
  tone?: NavTone;
};

export default function KrNav({ active = "Work", tone = "dark" }: Props) {
  const color = tone === "dark" ? "var(--kr-bone)" : "var(--kr-ink)";
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px var(--kr-margin)",
        color,
      }}
    >
      <KrLogo size={22} color={color} />
      <div
        className="kr-nav-items"
        style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="kr-nav-link"
            aria-current={item.label === active ? "page" : undefined}
            style={{ color }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
