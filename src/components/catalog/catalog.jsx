import React from 'react';
import {Card} from '../card/card';
import {SORT_OPTIONS, CARDS} from '../../const';

import './catalog.scss';

const getSortOption = (option) => {
  return (
    <option key={option.value} value={option.value}>{option.text}</option>
  );
};

const getCatalogItem = (item) => {
  return (
    <li key={item.title} className="catalog__item">
      <Card card={item}/>
    </li>
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
          {SORT_OPTIONS.map(getSortOption)}
        </select>
      </div>
      <ul className="catalog__list">
        {CARDS.map(getCatalogItem)}
      </ul>
    </section>
  );
};

export {Catalog};
