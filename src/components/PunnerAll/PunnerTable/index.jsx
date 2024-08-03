import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const PunnettTable = ({ 
    amountAlelo,
    parentsAlelo,
    backgroundColorDominant, 
    backgroundColorRecessive 
}) => {

    const [parent1Group1, parent1Group2] = parentsAlelo;
    
    const allAlleles1 = [...parent1Group1, ...parent1Group2];
    const allAlleles2 = [...parent1Group2, ...parent1Group1];
    //Rever logia do quadro 4x4
    return (
        <div>
            {amountAlelo === 16 ? (
                <Table border="2px" borderColor="gray.500" mb="4">
                    <Thead borderColor="gray.500">
                        <Tr borderColor="gray.500">
                            <Th border="2px" borderColor="gray.500" bg="gray.400"></Th>
                            {allAlleles2.map((allele, idx) => (
                                <Th border="2px" borderColor="gray.500" key={idx} sx={{ textTransform: 'none' }}>
                                    {allele}{allele}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody borderColor="gray.500">
                        {allAlleles1.map((allele1, idx1) => (
                            <Tr borderColor="gray.500" key={idx1}>
                                <Th border="2px" borderColor="gray.500" sx={{ textTransform: 'none' }}>
                                    {allele1}{allele1}
                                </Th>
                                {allAlleles2.map((allele2, idx2) => (
                                    <Td
                                        border="2px"
                                        borderColor="gray.500"
                                        key={`${idx1}-${idx2}`}
                                        bg={/[A-Z]/.test(`${allele1}${allele2}`) ? backgroundColorDominant : backgroundColorRecessive}
                                    >
                                        {`${allele1}${allele2} ${allele1}${allele2}`}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
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
                                    <Td
                                        border="2px"
                                        borderColor="gray.500"
                                        key={`${idx1}-${idx2}`}
                                        bg={/[A-Z]/.test(`${allele1}${allele2}`) ? backgroundColorDominant : backgroundColorRecessive}
                                    >
                                        {`${allele1}${allele2}`}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}
        </div>
    );
};

export default PunnettTable;
