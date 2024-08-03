import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { Chromosomes } from '../pages/Chromosomes';
import Page404 from '../pages/Page404';
import MaintenancePage from '../pages/Manuntecao';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      {/*Colocar Menu lateral*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alelos" element={<Alelos />} />
        <Route path='/Chromosomes' element={<Chromosomes />}/>
        <Route path='/manutencao' element={<MaintenancePage/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

