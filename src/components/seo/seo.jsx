import React from 'react';

import './seo.scss';

const Seo = () => {
  return (
    <section className="seo main__seo">
      <div className="seo__container">
        <p className="seo__text">
          Lorem ipsum dolor sit amet, consectetur <a className="seo__link" href="">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export {Seo};
