import type { IconName } from "@/components/detail/shared";

export type ServiceReal = { slug: string; meta: string; title: string };

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  icon: IconName;
  answer: string;
  sections: { h2: string; paragraphs: string[] }[];
  benefits: string[];
  solve: string;
  testimonial: { quote: string; author: string };
  reals: ServiceReal[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

const REAL = {
  renovation: {
    slug: "renovation-pavillon-beaugency",
    meta: "Particulier · Beaugency (45190)",
    title: "Rénovation électrique complète d'un pavillon",
  },
  portail: {
    slug: "automatisme-portail-meung",
    meta: "Particulier · Meung-sur-Loire (45130)",
    title: "Motorisation d'un portail coulissant",
  },
  interphone: {
    slug: "interphone-copropriete-clery",
    meta: "Copropriété · Cléry-Saint-André (45370)",
    title: "Interphone vidéo & mise en sécurité d'une copropriété",
  },
};

export const services: Service[] = [
  {
    slug: "renovation-mise-aux-normes",
    title: "Rénovation & mise aux normes électriques",
    metaTitle: "Rénovation & mise aux normes électriques à Beaugency — Pro San",
    metaDescription:
      "Rénovation électrique et mise aux normes NF C 15-100 à Beaugency et dans le Loiret par Pro San Electricité : tableau, circuits, mise à la terre. Devis gratuit.",
    eyebrow: "Électricité générale",
    lead: "Rénovation électrique complète ou partielle et mise aux normes NF C 15-100. Une installation sûre, durable et conforme, du diagnostic à la finition.",
    icon: "shield",
    answer:
      "La rénovation électrique consiste à remettre une installation vétuste ou non conforme au niveau de sécurité de la norme NF C 15-100 : tableau, protections différentielles, mise à la terre et réfection des circuits. Elle s'impose en cas de vétusté, avant une vente ou une location, ou après un logement resté longtemps sans travaux.",
    sections: [
      {
        h2: "Rénovation électrique à Beaugency et dans le Loiret",
        paragraphs: [
          "Une installation ancienne ou bricolée expose à des risques réels : échauffements, courts-circuits, absence de protection des personnes. Je rénove votre installation électrique et la remets aux normes NF C 15-100 — remplacement du tableau, réfection des circuits, mise à la terre et repérage clair.",
          "Rénovation complète ou partielle : j'adapte l'intervention à l'état de votre installation et à votre budget, pour une électricité sûre, conforme et durable.",
        ],
      },
      {
        h2: "Une installation conforme et sécurisée",
        paragraphs: [
          "De la mise aux normes à la réfection complète, je réalise une installation dimensionnée pour vos usages d'aujourd'hui et de demain. Le remplacement du tableau et un câblage soigné sont souvent au cœur d'une rénovation réussie.",
          "Vous sécurisez votre foyer ou votre local et vous êtes tranquille sur la conformité de votre installation.",
        ],
      },
      {
        h2: "Quel budget prévoir ?",
        paragraphs: [
          "Le coût d'une mise aux normes dépend de la surface, de l'état initial, du nombre de circuits à reprendre et du caractère total ou partiel des travaux. Une remise à niveau ciblée reste mesurée ; une reprise complète représente un investissement plus important, mais durable.",
          "Chaque situation étant différente, seul un diagnostic sur place permet un chiffrage fiable. Chez Pro San Electricité, le devis est gratuit, détaillé et sans engagement.",
        ],
      },
    ],
    benefits: [
      "Rénovation électrique complète ou partielle",
      "Mise aux normes NF C 15-100",
      "Tableau neuf, repéré et protégé",
      "Mise à la terre et protections différentielles",
      "Sécurité des occupants et tranquillité",
    ],
    solve:
      "installation vétuste ou non conforme, risques électriques, logement ancien, sécurité à rétablir avant une vente ou une location.",
    testimonial: {
      quote: "“Je recommande. Beau travail réalisé chez moi. Compétent et sympa.”",
      author: "Marceau L.",
    },
    reals: [REAL.renovation],
    faq: [
      {
        q: "Qu'est-ce qu'une rénovation électrique ?",
        a: "C'est la remise d'une installation vétuste ou non conforme au niveau de sécurité actuel : remplacement du tableau, réfection des circuits, mise à la terre et mise aux normes NF C 15-100. Elle peut être complète ou partielle.",
      },
      {
        q: "Quand faut-il rénover son installation électrique ?",
        a: "Lorsque l'installation est ancienne (plus de 25-30 ans), présente des risques (absence de différentiel, fils vétustes), lors d'une rénovation du logement, ou avant une mise en location ou une vente.",
      },
      {
        q: "Qu'est-ce que la norme NF C 15-100 ?",
        a: "C'est la norme de référence des installations électriques basse tension en France. Elle garantit la sécurité des personnes et des biens.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Je me déplace, j'établis un diagnostic et je vous remets un devis détaillé, clair et sans engagement.",
      },
    ],
    ctaTitle: "Besoin d'une rénovation ou d'une mise aux normes ?",
    ctaText:
      "Rénovation, tableau, mise à la terre ou dépannage : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "tableau-armoire",
    title: "Tableau électrique & câblage d'armoire",
    metaTitle: "Tableau électrique & câblage d'armoire à Beaugency — Pro San",
    metaDescription:
      "Remplacement de tableau électrique et câblage d'armoire à Beaugency et dans le Loiret : mise aux normes, protection différentielle, repérage. Devis gratuit.",
    eyebrow: "Électricité générale",
    lead: "Remplacement de tableau vétuste, mise aux normes et câblage soigné. Une installation repérée, protégée et sécurisée — protection différentielle garantie.",
    icon: "panel",
    answer:
      "Le tableau électrique est le cœur de votre installation : il protège les circuits et les personnes. Le remplacer devient nécessaire quand il est ancien, saturé, sans différentiel 30 mA ou non repéré. Un tableau neuf, c'est une installation lisible, sûre et évolutive.",
    sections: [
      {
        h2: "Remplacement de tableau électrique",
        paragraphs: [
          "Je remplace votre tableau vétuste par un tableau conforme NF C 15-100 : disjoncteurs adaptés, interrupteurs différentiels 30 mA, répartition claire des circuits et repérage complet. Vous gagnez en sécurité et en confort d'usage.",
          "Chaque circuit est identifié : plus besoin de deviner quel disjoncteur coupe quelle pièce.",
        ],
      },
      {
        h2: "Câblage d'armoire soigné",
        paragraphs: [
          "Pour une maison, une dépendance, un local ou de petites installations tertiaires, je réalise un câblage d'armoire propre et durable, pensé pour faciliter toute intervention future.",
          "Un travail méthodique, dimensionné pour vos besoins et évolutif dans le temps.",
        ],
      },
    ],
    benefits: [
      "Remplacement de tableau vétuste ou saturé",
      "Protection différentielle 30 mA",
      "Repérage clair de tous les circuits",
      "Câblage d'armoire propre et durable",
      "Installation évolutive et conforme",
    ],
    solve:
      "tableau ancien ou saturé, absence de différentiel, circuits non repérés, besoin d'ajouter des protections.",
    testimonial: {
      quote:
        "“Professionnel très sérieux dans son travail et sa relation au client. Je recommande.”",
      author: "Fabienne D.",
    },
    reals: [REAL.renovation],
    faq: [
      {
        q: "Pourquoi remplacer mon tableau électrique ?",
        a: "Un tableau ancien peut manquer de protection différentielle 30 mA, être saturé ou mal repéré. Le remplacer sécurise l'installation et permet d'ajouter de nouveaux circuits en toute sérénité.",
      },
      {
        q: "Le repérage des circuits est-il inclus ?",
        a: "Oui. Chaque circuit est identifié sur le tableau, ce qui facilite l'usage au quotidien et toute intervention future.",
      },
      {
        q: "Intervenez-vous sur les petites installations professionnelles ?",
        a: "Oui, je réalise le câblage d'armoire pour les locaux, dépendances et petites installations tertiaires, en plus des logements.",
      },
    ],
    ctaTitle: "Un tableau à remplacer ou une armoire à câbler ?",
    ctaText:
      "Tableau, protections, repérage ou câblage d'armoire : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "eclairage-lumiere",
    title: "Éclairage & installation de lumière",
    metaTitle: "Éclairage & installation de lumière à Beaugency — Pro San",
    metaDescription:
      "Éclairage intérieur et extérieur, LED économiques et détection de présence à Beaugency et dans le Loiret par Pro San Electricité. Devis gratuit.",
    eyebrow: "Électricité générale",
    lead: "Éclairage intérieur et extérieur, LED économiques, détection de présence. Une lumière confortable, maîtrisée et durable.",
    icon: "bulb",
    answer:
      "Bien pensé, l'éclairage transforme le confort d'un logement et réduit la facture. Points lumineux, spots, LED, éclairage extérieur et détection de présence : je conçois et j'installe une lumière adaptée à chaque pièce et à chaque usage.",
    sections: [
      {
        h2: "Éclairage intérieur",
        paragraphs: [
          "Je crée ou modifie vos points lumineux, installe spots, appliques et rubans LED, et pose des variateurs pour ajuster l'ambiance. Un éclairage bien dosé met en valeur vos pièces tout en réduisant la consommation.",
          "Rénovation ou installation neuve : je m'adapte à votre décoration et à vos habitudes.",
        ],
      },
      {
        h2: "Éclairage extérieur & détection",
        paragraphs: [
          "Terrasses, allées, façades, portails : j'installe un éclairage extérieur robuste et économe, avec détecteurs de présence pour la sécurité et le confort. Vous éclairez juste ce qu'il faut, quand il faut.",
          "Des sources LED durables, pour un entretien quasi nul et des consommations réduites.",
        ],
      },
    ],
    benefits: [
      "Éclairage intérieur et extérieur",
      "LED économiques et durables",
      "Détection de présence et minuteries",
      "Variateurs et création d'ambiances",
      "Consommations et entretien réduits",
    ],
    solve:
      "éclairage insuffisant ou vieillissant, factures élevées, besoin de sécuriser les extérieurs, envie de moderniser l'ambiance.",
    testimonial: {
      quote: "“Je recommande. Beau travail réalisé chez moi. Compétent et sympa.”",
      author: "Marceau L.",
    },
    reals: [REAL.interphone],
    faq: [
      {
        q: "Passer en LED est-il vraiment rentable ?",
        a: "Oui. Les LED consomment nettement moins et durent beaucoup plus longtemps que les sources classiques, pour un entretien quasi nul et une facture allégée.",
      },
      {
        q: "Installez-vous l'éclairage extérieur ?",
        a: "Oui : allées, terrasses, façades et portails, avec détecteurs de présence pour la sécurité et le confort.",
      },
      {
        q: "Pouvez-vous ajouter des points lumineux dans une pièce existante ?",
        a: "Oui, je crée ou déplace des points lumineux, pose des spots et installe des variateurs, en rénovation comme en neuf.",
      },
    ],
    ctaTitle: "Un projet d'éclairage à concrétiser ?",
    ctaText:
      "Éclairage intérieur, extérieur, LED ou détection : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "automatisme-portail",
    title: "Automatisme de portail",
    metaTitle: "Automatisme & motorisation de portail à Beaugency — Pro San",
    metaDescription:
      "Motorisation de portails et portes de garage à Beaugency et dans le Loiret : installation, dépannage et entretien. Accès sécurisé et commandé à distance. Devis gratuit.",
    eyebrow: "Automatisme & courant faible",
    lead: "Motorisation de portails et portes de garage, dépannage et entretien. Un accès sécurisé, confortable et commandé à distance au quotidien.",
    icon: "bolt",
    answer:
      "Motoriser un portail, c'est gagner en confort et en sécurité : ouverture à distance, arrêt automatique en cas d'obstacle, fermeture temporisée. J'installe, dépanne et entretiens les portails coulissants et battants ainsi que les portes de garage.",
    sections: [
      {
        h2: "Motorisation de portails et portes de garage",
        paragraphs: [
          "Portail coulissant ou battant, porte de garage : j'installe une motorisation adaptée au poids, à la longueur et à l'alimentation disponible. Cellules de sécurité, feu clignotant, télécommandes et ligne dédiée protégée depuis le tableau — l'installation est complète et réglée dans les règles.",
          "Vous ouvrez et fermez votre accès sans quitter votre véhicule, en toute sécurité.",
        ],
      },
      {
        h2: "Dépannage & entretien",
        paragraphs: [
          "Un automatisme s'entretient pour durer. Je règle, remplace les pièces d'usure (cellules, batteries, télécommandes) et dépanne les motorisations existantes, quelle que soit la marque.",
          "Un entretien simple, pour une longévité maximale de votre installation.",
        ],
      },
    ],
    benefits: [
      "Motorisation de portails coulissants et battants",
      "Motorisation de portes de garage",
      "Cellules de sécurité et arrêt sur obstacle",
      "Ligne dédiée et protégée depuis le tableau",
      "Dépannage et entretien toutes marques",
    ],
    solve:
      "portail manuel peu pratique, motorisation en panne, accès à sécuriser, besoin d'ouverture à distance.",
    testimonial: {
      quote:
        "“Professionnel très sérieux dans son travail et sa relation au client. Je recommande.”",
      author: "Fabienne D.",
    },
    reals: [REAL.portail],
    faq: [
      {
        q: "Pouvez-vous motoriser un portail existant ?",
        a: "Oui, dans la plupart des cas. J'étudie le portail (poids, longueur, état) et l'alimentation disponible, puis j'installe la motorisation adaptée avec les sécurités réglementaires.",
      },
      {
        q: "Dépannez-vous les motorisations d'autres marques ?",
        a: "Oui, je dépanne et entretiens les automatismes existants toutes marques : réglages, cellules, batteries, télécommandes.",
      },
      {
        q: "L'installation est-elle sécurisée ?",
        a: "Oui : cellules de sécurité, arrêt automatique en cas d'obstacle et ligne électrique dédiée et protégée depuis le tableau.",
      },
    ],
    ctaTitle: "Un portail à motoriser ou à dépanner ?",
    ctaText:
      "Motorisation, dépannage ou entretien de portail : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "interphonie-domotique",
    title: "Interphonie / domotique",
    metaTitle: "Interphonie & domotique à Beaugency — Pro San Electricité",
    metaDescription:
      "Interphones et portiers vidéo, domotique et petits réseaux à Beaugency et dans le Loiret par Pro San Electricité. Accès contrôlé et confort au quotidien. Devis gratuit.",
    eyebrow: "Automatisme & courant faible",
    lead: "Interphones et portiers vidéo, domotique et petits réseaux. Un accès contrôlé, simple à utiliser et fiable dans la durée.",
    icon: "intercom",
    answer:
      "L'interphonie contrôle et sécurise l'accès à un logement ou à une copropriété : platine de rue, portier vidéo, ouverture à distance. Associée à un peu de domotique (éclairage, volets, commandes), elle apporte confort et tranquillité au quotidien.",
    sections: [
      {
        h2: "Interphones & portiers vidéo",
        paragraphs: [
          "J'installe et remplace interphones audio et portiers vidéo, pour une maison individuelle comme pour les parties communes d'une copropriété : platine de rue, combinés ou moniteurs par logement, gâche ou serrure électrique.",
          "Vous identifiez vos visiteurs et ouvrez à distance, en toute sécurité.",
        ],
      },
      {
        h2: "Domotique & petits réseaux",
        paragraphs: [
          "Commande d'éclairage, de volets, prises pilotées, petits réseaux VDI : je mets en place des solutions simples et fiables, sans complexité inutile, pour faciliter votre quotidien.",
          "Des équipements choisis pour durer et rester faciles à utiliser.",
        ],
      },
    ],
    benefits: [
      "Interphones audio et portiers vidéo",
      "Installations en maison et en copropriété",
      "Ouverture à distance et contrôle d'accès",
      "Domotique simple : éclairage, volets, prises",
      "Petits réseaux VDI",
    ],
    solve:
      "interphone hors service, accès non contrôlé, parties communes à sécuriser, envie de piloter éclairage et volets.",
    testimonial: {
      quote:
        "“Professionnel très sérieux dans son travail et sa relation au client. Je recommande.”",
      author: "Fabienne D.",
    },
    reals: [REAL.interphone],
    faq: [
      {
        q: "Installez-vous l'interphonie en copropriété ?",
        a: "Oui, j'installe et remplace les interphones et portiers vidéo des parties communes, en coordination avec le conseil syndical, du diagnostic à la mise en service.",
      },
      {
        q: "Peut-on remplacer un ancien interphone par un modèle vidéo ?",
        a: "Oui, dans la plupart des cas la platine et les combinés peuvent être remplacés par un portier vidéo, avec ouverture à distance.",
      },
      {
        q: "Proposez-vous de la domotique ?",
        a: "Oui, des solutions simples et fiables : commande d'éclairage, de volets, prises pilotées et petits réseaux, sans complexité inutile.",
      },
    ],
    ctaTitle: "Un interphone ou un projet domotique ?",
    ctaText:
      "Interphonie, portier vidéo ou domotique : confiez votre projet à un artisan du Loiret réactif et à l'écoute.",
  },
  {
    slug: "depannage-urgence",
    title: "Dépannage & urgences électriques",
    metaTitle: "Dépannage électrique 24h/24 à Beaugency — Pro San Electricité",
    metaDescription:
      "Dépannage électrique et urgences 24h/24 et 7j/7 à Beaugency et dans le Loiret par Pro San Electricité : panne, court-circuit, disjonction, portail bloqué. Devis gratuit.",
    eyebrow: "Intervention rapide",
    lead: "Diagnostic rapide et remise en service efficace, 24h/24 et 7j/7. La continuité de votre confort et de votre sécurité, préservée.",
    icon: "wrench",
    answer:
      "Une panne électrique, un court-circuit, une disjonction à répétition ou un portail bloqué ne peuvent pas attendre. Je diagnostique l'origine du problème et remets votre installation en service rapidement, en sécurité — y compris le week-end.",
    sections: [
      {
        h2: "Dépannage électrique 24h/24 et 7j/7",
        paragraphs: [
          "Disjoncteur qui saute, prises hors service, panne totale ou partielle, tableau qui chauffe : j'interviens vite pour identifier la cause et rétablir le courant en toute sécurité. Réactif, y compris le dimanche et les jours fériés.",
          "Un diagnostic clair, une remise en service durable — pas un simple rafistolage.",
        ],
      },
      {
        h2: "Urgences automatisme & interphonie",
        paragraphs: [
          "Portail bloqué, motorisation en panne, interphone muet : je dépanne aussi vos équipements d'automatisme et de courant faible, quelle que soit la marque.",
          "Vous retrouvez rapidement l'usage de vos accès et de votre installation.",
        ],
      },
    ],
    benefits: [
      "Intervention 24h/24 et 7j/7",
      "Diagnostic rapide et précis",
      "Remise en service durable",
      "Pannes électriques, courts-circuits, disjonctions",
      "Portails et interphones dépannés",
    ],
    solve:
      "panne de courant, disjonction à répétition, court-circuit, tableau qui chauffe, portail ou interphone bloqué.",
    testimonial: {
      quote:
        "“L'électricien est arrivé exactement à l'heure prévue, très respectueux et rassurant. Le travail a été réalisé avec sérieux et efficacité. Notre problème a été résolu le jour même, un dimanche. Je recommande sans hésiter.”",
      author: "A. Chevallier",
    },
    reals: [],
    faq: [
      {
        q: "Intervenez-vous le week-end et les jours fériés ?",
        a: "Oui. Je suis disponible 24h/24 et 7j/7 pour les urgences électriques dans le Loiret, y compris le dimanche et les jours fériés.",
      },
      {
        q: "Que faire en cas de panne totale ?",
        a: "Coupez l'alimentation générale et appelez-moi : je diagnostique l'origine (tableau, circuit, appareil) et je remets votre installation en service en toute sécurité.",
      },
      {
        q: "Dépannez-vous aussi les portails et interphones ?",
        a: "Oui, je dépanne les motorisations de portails et les interphones en plus des installations électriques, toutes marques.",
      },
    ],
    ctaTitle: "Une panne ou une urgence électrique ?",
    ctaText:
      "Panne, court-circuit, disjonction ou portail bloqué : appelez un artisan du Loiret réactif, disponible 24h/24 et 7j/7.",
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
