import React from 'react';

import './catalog.scss';

const Catalog = () => {

  return (
    <section className="catalog main__catalog">
      <h1 className="catalog__title">
        Фотобудки
      </h1>
      <div className="catalog__sort">
        <p className="catalog__sort-title">Сортировка:</p>
      </div>
    </section>
  );
};

export {Catalog};
