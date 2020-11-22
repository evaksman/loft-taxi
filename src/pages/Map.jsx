/* eslint-disable */
import React from 'react';
import { Header } from '../components/Header'; 

export const Map = ({ changePage }) => {
  return (
    <>
      <h1>Карта</h1>
      <Header change={changePage} />
    </>
  );
};