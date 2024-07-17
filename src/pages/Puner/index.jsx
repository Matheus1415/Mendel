import React, { useState } from 'react';
import { Container, Text } from '@chakra-ui/react';
import ParentInput from '../../components/ParentInput';
import PunnettSquare from '../../components/PunnettSquare';
import { CaracteristicaProvider } from '../../contexts/CaracteristicaContext';
import PunnettSquareDraggable from '../../components/PunerDraggable';

export const Puner = () => {
  const [parents, setParents] = useState([]);

  return (
    <CaracteristicaProvider>
      <Container maxW="100%">
        <Text variant="h3" align="center">Quadro de Punner</Text>
        <ParentInput setParents={setParents} />
        <PunnettSquare parents={parents} maxAlelo={4} />
        {/* <PunnettSquareDraggable maxAlelo={2}/> */}
      </Container>
    </CaracteristicaProvider>
  );
};

export default Puner;
