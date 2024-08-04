import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function isEven(number) {
    return number % 2 === 0;
  }

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
            {parentsAlelo[0].length == 4 ? (
                <Table border="2px" borderColor="gray.500" mb="4">
                    <Thead borderColor="gray.500">
                        <Tr borderColor="gray.500">
                            <Th border="2px" borderColor="gray.500" bg="gray.400"></Th>
                            {allAlleles2.map((allele, idx) => {
                                if(!isEven(idx)){return}
                                let newId = idx==0||idx==4?0:1;
                                let SecoundAllele = idx==0||idx==2?2:3;
                                return(
                                <Th border="2px" borderColor="gray.500" key={idx} sx={{ textTransform: 'none' }}>
                                    {allAlleles2[newId]}{allAlleles2[SecoundAllele]}
                                </Th>
                                )
                            })}
                        </Tr>
                    </Thead>
                    <Tbody borderColor="gray.500">
                        {allAlleles1.map((allele1, idx1) => {
                            if(!isEven(idx1)){return}
                            let newId = idx1==0||idx1==4?0:1;
                            let SecoundAllele = idx1==0||idx1==2?2:3;
                            
                            
                            
                            return(
                            <Tr borderColor="gray.500" key={idx1}>
                                <Th border="2px" borderColor="gray.500" sx={{ textTransform: 'none' }}>
                                    {allAlleles1[newId]}{allAlleles1[SecoundAllele]}
                                </Th>
                                {allAlleles2.map((allele2, idx2) => {
                                    if(!isEven(idx2)){return}
                                    let newId2 = idx2==0||idx2==4?0:1;
                                    let SecoundAllele2 = idx2==0||idx2==2?2:3;
                                    return(
                                    <Td
                                        border="2px"
                                        borderColor="gray.500"
                                        key={`${idx1}-${idx2}`}
                                        bg={/[A-Z]/.test(`${allAlleles1[newId]}${allAlleles2[newId2]} ${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`) ? backgroundColorDominant : backgroundColorRecessive}
                                    >
                                        {`${allAlleles1[newId]}${allAlleles2[newId2]}${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`}
                                    </Td>
                                )})}
                            </Tr>
                        )})}
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
