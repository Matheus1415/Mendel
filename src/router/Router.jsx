import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { Puner } from '../pages/Puner';
import { FatorRh } from '../pages/FatorRh';



export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
        {/*Colocar Menu lateral*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alelos" element={<Alelos />} />
        <Route path="/puner" element={<Puner />} />
        <Route path="/FatorRh" element={<FatorRh/>} />
      </Routes>
    </BrowserRouter>
  );
};

