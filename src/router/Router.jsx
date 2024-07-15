import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { Puner } from '../pages/Puner';
import { Mendel } from '../pages/Mendel';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
        {/*Colocar Menu lateral*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alelos" element={<Alelos />} />
        <Route path="/puner" element={<Puner />} />
        <Route path="/mendel" element={<Mendel />} />
      </Routes>
    </BrowserRouter>
  );
};

