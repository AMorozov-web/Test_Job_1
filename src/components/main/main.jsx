import React from 'react';
import {Promo} from '../promo/promo';
import {PageTitle} from '../page-title/page-title';
import {Seo} from '../seo/seo';
import {AdvantagesList} from '../advantages/advantages-list';
import {Catalog} from '../catalog/catalog';
import {Faq} from '../faq/faq';
import {News} from '../news/news';

import './main.scss';

const Main = () => {
  return (
    <main className="main page-body__main">
      <Promo />
      <PageTitle />
      <Seo />
      <AdvantagesList />
      <Catalog />
      <Faq />
      <News />
    </main>
  );
};

export {Main};
