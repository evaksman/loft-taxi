import React from 'react';
import { Logo } from '../components/Logo';

// btnClick = (e) => {
//   this.setState();
// };

export const Login = ({ changePage }) => {
  return  (
    <>
      <Logo />
      <form>
        <h1>Войти</h1>
        <div>Новый пользователь? <a href="#">Зарегистрируйтесь</a></div>
        <div>
          <label htmlFor="email">Имя пользователя*</label>
          <input id="email" type="email" name="email" size="28"/>
        </div>
        <div>
          <label htmlFor="password">Пароль*</label>
          <input id="password" type="password" name="password" size="28"/>
        </div>
        <a href="/card/" onClick={(e) => changePage(e, 'card')}>Войти</a>
      </form>
    </>
  );
};