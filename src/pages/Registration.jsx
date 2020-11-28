/* eslint-disable */
import React from 'react';
// import Logo from '../components/Logo';
import { Logo } from 'loft-taxi-mui-theme';

const Registration = ({ changePage }) => (
  <>
    <Logo />
    <form>
      <h1>Регистрация</h1>
      <div>Уже зарегистрирован?<a href="/login/" onClick={(e) => changePage(e, 'login')}>Войти</a></div>
      <div>
        <label htmlFor="email">Адрес электронной почты</label>
        <input id="email" type="email" name="email" size="28" placeholder="mail@mail.ru"/>
      </div>
      <div>
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" name="name" size="12"/>
        <label htmlFor="surname">Фамилия</label>
        <input id="surname" type="text" name="surname" size="12"/>
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" name="password" size="28"/>
      </div>
      <a href="/map/" onClick={(e) => changePage(e, 'map')}>Зарегистрироваться</a>
    </form>
  </>
);

export default Registration;