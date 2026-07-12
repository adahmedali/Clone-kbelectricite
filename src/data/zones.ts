export type ZoneReal = { slug: string; meta: string; title: string };

export type Zone = {
  slug: string;
  name: string;
  cp: string;
  lead: string;
  intro: string;
  focus: string;
  quartiers: string[];
  neighbors: string[]; // slugs within this dataset
  realisations: ZoneReal[];
};

// Shared services shown on every zone page (4 core Pro San prestations)
export const ZONE_SERVICES = [
  { slug: "renovation-mise-aux-normes", title: "Rénovation & mise aux normes", icon: "shield" as const },
  { slug: "eclairage-lumiere", title: "Éclairage & installation de lumière", icon: "bulb" as const },
  { slug: "automatisme-portail", title: "Automatisme de portail", icon: "bolt" as const },
  { slug: "depannage-urgence", title: "Dépannage & urgences", icon: "wrench" as const },
];

const R = {
  beaugency: {
    slug: "renovation-pavillon-beaugency",
    meta: "Particulier",
    title: "Rénovation électrique complète d'un pavillon",
  },
  meung: {
    slug: "automatisme-portail-meung",
    meta: "Particulier",
    title: "Motorisation d'un portail coulissant",
  },
  clery: {
    slug: "interphone-copropriete-clery",
    meta: "Copropriété",
    title: "Interphone vidéo & mise en sécurité d'une copropriété",
  },
};

