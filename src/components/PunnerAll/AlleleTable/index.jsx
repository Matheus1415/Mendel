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

  const data = {
    labels: [`Dominante | ${caracteristica[0]}`, `Recessivo | ${caracteristica[1]}`],
    datasets: [
      {
        label: 'Frequência de Alelo',
        data: [countDominant, countRecessive],
        backgroundColor: [backgroundColorDominant,backgroundColorRecessive],
        hoverBackgroundColor: [backgroundColorDominant,backgroundColorRecessive]
      }
    ]
  };

  return (
    <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
      {isTable ? (
        <>
          <Text variant="p" align="center" >Frequencia de Alelos</Text>
          <Table mb="6">
            <Thead bg="Dark">
              <Tr>
                <Th color="white">Allele Type</Th>
                <Th color="white">Count</Th>
              </Tr>
            </Thead>
            <Tbody bg="Terciario">
              <Tr>
                <Td color="white">Dominant</Td>
                <Td color="white">{countDominant}</Td>
              </Tr>
              <Tr>
                <Td color="white">Recessive</Td>
                <Td color="white">{countRecessive}</Td>
              </Tr>
            </Tbody>
          </Table>
        </>
      ) : (
        <>
          <Text variant="p" align="center" >Frequencia de Alelos</Text>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Pie data={data} />
          </div>
        </>
      )}

    </Flex>
  );
};

export default AlleleTable;
