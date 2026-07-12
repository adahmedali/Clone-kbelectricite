import Link from "next/link";
import { Icon, Eyebrow, Crumb, Ctab } from "./shared";
import type { Realisation } from "@/data/realisations";

export function RealisationDetail({ data }: { data: Realisation }) {
  return (
    <main id="main" className="p-realisations">
      <header className="rhero">
        <div className="container">
          <Crumb parent={{ href: "/realisations", label: "Réalisations" }} current={data.title} />
          <Eyebrow label="Étude de cas" />
          <h1 className="rhero__h1">{data.title}</h1>
          <div className="rhero__meta">
            <span>
              <Icon name={data.sectorIcon} size={16} /> {data.sector}
            </span>
            <span>
              <Icon name="pin" size={16} /> {data.city} ({data.cp})
            </span>
            <span>
              <Icon name="clock" size={16} /> {data.date}
            </span>
          </div>
        </div>
      </header>

      <article className="container rbody">
        <div className="story">
          <section className="story__row story__row--orange">
            <div className="story__head">
              <span className="story__ico">
                <Icon name="bolt" size={20} stroke="currentColor" />
              </span>
              <span className="mono story__eyebrow">Problème initial</span>
            </div>
            <p className="story__text">{data.story.problem}</p>
          </section>
          <section className="story__row story__row--blue">
            <div className="story__head">
              <span className="story__ico">
                <Icon name="wrench" size={20} stroke="currentColor" />
              </span>
              <span className="mono story__eyebrow">Mon intervention</span>
            </div>
            <p className="story__text">{data.story.intervention}</p>
          </section>
          <section className="story__row story__row--green">
            <div className="story__head">
              <span className="story__ico">
                <Icon name="check" size={20} stroke="currentColor" />
              </span>
              <span className="mono story__eyebrow">Résultat obtenu</span>
            </div>
            <p className="story__text">{data.story.result}</p>
          </section>
        </div>

        <section className="rel">
          <h2 className="rel__h">Services mobilisés</h2>
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

        <div className="rback">
          <Link href="/realisations" className="btn btn--ghost btn--md ">
            Voir toutes mes réalisations <Icon name="arrow" size={18} stroke="currentColor" />
          </Link>
        </div>
      </article>

      <Ctab title={data.ctaTitle} text={data.ctaText} />
    </main>
  );
}
