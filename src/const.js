import PropTypes from 'prop-types';

const MIN_NEWS_CARDS_LIMIT = 3;
const NEWS_CARDS_OFFSET = 3;

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

const newsPropsValidation = PropTypes.shape({
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;

export {
  MIN_NEWS_CARDS_LIMIT,
  NEWS_CARDS_OFFSET,
  SORT_OPTIONS,
  RENTAL_TIME,
  cardPropsValidation,
  newsPropsValidation,
};
