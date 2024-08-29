import React, { useState, useEffect, useContext } from 'react'; 
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Flex, Text, Box, Button } from '@chakra-ui/react';
import AlleleTable from '../AlleleTable';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { checkAlleleEntry } from '../../../config/checkAlleleEntry';
import { CountAlleles } from '../../../config/countAlleles';
import PunnettTable from '../PunnerTable';
import Notification from '../Notification';

const PunnettSquare = () => {
  const {
    setCountDominant,
    setCountRecessive,
    backgroundColorDominant,
    backgroundColorRecessive,
    setCountDominant2,
    setCountDominant3,
    backgroundColorDominant2,
    backgroundColorDominant3,
    parentsAlelo,
    amountAlelo,
    caracteristica
  } = useContext(CaracteristicaContext);

  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [parentsValid, setParentsValid] = useState(false);

  useEffect(() => {
    checkAlleleEntry(
      parentsAlelo,
      amountAlelo,
      setParentsValid,
      () => CountAlleles(parentsAlelo, setCountDominant, setCountRecessive,setCountDominant2, setCountDominant3, amountAlelo),
      setAlertMessage,
      setAlertStatus,
      setIsVisibleAlert,
      caracteristica
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
      <Notification
        isVisible={isVisibleAlert}
        setIsVisible={setIsVisibleAlert}
        status={alertStatus}
        message={alertMessage}
      ></Notification>
    ) : null;
  }

  return (
    <Flex direction="column-reverse" align="center" justify="center" wrap="wrap" m="4">
      <Box maxW="600px" mb="6">
        <Text variant="p" align="center" mb="4">Quadro de Punnett</Text>
        <PunnettTable
          amountAlelo={amountAlelo}
          parentsAlelo={parentsAlelo}
          backgroundColorDominant={backgroundColorDominant}
          backgroundColorRecessive={backgroundColorRecessive}
          backgroundColorDominant2={backgroundColorDominant2}
          backgroundColorDominant3={backgroundColorDominant3}
        />
      </Box>
      <AlleleTable 
        isTable={false}
      />
      {/* <Button>Mude</Button> */}
      {/* datalist */}
<<<<<<< HEAD:src/components/PunnerAll/PunnettSquare/index.jsx


=======
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16:src/components/Punnett/PunnettSquare/index.jsx
    </Flex>
  );
};

export default PunnettSquare;
