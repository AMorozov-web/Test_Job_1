import React from 'react';
import {NewsCard} from '../news-card/news-card';
import {NEWS} from '../../mocks';

import './news.scss';

const getNewsItemElement = (item) => {

  return (
    <li key={item.date} className="news__item">
      <NewsCard news={item} />
    </li>
  );
};

const News = () => {
  return (
    <section className="news main__news">
      <div className="news__container">
        <p className="news__subtitle">
          Почему выбирают нас?
        </p>
        <h2 className="news__title">
          Новости
        </h2>
        <ul className="news__list">
          {NEWS.map(getNewsItemElement)}
        </ul>
        <button className="news__btn" type="button">
          Показать еще
        </button>
      </div>
    </section>
  );
};

export {News};
