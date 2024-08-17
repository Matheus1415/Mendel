import React, { useState } from 'react';
import { CaracteristicaProvider } from '../../contexts/CaracteristicaContext';
import { PunerContainer } from './PunnerContainer';

export const Punnett = ({title = "Mendel",configAlelo,inputTrue = true}) => {
let configExampleAllelo = [['a','a'],['a','A']];
  // const { combinationsAlelo} = usePunnettSquare(['a','A','b','b'],['a','a','b','b']);
  // console.log(combinationsAlelo)
  return (
    <CaracteristicaProvider>
      <PunnettContainer title={title} configAlelo={configAlelo} inputTrue={inputTrue}/>
    </CaracteristicaProvider>
  );
};

export default punnett;
