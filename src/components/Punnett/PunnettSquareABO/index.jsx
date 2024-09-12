import React, { useState, useEffect, useContext } from 'react'; 
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Flex, Text, Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import AlleleTable from '../AlleleTable';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { checkAlleleEntry } from '../../../config/checkAlleleEntry';
import { CountAlleles } from '../../../config/countAlleles';
import {PunnerTableABO as PunnettTable} from '../PunnerTableABO';
import Notification from '../Notification';

const PunnettSquareABO = () => {
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
  const [isTable, setIsTable] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    checkAlleleEntry(
      parentsAlelo,
      amountAlelo,
      setParentsValid,
      () => CountAlleles(parentsAlelo, setCountDominant, setCountRecessive, setCountDominant2, setCountDominant3, amountAlelo),
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
      />
    ) : null;
  }

  return (
    <Flex direction="column" align="center" justify="center" wrap="wrap" m={{ base: '2', md: '4' }} p={{ base: '2', md: '4' }}>
      <Box maxW={{ base: 'full', md: '600px' }} mb="6" p={{ base: '2', md: '4' }}>
        <PunnettTable
          amountAlelo={amountAlelo}
          parentsAlelo={parentsAlelo}
          backgroundColorDominant={backgroundColorDominant}
          backgroundColorRecessive={backgroundColorRecessive}
          backgroundColorDominant2={backgroundColorDominant2}
          backgroundColorDominant3={backgroundColorDominant3}
        />
      </Box>

      <Button variant="nextPage" onClick={onOpen} mb="4">
        Ver Gráfico de Alelos
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'md', lg: 'lg' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>            
            <AlleleTable isTable={isTable} />
          </ModalBody>

          <ModalFooter>
            <Button variant="readMore" onClick={() => setIsTable(!isTable)}>
              {isTable ? 'Voltar para o Gráfico' : 'Ir para a Tabela'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default PunnettSquareABO;
