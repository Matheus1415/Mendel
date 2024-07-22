import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { Chromosomes } from '../pages/Chromosomes';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      {/*Colocar Menu lateral*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alelos" element={<Alelos />} />
        <Route path='/Chromosomes' element={<Chromosomes />}/>
      </Routes>
    </BrowserRouter>
  );
};

