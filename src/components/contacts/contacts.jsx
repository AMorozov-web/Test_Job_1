import React from 'react';

import './contacts.scss';

const Contacts = () => {

  return (
    <section className="contacts footer__contacts">
      <div className="contacts__container">
        <p className="contacts__subtitle">
          Мы всегда доступны для вас
        </p>
        <h2 className="contacts__title">
          Контакты
        </h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <p className="contacts__item-title contacts__item-title--phone">
              Телефон
            </p>
            <a className="contacts__item-link" href="tel:74951234567" aria-label="Please call us">
              +7 495 123 45 67
            </a>
          </li>
          <li className="contacts__item">
            <p className="contacts__item-title contacts__item-title--address">
              Адрес
            </p>
            <a className="contacts__item-link" href="https://goo.gl/maps/ydSfmncGcqQaXX5L9" aria-label="Get route">
              109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская
            </a>
          </li>
          <li className="contacts__item">
            <p className="contacts__item-title">
              Почта
            </p>
            <a className="contacts__item-link" href="mailto:info@test.ru" aria-label="Please write us">
              Info@test.ru
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export {Contacts};
