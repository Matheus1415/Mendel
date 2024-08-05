import React, { useState } from 'react';
import { CaracteristicaProvider } from '../../contexts/CaracteristicaContext';
import { PunerContainer } from './PunnerContainer';

export const PunerAll = ({title,configAlelo,inputTrue}) => {

  // let configExampleAllelo = [['a','a'],['a','A']];

  return (
    <CaracteristicaProvider>
      <PunerContainer title={title} configAlelo={configAlelo} inputTrue={inputTrue}/>
    </CaracteristicaProvider>
  );
};

export default PunerAll;
