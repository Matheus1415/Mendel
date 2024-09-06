import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mendel } from '../pages/Mendel';
import { Chromosomes } from '../pages/Chromosomes';
import { Atividades } from '../pages/Atividades/';
import VLibras from "@djpfs/react-vlibras";
import { Footer } from '../components/Footer/footer';
import { Page404 } from '../pages/Page404';
import MaintenancePage from '../pages/Manuntecao';
import AulaQuadro from '../pages/Aula';
import { TesteLayout } from '../pages/TesteLayout/TesteLayout';
import { Home } from '../pages/Home';
import { PunnettSquareDraggablePage } from '../pages/PunnettSquareDraggable';
import { Variations } from '../pages/Variations';
import { PunntteUnlimited } from '../pages/PunnttPage';
// import { PunnettABOComponent } from '../pages/SystemABO';







import { PunnttABOPage } from '../pages/PunnttABOPage'





import { Fundamentos } from '../pages/Fundamentos';
import { SistemaAbo } from '../pages/SystemABO';
import { PunnerAtv } from '../pages/PunnettAtv';
import { Alelos } from '../pages/Alelos';
import MenuMendel from '../components/Menu';
import { FatorRh } from '../pages/FatorRH';

export const RouterAsRouter = () => {
  return (
    <BrowserRouter>
      <VLibras />
      <MenuMendel />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/atividades' element={<Atividades/>} />
        <Route path="/alelos" element={<Alelos/>} />
        <Route path="/punntt" element={<PunntteUnlimited/>} />

        <Route path="/punntt-abo" element={<PunnttABOPage/>} />

        <Route path="/manutencao" element={<MaintenancePage/>}/>
        <Route path="/fundamentos" element={<Fundamentos/>} />
        <Route path="*" element={<Page404/>}/>
        <Route path="/mendel" element={<Mendel />} />
        <Route path="/aula" element={<AulaQuadro/>} />
        <Route path="/variations" element={<Variations/>} />
        <Route path="/sistema-abo" element={<SistemaAbo />} />
        <Route path="/sistema-rh" element={<FatorRh />} />
        {/* <Route path="/layout" element={<TesteLayout/>} /> */}
        <Route path="/punner-arastavel/:id" element={<PunnettSquareDraggablePage/>} />
        <Route path="/punner-arastavel" element={<PunnerAtv/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};

