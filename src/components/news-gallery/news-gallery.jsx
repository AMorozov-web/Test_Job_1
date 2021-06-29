import React from 'react';
import {newsPropsValidation} from '../../const';

import './news-gallery.scss';

const NewsGallery = ({news}) => {

  return (
    <article className="news-gallery">
      <div>
        swiper
      </div>
      <div className="news-gallery__container">
        <div className="news-gallery__inner-wrapper">
          <p className="news-gallery__subtitle">
            Фотобудка
          </p>
          <p className="news-gallery__date">
            {news.date}
          </p>
        </div>
        <p className="news-gallery__title">
          {news.title}
        </p>
        <p className="news-gallery__text">
          Lorem ipsum dolor sit amet, consectetur <a className="news-gallery__link" href="">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </article>
  );
};

NewsGallery.propTypes = {
  news: newsPropsValidation,
};

export {NewsGallery};
