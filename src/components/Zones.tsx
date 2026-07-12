const COMMUNES: [string, string][] = [
  ["electricien-beaugency", "Beaugency"],
  ["electricien-meung-sur-loire", "Meung-sur-Loire"],
  ["electricien-tavers", "Tavers"],
  ["electricien-baule", "Baule"],
  ["electricien-lailly-en-val", "Lailly-en-Val"],
  ["electricien-clery-saint-andre", "Cléry-Saint-André"],
  ["electricien-le-bardon", "Le Bardon"],
  ["electricien-epieds-en-beauce", "Épieds-en-Beauce"],
  ["electricien-chaingy", "Chaingy"],
  ["electricien-saint-ay", "Saint-Ay"],
  ["electricien-huisseau-sur-mauves", "Huisseau-sur-Mauves"],
  ["electricien-olivet", "Olivet"],
  ["electricien-orleans", "Orléans"],
  ["electricien-la-chapelle-saint-mesmin", "La Chapelle-Saint-Mesmin"],
];

const Pin = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3d88ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
);

export function Zones() {
  return (
    <section className="zones"> <div className="container zones__inner"> <div className="zones__copy"> <div className="eyebrow eyebrow--light eyebrow--auto"> <span className="eyebrow__num mono eyebrow__num--auto"></span> <span className="eyebrow__line"></span> <span className="eyebrow__label mono">Zone d&apos;intervention</span> </div>  <h2 className="zones__title">Beaugency & tout le Loiret</h2> <p className="zones__text">
Basé à Beaugency, j&apos;interviens rapidement dans tout le Loiret et la région orléanaise
        pour vos chantiers, automatismes et dépannages électriques.
</p> </div> <div className="zones__tags">
      {COMMUNES.map(([slug, name]) => (
        <a key={slug} href={`/zones/${slug}`} className="zones__tag zones__tag--link"> {Pin} {name} </a>
      ))}
      <span className="zones__tag zones__tag--all">+ tout le Loiret</span> </div> </div> </section>
  );
}
