import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';

function isEven(number) {
    return number % 2 === 0;
}

const PunnettTable = () => {
    const {
        amountAlelo,
        parentsAlelo,
        backgroundColorDominant,
        backgroundColorRecessive,
    } = useContext(CaracteristicaContext);

    const [parent1Group1, parent1Group2] = parentsAlelo;
    const allAlleles1 = [...parent1Group1, ...parent1Group2];
    const allAlleles2 = [...parent1Group2, ...parent1Group1];

    return (
        <div>
            {amountAlelo === 4 ? (
                <Table border="2px" borderColor="white" mb="4" bg="Dark">
                    <Thead borderColor="white">
                        <Tr borderColor="white">
                            <Th border="2px" borderColor="gray.500" bg="Dark" color="white"></Th>
                            {allAlleles2.map((allele, idx) => {
                                if (!isEven(idx)) return null;
                                const newId = idx === 0 || idx === 4 ? 0 : 1;
                                const SecoundAllele = idx === 0 || idx === 2 ? 2 : 3;
                                return (
                                    <Th border="2px" borderColor="white" color="white" key={idx} sx={{ textTransform: 'none' }}>
                                        {allAlleles2[newId]}{allAlleles2[SecoundAllele]}
                                    </Th>
                                );
                            })}
                        </Tr>
                    </Thead>
                    <Tbody borderColor="white">
                        {allAlleles1.map((allele1, idx1) => {
                            if (!isEven(idx1)) return null;
                            const newId = idx1 === 0 || idx1 === 4 ? 0 : 1;
                            const SecoundAllele = idx1 === 0 || idx1 === 2 ? 2 : 3;

                            return (
                                <Tr borderColor="white" key={idx1}>
                                    <Th border="2px" borderColor="white" color="white" sx={{ textTransform: 'none' }}>
                                        {allAlleles1[newId]}{allAlleles1[SecoundAllele]}
                                    </Th>
                                    {allAlleles2.map((allele2, idx2) => {
                                        if (!isEven(idx2)) return null;
                                        const newId2 = idx2 === 0 || idx2 === 4 ? 0 : 1;
                                        const SecoundAllele2 = idx2 === 0 || idx2 === 2 ? 2 : 3;
                                        return (
                                            <Td
                                                border="2px"
                                                borderColor="white"
                                                color="white"
                                                key={`${idx1}-${idx2}`}
                                                bg={/[A-Z]/.test(`${allAlleles1[newId]}${allAlleles2[newId2]}${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`) ? backgroundColorDominant[0] : backgroundColorRecessive[0]}
                                            >
                                                {`${allAlleles1[newId]}${allAlleles2[newId2]}${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            ) : (
                <Table border="2px" borderColor="white" mb="4" bg="Dark" color="white">
                    <Thead borderColor="white">
                        <Tr borderColor="white">
                            <Th border="2px" borderColor="white" bg="Second" color="white"></Th>
                            {parentsAlelo[1].map((allele, idx) => (
                                <Th border="2px" borderColor="white" color="white" key={idx} sx={{ textTransform: 'none' }}>
                                    {allele}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody borderColor="white">
                        {parentsAlelo[0].map((allele1, idx1) => (
                            <Tr borderColor="white" key={idx1}>
                                <Th border="2px" borderColor="white" color="white" sx={{ textTransform: 'none' }}>
                                    {allele1}
                                </Th>
                                {parentsAlelo[1].map((allele2, idx2) => (
                                    <Td
                                        border="2px"
                                        borderColor="white"
                                        key={`${idx1}-${idx2}`}
                                        bg={/[A-Z]/.test(`${allele1}${allele2}`) ? backgroundColorDominant[0] : backgroundColorRecessive[0]}
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
