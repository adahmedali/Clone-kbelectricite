export function StickyCallBar() {
  return (
    <div className="scb" role="region" aria-label="Contact rapide"><a href="tel:+33651755039" className="scb__btn scb__btn--call"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5z" /></svg> Appeler
</a><a href="/devis" className="scb__btn scb__btn--devis"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M14 3v5h5M9 13h6M9 16.5h6" /></svg> Devis gratuit
</a></div>
  );
}
