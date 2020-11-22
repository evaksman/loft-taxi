import React from 'react';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';

export const Header = ({changePage}) => {
  return (
    <header className="header">
      <Logo />
      <Navbar change={changePage} />
    </header>
  );
};