import React from 'react';
import {Contacts} from '../contacts/contacts';

import './footer.scss';

const Footer = () => {

  return (
    <footer className="footer page-body__footer">
      <Contacts />
    </footer>
  );
};

export {Footer};
