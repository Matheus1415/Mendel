import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { FatorRH } from '../pages/FatorRH';
import PunerAll from '../components/PunnerAll';
import { Chromosomes } from '../pages/Chromosomes';
import { TesteLayout } from '../pages/TesteLayout/TesteLayout';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      {/*Colocar Menu lateral*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alelos" element={<Alelos />} />
        <Route path="/puner" element={<PunerAll/>} />
        <Route path="/fatorrh" element={<FatorRH />} />
        <Route path="/manutencao" element={<h1>Rota de manutenção</h1> }/>
        <Route path='/Chromosomes' element={<Chromosomes />}/>
        <Route path='/layout' element={<TesteLayout />}/>
      </Routes>
    </BrowserRouter>
  );
};

