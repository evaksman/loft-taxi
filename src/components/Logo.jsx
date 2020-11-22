import React from 'react';
import Mark from '../img/mark.png';
import LogoPic from '../img/logo.png';

export const Logo = () => {
  return (
    <div>
      <img src={Mark} alt="loft taxi mark"/>
      <img src={LogoPic} alt="loft taxi logo"/>
    </div>
  );
};