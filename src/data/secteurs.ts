import type { IconName } from "@/components/detail/shared";

export type SecteurCard = { slug: string; title: string; lead: string; icon: IconName };

export type Secteur = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  sub: string;
  icon: IconName;
  ctaLabel: string;
  pains: { t: string; d: string }[];
  solutions: { icon: IconName; t: string; d: string }[];
  advIntro: string;
  advList: string[];
  prose: string;
  services: SecteurCard[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

// Shared 4-step method (same for every profile)
export const METHOD = [
  { n: "01", t: "Visite & diagnostic", d: "J'évalue votre installation sur place et j'identifie les priorités et les points de sécurité." },
  { n: "02", t: "Devis clair", d: "Vous recevez une proposition détaillée, chiffrée et sans engagement, facile à comprendre." },
  { n: "03", t: "Planification", d: "J'organise l'intervention en limitant la gêne et en tenant les délais convenus." },
  { n: "04", t: "Réalisation & suivi", d: "Travaux réalisés proprement et vérifiés, avec les explications d'usage à la clé." },
];

// Reusable service cards
const SC: Record<string, SecteurCard> = {
  renovation: {
    slug: "renovation-mise-aux-normes",
    title: "Rénovation & mise aux normes",
    lead: "Rénovation électrique, mise aux normes NF C 15-100 et installation conforme, du diagnostic à la finition.",
    icon: "shield",
  },
  tableau: {
    slug: "tableau-armoire",
    title: "Tableau & câblage d'armoire",
    lead: "Remplacement de tableau vétuste, mise aux normes, repérage et câblage soigné — protection différentielle garantie.",
    icon: "panel",
  },
  eclairage: {
    slug: "eclairage-lumiere",
    title: "Éclairage & installation de lumière",
    lead: "Éclairage intérieur et extérieur, LED économiques et détection de présence. Une lumière confortable et durable.",
    icon: "bulb",
  },
  automatisme: {
    slug: "automatisme-portail",
    title: "Automatisme de portail",
    lead: "Motorisation de portails et portes de garage, dépannage et entretien. Un accès sécurisé et commandé à distance.",
    icon: "bolt",
  },
  interphonie: {
    slug: "interphonie-domotique",
    title: "Interphonie / domotique",
    lead: "Interphones et portiers vidéo, domotique et petits réseaux. Un accès contrôlé, simple et fiable dans la durée.",
    icon: "intercom",
  },
  depannage: {
    slug: "depannage-urgence",
    title: "Dépannage & urgences",
    lead: "Diagnostic rapide et remise en service efficace, 24h/24 et 7j/7. La continuité de votre confort, préservée.",
    icon: "wrench",
  },
};

const ADV_COMMON = [
  "Un seul interlocuteur pour toute votre électricité",
  "Devis détaillés, clairs, gratuits et sans engagement",
  "Artisan qualifié, travaux soignés et conformes NF C 15-100",
  "Intervention dans tout le Loiret, réactivité 7j/7",
];

export const secteurs: Secteur[] = [
  {
    slug: "coproprietes",
    name: "Copropriétés",
    metaTitle: "Électricien pour copropriétés à Beaugency (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité accompagne les copropriétés du Loiret : mise en sécurité des parties communes, interphonie, éclairage et dépannage. Un interlocuteur unique.",
    eyebrow: "Pour les copropriétés",
    h1: "L'électricien de proximité des copropriétés du Loiret",
    sub: "Parties communes, mise en sécurité, interphonie et dépannage : je sécurise vos immeubles et je simplifie votre gestion, avec un interlocuteur unique en électricité, automatisme et interphonie.",
    icon: "panel",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Installations vétustes dans les communs", d: "Tableaux anciens, absence de repérage, éclairage défaillant : autant de risques pour la sécurité des résidents." },
      { t: "Interphonie hors service", d: "Un portier en panne, c'est un accès non contrôlé et des résidents qui ne se sentent plus en sécurité." },
      { t: "Multiplication des intervenants", d: "Électricité, interphonie, éclairage : gérer plusieurs prestataires alourdit le suivi et les budgets." },
      { t: "Urgences imprévisibles", d: "Une panne d'éclairage ou d'interphone mobilise immédiatement le conseil syndical et mécontente les résidents." },
    ],
    solutions: [
      { icon: "shield", t: "Mise en sécurité des parties communes", d: "Diagnostic, mise aux normes NF C 15-100 et reprise des points dégradés : vos communs sécurisés." },
      { icon: "intercom", t: "Interphonie & portiers vidéo", d: "Installation et remplacement d'interphones et portiers vidéo, avec ouverture à distance et accès contrôlé." },
      { icon: "bulb", t: "Éclairage des communs", d: "Éclairage LED économe avec détection de présence dans halls, cages d'escalier et extérieurs." },
      { icon: "wrench", t: "Dépannage réactif", d: "Un artisan de proximité disponible 7j/7 pour limiter l'impact des incidents sur les résidents." },
    ],
    advIntro:
      "Un interlocuteur unique et réactif pour vos parties communes : mise en sécurité, interphonie, éclairage et dépannage, à Beaugency et dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Gérer l'électricité d'une copropriété, c'est concilier sécurité des résidents, conformité et maîtrise des charges. J'accompagne les copropriétés et conseils syndicaux du Loiret avec un interlocuteur unique, des devis clairs et présentables en assemblée générale, et une vraie réactivité.",
    services: [SC.renovation, SC.interphonie, SC.eclairage, SC.depannage],
    faq: [
      { q: "Établissez-vous des devis présentables en assemblée générale ?", a: "Oui. Mes devis sont détaillés et lisibles pour être présentés et votés en AG, avec les options clairement distinguées." },
      { q: "Intervenez-vous sur l'interphonie des parties communes ?", a: "Oui, j'installe et remplace interphones et portiers vidéo des communs, en coordination avec le conseil syndical." },
      { q: "Êtes-vous disponible en cas d'urgence ?", a: "Oui, je suis joignable 7j/7 pour les dépannages dans le Loiret, afin de limiter la gêne pour les résidents." },
    ],
    ctaTitle: "Un projet électrique en copropriété ?",
    ctaText:
      "Mise en sécurité, interphonie, éclairage ou dépannage : confiez vos parties communes à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "professionnels-bureaux",
    name: "Professionnels & bureaux",
    metaTitle: "Électricien pour professionnels & bureaux (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité équipe les professionnels et bureaux du Loiret : installations fiables, éclairage LED, mise aux normes et dépannage. Continuité d'activité assurée.",
    eyebrow: "Pour les professionnels",
    h1: "Un électricien fiable pour vos locaux professionnels",
    sub: "Continuité d'activité, éclairage performant et installations sûres : j'équipe et j'entretiens vos bureaux et locaux dans le Loiret, avec un interlocuteur unique et réactif.",
    icon: "bureau",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Coupures qui bloquent l'activité", d: "Une panne électrique, c'est une activité à l'arrêt et des pertes immédiates." },
      { t: "Éclairage vieillissant et énergivore", d: "Un éclairage inadapté fatigue vos équipes et alourdit la facture d'énergie." },
      { t: "Installations non conformes", d: "Une installation vétuste engage votre responsabilité et la sécurité de vos collaborateurs." },
      { t: "Manque de réactivité des prestataires", d: "Attendre plusieurs jours une intervention, c'est un risque pour votre exploitation." },
    ],
    solutions: [
      { icon: "shield", t: "Installations & mises aux normes", d: "Installations neuves et rénovations conformes NF C 15-100, dimensionnées pour vos usages." },
      { icon: "bulb", t: "Éclairage LED performant", d: "Remplacement de vos éclairages par des LED performantes : bureaux confortables et consommations réduites." },
      { icon: "panel", t: "Tableaux & câblage d'armoire", d: "Tableaux fiables et évolutifs, câblage soigné et repéré pour faciliter la maintenance." },
      { icon: "wrench", t: "Dépannage prioritaire", d: "Un artisan réactif pour rétablir vite le courant et préserver votre continuité d'activité." },
    ],
    advIntro:
      "Un artisan réactif et rigoureux pour vos locaux : installations sûres, éclairage économe, maintenance et dépannage, dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Pour un professionnel, la fiabilité électrique conditionne l'activité. J'accompagne les entreprises, bureaux et locaux du Loiret avec des installations sûres, un éclairage performant et une réactivité pensée pour limiter tout arrêt d'exploitation.",
    services: [SC.renovation, SC.eclairage, SC.tableau, SC.depannage],
    faq: [
      { q: "Pouvez-vous intervenir en dehors des heures d'ouverture ?", a: "Oui, dans la mesure du possible j'organise les travaux pour limiter la gêne sur votre activité, y compris en horaires décalés." },
      { q: "Réalisez-vous le passage en LED des bureaux ?", a: "Oui, je remplace vos éclairages par des sources LED performantes et économes, avec détection si besoin." },
      { q: "Intervenez-vous en urgence pour un professionnel ?", a: "Oui, je propose un dépannage prioritaire pour rétablir rapidement votre installation et préserver votre exploitation." },
    ],
    ctaTitle: "Des locaux professionnels à équiper ou dépanner ?",
    ctaText:
      "Installation, éclairage, mise aux normes ou dépannage : confiez vos locaux à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "commerces",
    name: "Commerces",
    metaTitle: "Électricien pour commerces à Beaugency (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité accompagne les commerces du Loiret : mise aux normes, éclairage attractif, dépannage rapide. Protégez votre activité et votre chiffre d'affaires.",
    eyebrow: "Pour les commerces",
    h1: "Un électricien réactif pour votre commerce",
    sub: "Sécurité, éclairage attractif et dépannage rapide : je protège votre point de vente et votre chiffre d'affaires, à Beaugency et dans tout le Loiret.",
    icon: "intercom",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Une panne, et la boutique ferme", d: "Sans électricité, pas de caisse, pas d'éclairage, pas de vente : chaque heure compte." },
      { t: "Éclairage peu vendeur", d: "Un éclairage mal pensé dévalorise vos produits et votre vitrine." },
      { t: "Installation non conforme (ERP)", d: "Un commerce recevant du public doit respecter des règles de sécurité strictes." },
      { t: "Interventions qui traînent", d: "Attendre plusieurs jours un dépannage, c'est du chiffre d'affaires perdu." },
    ],
    solutions: [
      { icon: "bulb", t: "Éclairage de vitrine & magasin", d: "Éclairage LED attractif et économe pour mettre en valeur vos produits et votre enseigne." },
      { icon: "shield", t: "Mise aux normes & sécurité", d: "Installation conforme NF C 15-100 et mise en sécurité adaptée à un local recevant du public." },
      { icon: "panel", t: "Tableau & circuits dédiés", d: "Tableau fiable et circuits dédiés pour vos équipements (froid, caisse, réserve)." },
      { icon: "wrench", t: "Dépannage rapide", d: "Un artisan réactif pour rétablir vite votre activité et limiter les pertes." },
    ],
    advIntro:
      "Un artisan de proximité, rapide et fiable, pour sécuriser votre commerce et valoriser votre point de vente dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Dans un commerce, une panne électrique se traduit immédiatement en chiffre d'affaires perdu. J'accompagne les commerçants du Loiret avec des installations sûres, un éclairage qui valorise vos produits et une réactivité à toute épreuve.",
    services: [SC.eclairage, SC.renovation, SC.tableau, SC.depannage],
    faq: [
      { q: "Pouvez-vous intervenir hors des heures d'ouverture ?", a: "Oui, dans la mesure du possible j'interviens en dehors de vos horaires pour ne pas perturber votre activité." },
      { q: "Réalisez-vous l'éclairage de vitrine ?", a: "Oui, je conçois et installe un éclairage LED attractif et économe pour vitrines et surfaces de vente." },
      { q: "Mon local recevant du public est-il concerné par des règles spécifiques ?", a: "Oui, un ERP obéit à des exigences de sécurité renforcées. Je réalise une installation conforme et sécurisée adaptée à votre local." },
    ],
    ctaTitle: "Un commerce à équiper, sécuriser ou dépanner ?",
    ctaText:
      "Éclairage, mise aux normes ou dépannage rapide : confiez votre point de vente à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "proprietaires-bailleurs",
    name: "Propriétaires bailleurs",
    metaTitle: "Électricien pour propriétaires bailleurs (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité accompagne les propriétaires bailleurs du Loiret : mise aux normes avant location, rénovation et sécurisation de vos biens. Devis gratuit.",
    eyebrow: "Pour les bailleurs",
    h1: "Sécurisez et valorisez vos biens en location",
    sub: "Mise aux normes avant location, rénovation et sécurisation : je protège vos locataires et je valorise votre patrimoine, dans tout le Loiret.",
    icon: "nodes",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Installation non conforme avant location", d: "Un logement loué doit présenter une installation électrique sûre et conforme." },
      { t: "Responsabilité engagée", d: "En cas d'incident électrique, la responsabilité du propriétaire peut être recherchée." },
      { t: "Logements vétustes entre deux locataires", d: "Le changement de locataire est le bon moment pour remettre l'électricité à niveau." },
      { t: "Coordination à distance", d: "Gérer des travaux sans être sur place demande un artisan fiable et autonome." },
    ],
    solutions: [
      { icon: "shield", t: "Mise aux normes avant location", d: "Diagnostic et remise à niveau NF C 15-100 pour louer en toute sérénité." },
      { icon: "panel", t: "Remplacement de tableau", d: "Tableau neuf, protégé et repéré, pour sécuriser durablement le logement." },
      { icon: "bulb", t: "Rafraîchissement & éclairage", d: "Reprise des points électriques et éclairage LED pour valoriser le bien entre deux locataires." },
      { icon: "wrench", t: "Dépannage locatif", d: "Un interlocuteur unique et réactif pour les pannes signalées par vos locataires." },
    ],
    advIntro:
      "Un artisan fiable et autonome pour sécuriser vos biens et rassurer vos locataires, à Beaugency et dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Louer un logement, c'est engager sa responsabilité sur la sécurité de l'installation électrique. J'accompagne les propriétaires bailleurs du Loiret pour la mise aux normes, la rénovation et le dépannage de leurs biens, avec un interlocuteur unique et de confiance.",
    services: [SC.renovation, SC.tableau, SC.eclairage, SC.depannage],
    faq: [
      { q: "Une mise aux normes est-elle obligatoire avant de louer ?", a: "L'installation d'un logement loué doit être sûre. Je réalise le diagnostic et la remise à niveau nécessaire pour louer en toute sérénité." },
      { q: "Pouvez-vous coordonner les travaux sans que je sois présent ?", a: "Oui, en artisan unique et autonome j'organise l'intervention et vous tiens informé, même à distance." },
      { q: "Intervenez-vous pour les pannes signalées par mes locataires ?", a: "Oui, je propose un dépannage réactif pour vos logements en location dans le Loiret." },
    ],
    ctaTitle: "Un bien à mettre aux normes avant location ?",
    ctaText:
      "Mise aux normes, rénovation ou dépannage locatif : confiez votre bien à un artisan du Loiret fiable et à l'écoute.",
  },
  {
    slug: "agences-immobilieres",
    name: "Agences immobilières",
    metaTitle: "Électricien partenaire des agences immobilières (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité, partenaire des agences immobilières du Loiret : mise en conformité, devis rapides et travaux pour débloquer vos transactions. Devis gratuit.",
    eyebrow: "Pour les agences",
    h1: "Le partenaire électricien de votre agence immobilière",
    sub: "Un artisan réactif pour débloquer vos transactions : conformité, devis rapides et travaux tenus, à Beaugency et dans tout le Loiret.",
    icon: "shield",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Ventes bloquées par l'électricité", d: "Un diagnostic défavorable peut retarder ou faire échouer une transaction." },
      { t: "Besoin de devis rapides", d: "Pour rassurer acheteurs et vendeurs, il faut un chiffrage clair et rapide." },
      { t: "Délais de travaux serrés", d: "Entre compromis et acte, chaque semaine compte pour tenir les délais." },
      { t: "Fiabilité du prestataire", d: "Vous engagez votre image en recommandant un artisan à vos clients." },
    ],
    solutions: [
      { icon: "shield", t: "Mise en conformité", d: "Remise à niveau NF C 15-100 pour lever les points bloquants d'un diagnostic électrique." },
      { icon: "panel", t: "Travaux avant vente", d: "Tableau, circuits, sécurité : les travaux nécessaires pour valoriser et vendre le bien." },
      { icon: "bulb", t: "Rafraîchissement du bien", d: "Éclairage et reprises électriques pour présenter un logement sous son meilleur jour." },
      { icon: "wrench", t: "Réactivité & devis rapides", d: "Un artisan disponible pour des chiffrages rapides et des interventions tenues." },
    ],
    advIntro:
      "Un partenaire de confiance pour vos transactions : conformité, devis rapides et travaux tenus, dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Pour une agence, un point électrique bloquant peut compromettre une vente. Je travaille avec les agences immobilières du Loiret comme un partenaire réactif : diagnostics traités vite, devis clairs et travaux tenus pour sécuriser vos transactions.",
    services: [SC.renovation, SC.tableau, SC.eclairage, SC.depannage],
    faq: [
      { q: "Pouvez-vous établir un devis rapidement ?", a: "Oui, je m'organise pour vous fournir un chiffrage clair et rapide, afin de ne pas retarder vos transactions." },
      { q: "Levez-vous les points bloquants d'un diagnostic électrique ?", a: "Oui, je réalise les travaux de mise en conformité nécessaires pour débloquer la vente." },
      { q: "Puis-je vous recommander à mes clients en confiance ?", a: "Oui : artisan qualifié, assuré et de proximité, je soigne chaque intervention comme votre image en dépend." },
    ],
    ctaTitle: "Une transaction à débloquer ?",
    ctaText:
      "Mise en conformité, travaux avant vente ou devis rapide : appuyez-vous sur un artisan du Loiret réactif et fiable.",
  },
  {
    slug: "residences-lotissements",
    name: "Résidences & lotissements",
    metaTitle: "Électricien pour résidences & lotissements (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité pour résidences et lotissements du Loiret : installation soignée, automatisme de portails, interphonie et éclairage extérieur. Devis gratuit.",
    eyebrow: "Pour les résidences",
    h1: "Un artisan rigoureux pour vos résidences et lotissements",
    sub: "Installation soignée, automatisme d'accès, interphonie et éclairage extérieur : j'équipe vos logements neufs ou rénovés dans tout le Loiret.",
    icon: "house",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Accès à sécuriser", d: "Portails et entrées d'une résidence doivent être fiables, sûrs et pratiques au quotidien." },
      { t: "Interphonie multi-logements", d: "Un système d'accès mal conçu génère des pannes et des mécontentements." },
      { t: "Éclairage extérieur défaillant", d: "Allées et parkings mal éclairés posent un problème de sécurité et de confort." },
      { t: "Finitions négligées", d: "Sur un logement neuf ou rénové, la qualité des finitions électriques fait la différence." },
    ],
    solutions: [
      { icon: "bolt", t: "Automatisme de portails", d: "Motorisation fiable et sécurisée des accès, avec commande à distance." },
      { icon: "intercom", t: "Interphonie & contrôle d'accès", d: "Interphones et portiers vidéo adaptés aux résidences multi-logements." },
      { icon: "bulb", t: "Éclairage extérieur", d: "Éclairage LED des allées, parkings et parties extérieures, avec détection." },
      { icon: "shield", t: "Installation soignée & conforme", d: "Travaux propres, conformes NF C 15-100 et pensés pour durer." },
    ],
    advIntro:
      "Un artisan méticuleux pour vos résidences et lotissements : automatisme, interphonie, éclairage et installation soignée, dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Sur une résidence ou un lotissement, la qualité de l'électricité se voit dans les détails : un accès fiable, une interphonie sans faille, un éclairage extérieur bien pensé. J'équipe les logements neufs et rénovés du Loiret avec rigueur et le souci du travail bien fini.",
    services: [SC.automatisme, SC.interphonie, SC.eclairage, SC.renovation],
    faq: [
      { q: "Installez-vous les portails automatiques d'une résidence ?", a: "Oui, je motorise et sécurise les accès, avec commande à distance et sécurités réglementaires." },
      { q: "Gérez-vous l'interphonie multi-logements ?", a: "Oui, j'installe interphones et portiers vidéo adaptés aux résidences et petits collectifs." },
      { q: "Assurez-vous l'éclairage extérieur des communs ?", a: "Oui, j'installe un éclairage LED des allées et parkings, avec détection de présence pour la sécurité." },
    ],
    ctaTitle: "Une résidence ou un lotissement à équiper ?",
    ctaText:
      "Automatisme, interphonie, éclairage ou installation : confiez votre projet à un artisan du Loiret rigoureux et à l'écoute.",
  },
  {
    slug: "collectivites",
    name: "Collectivités",
    metaTitle: "Électricien pour collectivités du Loiret — Pro San Electricité",
    metaDescription:
      "Pro San Electricité intervient pour les collectivités du Loiret : petits travaux électriques, éclairage, mise en sécurité et dépannage des bâtiments communaux. Devis gratuit.",
    eyebrow: "Pour les collectivités",
    h1: "Un artisan de confiance pour vos bâtiments communaux",
    sub: "Petits travaux, éclairage, mise en sécurité et dépannage des bâtiments publics : un lot électrique maîtrisé, planning tenu et budget respecté, dans le Loiret.",
    icon: "wrench",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Bâtiments publics à sécuriser", d: "Salles, écoles, locaux techniques : la sécurité électrique du public est une priorité." },
      { t: "Budgets à respecter", d: "Une collectivité a besoin d'un chiffrage clair et d'un budget tenu." },
      { t: "Plannings contraints", d: "Les interventions doivent s'organiser autour des usages (vacances, hors public)." },
      { t: "Réactivité attendue", d: "Une panne dans un bâtiment communal doit être traitée rapidement." },
    ],
    solutions: [
      { icon: "shield", t: "Mise en sécurité", d: "Diagnostic et mise aux normes NF C 15-100 des bâtiments recevant du public." },
      { icon: "bulb", t: "Éclairage intérieur & extérieur", d: "Éclairage LED économe des salles, locaux et abords communaux." },
      { icon: "panel", t: "Petits travaux & tableaux", d: "Reprises électriques, tableaux et circuits dédiés, réalisés proprement." },
      { icon: "wrench", t: "Dépannage des bâtiments", d: "Un artisan réactif pour les pannes des bâtiments publics du secteur." },
    ],
    advIntro:
      "Un artisan de proximité pour vos bâtiments communaux : mise en sécurité, éclairage, petits travaux et dépannage, dans le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Les collectivités ont besoin d'un artisan fiable pour l'entretien et la mise en sécurité de leurs bâtiments. J'accompagne les communes du Loiret sur les petits travaux électriques, l'éclairage et le dépannage, avec un chiffrage clair et le respect des plannings.",
    services: [SC.renovation, SC.eclairage, SC.tableau, SC.depannage],
    faq: [
      { q: "Intervenez-vous sur les bâtiments recevant du public ?", a: "Oui, je réalise la mise en sécurité et les travaux électriques des bâtiments communaux, dans le respect des exigences applicables." },
      { q: "Pouvez-vous respecter un budget et un planning fixés ?", a: "Oui, je fournis un devis clair et j'organise l'intervention pour tenir le budget et les délais convenus." },
      { q: "Assurez-vous le dépannage des bâtiments communaux ?", a: "Oui, je propose un dépannage réactif pour les bâtiments publics du secteur." },
    ],
    ctaTitle: "Des bâtiments communaux à entretenir ou sécuriser ?",
    ctaText:
      "Mise en sécurité, éclairage, petits travaux ou dépannage : confiez vos bâtiments à un artisan du Loiret fiable et réactif.",
  },
  {
    slug: "particuliers",
    name: "Particuliers",
    metaTitle: "Électricien pour particuliers à Beaugency (Loiret) — Pro San",
    metaDescription:
      "Pro San Electricité pour les particuliers du Loiret : rénovation, mise aux normes, éclairage, automatisme de portail et dépannage. En toute confiance. Devis gratuit.",
    eyebrow: "Pour les particuliers",
    h1: "Votre électricien de confiance à la maison",
    sub: "Rénovation, mise aux normes, éclairage, automatisme de portail et dépannage : je m'occupe de votre logement en toute confiance, à Beaugency et dans tout le Loiret.",
    icon: "lightning",
    ctaLabel: "Demander un devis",
    pains: [
      { t: "Installation ancienne ou risquée", d: "Une électricité vétuste, c'est un risque pour votre famille et votre logement." },
      { t: "Portail et accès peu pratiques", d: "Manœuvrer un portail à la main au quotidien, c'est du temps perdu et un accès peu sûr." },
      { t: "Éclairage à moderniser", d: "Un éclairage daté et énergivore pèse sur le confort et la facture." },
      { t: "Pannes qui tombent au mauvais moment", d: "Une coupure un dimanche, c'est le confort et la sécurité de la maison en jeu." },
    ],
    solutions: [
      { icon: "shield", t: "Rénovation & mise aux normes", d: "Une installation sûre, conforme et durable, du diagnostic à la finition." },
      { icon: "bolt", t: "Automatisme de portail", d: "Motorisation de portails et portes de garage, pour un accès confortable et sécurisé." },
      { icon: "bulb", t: "Éclairage & lumière", d: "Éclairage intérieur et extérieur LED, ambiances et détection de présence." },
      { icon: "wrench", t: "Dépannage 24h/24", d: "Un artisan réactif, disponible 7j/7, y compris le dimanche." },
    ],
    advIntro:
      "Un artisan proche et à l'écoute pour votre logement : rénovation, automatisme, éclairage et dépannage, à Beaugency et dans tout le Loiret.",
    advList: ADV_COMMON,
    prose:
      "Chez vous, l'électricité doit être sûre, pratique et confortable. J'accompagne les particuliers du Loiret pour la rénovation, la mise aux normes, l'éclairage, l'automatisme de portail et le dépannage — avec écoute, conseils et un devis clair et gratuit.",
    services: [SC.renovation, SC.automatisme, SC.eclairage, SC.depannage],
    faq: [
      { q: "Le devis est-il gratuit ?", a: "Oui, je me déplace, j'établis un diagnostic et je vous remets un devis détaillé, clair et sans engagement." },
      { q: "Intervenez-vous en urgence le week-end ?", a: "Oui, je suis disponible 24h/24 et 7j/7 pour les urgences, y compris le dimanche et les jours fériés." },
      { q: "Pouvez-vous motoriser mon portail existant ?", a: "Oui, dans la plupart des cas j'installe une motorisation adaptée à votre portail et à votre alimentation." },
    ],
    ctaTitle: "Un projet électrique à la maison ?",
    ctaText:
      "Rénovation, automatisme, éclairage ou dépannage : confiez votre logement à un artisan du Loiret réactif et à l'écoute.",
  },
];

export const secteurBySlug = (slug: string): Secteur | undefined =>
  secteurs.find((s) => s.slug === slug);
