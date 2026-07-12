import Link from "next/link";

/* ---------- Icons ---------- */

const PATHS: Record<string, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3.3l7 2.7v5c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9v-5z" />
      <path d="M9 11.8l2.1 2.1 4-4.2" />
    </>
  ),
  panel: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.6" />
      <path d="M8.6 7h6.8M8.6 11h6.8M8.6 15h3.4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9.2 18.4h5.6M10.3 21h3.4" />
      <path d="M12 3.2a5.8 5.8 0 0 0-3.8 10.1c.8.8 1.1 1.4 1.1 2.6h5.4c0-1.2.3-1.8 1.1-2.6A5.8 5.8 0 0 0 12 3.2z" />
    </>
  ),
  intercom: (
    <>
      <rect x="5" y="3.5" width="11" height="17" rx="1.6" />
      <path d="M11 7.5l-1.8 3.5h2.8l-1.8 3.5" />
      <path d="M16 9.5h2.2v5.2a1.6 1.6 0 0 1-3.2 0v-2.4" />
    </>
  ),
  bolt: <path d="M16.6 3.6a4 4 0 0 0-5 5.1L4.3 16l2.8 2.8 7.3-7.3a4 4 0 0 0 5.1-5l-2.6 2.6-2.4-.6-.6-2.4z" />,
  wrench: (
    <>
      <path d="M14.6 6.3a3.6 3.6 0 0 1 4.7 4.6l-2.5-2.5-2 2 2.5 2.5a3.6 3.6 0 0 1-4.7-4.6L5.7 4.2 4.2 5.7z" />
      <path d="M11.5 12.5 19 20l1.5-1.5L13 11" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6" cy="6" r="1.9" />
      <circle cx="18" cy="6" r="1.9" />
      <circle cx="12" cy="18.5" r="1.9" />
      <path d="M6 7.9v2.6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.9M12 12.5v4" />
    </>
  ),
  bureau: (
    <>
      <path d="M9.2 18.4h5.6M10.3 21h3.4" />
      <path d="M12 3.2a5.8 5.8 0 0 0-3.8 10.1c.8.8 1.1 1.4 1.1 2.6h5.4c0-1.2.3-1.8 1.1-2.6A5.8 5.8 0 0 0 12 3.2z" />
    </>
  ),
  house: (
    <>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v3M6 16v-2.5h12V16M12 11v2.5" />
    </>
  ),
  lightning: <path d="M13 2 5 13.5h5.2L9.5 22 19 10h-5.4L15 2z" />,
  pin: (
    <>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path d="m5 12.5 4 4 10-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="m12 3.5 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.6 9.6l5.8-.8z" />,
  phone: <path d="M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5z" />,
  doc: (
    <>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M9 13h6M9 16.5h6" />
    </>
  ),
};

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  size = 24,
  stroke = "#0e63ff",
  className,
}: {
  name: IconName;
  size?: number;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/* ---------- Constants ---------- */

export const PHONE_DISPLAY = "06 06 48 92 80";
export const PHONE_HREF = "tel:+33606489280";
export const REVIEWS_URL = "https://www.pagesjaunes.fr";

/* ---------- Eyebrow ---------- */

export function Eyebrow({ label, auto = false }: { label: string; auto?: boolean }) {
  return (
    <div className={auto ? "eyebrow  eyebrow--auto" : "eyebrow  "}>
      {auto && <span className="eyebrow__num mono eyebrow__num--auto"></span>}
      <span className="eyebrow__line"></span>
      <span className="eyebrow__label mono">{label}</span>
    </div>
  );
}

/* ---------- Breadcrumb ---------- */

export function Crumb({
  parent,
  current,
}: {
  parent: { href: string; label: string };
  current: string;
}) {
  return (
    <nav className="crumb" aria-label="Fil d'Ariane">
      <Link href="/">Accueil</Link>
      <span>/</span>
      <Link href={parent.href}>{parent.label}</Link>
      <span>/</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}

/* ---------- Reviews badge ---------- */

export function Rev({ className }: { className?: string }) {
  return (
    <a
      className={`rev rev--light ${className ?? ""}`}
      href={REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Note 5 sur 5 — 19 avis PagesJaunes"
    >
      <span className="rev__stars" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" size={15} stroke="#f5a623" />
        ))}
      </span>
      <span className="rev__tx">
        <b>5/5</b> · 19 avis PagesJaunes
      </span>
    </a>
  );
}

/* ---------- FAQ ---------- */

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <section className="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <Eyebrow label="FAQ" auto />
          <h2 className="faq__title">Questions fréquentes</h2>
        </div>
        <div className="faq__list">
          {items.map((it) => (
            <details className="faq__item" key={it.q}>
              <summary className="faq__q">
                {it.q}
                <span className="faq__plus" aria-hidden="true"></span>
              </summary>
              <p className="faq__a">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/* ---------- CTA banner ---------- */

export function Ctab({ title, text }: { title: string; text: string }) {
  return (
    <section className="ctab">
      <div className="container ctab__inner">
        <div className="ctab__bg" aria-hidden="true"></div>
        <div className="ctab__copy">
          <span className="mono ctab__eyebrow">Devis gratuit &amp; sans engagement</span>
          <h2 className="ctab__title">{title}</h2>
          <p className="ctab__text">{text}</p>
        </div>
        <div className="ctab__actions">
          <Link href="/contact" className="btn btn--primary btn--lg ">
            Demander un devis <Icon name="arrow" size={20} stroke="currentColor" />
          </Link>
          <a href={PHONE_HREF} className="ctab__call">
            <Icon name="phone" size={19} stroke="#fff" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
