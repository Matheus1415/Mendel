import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Flex, Text, Box } from '@chakra-ui/react';
import AlleleTable from '../AlleleTable';

const PunnettSquare = ({ parents, maxAlelo }) => {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('error');
  const [parentsValid, setParentsValid] = useState(false);
  const [countDominant, setCountDominant] = useState(0);
  const [countRecessive, setCountRecessive] = useState(0);

  useEffect(() => {
    if (Array.isArray(parents) && parents.length === 2 && parents[0].length && parents[1].length) {
      if (parents[0].length === parents[1].length) {
        if (parents[0].length <= maxAlelo && parents[1].length <= maxAlelo) {
          setParentsValid(true);
          countAlleles(parents);
        } else {
          setAlertMessage(`Ops! Parece que a quantidade de alelos ultrapassou. A quantidade máxima é ${maxAlelo}`);
          setAlertStatus('warning');
          setIsVisibleAlert(true);
          setParentsValid(false);
        }
      } else {
        setAlertMessage('Ops! Parece que a quantidade de alelos da mãe e do pai não são iguais');
        setAlertStatus('error');
        setIsVisibleAlert(true);
        setParentsValid(false);
      }
    } else {
      setParentsValid(false);
    }

    // Desativa o alerta após 3 segundos
    if (isVisibleAlert) {
      const timer = setTimeout(() => {
        setIsVisibleAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [parents, isVisibleAlert]);

  // Função para contar a frequência de cada tipo de alelo
  const countAlleles = (parents) => {
    const [parent1, parent2] = parents;
    const combinations = [];
    for (let i = 0; i < parent1.length; i++) {
      for (let j = 0; j < parent2.length; j++) {
        combinations.push(`${parent1[i]}${parent2[j]}`);
      }
    }

    let dominantCount = 0;
    let recessiveCount = 0;

    combinations.forEach(combination => {
      if (isDominant(combination)) {
        dominantCount++;
      } else if (isRecessive(combination)) {
        recessiveCount++;
      }
    });

    setCountDominant(dominantCount);
    setCountRecessive(recessiveCount);
  };

  // Função para determinar se um alelo é dominante (pelo menos uma letra maiúscula)
  const isDominant = (allele) => /[A-Z]/.test(allele);

  // Função para determinar se um alelo é recessivo (todas as letras minúsculas)
  const isRecessive = (allele) => allele === allele.toLowerCase();

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
        status='error'
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
        <Table border="2px" borderColor="gray.300" mb="4">
          <Thead borderColor="gray.300">
            <Tr borderColor="gray.300">
              <Th border="2px" borderColor="gray.300" bg="gray.400"></Th>
              {parents[1].map((allele, idx) => (
                <Th border="2px" borderColor="gray.300" key={idx}>{allele}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody borderColor="gray.300">
            {parents[0].map((allele1, idx1) => (
              <Tr borderColor="gray.300" key={idx1}>
                <Th border="2px" borderColor="gray.300">{allele1}</Th>
                {parents[1].map((allele2, idx2) => (
                  <Td border="2px" borderColor="gray.300" key={`${idx1}-${idx2}`}>{`${allele1}${allele2}`}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <AlleleTable countDominant={countDominant} countRecessive={countRecessive} />
    </Flex>
  );
};

export default PunnettSquare;
