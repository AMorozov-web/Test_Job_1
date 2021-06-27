import PropTypes from 'prop-types';

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

const cardPropsValidation = PropTypes.shape({
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}).isRequired;

export {
  SORT_OPTIONS,
  RENTAL_TIME,
  cardPropsValidation,
};
