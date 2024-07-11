import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Flex, Text, Box } from '@chakra-ui/react';
import AlleleTable from '../AlleleTable'; 

const PunnettSquare = ({ parents, maxAlelo }) => {
    const [isVisibleAlert, setIsVisibleAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState('error');
    const [parentsValid, setParentsValid] = useState(false);

    useEffect(() => {
        if (Array.isArray(parents) && parents.length === 2 && parents[0].length && parents[1].length) {
            if (parents[0].length === parents[1].length) {
                if (parents[0].length <= maxAlelo && parents[1].length <= maxAlelo) {
                    setParentsValid(true);
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

        if (isVisibleAlert) {
            const timer = setTimeout(() => {
                setIsVisibleAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [parents, isVisibleAlert]);

    if (isVisibleAlert) {
        return (
            <Alert
                maxW="400px"
                position="fixed"
                top="10px"
                right="10px"
                bg={alertStatus === 'error' ? 'red.500' : 'yellow.500'}
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
        );
    }

    if (!parentsValid) {
        return null;
    }

    const [parent1, parent2] = parents;

    const combinations = [];
    for (let i = 0; i < parent1.length; i++) {
        for (let j = 0; j < parent2.length; j++) {
            combinations.push(`${parent1[i]}${parent2[j]}`);
        }
    }

    const countAlleles = (arr) => {
        return arr.reduce((acc, allele) => {
            acc[allele] = (acc[allele] || 0) + 1;
            return acc;
        }, {});
    };

    const alleleCounts = countAlleles(combinations);
    const totalCombinations = combinations.length;

    return (
        <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
            <Box maxW="600px" mb="6">
                <Text variant="p" align="center" mb="4">Quadro de Punnett</Text>
                <Table border="2px" borderColor="gray.200" mb="4">
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
            </Box>
            <AlleleTable alleleCounts={alleleCounts} totalCombinations={totalCombinations} />
        </Flex>
    );
};

export default PunnettSquare;
