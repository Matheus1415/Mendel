import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Mendel } from '../pages/Mendel';
import { Chromosomes } from '../pages/Chromosomes';
import { MenuMendel } from '../components/Menu';
import VLibras from "@djpfs/react-vlibras";
import { Footer } from '../components/Footer/footer';
import { Page404 } from '../pages/Page404';
import MaintenancePage from '../pages/Manuntecao';
import AulaQuadro from '../pages/Aula';
import { Alelos } from '../pages/Alelos';
import { SistemaAbo } from '../pages/SistemaAbo';
import Punnett from '../components/Punnett';
import { TesteLayout } from '../pages/TesteLayout/TesteLayout';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <VLibras />
      <MenuMendel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cromossomo" element={<Chromosomes />} />
        <Route path="/manutencao" element={<MaintenancePage />} />
        <Route path="/mendel" element={<Mendel />} />
        <Route path="/aula" element={<AulaQuadro />} />
        <Route path="/alelos" element={<Alelos />} />
        <Route path="/sistema-abo" element={<SistemaAbo />} />
        <Route path="/layout" element={<TesteLayout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};
