import React from 'react';
import { Flex, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AlleleTable = ({ countDominant, countRecessive, isTable = false }) => {
  // Convert alleleCounts to data array for PieChart
  const data = {
    labels: ['Dominante', 'Recessivo'],
    datasets: [
      {
        label: 'Frequência de Alelo',
        data: [countDominant, countRecessive],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  return (
    <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
      {isTable ? (
        <>
          <h3>Allele Frequencies</h3>
          <Table variant="simple" colorScheme="teal" mb="6">
            <Thead bg="Primary">
              <Tr>
                <Th>Allele Type</Th>
                <Th>Count</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Dominant</Td>
                <Td>{countDominant}</Td>
              </Tr>
              <Tr>
                <Td>Recessive</Td>
                <Td>{countRecessive}</Td>
              </Tr>
            </Tbody>
          </Table>
        </>
      ) : (
        <>
          <h3>Allele Distribution</h3>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Pie data={data} />
          </div>
        </>
      )}

    </Flex>
  );
};

export default AlleleTable;
