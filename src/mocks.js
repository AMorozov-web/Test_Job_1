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

const FAQ_ITEMS = Array(7).fill().map((_, i) => {
  return {
    question: `Какой реквизит идет в комплекте ${i + 1}?`,
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem..`,
  };
});

const NEWS = Array(20).fill().map((_, i) => {
  return {
    title: `Фотобудки, GIF стойка #${i + 1}`,
    date: `${i + 1} Марта 2021`,
  };
});

export {
  CARD_OPTIONS,
  CARDS,
  FAQ_ITEMS,
  NEWS,
};
