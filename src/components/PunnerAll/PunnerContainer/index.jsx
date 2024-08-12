import React, { useContext, useEffect } from 'react';
import { Flex, Text, useBreakpointValue} from '@chakra-ui/react';
import PunnettSquare from '../PunnettSquare';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import PunnettSquareDraggable from '../PunerDraggable';
import { ParentInput } from '../ParentInput';
export const PunerContainer = ({configAlelo = [], title, inputTrue = false}) => {
  const { setAmountAlelo,setParentsAlelo } = useContext(CaracteristicaContext);
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });


  useEffect(() =>{
    setAmountAlelo(4); 
    if(configAlelo.length > 0) {
      setParentsAlelo(configAlelo)
    }
  },[setAmountAlelo]);
  
  return (
      <>
        {title &&<Text variant="h3" align="center">{title}</Text>}
        <Flex maxW="100%" direction={flexDirection} align="flex-start" justify="center" p={10} color="white">
          {inputTrue && <ParentInput/>}
          <PunnettSquare />
          {/* <PunnettSquareDraggable maxAlelo={2}/> */}
        </Flex>
      </>
  );
};

