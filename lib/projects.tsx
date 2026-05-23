import type { ReactNode } from "react";

export type Project = {
  slug: string;
  brand: string;
  title: string;
  tag: string;
  cover: string;
  hero: string;
  thumbs: { src: string; label: string }[];
  insight: ReactNode;
  idea: ReactNode;
  execution: ReactNode;
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PROJECTS: Project[] = [
  {
    slug: "nike",
    brand: "NIKE",
    title: "Just Do It. Tomorrow",
    tag: "Campaign Concept",
    cover: U("photo-1556906781-9a412961c28c", 900),
    hero: U("photo-1556906781-9a412961c28c", 1400),
    thumbs: [
      { src: U("photo-1517960413843-0aee8e2b3285", 600), label: "PHONE · STORY" },
      { src: U("photo-1519861531473-9200262188bf", 600), label: "OOH · NIGHT" },
      { src: U("photo-1495474472287-4d71bcdd2085", 600), label: "STILL · MUG" },
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
  {
    slug: "netflix",
    brand: "NETFLIX",
    title: "Banner Series",
    tag: "Social Campaign",
    cover: U("photo-1611162616305-c69b3fa7fbe0", 900),
    hero: U("photo-1611162616305-c69b3fa7fbe0", 1400),
    thumbs: [
      { src: U("photo-1535303311164-664fc9ec6532", 600), label: "PHONE · MOCKUP" },
      { src: U("photo-1611162617213-7d7a39e9b1d7", 600), label: "STORY · LOOP" },
      { src: U("photo-1606293459339-e62f5862c5b3", 600), label: "GRID · POST" },
    ],
    insight: "Lo scroll è il nuovo trailer.",
    idea: "Trasformiamo i banner social in piccoli pilot.",
    execution:
      "Serie di banner episodici su Instagram e TikTok, con call to next episode.",
  },
  {
    slug: "dove",
    brand: "DOVE",
    title: "Real Beauty, Real Talk",
    tag: "Social Idea",
    cover: U("photo-1591561954557-26941169b49e", 900),
    hero: U("photo-1591561954557-26941169b49e", 1400),
    thumbs: [
      { src: U("photo-1573855619003-97b4799dcd8b", 600), label: "TOTE · STILL" },
      { src: U("photo-1573497019418-b400bb3ab074", 600), label: "LIVE · CHAT" },
      { src: U("photo-1505373877841-8d25f7d46678", 600), label: "WALL · QUOTE" },
    ],
    insight: "Le persone non vogliono altre rassicurazioni. Vogliono parlare.",
    idea: "Una conversazione vera, non una dichiarazione.",
    execution:
      "Live talks, content episodici e drop di merch con copy diretto.",
  },
  {
    slug: "spotify",
    brand: "SPOTIFY",
    title: "Playlist Personality",
    tag: "OOH Campaign",
    cover: U("photo-1568827999250-3f6afff96e66", 900),
    hero: U("photo-1568827999250-3f6afff96e66", 1400),
    thumbs: [
      { src: U("photo-1519677100203-a0e668c92439", 600), label: "OOH · CITY" },
      { src: U("photo-1581094271901-8022df4466f9", 600), label: "OOH · METRO" },
      { src: U("photo-1572050929551-c0d7e26ed83a", 600), label: "POSTER · WHEATPASTE" },
    ],
    insight: "La playlist dice di te più di un profilo.",
    idea: "Le playlist diventano ritratti pubblici.",
    execution:
      "OOH cittadini con quote-as-portrait, accompagnati da social cut e cover personalizzate.",
  },
  {
    slug: "apple",
    brand: "APPLE",
    title: "Think Quietly",
    tag: "Brand Film",
    cover: U("photo-1517336714731-489689fd1ca8", 900),
    hero: U("photo-1517336714731-489689fd1ca8", 1400),
    thumbs: [
      { src: U("photo-1531297484001-80022131f5a1", 600), label: "PRODUCT · STILL" },
      { src: U("photo-1496181133206-80ce9b88a853", 600), label: "FILM · FRAME" },
      { src: U("photo-1542751371-adc38448a05e", 600), label: "OOH · QUIET" },
    ],
    insight: "Il rumore non è più un valore.",
    idea: "Riprendiamoci la concentrazione come gesto creativo.",
    execution:
      "Brand film e serie OOH minimal, accompagnati da una playlist editoriale.",
  },
  {
    slug: "glossier",
    brand: "GLOSSIER",
    title: "Skin Like Yours",
    tag: "Social Idea",
    cover: U("photo-1522335789203-aaa56e36b1c0", 900),
    hero: U("photo-1522335789203-aaa56e36b1c0", 1400),
    thumbs: [
      { src: U("photo-1599387737658-1da57906f9e0", 600), label: "USER · PORTRAIT" },
      { src: U("photo-1556228720-195a672e8a03", 600), label: "PRODUCT · TONE" },
      { src: U("photo-1571781926291-c477ebfd024b", 600), label: "STORY · TIPS" },
    ],
    insight: "Le persone non vogliono pelle perfetta. Vogliono pelle riconoscibile.",
    idea: "Trasformiamo la pelle reale in linguaggio di brand.",
    execution: "User-generated content + serie editoriali con dermatologi.",
  },
  {
    slug: "patagonia",
    brand: "PATAGONIA",
    title: "Don't Buy New",
    tag: "Manifesto Campaign",
    cover: U("photo-1551698618-1dfe5d97d256", 900),
    hero: U("photo-1551698618-1dfe5d97d256", 1400),
    thumbs: [
      { src: U("photo-1483985988355-763728e1935b", 600), label: "REPAIR · STILL" },
      { src: U("photo-1542838132-92c53300491e", 600), label: "OUTDOOR · WEAR" },
      { src: U("photo-1521572163474-6864f9cf17ab", 600), label: "POSTER · MANIFESTO" },
    ],
    insight: "Il vestito più sostenibile è quello che hai già.",
    idea: "Trasformiamo la riparazione in atto di brand.",
    execution: "Pop-up di repair stations, social film e copy manifesto in OOH.",
  },
  {
    slug: "ikea",
    brand: "IKEA",
    title: "Small Spaces, Big Ideas",
    tag: "Content Series",
    cover: U("photo-1556228453-efd6c1ff04f6", 900),
    hero: U("photo-1556228453-efd6c1ff04f6", 1400),
    thumbs: [
      { src: U("photo-1556909114-f6e7ad7d3136", 600), label: "ROOM · SETUP" },
      { src: U("photo-1493809842364-78817add7ffb", 600), label: "DETAIL · HACK" },
      { src: U("photo-1540574163026-643ea20ade25", 600), label: "POV · VIDEO" },
    ],
    insight: "Le case si rimpiccioliscono. Le idee si moltiplicano.",
    idea: "Trasformiamo lo spazio piccolo in vincolo creativo.",
    execution: "Serie TikTok con creator + libretto fisico di hack.",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
