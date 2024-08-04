import React, { useContext, useEffect } from 'react';
import { Container, Text } from '@chakra-ui/react';
import PunnettSquare from '../PunnettSquare';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { ParentInput } from '../ParentInput';
import PunnettSquareDraggable from '../PunerDraggable';

export const PunerContainer = ({configAlelo = [], title, inputTrue = false}) => {
  const { setAmountAlelo,setParentsAlelo } = useContext(CaracteristicaContext);

  useEffect(() =>{
    setAmountAlelo(4); 
    if(configAlelo.length > 0) {
      setParentsAlelo(configAlelo)
    }
  },[setAmountAlelo]);

  return (
      <Container maxW="100%">
        {title &&<Text variant="h3" align="center">{title}</Text>}
        {inputTrue && <ParentInput /> }
        <PunnettSquare />
        {/* <PunnettSquareDraggable maxAlelo={2}/> */}
      </Container>
  );
};

