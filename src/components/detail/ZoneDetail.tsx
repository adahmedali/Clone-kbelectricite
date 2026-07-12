import Link from "next/link";
import { Icon, Eyebrow, Crumb, Rev, Ctab, PHONE_DISPLAY, PHONE_HREF } from "./shared";
import { ZONE_SERVICES, zoneName, type Zone } from "@/data/zones";

export function ZoneDetail({ data }: { data: Zone }) {
  return (
    <main id="main" className="p-zones">
      <header className="zhero">
        <div className="container">
          <Crumb parent={{ href: "/zones", label: "Zones" }} current={data.name} />
          <Eyebrow label={`${data.name} · ${data.cp}`} />
          <h1 className="zhero__h1">Électricien à {data.name}</h1>
          <p className="zhero__lead">{data.lead}</p>
          <Rev className="zhero__rev" />
          <div className="zhero__meta">
            <span>
              <Icon name="clock" size={17} /> Intervention rapide
            </span>
            <span>
              <Icon name="shield" size={17} /> Conforme NF C 15-100
            </span>
            <span>
              <Icon name="check" size={17} stroke="#16a34a" /> Devis gratuit
            </span>
          </div>
          <div className="zhero__cta">
            <Link href="/contact" className="btn btn--primary btn--md ">
              Devis gratuit à {data.name} <Icon name="arrow" size={18} stroke="currentColor" />
            </Link>
            <a href={PHONE_HREF} className="zhero__call">
              <Icon name="phone" size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <div className="container zbody prose">
        <h2>Votre électricien de proximité à {data.name}</h2>
        <p>{data.intro}</p>
        <h2>Ce que je réalise le plus souvent à {data.name}</h2>
        <p>{data.focus}</p>
        <div className="quartiers">
          <h2>Secteurs desservis à {data.name}</h2>
          <p className="quartiers__lead">
            J&apos;interviens dans tous les secteurs de {data.name}, du diagnostic à la mise en service —
            notamment&nbsp;:
          </p>
          <div className="quartiers__tags">
            {data.quartiers.map((q) => (
              <span className="quartiers__tag" key={q}>
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="container zserv">
        <h2 className="zserv__h">Mes services à {data.name}</h2>
        <div className="zserv__grid">
          {ZONE_SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="scard">
              <span className="scard__ico">
                <Icon name={s.icon} size={24} />
              </span>
              <h3 className="scard__title">{s.title}</h3>
              <span className="scard__more">
                En savoir plus <Icon name="arrow" size={15} stroke="currentColor" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {data.realisations.length > 0 && (
        <section className="container zextra">
          <h2 className="zextra__h">Mes réalisations à {data.name}</h2>
          <div className="zreals">
            {data.realisations.map((r) => (
              <Link key={r.slug} href={`/realisations/${r.slug}`} className="zreal">
                <span className="mono zreal__meta">{r.meta}</span>
                <strong>{r.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container zextra">
        <h2 className="zextra__h">Communes voisines</h2>
        <div className="zneighbors">
          {data.neighbors.map((slug) => (
            <Link key={slug} href={`/zones/${slug}`} className="zneighbor">
              <Icon name="pin" size={14} /> {zoneName(slug)}
            </Link>
          ))}
        </div>
      </section>

      <Ctab
        title={`Un électricien à ${data.name} ? Demandez votre devis gratuit.`}
        text="Installation, rénovation, mise aux normes, automatisme de portail ou dépannage : confiez votre projet à un artisan du Loiret réactif et à l'écoute."
      />
    </main>
  );
}
