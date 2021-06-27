import React from 'react';
import {
  cardPropsValidation,
  RENTAL_TIME,
} from '../../const';
import {CARD_OPTIONS} from '../../mocks';

import './card.scss';

const getCardOptionElement = (option) => {
  return (
    <li key={option.title} className="card__option">
      <img className="card__option-img" src="../img/photo-option.png" alt="Option photo" />
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

const getRentalTimeElement = (time, title) => {
  return (
    <li key={time} className="card__rent-item">
      <label className="card__rent-time">
        <input className="card__rent-time-input visually-hidden" type="radio" name={`rent-time-${title}`} />
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
        slider
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
          {RENTAL_TIME.map((time) => getRentalTimeElement(time, card.title))}
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
