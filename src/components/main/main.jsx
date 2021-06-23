import React from 'react';
import {Promo} from '../promo/promo';
import {PageTitle} from '../page-title/page-title';

import './main.scss';

const Main = () => {
  return (
    <main className="main page-body__main">
      <Promo />
      <PageTitle />
    </main>
  );
};

export {Main};
