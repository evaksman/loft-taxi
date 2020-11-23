/* eslint-disable */
import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const Header = ({ change }) => (
  <header className="header">
    <Logo />
    <Navbar changePage={change} />
  </header>
);

export default Header;