import Link from "next/link";
import { Icon, Eyebrow, Crumb, Rev, Faq, Ctab, PHONE_DISPLAY, PHONE_HREF } from "./shared";
import { zones } from "@/data/zones";
import type { Service } from "@/data/services";

export function ServiceDetail({ data }: { data: Service }) {
  return (
    <main id="main" className="p-services">
      <article>
        <header className="shero">
          <div className="container">
            <Crumb parent={{ href: "/services", label: "Services" }} current={data.title} />
            <div className="shero__grid">
              <div>
                <Eyebrow label={data.eyebrow} />
                <h1 className="shero__h1">{data.title}</h1>
                <p className="shero__lead">{data.lead}</p>
                <Rev className="shero__rev" />
                <div className="shero__cta">
                  <Link href="/contact" className="btn btn--primary btn--md ">
                    Devis gratuit <Icon name="arrow" size={18} stroke="currentColor" />
                  </Link>
                  <a href={PHONE_HREF} className="shero__call">
                    <Icon name="phone" size={18} /> {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="shero__ico">
                <Icon name={data.icon} size={64} />
              </div>
            </div>
          </div>
        </header>

        <div className="container sbody">
          <div className="sbody__main prose">
            <div className="answer">
              <span className="mono answer__k">L&apos;essentiel</span>
              <p className="answer__tx">{data.answer}</p>
            </div>
            {data.sections.map((sec) => (
              <div key={sec.h2}>
                <h2>{sec.h2}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <aside className="sbody__aside">
            <div className="benefits">
              <h2 className="benefits__h">Ce que vous gagnez</h2>
              <ul>
                {data.benefits.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={18} stroke="#16a34a" /> <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="solve">
              <span className="mono">Je résous</span>
              <p>{data.solve}</p>
            </div>
            <figure className="stmo">
              <div className="stmo__stars" role="img" aria-label="Note : 5 sur 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={14} stroke="#f5a623" />
                ))}
              </div>
              <blockquote className="stmo__q">{data.testimonial.quote}</blockquote>
              <figcaption className="stmo__a">
                <strong>{data.testimonial.author}</strong>
              </figcaption>
            </figure>
          </aside>
        </div>

        {data.reals.length > 0 && (
          <section className="container svc-block">
            <Eyebrow label="Réalisations" auto />
            <h2 className="svc-block__h">Ce service en situation réelle</h2>
            <div className="svc-reals">
              {data.reals.map((r) => (
                <Link key={r.slug} href={`/realisations/${r.slug}`} className="svc-real">
                  <span className="mono svc-real__meta">{r.meta}</span>
                  <strong>{r.title}</strong>
                  <span className="svc-real__more">
                    Voir l&apos;étude de cas <Icon name="arrow" size={14} stroke="currentColor" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="container svc-block">
          <Eyebrow label="Près de chez vous" auto />
          <h2 className="svc-block__h">{data.title} dans votre commune</h2>
          <div className="svc-villes">
            {zones.map((z) => (
              <Link key={z.slug} href={`/zones/${z.slug}`} className="svc-ville">
                <Icon name="pin" size={15} /> {z.name}
              </Link>
            ))}
          </div>
        </section>

        <Faq items={data.faq} />

        <Ctab title={data.ctaTitle} text={data.ctaText} />
      </article>
    </main>
  );
}
