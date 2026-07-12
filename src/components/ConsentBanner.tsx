"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kb-consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "refused") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      id="kb-consent"
      className="consent"
      hidden={!visible}
      tabIndex={-1}
      role="dialog"
      aria-label="Consentement à la mesure d'audience et de performance"
    >
      <div className="consent__main">
        <span className="consent__ico" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e63ff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3.3l7 2.7v5c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9v-5z" />
            <path d="M9 11.8l2.1 2.1 4-4.2" />
          </svg>
        </span>
        <p className="consent__txt">
          Nous utilisons des cookies de mesure d&apos;audience <strong>anonyme</strong> et de
          performance publicitaire (Google) pour améliorer le site et nos campagnes. Votre choix
          est <strong>modifiable à tout moment</strong> — le site fonctionne dans les deux cas.{" "}
          <a href="/confidentialite">En savoir plus</a>.
        </p>
      </div>
      <div className="consent__btns">
        <button
          type="button"
          id="kb-consent-refuse"
          className="consent__btn consent__btn--ghost"
          onClick={() => choose("refused")}
        >
          Refuser
        </button>
        <button
          type="button"
          id="kb-consent-accept"
          className="consent__btn consent__btn--accept"
          onClick={() => choose("accepted")}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
