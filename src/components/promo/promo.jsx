import React from 'react';

import './promo.scss';

const Promo = () => {
  return (
    <section className="promo main__promo">
      <div className="promo__container">
        <div className="promo__content">
          react-modal
          <button className="promo__play-btn" type="button" aria-label="Play promo video">
            <svg className="promo__play-btn-icon" width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.0833 17L12.75 8.5V25.5L24.0833 17Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export {Promo};
