import React from 'react';
import {Promo} from '../promo/promo';
import {PageTitle} from '../page-title/page-title';
import {Seo} from '../seo/seo';
import {AdvantagesList} from '../advantages/advantages-list';

import './main.scss';

const Main = () => {
  return (
    <main className="main page-body__main">
      <Promo />
      <PageTitle />
      <Seo />
      <AdvantagesList />
    </main>
  );
};

export {Main};
