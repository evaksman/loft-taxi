import React from 'react';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};