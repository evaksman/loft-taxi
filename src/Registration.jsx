import React from 'react';
import Mark from './img/mark.png';
import Logo from './img/logo.png';

export const Registration = () => {
  return (
    <>
      <div>
        <img src={Mark} alt="loft taxi mark"/>
        <img src={Logo} alt="loft taxi logo"/>
      </div>
      <form>
        <h1>Регистрация</h1>
        <div>Уже зарегистрирован?<a href="#">Войти</a></div>
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};