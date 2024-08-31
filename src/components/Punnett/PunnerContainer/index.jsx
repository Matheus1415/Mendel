import React, { useContext, useEffect } from 'react';
import { Flex, Heading, useBreakpointValue} from '@chakra-ui/react';
import PunnettSquare from '../PunnettSquare';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { ParentInputPunnet } from '../ParentInputPunnet';
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
        {title &&<Heading variant="PrimaryTitle" align="center">{title}</Heading>}
        <Flex maxW="100%" w="100%" direction={flexDirection} align="flex-start" justify="center" p={10}>
          {inputTrue && <ParentInputPunnet /> }
          <PunnettSquare />
        </Flex>
      </>
  );
};

