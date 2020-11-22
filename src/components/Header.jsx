/* eslint-disable */
import React from 'react';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';

export const Header = ({ change }) => {
  return (
    <header className="header">
      <Logo />
      <Navbar changePage={change} />
    </header>
  );
};