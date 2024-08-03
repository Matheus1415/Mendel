import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { FatorRH } from '../pages/FatorRH';
import PunerAll from '../components/PunnerAll';
import { Page404 } from '../pages/Page404';
import MaintenancePage from '../pages/Manuntecao';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alelos" element={<Alelos />} />
        <Route path="/puner" element={<PunerAll/>} />
        <Route path="/fatorrh" element={<FatorRH />} />
        <Route path="/manutencao" element={<MaintenancePage/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