export const zones: Zone[] = [
  {
    slug: "electricien-beaugency",
    name: "Beaugency",
    cp: "45190",
    lead: "Basé à Beaugency, j'interviens au pied levé pour les particuliers, les copropriétés et les commerces de la cité médiévale : électricité générale, automatisme de portails, interphonie et dépannage.",
    intro:
      "Beaugency, ville d'art et d'histoire au bord de la Loire, mêle logements anciens du centre, pavillons et lotissements récents en périphérie. Ces habitats appellent des besoins variés : remise aux normes d'installations vétustes dans le vieux Beaugency, équipements neufs et automatisme dans les quartiers résidentiels.",
    focus:
      "À Beaugency, j'accompagne aussi bien la rénovation complète d'un tableau que la motorisation d'un portail, l'installation d'un interphone vidéo ou un simple dépannage. Artisan installé sur la commune, j'interviens vite et je connais le bâti local — un vrai gain de temps et de fiabilité.",
    quartiers: ["Centre historique", "Quartiers résidentiels", "Lotissements récents", "Bords de Loire"],
    neighbors: ["electricien-tavers", "electricien-baule", "electricien-lailly-en-val", "electricien-meung-sur-loire"],
    realisations: [R.beaugency],
  },
  {
    slug: "electricien-meung-sur-loire",
    name: "Meung-sur-Loire",
    cp: "45130",
    lead: "Électricien à Meung-sur-Loire, j'interviens dans toute la commune pour vos installations, rénovations, automatismes de portails et dépannages électriques.",
    intro:
      "Traversée par les Mauves et bordée par la Loire, Meung-sur-Loire conjugue centre-bourg ancien, maisons de caractère et développement pavillonnaire. Les installations y sont hétérogènes, du logement à remettre aux normes à la propriété récente à équiper ou automatiser.",
    focus:
      "À Meung-sur-Loire, je réalise la mise aux normes NF C 15-100, le remplacement de tableau, l'éclairage, la motorisation de portails et l'interphonie. Un seul interlocuteur, de proximité, pour un travail soigné et un devis clair.",
    quartiers: ["Centre-bourg", "Bords de Loire", "Lotissements", "Hameaux & écarts"],
    neighbors: ["electricien-baule", "electricien-le-bardon", "electricien-huisseau-sur-mauves", "electricien-clery-saint-andre", "electricien-beaugency"],
    realisations: [R.meung],
  },
  {
    slug: "electricien-tavers",
    name: "Tavers",
    cp: "45190",
    lead: "À Tavers, aux portes de Beaugency, j'interviens rapidement pour l'électricité générale, l'automatisme et le dépannage des particuliers et des professionnels.",
    intro:
      "Village de la vallée de la Loire réputé pour ses sources et son cadre préservé, Tavers compte surtout des maisons individuelles et quelques exploitations. Les besoins y sont concrets : sécuriser une installation ancienne, ajouter des circuits, motoriser un accès.",
    focus:
      "Voisine immédiate de mon atelier de Beaugency, la commune de Tavers bénéficie de délais d'intervention très courts. Rénovation, tableau électrique, éclairage extérieur ou portail motorisé : je m'occupe de tout, proprement.",
    quartiers: ["Centre-village", "Les sources", "Zones pavillonnaires", "Hameaux & écarts"],
    neighbors: ["electricien-beaugency", "electricien-baule", "electricien-lailly-en-val"],
    realisations: [],
  },
  {
    slug: "electricien-baule",
    name: "Baule",
    cp: "45130",
    lead: "Électricien à Baule, entre Beaugency et Meung-sur-Loire, j'assure vos travaux d'électricité, d'automatisme de portails et de dépannage.",
    intro:
      "Commune viticole de la rive nord de la Loire, Baule associe habitat de bourg, propriétés avec dépendances et lotissements. Les projets fréquents : rénovation d'installations, éclairage de terrains et automatisation des entrées.",
    focus:
      "À Baule, j'interviens pour la mise aux normes, le câblage d'armoire, l'éclairage intérieur et extérieur, la motorisation de portails et l'interphonie. Proximité et réactivité garanties, à mi-chemin de mes chantiers habituels.",
    quartiers: ["Centre-bourg", "Le vignoble", "Lotissements", "Hameaux & écarts"],
    neighbors: ["electricien-beaugency", "electricien-tavers", "electricien-meung-sur-loire", "electricien-le-bardon"],
    realisations: [],
  },
  {
    slug: "electricien-lailly-en-val",
    name: "Lailly-en-Val",
    cp: "45740",
    lead: "À Lailly-en-Val, au sud de la Loire, j'interviens pour l'électricité générale, l'automatisme et le dépannage, chez les particuliers comme dans les copropriétés.",
    intro:
      "En Sologne des étangs, Lailly-en-Val est une commune résidentielle et forestière où dominent maisons individuelles et propriétés avec terrain. Portails, éclairage extérieur et sécurité électrique y sont des demandes courantes.",
    focus:
      "À Lailly-en-Val, je réalise vos rénovations et mises aux normes, l'éclairage de jardin, la motorisation de portails et de portes de garage, ainsi que le dépannage 7j/7. Un artisan unique, à l'écoute et de proximité.",
    quartiers: ["Centre-bourg", "Quartiers résidentiels", "Propriétés avec terrain", "Hameaux & écarts"],
    neighbors: ["electricien-beaugency", "electricien-tavers", "electricien-clery-saint-andre"],
    realisations: [],
  },
  {
    slug: "electricien-clery-saint-andre",
    name: "Cléry-Saint-André",
    cp: "45370",
    lead: "Électricien à Cléry-Saint-André, j'accompagne particuliers et copropriétés en électricité générale, interphonie, automatisme et dépannage.",
    intro:
      "Célèbre pour sa basilique Notre-Dame, Cléry-Saint-André mêle centre-bourg patrimonial, copropriétés et lotissements pavillonnaires. Les parties communes à sécuriser et les logements à remettre aux normes y sont des sujets récurrents.",
    focus:
      "À Cléry-Saint-André, j'interviens sur les tableaux électriques, l'interphonie vidéo, l'éclairage des communs, la motorisation de portails et le dépannage. J'ai déjà sécurisé ici les parties communes d'une copropriété — voir ma réalisation ci-dessous.",
    quartiers: ["Centre-bourg", "Copropriétés", "Lotissements", "Hameaux & écarts"],
    neighbors: ["electricien-meung-sur-loire", "electricien-lailly-en-val", "electricien-olivet"],
    realisations: [R.clery],
  },
  {
    slug: "electricien-le-bardon",
    name: "Le Bardon",
    cp: "45130",
    lead: "À Le Bardon, entre Meung-sur-Loire et Huisseau-sur-Mauves, j'interviens pour vos travaux d'électricité, d'automatisme et de dépannage.",
    intro:
      "Petite commune paisible de la rive nord de la Loire, Le Bardon est principalement résidentielle, avec des maisons individuelles et quelques hameaux. Rénovation électrique, éclairage et automatisme d'accès y sont les demandes les plus fréquentes.",
    focus:
      "À Le Bardon, je réalise la mise aux normes, le remplacement de tableau, l'éclairage et la motorisation de portails, ainsi que le dépannage en urgence. Un artisan de proximité, réactif et rigoureux.",
    quartiers: ["Centre-village", "Zones pavillonnaires", "Propriétés avec terrain", "Hameaux & écarts"],
    neighbors: ["electricien-meung-sur-loire", "electricien-baule", "electricien-huisseau-sur-mauves"],
    realisations: [],
  },
  {
    slug: "electricien-epieds-en-beauce",
    name: "Épieds-en-Beauce",
    cp: "45130",
    lead: "Électricien à Épieds-en-Beauce, j'interviens en plaine de Beauce pour l'électricité générale, l'automatisme et le dépannage.",
    intro:
      "Au cœur de la plaine agricole de la Beauce, Épieds-en-Beauce compte fermes, maisons de bourg et bâtiments d'exploitation. Les installations y demandent robustesse et mise en sécurité, notamment sur les dépendances et les accès.",
    focus:
      "À Épieds-en-Beauce, j'assure la rénovation électrique, le câblage d'armoire, l'éclairage, la motorisation de portails et le dépannage. Je me déplace sans difficulté dans toute la Beauce du Loiret.",
    quartiers: ["Centre-bourg", "Exploitations agricoles", "Zones pavillonnaires", "Hameaux & écarts"],
    neighbors: ["electricien-meung-sur-loire", "electricien-huisseau-sur-mauves", "electricien-chaingy"],
    realisations: [],
  },
  {
    slug: "electricien-chaingy",
    name: "Chaingy",
    cp: "45380",
    lead: "À Chaingy, aux portes ouest d'Orléans, j'interviens pour l'électricité générale, l'automatisme de portails, l'interphonie et le dépannage.",
    intro:
      "Commune en développement de l'agglomération orléanaise, Chaingy associe bourgs anciens (Fourneaux, Le Coudray) et lotissements récents. On y équipe volontiers des maisons neuves et on y rénove le bâti plus ancien.",
    focus:
      "À Chaingy, je réalise les installations neuves et rénovations, l'éclairage, la motorisation de portails, l'interphonie et le dépannage. Un seul artisan pour l'ensemble, avec un devis clair et sans engagement.",
    quartiers: ["Centre-bourg", "Fourneaux / Le Coudray", "Lotissements récents", "Bords de Loire"],
    neighbors: ["electricien-saint-ay", "electricien-la-chapelle-saint-mesmin", "electricien-huisseau-sur-mauves"],
    realisations: [],
  },
  {
    slug: "electricien-saint-ay",
    name: "Saint-Ay",
    cp: "45130",
    lead: "Électricien à Saint-Ay, sur la rive nord de la Loire, j'interviens pour vos travaux d'électricité, d'automatisme et de dépannage.",
    intro:
      "Bordée par la Loire et le coteau viticole, Saint-Ay est une commune résidentielle prisée de l'ouest orléanais. Maisons anciennes à sécuriser et pavillons récents à équiper y cohabitent.",
    focus:
      "À Saint-Ay, j'interviens pour la mise aux normes, le tableau électrique, l'éclairage intérieur et extérieur, la motorisation de portails et l'interphonie. Réactivité et proximité assurées.",
    quartiers: ["Centre-bourg", "Bords de Loire", "Coteau viticole", "Lotissements"],
    neighbors: ["electricien-chaingy", "electricien-huisseau-sur-mauves", "electricien-la-chapelle-saint-mesmin", "electricien-meung-sur-loire"],
    realisations: [],
  },
  {
    slug: "electricien-huisseau-sur-mauves",
    name: "Huisseau-sur-Mauves",
    cp: "45130",
    lead: "À Huisseau-sur-Mauves, j'interviens pour l'électricité générale, l'automatisme de portails et le dépannage des particuliers et professionnels.",
    intro:
      "Traversée par les Mauves, Huisseau-sur-Mauves est une commune résidentielle de l'ouest orléanais, entre plaine de Beauce et vallée de la Loire. Le tissu pavillonnaire y génère des besoins réguliers en équipement et en sécurité électrique.",
    focus:
      "À Huisseau-sur-Mauves, je réalise vos rénovations et mises aux normes, l'éclairage, la motorisation de portails et le dépannage 7j/7. Un artisan unique, de proximité, à votre écoute.",
    quartiers: ["Centre-bourg", "Vallée des Mauves", "Zones pavillonnaires", "Hameaux & écarts"],
    neighbors: ["electricien-meung-sur-loire", "electricien-le-bardon", "electricien-saint-ay", "electricien-chaingy"],
    realisations: [],
  },
  {
    slug: "electricien-olivet",
    name: "Olivet",
    cp: "45160",
    lead: "Électricien à Olivet, dans l'agglomération d'Orléans, j'interviens pour les particuliers, copropriétés et commerces en électricité, automatisme et interphonie.",
    intro:
      "Ville résidentielle prisée au bord du Loiret, Olivet compte de nombreuses copropriétés, des pavillons avec jardin et des commerces de proximité. Les besoins vont de la mise en sécurité des parties communes à la motorisation des accès.",
    focus:
      "À Olivet, j'accompagne la rénovation électrique, le remplacement de tableau, l'éclairage, l'interphonie vidéo, la motorisation de portails et le dépannage. Un interlocuteur unique pour un chantier maîtrisé.",
    quartiers: ["Centre-ville", "Bords du Loiret", "Copropriétés", "Quartiers pavillonnaires"],
    neighbors: ["electricien-orleans", "electricien-clery-saint-andre", "electricien-la-chapelle-saint-mesmin"],
    realisations: [],
  },
  {
    slug: "electricien-orleans",
    name: "Orléans",
    cp: "45000",
    lead: "Électricien à Orléans, j'interviens pour les particuliers, copropriétés et commerces : électricité générale, mise aux normes, interphonie, automatisme et dépannage.",
    intro:
      "Préfecture du Loiret, Orléans concentre un habitat dense — immeubles anciens du centre, copropriétés et commerces — où la sécurité électrique et l'interphonie sont des enjeux quotidiens. Les rénovations et mises aux normes y sont fréquentes.",
    focus:
      "À Orléans, je réalise la mise aux normes NF C 15-100, le remplacement de tableau, l'interphonie vidéo, l'éclairage des communs et le dépannage. Un artisan réactif, habitué au bâti collectif comme individuel.",
    quartiers: ["Centre-ville", "Copropriétés", "Commerces", "Quartiers résidentiels"],
    neighbors: ["electricien-olivet", "electricien-la-chapelle-saint-mesmin", "electricien-saint-ay"],
    realisations: [],
  },
  {
    slug: "electricien-la-chapelle-saint-mesmin",
    name: "La Chapelle-Saint-Mesmin",
    cp: "45380",
    lead: "À La Chapelle-Saint-Mesmin, aux portes ouest d'Orléans, j'interviens pour l'électricité générale, l'automatisme, l'interphonie et le dépannage.",
    intro:
      "Commune dynamique de l'agglomération orléanaise au bord de la Loire, La Chapelle-Saint-Mesmin compte copropriétés, pavillons et zones d'activité. Mise en sécurité, interphonie et automatisme d'accès y sont très demandés.",
    focus:
      "À La Chapelle-Saint-Mesmin, j'interviens pour la rénovation électrique, le tableau, l'éclairage, l'interphonie, la motorisation de portails et le dépannage. Proximité, réactivité et travail soigné.",
    quartiers: ["Centre-ville", "Bords de Loire", "Copropriétés", "Zones d'activité"],
    neighbors: ["electricien-orleans", "electricien-saint-ay", "electricien-chaingy", "electricien-olivet"],
    realisations: [],
  },
];

export const zoneBySlug = (slug: string): Zone | undefined =>
  zones.find((z) => z.slug === slug);

export const zoneName = (slug: string): string =>
  zones.find((z) => z.slug === slug)?.name ?? slug;
