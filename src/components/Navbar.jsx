import React from 'react';

export const Navbar = ({ changePage }) => {
  return (
    <nav>
      <a href="/card/" onClick={(e) => changePage(e, 'card')}>Карта</a>
      <a href="/profile" onClick={(e) => changePage(e, 'profile')}>Профиль</a>
      <a href="/login/" onClick={(e) => changePage(e, 'login')}>Выйти</a>
    </nav>
  );
};