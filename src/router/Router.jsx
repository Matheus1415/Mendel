import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
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
import { ABO } from '../pages/ABO';
=======
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

>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <VLibras />
      <MenuMendel />

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/puner" element={<PunerAll/>} />
=======
        <Route path="/" element={<Home/>} />
        <Route path="/puner" element={<Punnett/>} />
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
        <Route path="/cromossomo" element={<Chromosomes/>} />
        <Route path="/manutencao" element={<MaintenancePage/>}/>
        <Route path="*" element={<Page404/>}/>
        <Route path="/mendel" element={<Mendel />} />
        <Route path="/aula" element={<AulaQuadro/>} />
<<<<<<< HEAD
        <Route path="/alelos" element={<Alelos/>} />
        <Route path="/abo" element={<ABO/>} />

=======
        <Route path="/layout" element={<TesteLayout/>} />
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};

