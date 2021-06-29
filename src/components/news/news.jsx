import React, {useCallback, useState} from 'react';
import {NewsCard} from '../news-card/news-card';
import {NEWS} from '../../mocks';
import {MIN_NEWS_CARDS_LIMIT, NEWS_CARDS_OFFSET} from '../../const';

import './news.scss';

const getNewsItemElement = (item) => {

  return (
    <li key={item.date} className="news__item">
      <NewsCard news={item} />
    </li>
  );
};

const getShowMoreButton = (callback) => {

  return (
    <button className="news__btn" type="button" onClick={callback}>
      Показать еще
    </button>
  );
};

const News = () => {
  const [cardsLimit, setCardsLimit] = useState(MIN_NEWS_CARDS_LIMIT);

  const newsCards = NEWS.slice(0, cardsLimit);

  const handleClick = useCallback(
      () => {
        setCardsLimit((prev) => prev + NEWS_CARDS_OFFSET);
      },
      [],
  );

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
          {newsCards.map(getNewsItemElement)}
        </ul>
        {cardsLimit < NEWS.length ? getShowMoreButton(handleClick) : ``}
      </div>
    </section>
  );
};

export {News};
