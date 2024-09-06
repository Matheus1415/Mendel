import { CaracteristicaProvider } from '../../contexts/CaracteristicaContext';
import { PunerContainer } from './PunnerContainer';

export const PunnettComponent = ({ title, configAlelo, inputTrue, inputABO }) => {
  return (
    <CaracteristicaProvider>
      <PunerContainer title={title} configAlelo={configAlelo} inputTrue={inputTrue} inputABO={inputABO} />
    </CaracteristicaProvider>
  );
};

