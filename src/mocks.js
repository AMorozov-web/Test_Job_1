const BASE_OPTION_PRICE = 100;
const BASE_CARD_PRICE = 17000;

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

export {
  CARD_OPTIONS,
  CARDS,
};
