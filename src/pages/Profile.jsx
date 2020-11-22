import React from 'react';
import { Header } from '../components/Header'; 

export const Profile = ({ changePage }) => {
  return (
    <>
      <Header change={changePage} />
    </>
  );
};