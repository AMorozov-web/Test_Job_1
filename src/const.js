import PropTypes from 'prop-types';

const BASE_OPTION_PRICE = 100;
const BASE_CARD_PRICE = 17000;

const RENTAL_TIME = [
  `1 час`,
  `2 часа`,
  `3 часа`,
  `5 часов`,
  `выставка 2 дня`,
  `выставка 3 дня`,
];

const SORT_OPTIONS = [
  {
    value: `default`,
    text: `По умолчанию`,
  },
  {
    value: `ascending`,
    text: `По возрастанию`,
  },
  {
    value: `descending`,
    text: `По убыванию`,
  },
];

const CARDS = Array(20).fill().map((_, i) => {
  return {
    title: `Фотобудка с ширмой #${i + 1}`,
    price: BASE_CARD_PRICE + (i * 100),
  };
});

const CARD_OPTIONS = Array(20).fill().map((_, i) => {
  return {
    title: `Разработка макета рамки #${i + 1}`,
    price: BASE_OPTION_PRICE * (i + 1),
  };
});

const cardPropsValidation = PropTypes.shape({
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}).isRequired;

export {
  SORT_OPTIONS,
  CARD_OPTIONS,
  RENTAL_TIME,
  CARDS,
  cardPropsValidation,
};
