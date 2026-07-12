import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Pro San Electricité, électricien à Beaugency",
  description:
    "Pro San Electricité, artisan électricien à Beaugency (Loiret) : électricité générale, automatisme de portails, interphonie et dépannage. Assurance décennale et RC Pro à jour.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <main id="main" className="p-apropos">  <section className="container head"> <div className="eyebrow  ">  <span className="eyebrow__line"></span> <span className="eyebrow__label mono">À propos</span> </div>  <h1 className="head__h1">Pro San Electricité, votre artisan électricien à Beaugency</h1> <p className="head__slogan">« Votre satisfaction est mon métier. »</p> <p className="head__lead">
Pro San Electricité est une <strong>micro-entreprise</strong> spécialisée en électricité générale,
      automatisme, interphonie et entretien de portails et portes de garage. Créée en octobre 2022 et
      basée à Beaugency, elle intervient dans tout le Loiret, pour les particuliers comme pour les
      professionnels — de la simple intervention au chantier le plus technique.
</p> </section> <section className="container mission"> <div className="mission__card"> <span className="mono mission__tag">Ma mission</span> <p className="mission__tx">
Assurer un travail de <strong>qualité et une satisfaction garantie</strong> sur chaque installation
        électrique, automatisme et interphonie — et développer, jour après jour, un service de
        proximité de confiance dans toute la Région Centre.
</p> </div> </section> <section className="container values"> <div className="vcard"> <span className="vcard__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16.6 3.6a4 4 0 0 0-5 5.1L4.3 16l2.8 2.8 7.3-7.3a4 4 0 0 0 5.1-5l-2.6 2.6-2.4-.6-.6-2.4z" /></svg></span> <h2 className="vcard__t">Réactivité</h2> <p className="vcard__d">Disponible 7j/7 et 24h/24 : j&apos;interviens vite, même le dimanche, partout dans le Loiret.</p> </div><div className="vcard"> <span className="vcard__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3.3l7 2.7v5c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9v-5z" /><path d="M9 11.8l2.1 2.1 4-4.2" /></svg></span> <h2 className="vcard__t">Rigueur</h2> <p className="vcard__d">Des installations sûres, conformes et durables, réalisées dans les règles de l’art.</p> </div><div className="vcard"> <span className="vcard__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v3M6 16v-2.5h12V16M12 11v2.5" /></svg></span> <h2 className="vcard__t">Relation</h2> <p className="vcard__d">Un seul interlocuteur, à l’écoute, du premier appel jusqu’à la fin du chantier.</p> </div> </section> <section className="container prose"> <h2 className="prose__h">Mon expertise : électricité, automatisme & interphonie</h2> <p>
De la conception à l&apos;entretien, je maîtrise l&apos;ensemble de vos besoins. En{" "}
<strong>électricité générale</strong> : <a href="/services/renovation-mise-aux-normes">rénovation
      et mise aux normes NF C 15-100</a>, <a href="/services/tableau-armoire">tableau électrique et
      câblage d&apos;armoire</a>, <a href="/services/eclairage-lumiere">éclairage et installation de
      lumière</a>. En <strong>automatisme et courant faible</strong> :{" "}
<a href="/services/automatisme-portail">motorisation de portails et portes de garage</a>,{" "}
<a href="/services/interphonie-domotique">interphonie, domotique et réseaux VDI</a>. Sans oublier
      le <a href="/services/depannage-urgence">dépannage et les urgences 24h/24</a>. Un seul artisan
      pour l&apos;ensemble, c&apos;est l&apos;assurance d&apos;installations cohérentes et d&apos;un interlocuteur unique.
</p> <h2 className="prose__h">Mes engagements</h2> <ul className="prose__list"> <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Un artisan qualifié, pour des interventions sûres et maîtrisées.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Le respect de la norme NF C 15-100 sur chaque installation.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Une assurance décennale et une RC Pro à jour, pour votre tranquillité.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Des devis clairs, gratuits et sans engagement.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Un interlocuteur unique, du premier appel à la mise en service.</span></li> </ul> <h2 className="prose__h">Un artisan ancré dans le Loiret</h2> <p>
Être un artisan de proximité, c&apos;est connaître son territoire. Basé à Beaugency, j&apos;interviens à{" "}
<a href="/zones/electricien-meung-sur-loire">Meung-sur-Loire</a>,{" "}
<a href="/zones/electricien-clery-saint-andre">Cléry-Saint-André</a>,{" "}
<a href="/zones/electricien-olivet">Olivet</a>,{" "}
<a href="/zones/electricien-orleans">Orléans</a> et dans{" "}
<a href="/zones">tout le Loiret</a>. Cette proximité, c&apos;est la réactivité en cas d&apos;urgence et la
      disponibilité au quotidien. Découvrez mon accompagnement selon votre profil —{" "}
<a href="/secteurs/particuliers">particulier</a>,{" "}
<a href="/secteurs/coproprietes">copropriété</a> ou{" "}
<a href="/secteurs/commerces">commerce</a> — ou{" "}
<a href="/contact">demandez votre devis gratuit</a>.
</p> </section> <section className="ctab"> <div className="container ctab__inner"> <div className="ctab__bg" aria-hidden="true"></div> <div className="ctab__copy"> <span className="mono ctab__eyebrow">Devis gratuit & sans engagement</span> <h2 className="ctab__title">Un projet électrique ? Recevez votre devis gratuit.</h2> <p className="ctab__text">Installation, rénovation, mise aux normes, automatisme de portail ou dépannage : confiez votre projet à un artisan du Loiret réactif et à l&apos;écoute.</p> </div> <div className="ctab__actions"> <a href="/contact" className="btn btn--primary btn--lg "> Demander un devis <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg> </a>  <a href="tel:+33606489280" className="ctab__call"> <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5z" /></svg> 06 06 48 92 80 </a> </div> </div> </section>   </main>
  );
}
