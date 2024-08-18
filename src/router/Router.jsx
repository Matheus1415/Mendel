import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mendel } from '../pages/Mendel';
import Punnett from '../components/Punnett';
import { Chromosomes } from '../pages/Chromosomes';
import { MenuMendel } from '../components/Menu';
import VLibras from "@djpfs/react-vlibras";
import { Footer } from '../components/Footer/footer';
import { Page404 } from '../pages/Page404';
import MaintenancePage from '../pages/Manuntecao';
import AulaQuadro from '../pages/Aula';
import { TesteLayout } from '../pages/TesteLayout/TesteLayout';
import { Home } from '../pages/Home';


export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <VLibras />
      <MenuMendel />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/puner" element={<Punnett/>} />
        <Route path="/cromossomo" element={<Chromosomes/>} />
        <Route path="/manutencao" element={<MaintenancePage/>}/>
        <Route path="*" element={<Page404/>}/>
        <Route path="/mendel" element={<Mendel />} />
        <Route path="/aula" element={<AulaQuadro/>} />
        <Route path="/layout" element={<TesteLayout/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};

