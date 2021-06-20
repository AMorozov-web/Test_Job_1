import React from 'react';
import {Logo} from '../logo/logo.jsx';

import './header.scss';

const Header = () => {

  return (
    <header className="header page-body__header">
      <div className="header__container">
        <Logo />
      </div>
    </header>
  );
};

export {Header};

