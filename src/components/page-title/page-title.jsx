import React from 'react';

import './page-title.scss';

const PageTitle = () => {
  return (
    <div className="page-title main__page-title">
      <div className="page-title__container">
        <h1 className="page-title__heading">
          <span className="page-title__span">Фото на</span><br/>праздник
        </h1>
      </div>
    </div>
  );
};

export {PageTitle};
