import React from 'react';

import './promo.scss';

const Promo = () => {
  return (
    <section className="promo main__promo">
      <div className="promo__container">
        <div className="promo__content">
          react-modal
          <button className="promo__play-btn" type="button" aria-label="Play promo video"></button>
        </div>
      </div>
    </section>
  );
};

export {Promo};
