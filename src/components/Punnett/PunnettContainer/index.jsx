import React, { useContext, useEffect } from 'react';
import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import PunnettSquare from '../PunnettSquare';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { ParentInput } from '../ParentInput';
import PunnettSquareDraggable from '../PunerDraggable';

export const PunnettContainer = ({ configAlelo = [], title, inputTrue = false, requireFourCharacteristics = false }) => {
  const { setAmountAlelo, setParentsAlelo, setShowAdditionalInputs } = useContext(CaracteristicaContext);
  const flexDirection = useBreakpointValue({ base: "column", md: "column" });

  useEffect(() => {
    setAmountAlelo(4);
    if (configAlelo.length > 0) {
      setParentsAlelo(configAlelo);
    }
    setShowAdditionalInputs(requireFourCharacteristics  );
  }, [setAmountAlelo, setParentsAlelo, setShowAdditionalInputs, configAlelo, requireFourCharacteristics]);

  return (
    <>
      {title && <Heading variant="PrimaryTitle" align="center">{title}</Heading>}
      <Flex maxW="100%" direction={flexDirection} align="center" justify="center" p={10}>
        {inputTrue && <ParentInput />}
        <PunnettSquare />
        {/* <PunnettSquareDraggable maxAlelo={2}/> */}
      </Flex>
    </>
  );
};
