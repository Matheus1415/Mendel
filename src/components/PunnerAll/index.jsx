import React, { useState } from 'react';
import { CaracteristicaProvider } from '../../contexts/CaracteristicaContext';
import { PunerContainer } from './PunnerContainer';

export const PunerAll = () => {

  return (
    <CaracteristicaProvider>
      <PunerContainer/>
    </CaracteristicaProvider>
  );
};

export default PunerAll;
