import React, { useContext } from 'react';
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext'; 

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AlleleTable = ({ isTable = false }) => {
  const {
     countDominant, 
     countRecessive, 
     caracteristica,
     backgroundColorDominant,
     backgroundColorRecessive,
   } = useContext(CaracteristicaContext);

  // Verifique se caracteristica está definido
  if (!caracteristica || caracteristica.length < 2) {
    return <Text>Dados indisponíveis</Text>;
  }

  const data = {
    labels: [`Dominante | ${caracteristica[0]}`, `Recessivo | ${caracteristica[1]}`],
    datasets: [
      {
        label: 'Frequência de Alelo',
        data: [countDominant, countRecessive],
        backgroundColor: [backgroundColorDominant[0], backgroundColorRecessive[0]],
        hoverBackgroundColor: [backgroundColorDominant[0], backgroundColorRecessive[0]]
      }
    ]
  };

  return (
    <Flex direction="column" align="center" justify="center" m="4">
      {isTable ? (
        <Flex direction="column" align="center" justify="center" m="4">
          <Text variant="p" align="center">Frequência de Alelos</Text>
          <Table mb="6">
            <Thead bg="Dark">
              <Tr>
                <Th color="white">Tipo de Alelo</Th>
                <Th color="white">Contagem</Th>
              </Tr>
            </Thead>
            <Tbody bg="Terciario">
              <Tr>
                <Td color="white">Dominante</Td>
                <Td color="white">{countDominant}</Td>
              </Tr>
              <Tr>
                <Td color="white">Recessivo</Td>
                <Td color="white">{countRecessive}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      ) : (
        <Flex direction="column" align="center" justify="center" m="4">
          <Text variant="p" align="center">Frequência de Alelos</Text>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Pie data={data} />
          </div>
        </Flex>
      )}
    </Flex>
  );
};

export default AlleleTable;
