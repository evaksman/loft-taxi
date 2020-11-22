import React from 'react';
import { Header } from '../components/Header'; 

export const Map = ({ changePage }) => {
  return (
    <>
      <Header change={changePage} />
    </>
  );
};