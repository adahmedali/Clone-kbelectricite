import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "\u00c0 propos \u2014 KB \u00c9lectricit\u00e9 G\u00e9n\u00e9rale, \u00e9lectricien \u00e0 Toulouse",
  description: "KB \u00c9lectricit\u00e9 G\u00e9n\u00e9rale, entreprise toulousaine d'\u00e9lectricit\u00e9 courants forts et faibles. Notre expertise, nos valeurs et nos engagements \u00e0 Toulouse et sa m\u00e9tropole.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <main id="main" className="p-apropos">  <section className="container head"> <div className="eyebrow  ">  <span className="eyebrow__line"></span> <span className="eyebrow__label mono">À propos</span> </div>  <h1 className="head__h1">KB Électricité Générale, votre partenaire électricité à Toulouse</h1> <p className="head__slogan">« Votre énergie, notre expertise. »</p> <p className="head__lead">
KB Électricité Générale est une entreprise toulousaine spécialisée en <strong>électricité
      générale</strong> — courants forts et courants faibles. Implantée à Toulouse, dans le quartier
      du Férétra, et intervenant sur toute la métropole, elle accompagne syndics, gestionnaires
      immobiliers, entreprises, commerces, industries, collectivités et particuliers dans l'ensemble
      de leurs projets électriques — de la simple intervention au chantier le plus technique.
</p> </section> <section className="container mission"> <div className="mission__card"> <span className="mono mission__tag">Notre mission</span> <p className="mission__tx">
Garantir à chaque client une installation <strong>sûre, conforme et durable</strong>, tout
        en assurant une disponibilité sans faille et un service de proximité — parce qu'une coupure
        ne prévient jamais.
</p> </div> </section> <section className="container values"> <div className="vcard"> <span className="vcard__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16.6 3.6a4 4 0 0 0-5 5.1L4.3 16l2.8 2.8 7.3-7.3a4 4 0 0 0 5.1-5l-2.6 2.6-2.4-.6-.6-2.4z" /></svg></span> <h2 className="vcard__t">Réactivité</h2> <p className="vcard__d">Une coupure ne prévient jamais : nous intervenons vite, partout sur la métropole.</p> </div><div className="vcard"> <span className="vcard__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3.3l7 2.7v5c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9v-5z" /><path d="M9 11.8l2.1 2.1 4-4.2" /></svg></span> <h2 className="vcard__t">Rigueur</h2> <p className="vcard__d">Des installations sûres, conformes et durables, documentées dans les règles de l’art.</p> </div><div className="vcard"> <span className="vcard__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e63ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v3M6 16v-2.5h12V16M12 11v2.5" /></svg></span> <h2 className="vcard__t">Relation</h2> <p className="vcard__d">Un interlocuteur unique, à l’écoute, pour le courant fort comme le courant faible.</p> </div> </section> <section className="container prose"> <h2 className="prose__h">Notre expertise : courants forts & courants faibles</h2> <p>
De la conception à la maintenance, nous maîtrisons l'ensemble de la chaîne électrique. En
<strong>courants forts</strong> : <a href="/services/distribution-tgbt">distribution &
      TGBT</a>, <a href="/services/tableaux-armoires">remplacement de tableau électrique</a>,
<a href="/services/eclairage-led-relamping">éclairage LED</a>,
<a href="/services/mise-en-conformite">rénovation et mise en conformité NF C 15-100</a> et
<a href="/services/borne-recharge-irve">bornes de recharge IRVE</a>. En
<strong>courants faibles</strong> :
<a href="/services/courants-faibles-vdi">réseaux VDI, vidéosurveillance, contrôle d'accès et
      sécurité incendie</a>. Sans oublier le <a href="/services/depannage-urgence">dépannage</a> et
      les <a href="/services/maintenance">contrats de maintenance</a>. Coordonner le courant fort et
      le courant faible sous un même toit, c'est vous garantir des installations cohérentes et un
      seul interlocuteur.
</p> <h2 className="prose__h">Nos engagements</h2> <ul className="prose__list"> <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Des techniciens habilités, pour des interventions sûres et maîtrisées.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Le respect de la norme NF C 15-100 et l’attestation Consuel lorsqu’elle est requise.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Une assurance décennale qui vous couvre.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Des devis clairs, gratuits et sans engagement.</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4 4 10-10" /></svg> <span>Un interlocuteur unique, du premier appel à la mise en service.</span></li> </ul> <h2 className="prose__h">Un électricien ancré dans la métropole toulousaine</h2> <p>
Être un électricien de proximité, c'est connaître son territoire. Basés à Toulouse, nous
      intervenons à <a href="/zones/electricien-blagnac">Blagnac</a>,
<a href="/zones/electricien-colomiers">Colomiers</a>,
<a href="/zones/electricien-tournefeuille">Tournefeuille</a>,
<a href="/zones/electricien-muret">Muret</a> et dans
<a href="/zones">toute la métropole</a>. Cette proximité, c'est la réactivité en cas d'urgence
      et la disponibilité au quotidien. Découvrez notre accompagnement selon votre profil —
<a href="/secteurs/syndics-copropriete">syndic</a>,
<a href="/secteurs/entreprises-bureaux">entreprise</a>,
<a href="/secteurs/commerces">commerce</a> ou
<a href="/secteurs/particuliers">particulier</a> — ou
<a href="/devis">demandez votre devis gratuit</a>.
</p> </section> <section className="ctab"> <div className="container ctab__inner"> <div className="ctab__bg" aria-hidden="true"></div> <div className="ctab__copy"> <span className="mono ctab__eyebrow">Devis gratuit & sans engagement</span> <h2 className="ctab__title">Un projet électrique ? Recevez votre devis gratuit.</h2> <p className="ctab__text">Installation, rénovation, mise en conformité, maintenance ou dépannage : confiez votre projet à une équipe toulousaine réactive et engagée.</p> </div> <div className="ctab__actions"> <a href="/devis" className="btn btn--primary btn--lg "> Demander un devis <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg> </a>  <a href="tel:+33651755039" className="ctab__call"> <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5z" /></svg> 06 51 75 50 39 </a> </div> </div> </section>   </main>
  );
}
