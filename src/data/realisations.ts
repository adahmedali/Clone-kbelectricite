import type { IconName } from "@/components/detail/shared";

export type RealisationService = {
  slug: string;
  title: string;
  lead: string;
  icon: IconName;
};

export type Realisation = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  sector: string;
  sectorIcon: IconName;
  city: string;
  cp: string;
  date: string;
  story: { problem: string; intervention: string; result: string };
  ctaTitle: string;
  ctaText: string;
  services: RealisationService[];
};

export const realisations: Realisation[] = [
  {
    slug: "renovation-pavillon-beaugency",
    title: "Rénovation électrique complète d'un pavillon",
    metaTitle:
      "Rénovation électrique d'un pavillon à Beaugency — Pro San Electricité",
    metaDescription:
      "Étude de cas : rénovation électrique complète et mise aux normes NF C 15-100 d'un pavillon à Beaugency par Pro San Electricité. Tableau neuf, sécurité rétablie.",
    sector: "Particulier",
    sectorIcon: "lightning",
    city: "Beaugency",
    cp: "45190",
    date: "mars 2026",
    story: {
      problem:
        "Un pavillon des années 1970 à Beaugency présentait une installation vétuste : tableau sans différentiel 30 mA, circuits sous-dimensionnés, absence de prise de terre fiable et fils apparents dans plusieurs pièces. Les propriétaires, qui venaient d'acheter, s'inquiétaient à juste titre pour la sécurité de leur famille.",
      intervention:
        "J'ai réalisé un diagnostic complet, puis remplacé le tableau électrique et repris l'ensemble des circuits aux normes NF C 15-100 : mise à la terre, protections différentielles, nombre de prises adapté à chaque pièce et repérage clair. Les travaux ont été planifiés pour limiter la coupure de courant au strict nécessaire.",
      result:
        "Le pavillon dispose désormais d'une installation sûre, conforme et évolutive. Le tableau est lisible et repéré, la famille est protégée et l'installation est prête pour les usages d'aujourd'hui comme de demain.",
    },
    ctaTitle: "Un projet de rénovation électrique à confier ?",
    ctaText:
      "Rénovation, mise aux normes, tableau ou dépannage : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
    services: [
      {
        slug: "renovation-mise-aux-normes",
        title: "Rénovation & mise aux normes",
        lead: "Rénovation électrique complète ou partielle et mise aux normes NF C 15-100. Une installation sûre, durable et conforme, du diagnostic à la finition.",
        icon: "shield",
      },
      {
        slug: "tableau-armoire",
        title: "Tableau & câblage d'armoire",
        lead: "Remplacement de tableau vétuste, mise aux normes et câblage soigné. Une installation repérée, protégée et sécurisée — protection différentielle garantie.",
        icon: "panel",
      },
    ],
  },
  {
    slug: "automatisme-portail-meung",
    title: "Motorisation d'un portail coulissant",
    metaTitle:
      "Motorisation d'un portail à Meung-sur-Loire — Pro San Electricité",
    metaDescription:
      "Étude de cas : motorisation d'un portail coulissant à Meung-sur-Loire par Pro San Electricité. Portail sécurisé, commandé à distance et entretenu.",
    sector: "Particulier",
    sectorIcon: "bolt",
    city: "Meung-sur-Loire",
    cp: "45130",
    date: "février 2026",
    story: {
      problem:
        "À Meung-sur-Loire, un couple manœuvrait chaque jour à la main un lourd portail coulissant, peu pratique et peu sécurisé. Ils souhaitaient automatiser l'accès de leur propriété, tout en garantissant la sécurité des personnes et la fiabilité dans le temps.",
      intervention:
        "Après étude du portail et de l'alimentation existante, j'ai installé une motorisation adaptée au poids et à la longueur du vantail : moteur, crémaillère, cellules de sécurité, feu clignotant et télécommandes. J'ai tiré une ligne dédiée et protégée depuis le tableau, puis réglé et testé l'ensemble.",
      result:
        "Le portail s'ouvre désormais à distance, en toute sécurité, avec arrêt automatique en cas d'obstacle. Un entretien simple a été mis en place pour garantir la longévité de l'installation. Une entrée automatisée fiable et confortable au quotidien.",
    },
    ctaTitle: "Un portail à motoriser ?",
    ctaText:
      "Automatisme de portail, motorisation de porte de garage ou entretien : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
    services: [
      {
        slug: "automatisme-portail",
        title: "Automatisme de portail",
        lead: "Motorisation de portails et portes de garage, dépannage et entretien. Un accès sécurisé, confortable et commandé à distance au quotidien.",
        icon: "bolt",
      },
      {
        slug: "depannage-urgence",
        title: "Dépannage & urgences",
        lead: "Diagnostic rapide et remise en service efficace, 24h/24 et 7j/7. La continuité de votre confort et de votre sécurité, préservée.",
        icon: "wrench",
      },
    ],
  },
  {
    slug: "interphone-copropriete-clery",
    title: "Interphone vidéo & mise en sécurité d'une copropriété",
    metaTitle:
      "Interphone vidéo d'une copropriété à Cléry-Saint-André — Pro San",
    metaDescription:
      "Étude de cas : installation d'un interphone vidéo et mise en sécurité des parties communes d'une copropriété à Cléry-Saint-André par Pro San Electricité.",
    sector: "Copropriété",
    sectorIcon: "panel",
    city: "Cléry-Saint-André",
    cp: "45370",
    date: "janvier 2026",
    story: {
      problem:
        "Les parties communes d'une petite copropriété de Cléry-Saint-André souffraient d'un interphone hors service et d'un éclairage défaillant. L'accès n'était plus contrôlé et les résidents ne se sentaient plus en sécurité dans le hall et la cage d'escalier.",
      intervention:
        "J'ai déposé l'ancien système et installé un interphone vidéo avec platine de rue et combinés par logement. J'ai remis en sécurité l'éclairage des communs (détection de présence, sources LED) et repris les points électriques dégradés, en coordination avec le conseil syndical.",
      result:
        "Les résidents bénéficient d'un accès contrôlé, d'une vidéo claire à la platine et d'un éclairage fiable et économe. Une installation simple, durable et rassurante au quotidien, livrée avec les explications d'usage.",
    },
    ctaTitle: "Des parties communes à sécuriser ?",
    ctaText:
      "Interphonie, éclairage des communs, mise en sécurité ou dépannage : confiez vos parties communes à un artisan du Loiret réactif et à l'écoute.",
    services: [
      {
        slug: "interphonie-domotique",
        title: "Interphonie / domotique",
        lead: "Interphones et portiers vidéo, domotique et petits réseaux. Un accès contrôlé, simple à utiliser et fiable dans la durée.",
        icon: "intercom",
      },
      {
        slug: "eclairage-lumiere",
        title: "Éclairage & installation de lumière",
        lead: "Éclairage intérieur et extérieur, LED économiques, détection de présence. Une lumière confortable, maîtrisée et durable.",
        icon: "bulb",
      },
    ],
  },
];

export const realisationBySlug = (slug: string): Realisation | undefined =>
  realisations.find((r) => r.slug === slug);
