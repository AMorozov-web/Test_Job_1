import React from 'react';
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  cardPropsValidation,
  RENTAL_TIME,
} from '../../const';
import {CARD_OPTIONS} from '../../mocks';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './card.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const getCardOptionElement = (option) => {
  return (
    <li key={option.title} className="card__option">
      <img className="card__option-img" width="60" height="60" src="../img/photo-option.png" alt="Option photo" />
      <div className="card__option-wrapper">
        <p className="card__option-title">
          {option.title}
        </p>
        <p className="card__option-price">
          {`от ${option.price.toLocaleString(`ru`)}`} &#8381;
        </p>
      </div>
      <label className="card__option-label">
        <input type="checkbox" name={option.title} className="card__option-input" />
        <span className="card__option-span"></span>
      </label>
    </li>
  );
};

const getRentalTimeElement = (time, title, checked = false) => {
  return (
    <li key={time} className="card__rent-item">
      <label className="card__rent-time">
        <input
          className="card__rent-time-input visually-hidden"
          type="radio"
          name={`rent-time-${title}`}
          defaultChecked={checked}
        />
        <span className="card__rent-time-span">
          {time}
        </span>
      </label>
    </li>
  );
};

const Card = ({card}) => {

  return (
    <article className="card">
      <div className="card__slider">
        <Swiper
          tag={`ul`}
          spaceBetween={7}
          navigation
          pagination
        >
          <SwiperSlide tag={`li`}>
            <img className="card__slide" width="296" height="222" src="img/photo-cabin.png" alt="Photo cabin" />
          </SwiperSlide>
          <SwiperSlide tag={`li`}>
            <img className="card__slide" width="296" height="222" src="img/photo-cabin.png" alt="Photo cabin" />
          </SwiperSlide>
          <SwiperSlide tag={`li`}>
            <img className="card__slide" width="296" height="222" src="img/photo-cabin.png" alt="Photo cabin" />
          </SwiperSlide>
          <SwiperSlide tag={`li`}>
            <img className="card__slide" width="296" height="222" src="img/photo-cabin.png" alt="Photo cabin" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h3 className="card__title">
        {card.title}
      </h3>
      <p className="card__size">
        Размер:&nbsp;<span className="card__size-span">2м x 1.5м x 2м</span>
      </p>
      <div className="card__options-container">
        <p className="card__options-title">
          Доп. опции
        </p>
        <ul className="card__options-list">
          {CARD_OPTIONS.map(getCardOptionElement)}
        </ul>
      </div>
      <div className="card__rent">
        <p className="card__rent-title">
          Укажите время аренды
        </p>
        <ul className="card__rent-list">
          {
            RENTAL_TIME.map((time, i) => {
              return i === 0 ? getRentalTimeElement(time, card.title, true) : getRentalTimeElement(time, card.title);
            })
          }
        </ul>
      </div>
      <div className="card__wrapper">
        <p className="card__price">
          {card.price} &#8381;
        </p>
        <button className="card__btn" type="button">
          Оставить заявку
        </button>
      </div>
    </article>
  );
};

Card.propTypes = {
  card: cardPropsValidation,
};

export {Card};
