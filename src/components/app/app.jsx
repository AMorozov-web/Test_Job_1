import React from 'react';
import {Header} from '../header/header';
import {Main} from '../main/main';
import {Footer} from '../footer/footer';

import 'normalize.css';

import '../../sass/style.scss';

const App = () => {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export {App};
