import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Mendel } from '../pages/Mendel';
import PunerAll from '../components/PunnerAll';
import { Chromosomes } from '../pages/Chromosomes';
import { MenuMendel } from '../components/Menu';
import VLibras from "@djpfs/react-vlibras";
import { Footer } from '../components/Footer/footer';
import { Page404 } from '../pages/Page404';
import MaintenancePage from '../pages/Manuntecao';
import AulaQuadro from '../pages/Aula';
import { Alelos } from '../pages/Alelos';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <VLibras />
      <MenuMendel />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puner" element={<PunerAll/>} />
        <Route path="/cromossomo" element={<Chromosomes/>} />
        <Route path="/manutencao" element={<MaintenancePage/>}/>
        <Route path="*" element={<Page404/>}/>
        <Route path="/mendel" element={<Mendel />} />
        <Route path="/aula" element={<AulaQuadro/>} />
        <Route path="/Alelos" element={<Alelos/>} />

      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};

