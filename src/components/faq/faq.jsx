import React from 'react';
import {FAQ_ITEMS} from '../../mocks';

import './faq.scss';

const getListItemElement = (item) => {
  return (
    <li key={item.question} className="faq__item">
      <details className="faq__item-details">
        <summary className="faq__item-summary">
          {item.question}
        </summary>
        <div className="faq__item-answer">
          {item.answer}
        </div>
      </details>
    </li>
  );
};

const Faq = () => {
  return (
    <section className="faq main__faq">
      <div className="faq__container">
        <p className="faq__subtitle">
          Почему выбирают нас?
        </p>
        <h2 className="faq__title">
          FAQ
        </h2>
        <ul className="faq__list">
          {FAQ_ITEMS.map(getListItemElement)}
        </ul>
      </div>
    </section>
  );
};

export {Faq};
