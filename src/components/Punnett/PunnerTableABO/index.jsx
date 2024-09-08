import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { rearrangeLetters } from '../../../config/rearrangeLetters';

function isEven(number) {
    return number % 2 === 0;
}

// Definir os componentes animados do Framer Motion
const MotionBox = motion(Box);
const MotionTable = motion(Table);
const MotionTr = motion(Tr);
const MotionTh = motion(Th);
const MotionTd = motion(Td);

export const PunnerTableABO = ({ 
    amountAlelo,
    parentsAlelo,
    backgroundColorDominant, 
    backgroundColorDominant2, 
    backgroundColorDominant3, 
    backgroundColorRecessive 
}) => {
    const [parent1Group1, parent1Group2] = parentsAlelo;
    const allAlleles1 = [...parent1Group1, ...parent1Group2];
    const allAlleles2 = [...parent1Group2, ...parent1Group1];

    return (
        <MotionBox 
            p="4" 
            maxW="container.lg" 
            mx="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {parentsAlelo[0].length === 4 ? (
                <MotionTable 
                    border="2px" 
                    borderColor="blue.800" 
                    mb="4" 
                    bg="white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Thead>
                        <MotionTr
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Th border="2px" borderColor="blue.600" bg="blue.100" color="blue.800"></Th>
                            {allAlleles2.map((allele, idx) => {
                                if (!isEven(idx)) return null;
                                const newId = idx === 0 || idx === 4 ? 0 : 1;
                                const SecoundAllele = idx === 0 || idx === 2 ? 2 : 3;
                                return (
                                    <MotionTh 
                                        border="2px" 
                                        borderColor="blue.600" 
                                        color="blue.800" 
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        textTransform="none"
                                    >
                                        {allAlleles2[newId]}{allAlleles2[SecoundAllele]}
                                    </MotionTh>
                                );
                            })}
                        </MotionTr>
                    </Thead>
                    <Tbody>
                        {allAlleles1.map((allele1, idx1) => {
                            if (!isEven(idx1)) return null;
                            const newId = idx1 === 0 || idx1 === 4 ? 0 : 1;
                            const SecoundAllele = idx1 === 0 || idx1 === 2 ? 2 : 3;

                            return (
                                <MotionTr
                                    key={idx1}
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <MotionTh 
                                        border="2px" 
                                        borderColor="blue.600" 
                                        color="blue.800"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        textTransform="none"
                                    >
                                        {allAlleles1[newId]}{allAlleles1[SecoundAllele]}
                                    </MotionTh>
                                    {allAlleles2.map((allele2, idx2) => {
                                        if (!isEven(idx2)) return null;
                                        const newId2 = idx2 === 0 || idx2 === 4 ? 0 : 1;
                                        const SecoundAllele2 = idx2 === 0 || idx2 === 2 ? 2 : 3;
                                        return (
                                            <MotionTd
                                                border="2px"
                                                borderColor="blue.600"
                                                key={`${idx1}-${idx2}`}
                                                bg={
                                                    /^[a-z]+$/.test(`${allAlleles1[newId]}${allAlleles2[newId2]}${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`)?
                                                    backgroundColorRecessive : 
                                                    /^[a-z]+$/.test(`${allAlleles1[newId]}${allAlleles2[newId2]}`) ?
                                                     backgroundColorDominant3 :
                                                    /^[a-z]+$/.test(`${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`) ?
                                                     backgroundColorDominant2 : backgroundColorDominant
                                                }
                                                style={{ color: 'white'}}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {rearrangeLetters(allAlleles1[newId] + allAlleles2[newId2]) + rearrangeLetters(allAlleles1[SecoundAllele] + allAlleles2[SecoundAllele2])}
                                                {/* {`${allAlleles1[newId]}${allAlleles2[newId2]}${allAlleles1[SecoundAllele]}${allAlleles2[SecoundAllele2]}`} */}
                                            </MotionTd>
                                        );
                                    })}
                                </MotionTr>
                            );
                        })}
                    </Tbody>
                </MotionTable>
            ) : (
                <MotionTable 
                    border="2px" 
                    borderColor="blue.600" 
                    mb="4" 
                    bg="blue.50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Thead>
                        <MotionTr
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Th border="2px" borderColor="blue.600" bg="blue.100" color="blue.800"></Th>
                            {parentsAlelo[1].map((allele, idx) => (
                                <MotionTh 
                                    border="2px" 
                                    borderColor="blue.600" 
                                    color="blue.800" 
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {allele}
                                </MotionTh>
                            ))}
                        </MotionTr>
                    </Thead>
                    <Tbody>
                        {parentsAlelo[0].map((allele1, idx1) => (
                            <MotionTr
                                key={idx1}
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MotionTh 
                                    border="2px" 
                                    borderColor="blue.600" 
                                    color="blue.800"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {allele1}
                                </MotionTh>
                                {parentsAlelo[1].map((allele2, idx2) => (
                                    <MotionTd
                                        border="2px"
                                        borderColor="blue.600"
                                        key={`${idx1}-${idx2}`}
                                        bg={/[A-Z]/.test(`${allele1}${allele2}`) ? backgroundColorDominant : backgroundColorRecessive}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {`${allele1}${allele2}`}
                                    </MotionTd>
                                ))}
                            </MotionTr>
                        ))}
                    </Tbody>
                </MotionTable>
            )}
        </MotionBox>
    );
};

export default PunnerTableABO;
