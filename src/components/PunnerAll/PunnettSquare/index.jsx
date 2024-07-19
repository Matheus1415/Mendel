import React, { useState, useEffect, useContext } from 'react'; 
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Flex, Text, Box } from '@chakra-ui/react';
import AlleleTable from '../AlleleTable';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { CheckAlleleEntry } from '../../../config/checkAlleleEntry';
import { CountAlleles } from '../../../config/countAlleles';
import PunnettTable from '../PunnerTable';

const PunnettSquare = () => {
  const {
    countDominant,
    setCountDominant,
    countRecessive,
    setCountRecessive,
    backgroundColorDominant,
    backgroundColorRecessive,
    parentsAlelo,
    amountAlelo
  } = useContext(CaracteristicaContext);

  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('error');
  const [parentsValid, setParentsValid] = useState(false);

  useEffect(() => {
    CheckAlleleEntry(
      parentsAlelo,
      amountAlelo,
      setParentsValid,
      () => CountAlleles(parentsAlelo, setCountDominant, setCountRecessive, amountAlelo),
      setAlertMessage,
      setAlertStatus,
      setIsVisibleAlert,
    );
  }, [parentsAlelo, amountAlelo]);

  useEffect(() => {
    if (isVisibleAlert) {
      const timer = setTimeout(() => {
        setIsVisibleAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisibleAlert]);

  if (!parentsValid) {
    return isVisibleAlert ? (
      <Alert
        maxW="400px"
        position="fixed"
        top="10px"
        right="10px"
        bg="red.500"
        color="white"
        padding="20px"
        borderRadius="md"
        boxShadow="lg"
        zIndex="1000"
        status={alertStatus}
        variant='left-accent'
      >
        <AlertIcon />
        {alertMessage}
      </Alert>
    ) : null;
  }


  return (
    <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
      <Box maxW="600px" mb="6">
        <Text variant="p" align="center" mb="4">Quadro de Punnett</Text>
        <PunnettTable
          amountAlelo={amountAlelo}
          parentsAlelo={parentsAlelo}
          backgroundColorDominant={backgroundColorDominant}
          backgroundColorRecessive={backgroundColorRecessive}
        />
      </Box>
      <AlleleTable 
        isTable={false}
      />
    </Flex>
  );
};

export default PunnettSquare;
