import React from 'react';
import {Contacts} from '../contacts/contacts';
import {Map} from '../map/map';

import './footer.scss';

const Footer = () => {

  return (
    <footer className="footer page-body__footer">
      <Contacts />
      <Map />
    </footer>
  );
};

export {Footer};
