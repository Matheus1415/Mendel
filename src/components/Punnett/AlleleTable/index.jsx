import React, { useContext } from 'react';
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Text, useBreakpointValue, Button } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { motion } from 'framer-motion';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Definir os componentes animados do Framer Motion
const MotionFlex = motion(Flex);
const MotionTable = motion(Table);
const MotionPieContainer = motion.div;

const AlleleTable = ({ isTable = false }) => {
  const {
    countDominant, 
    parentsAlelo, 
    countRecessive, 
    caracteristica,
    backgroundColorDominant,
    backgroundColorRecessive,
    countDominant2, 
    countDominant3, 
    backgroundColorDominant2,
    backgroundColorDominant3,
    resetContext // Adicione a função de reset ao contexto
  } = useContext(CaracteristicaContext);

  // Verifique se caracteristica está definido
  if (!caracteristica || caracteristica.length < 2) {
    return <Text>Dados indisponíveis</Text>;
  }

  // Verifique se os valores necessários estão definidos e são diferentes de zero ou string vazia
  const hasValidData = (
    (countDominant || countDominant === 0) &&
    (countRecessive || countRecessive === 0) &&
    (parentsAlelo[0].length === 4
      ? (countDominant2 || countDominant2 === 0) &&
        (countDominant3 || countDominant3 === 0)
      : true)
  );

  // Verifique se dados do gráfico são válidos
  let data = {};
  if (parentsAlelo[0].length === 4) {
    data = {
      labels: [
        `Dominante | ${caracteristica[0]} ${caracteristica[2]}`, 
        `Recessivo | ${caracteristica[1]} ${caracteristica[3]}`, 
        `Dominante | ${caracteristica[0]} ${caracteristica[3]}`, 
        `Recessivo | ${caracteristica[1]} ${caracteristica[2]}`
      ],
      datasets: [
        {
          label: 'Frequência de Alelo',
          data: [countDominant, countRecessive, countDominant2, countDominant3],
          backgroundColor: [backgroundColorDominant, backgroundColorRecessive, backgroundColorDominant2, backgroundColorDominant3],
          hoverBackgroundColor: [backgroundColorDominant, backgroundColorRecessive, backgroundColorDominant2, backgroundColorDominant3],
        }
      ]
    };
  } else {
    data = {
      labels: [`Dominante | ${caracteristica[0]}`, `Recessivo | ${caracteristica[1]}`],
      datasets: [
        {
          label: 'Frequência de Alelo',
          data: [countDominant, countRecessive],
          backgroundColor: [backgroundColorDominant, backgroundColorRecessive],
          hoverBackgroundColor: [backgroundColorDominant, backgroundColorRecessive],
        }
      ]
    };
  }

  const tableVariant = useBreakpointValue({ base: 'striped', md: 'simple' });

  return (
    <MotionFlex
      direction="column"
      align="center"
      justify="center"
      p="4"
      m="4"
      maxW="container.lg"
      mx="auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isTable ? (
        hasValidData ? (
          <MotionFlex
            direction="column"
            align="center"
            justify="center"
            w="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MotionTable
              variant={tableVariant}
              bgColor="teal.700"
              color="white"
              size="md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Thead bg="teal.500">
                <Tr>
                  <Th color="white">Tipo de Alelo</Th>
                  <Th color="white">Contagem</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {/* <Td>Dominante</Td> */}
                  <Td>{caracteristica[0]} e {caracteristica[2]}</Td>
                  <Td>{countDominant}</Td>
                </Tr>
                <Tr>
                  {/* <Td>Recessivo</Td> */}
                  <Td>{caracteristica[1]} e {caracteristica[3]}</Td>
                  <Td>{countRecessive}</Td>
                </Tr>
                {countDominant2 !== undefined && countDominant2 !== null && (
                  <Tr>
                    {/* <Td>Dominante2</Td> */}
                    <Td>{caracteristica[0]} e {caracteristica[3]}</Td>
                    <Td>{countDominant2}</Td>
                  </Tr>
                )}
                {countDominant3 !== undefined && countDominant3 !== null && (
                  <Tr>
                    {/* <Td>Dominante3</Td> */}
                    <Td>{caracteristica[1]} e {caracteristica[2]}</Td>
                    <Td>{countDominant3}</Td>
                  </Tr>
                )}
              </Tbody>
            </MotionTable>
          </MotionFlex>
        ) : (
          <Text>Nenhum dado para exibir na tabela.</Text>
        )
      ) : (
        hasValidData && (
          <MotionFlex
            direction="column"
            align="center"
            justify="center"
            w="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MotionPieContainer
              style={{ maxWidth: '600px', width: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Pie data={data} />
            </MotionPieContainer>
          </MotionFlex>
        )
      )}
    </MotionFlex>
  );
};

export default AlleleTable;
