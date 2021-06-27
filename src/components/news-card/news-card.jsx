import React from 'react';
import {newsPropsValidation} from '../../const';

import './news-card.scss';

const NewsCard = ({news}) => {

  return (
    <article className="news-card">
      <img className="news-card__img" width="328" height="328" src="img/news.png" alt="News" />
      <div className="news-card__inner-wrapper">
        <p className="news-card__subtitle">
          Услуги
        </p>
        <p className="news-card__title">
          {news.title}
        </p>
        <p className="news-card__text">
          У нас есть широчайший ассортимент фотобудок на все случаи жизни
        </p>
        <p className="news-card__date">
          {news.date}
        </p>
      </div>
    </article>
  );
};

NewsCard.propTypes = {
  news: newsPropsValidation,
};

export {NewsCard};
