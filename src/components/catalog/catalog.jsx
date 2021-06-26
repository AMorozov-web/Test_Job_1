import React from 'react';
import {SORT_OPTIONS} from '../../const';

import './catalog.scss';

const getOption = (option) => {
  return (
    <option key={option.value} value={option.value}>{option.text}</option>
  );
};

const Catalog = () => {

  return (
    <section className="catalog main__catalog">
      <h2 className="catalog__title">
        Фотобудки
      </h2>
      <div className="catalog__sort">
        <label className="catalog__sort-title" htmlFor="sort-select">Сортировка:</label>
        <select className="catalog__sort-select" id="sort-select" defaultValue="default">
          {SORT_OPTIONS.map(getOption)}
        </select>
      </div>
      <ul className="catalog__list">
        list
      </ul>
    </section>
  );
};

export {Catalog};
