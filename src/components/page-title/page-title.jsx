import React from 'react';

import './page-title.scss';

const PageTitle = () => {
  return (
    <section className="page-title main__page-title">
      <div className="page-title__container">
        <h1 className="page-title__heading">
          <span className="page-title__span">Фото на</span><br/>праздник
        </h1>
        <p className="page-title__description">
          Lorem ipsum dolor sit amet, consectetur <a href="">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export {PageTitle};
