import React from 'react';
import Mark from './img/mark.png';
import Logo from './img/logo.png';

export const Map = () => {
  return (
    <>
      <header>
        <div>
          <img src={Mark} alt="loft taxi mark"/>
          <img src={Logo} alt="loft taxi logo"/>
        </div>
        <nav>
          <a href="#">Карта</a>
          <a href="#">Профиль</a>
          <a href="#">Выйти</a>
        </nav>
      </header>
    </>
  );
};