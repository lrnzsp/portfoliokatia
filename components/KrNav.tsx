"use client";

import { useEffect, useState } from "react";
import KrLogo from "./KrLogo";

export type NavTone = "dark" | "light";
export type NavActive =
  | "Work"
  | "About"
  | "Approach"
  | "Notes"
  | "Contact"
  | null;

const NAV_ITEMS: { label: NonNullable<NavActive>; href: string }[] = [
  { label: "Work",     href: "#work" },
  { label: "About",    href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Notes",    href: "#notes" },
  { label: "Contact",  href: "#contact" },
];

type Props = {
  active?: NavActive;
  tone?: NavTone;
  /** If true, the nav adapts its tone based on the section in view */
  adaptive?: boolean;
  /** If true, the nav stays fixed at the top of the viewport */
  sticky?: boolean;
};

export default function KrNav({
  active = null,
  tone = "dark",
  adaptive = false,
  sticky = false,
}: Props) {
  const [currentTone, setCurrentTone] = useState<NavTone>(tone);
  const [currentActive, setCurrentActive] = useState<NavActive>(active);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!adaptive) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      // Find which section the top of the viewport is in
      const probeY = 80;
      const el = document.elementFromPoint(window.innerWidth / 2, probeY);
      if (!el) return;
      const section = (el as HTMLElement).closest<HTMLElement>(
        "[data-tone]"
      );
      if (section) {
        const sectionTone = section.dataset.tone as NavTone;
        if (sectionTone) setCurrentTone(sectionTone);
        const id = section.dataset.section as NavActive | undefined;
        if (id) setCurrentActive(id);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [adaptive]);

  const color =
    currentTone === "dark" ? "var(--kr-bone)" : "var(--kr-ink)";
  const bg =
    currentTone === "dark" ? "var(--kr-ink)" : "var(--kr-bone)";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <nav
      style={{
        position: sticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "16px var(--kr-margin)" : "28px var(--kr-margin)",
        color,
        background: sticky
          ? scrolled
            ? bg
            : "transparent"
          : "transparent",
        borderBottom: scrolled
          ? `1px solid ${currentTone === "dark" ? "var(--kr-rule-bone)" : "var(--kr-rule-ink)"}`
          : "1px solid transparent",
        transition:
          "background var(--kr-dur-med) var(--kr-ease), padding var(--kr-dur-med) var(--kr-ease), color var(--kr-dur-med) var(--kr-ease), border-color var(--kr-dur-med) var(--kr-ease)",
      }}
    >
      <KrLogo size={22} color={color} href="#top" />
      <div
        className="kr-nav-items"
        style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="kr-nav-link"
            aria-current={item.label === currentActive ? "page" : undefined}
            onClick={(e) => handleClick(e, item.href)}
            style={{ color }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
