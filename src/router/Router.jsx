import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Alelos } from '../pages/Alelos';
import { FatorRH } from '../pages/FatorRH';
import PunerAll from '../components/PunnerAll';
import { Chromosomes } from '../pages/Chromosomes';
import { MenuMendel } from '../components/Menu';
import VLibras from "@djpfs/react-vlibras";
import { Footer } from '../components/Footer/footer';


export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <VLibras />
      <MenuMendel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alelos" element={<Alelos />} />
        <Route path="/puner" element={<PunerAll/>} />
        <Route path="/fatorrh" element={<FatorRH />} />
        <Route path="/cromossomo" element={<Chromosomes/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};

