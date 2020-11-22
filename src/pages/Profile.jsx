/* eslint-disable */
import React from 'react';
import { Header } from '../components/Header'; 

export const Profile = ({ changePage }) => {
  return (
    <>
      <h1>Профиль</h1>
      <Header change={changePage} />
    </>
  );
};