/* eslint-disable */
import React from 'react';

export const Navbar = ({ changePage }) => {
  return (
    <nav>
      <a href="/map/" onClick={(e) => changePage(e, 'map')}>Карта</a>
      <a href="/profile/" onClick={(e) => changePage(e, 'profile')}>Профиль</a>
      <a href="/login/" onClick={(e) => changePage(e, 'login')}>Выйти</a>
    </nav>
  );
};