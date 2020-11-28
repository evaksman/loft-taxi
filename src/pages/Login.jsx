/* eslint-disable */

import React from 'react';
// import Logo from '../components/Logo';
import { Logo } from 'loft-taxi-mui-theme';

const Login = ({ changePage }) => (
  <>
    <Logo />
    <form>
      <h1>Войти</h1>
      <div>Новый пользователь? <a href="/registration/" onClick={(e) => changePage(e, 'registration')}>Зарегистрируйтесь</a></div>
      <div>
        <label htmlFor="email">Имя пользователя*</label>
        <input id="email" type="email" name="email" size="28"/>
      </div>
      <div>
        <label htmlFor="password">Пароль*</label>
        <input id="password" type="password" name="password" size="28"/>
      </div>
      <a href="/map/" onClick={(e) => changePage(e, 'map')}>Войти</a>
    </form>
  </>
);

export default Login;