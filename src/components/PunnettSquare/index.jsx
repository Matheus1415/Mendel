import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const PunnettSquare = ({ parents }) => {
    // Verifica se há exatamente 2 pais e se eles são válidos
    if (!Array.isArray(parents) || parents.length !== 2 || !parents[0].length || !parents[1].length) {
        return null;
    }

    const [parent1, parent2] = parents; // Destructuring dos pais

    // Gera todas as combinações possíveis de alelos entre parent1 e parent2
    const combinations = [];
    for (let i = 0; i < parent1.length; i++) {
        for (let j = 0; j < parent2.length; j++) {
            combinations.push(`${parent1[i]}${parent2[j]}`);
        }
    }

    // Função para contar a frequência de cada alelo nas combinações
    const countAlleles = (arr) => {
        return arr.reduce((acc, allele) => {
            acc[allele] = (acc[allele] || 0) + 1;
            return acc;
        }, {});
    };

    const alleleCounts = countAlleles(combinations); // Objeto com a contagem de cada alelo
    const totalCombinations = combinations.length; // Número total de combinações

    return (
        <div>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th></Th>
                        {parent2.map((allele, idx) => (
                            <Th key={idx}>{allele}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {parent1.map((allele1, idx1) => (
                        <Tr key={idx1}>
                            <Th>{allele1}</Th>
                            {parent2.map((allele2, idx2) => (
                                <Td key={`${idx1}-${idx2}`}>{`${allele1}${allele2}`}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <AlleleTable alleleCounts={alleleCounts} totalCombinations={totalCombinations} />
        </div>
    );
};

const AlleleTable = ({ alleleCounts, totalCombinations }) => {
    return (
        <div>
            <h3>Allele Frequencies</h3>
            <Table variant="simple" colorScheme="teal">
                <Thead>
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
        </div>
    );
};

export default PunnettSquare;
