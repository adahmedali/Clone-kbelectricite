import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zones d'intervention — Beaugency & tout le Loiret | Pro San Electricité",
  description:
    "Électricien à Beaugency et dans tout le Loiret : Meung-sur-Loire, Cléry-Saint-André, Olivet, Orléans… Interventions en électricité, automatisme de portails et dépannage.",
  alternates: { canonical: "/zones" },
};

const COMMUNES: [string, string, string][] = [
  ["electricien-beaugency", "Beaugency", "45190"],
  ["electricien-meung-sur-loire", "Meung-sur-Loire", "45130"],
  ["electricien-tavers", "Tavers", "45190"],
  ["electricien-baule", "Baule", "45130"],
  ["electricien-lailly-en-val", "Lailly-en-Val", "45740"],
  ["electricien-clery-saint-andre", "Cléry-Saint-André", "45370"],
  ["electricien-le-bardon", "Le Bardon", "45130"],
  ["electricien-epieds-en-beauce", "Épieds-en-Beauce", "45130"],
  ["electricien-chaingy", "Chaingy", "45380"],
  ["electricien-saint-ay", "Saint-Ay", "45130"],
  ["electricien-huisseau-sur-mauves", "Huisseau-sur-Mauves", "45130"],
  ["electricien-olivet", "Olivet", "45160"],
  ["electricien-orleans", "Orléans", "45000"],
  ["electricien-la-chapelle-saint-mesmin", "La Chapelle-Saint-Mesmin", "45380"],
];

const OTHERS = [
  "Villorceau",
  "Messas",
  "Cravant",
  "Mareau-aux-Prés",
  "Mézières-lez-Cléry",
  "Dry",
  "Jouy-le-Potier",
  "Saint-Denis-en-Val",
];

const Pin = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
const Arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3d88ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="zcard__arrow" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function ZonesPage() {
  return (
    <main id="main" className="p-zones">  <section className="container head"> <div className="eyebrow  eyebrow--auto"> <span className="eyebrow__num mono eyebrow__num--auto"></span> <span className="eyebrow__line"></span> <span className="eyebrow__label mono">Zone d&apos;intervention</span> </div>  <h1 className="head__h1">Mes zones d&apos;intervention dans le Loiret</h1> <p className="head__lead">
Basé à Beaugency, j&apos;interviens rapidement dans toutes les communes du Loiret et de la région
      orléanaise pour vos installations, rénovations, automatismes et dépannages électriques.
      Sélectionnez votre ville pour découvrir votre électricien de proximité.
</p> <p className="head__lead">
Électricité générale, automatisme de portails, interphonie ou urgence 7j/7 : je me déplace dans
      tout le secteur, avec des délais d&apos;intervention adaptés à chaque commune et un devis gratuit,
      clair et sans engagement.
</p> </section> <section className="container zgrid">
      {COMMUNES.map(([slug, name, cp]) => (
        <a key={slug} href={`/zones/${slug}`} className="zcard"> <span className="zcard__ico">{Pin}</span> <div> <strong>{name}</strong> <span className="zcard__cp">{cp}</span> </div> {Arrow} </a>
      ))}
      </section> <section className="container others"> <h2 className="others__h">J&apos;interviens aussi à :</h2> <div className="others__tags">
      {OTHERS.map((name) => (
        <span key={name} className="others__tag">{name}</span>
      ))}
      </div> </section> <section className="container zones-outro"> <h2 className="zones-outro__h">Un artisan électricien réactif partout dans le Loiret</h2> <p>
De Beaugency à Orléans, de Meung-sur-Loire à Cléry-Saint-André, Pro San Electricité met la même
      exigence au service de chaque commune : travaux conformes à la norme NF C 15-100, artisan
      qualifié et un interlocuteur unique en électricité, automatisme et interphonie. La proximité,
      c&apos;est aussi la <strong>réactivité</strong> — essentielle en cas de panne ou de dépannage.
</p> <p>
Votre commune n&apos;est pas listée ? J&apos;interviens dans tout le Loiret :{" "}
<a href="/contact">contactez-moi</a> ou demandez directement votre{" "}
<a href="/contact">devis gratuit</a>.
</p> </section> <section className="ctab"> <div className="container ctab__inner"> <div className="ctab__bg" aria-hidden="true"></div> <div className="ctab__copy"> <span className="mono ctab__eyebrow">Devis gratuit & sans engagement</span> <h2 className="ctab__title">Un projet électrique ? Recevez votre devis gratuit.</h2> <p className="ctab__text">Installation, rénovation, mise aux normes, automatisme de portail ou dépannage : confiez votre projet à un artisan du Loiret réactif et à l&apos;écoute.</p> </div> <div className="ctab__actions"> <a href="/contact" className="btn btn--primary btn--lg "> Demander un devis <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg> </a>  <a href="tel:+33606489280" className="ctab__call"> <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5z" /></svg> 06 06 48 92 80 </a> </div> </div> </section>   </main>
  );
}
