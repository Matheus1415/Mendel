import React from 'react';
import { Flex, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AlleleTable = ({ alleleCounts, totalCombinations, isTable = false }) => {
  // Convert alleleCounts to data array for PieChart
  const data = {
    labels: Object.keys(alleleCounts),
    datasets: [
      {
        label: 'Allele Frequency',
        data: Object.values(alleleCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  return (
    <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
        {
            isTable?(
                <>
                    <h3>Allele Frequencies</h3>
                    <Table variant="simple" colorScheme="teal" mb="6">
                    <Thead bg="Primary">
                        <Tr>
                        <Th>Allele</Th>
                        <Th>Count</Th>
                        <Th>Percentage</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.entries(alleleCounts).map(([allele, count], idx) => (
                        <Tr key={idx}>
                            <Td>{allele}</Td>
                            <Td>{count}</Td>
                            <Td>{((count / totalCombinations) * 100).toFixed(2)}%</Td>
                        </Tr>
                        ))}
                    </Tbody>
                    </Table>
                </>
            ):(                
                <>
                    <h3>Allele Distribution</h3>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <Pie data={data} />
                    </div>
                </>
            )
        }

    </Flex>
  );
};

export default AlleleTable;
