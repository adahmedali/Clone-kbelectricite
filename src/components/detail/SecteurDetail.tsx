import Link from "next/link";
import { Icon, Eyebrow, Crumb, Faq, Ctab } from "./shared";
import { METHOD, type Secteur } from "@/data/secteurs";
import { zones } from "@/data/zones";

export function SecteurDetail({ data }: { data: Secteur }) {
  return (
    <main id="main" className="p-secteurs">
      <header className="lhero">
        <div className="container">
          <Crumb parent={{ href: "/secteurs", label: "Secteurs" }} current={data.name} />
          <div className="lhero__grid">
            <div>
              <Eyebrow label={data.eyebrow} />
              <h1 className="lhero__h1">{data.h1}</h1>
              <p className="lhero__sub">{data.sub}</p>
              <div className="lhero__cta">
                <Link href="/contact" className="btn btn--primary btn--lg ">
                  {data.ctaLabel} <Icon name="arrow" size={20} stroke="currentColor" />
                </Link>
                <Link href="/contact" className="btn btn--ghost btn--md ">
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="lhero__ico">
              <Icon name={data.icon} size={60} />
            </div>
          </div>
        </div>
      </header>

      <article>
        <section className="container block">
          <Eyebrow label="Vos enjeux" auto />
          <h2 className="block__h">Vos défis électriques</h2>
          <div className="pain__grid">
            {data.pains.map((p) => (
              <div className="pain" key={p.t}>
                <span className="pain__mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <h3 className="pain__t">{p.t}</h3>
                  <p className="pain__d">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="solutions">
          <div className="container">
            <Eyebrow label="Mes réponses" auto />
            <h2 className="block__h">Comment je vous accompagne</h2>
            <div className="sol__grid">
              {data.solutions.map((s) => (
                <div className="sol" key={s.t}>
                  <span className="sol__ico">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3 className="sol__t">{s.t}</h3>
                  <p className="sol__d">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container block">
          <div className="adv">
            <div className="adv__copy">
              <Eyebrow label="Mes différences" auto />
              <h2 className="block__h">Pourquoi me choisir</h2>
              <p className="adv__intro">{data.advIntro}</p>
              <div className="adv__cta">
                <Link href="/contact" className="btn btn--secondary btn--md ">
                  {data.ctaLabel} <Icon name="arrow" size={18} stroke="currentColor" />
                </Link>
              </div>
            </div>
            <ul className="adv__list">
              {data.advList.map((a) => (
                <li key={a}>
                  <Icon name="check" size={20} stroke="#16a34a" /> <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container block">
          <Eyebrow label="Ma méthode" auto />
          <h2 className="block__h">Mon processus d&apos;intervention</h2>
          <ol className="proc__grid">
            {METHOD.map((m) => (
              <li className="proc__step" key={m.n}>
                <span className="proc__n mono">{m.n}</span>
                <h3 className="proc__t">{m.t}</h3>
                <p className="proc__d">{m.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="container block prose">
          <p>{data.prose}</p>
        </section>

        <section className="container block">
          <Eyebrow label="Mes services" auto />
          <h2 className="block__h">Mes services pour vous</h2>
          <div className="rel__grid">
            {data.services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="scard">
                <span className="scard__ico">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="scard__title">{s.title}</h3>
                <p className="scard__lead">{s.lead}</p>
                <span className="scard__more">
                  En savoir plus <Icon name="arrow" size={15} stroke="currentColor" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="container block">
          <Eyebrow label="Proximité" auto />
          <h2 className="block__h">Un électricien près de chez vous</h2>
          <p className="secteur-zones__lead">
            J&apos;interviens à Beaugency et dans tout le Loiret&nbsp;:
          </p>
          <div className="secteur-zones">
            {zones.map((z) => (
              <Link key={z.slug} href={`/zones/${z.slug}`} className="secteur-zone">
                <Icon name="pin" size={14} /> {z.name}
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
