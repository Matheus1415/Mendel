import React, { useState, useEffect, useContext } from 'react'; 
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Flex, Text, Box } from '@chakra-ui/react';
import AlleleTable from '../AlleleTable';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { CheckAlleleEntry } from '../../../config/checkAlleleEntry';
import { CountAlleles } from '../../../config/countAlleles';

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
      () => CountAlleles(parentsAlelo, setCountDominant, setCountRecessive),
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
        <Table border="2px" borderColor="gray.500" mb="4">
          <Thead borderColor="gray.500">
            <Tr borderColor="gray.500">
              <Th border="2px" borderColor="gray.500" bg="gray.400"></Th>
              {parentsAlelo[1].map((allele, idx) => (
                <Th border="2px" borderColor="gray.500" key={idx} sx={{ textTransform: 'none' }}>
                  {allele}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody borderColor="gray.500">
            {parentsAlelo[0].map((allele1, idx1) => (
              <Tr borderColor="gray.500" key={idx1}>
                <Th border="2px" borderColor="gray.500" sx={{ textTransform: 'none' }}>
                  {allele1}
                </Th>
                {parentsAlelo[1].map((allele2, idx2) => (
                  <Td border="2px" borderColor="gray.500" key={`${idx1}-${idx2}`} bg={/[A-Z]/.test(`${allele1}${allele2}`) ? backgroundColorDominant : backgroundColorRecessive}>
                    {`${allele1}${allele2}`}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <AlleleTable 
        isTable={false}
      />
    </Flex>
  );
};

export default PunnettSquare;
