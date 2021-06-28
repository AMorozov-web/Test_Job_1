import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/scss/modal-video.scss';
import './promo.scss';

const Promo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="promo main__promo">
      <h2 className="visually-hidden">
        Promo Video
      </h2>
      <div className="promo__container">
        <div className="promo__content">
          <ModalVideo channel='youtube' videoId="lN8kMS9eWZA" autoplay isOpen={isOpen} onClose={() => setOpen(false)} />
          <img src="img/promo.png" alt="Promo video" width="315" height="188" className="promo__img" />
          <button className="promo__play-btn" type="button" aria-label="Play promo video" onClick={()=> setOpen(true)}>
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
