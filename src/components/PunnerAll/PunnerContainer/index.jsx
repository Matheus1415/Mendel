import React, { useContext, useEffect } from 'react';
import { Container, Text } from '@chakra-ui/react';
import PunnettSquare from '../PunnettSquare';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { ParentInput } from '../ParentInput';

export const PunerContainer = () => {
  const { setAmountAlelo } = useContext(CaracteristicaContext);

  useEffect(() =>{
    setAmountAlelo(4); 
  },[setAmountAlelo]);

  return (
      <Container maxW="100%">
        <Text variant="h3" align="center">Quadro de Punner </Text>
        <ParentInput />
        <PunnettSquare />
      </Container>
  );
};

