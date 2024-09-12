import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { LayoutIntroduction } from "../../layout/LayoutIntroduction"
import { Cells } from "./cells";
import { Chromossomes } from "./chromossomes";
import { Gene } from "./gene";
import { Alleles } from "./alleles";
import { GenoPhenoTypes } from "./genoPhenoTypes";
import { Quiz } from '../../components/Quiz'
import questionMock from '../../data/question-mock-fundamentos.json'
import { PreviousNextPageNavigator } from '../../components/PreviousNextPageNavigator';
export const Fundamentos = () => {
return (
        <>
            <Flex position='relative' direction='column' w='100%'>
                <LayoutIntroduction query="FUNDAMENTOS">FUNDAMENTOS DA GENÉTICA</LayoutIntroduction>
                <Cells/>
                <Chromossomes/>
                <Gene/>
                <Alleles/>
                <GenoPhenoTypes/>
                <Box minH={100}></Box>
                <Quiz questions={questionMock}/>
                <PreviousNextPageNavigator
                    previousPageRoute="/introducao-genetica"
                    nextPageRoute="/variations"
                /> 
            </Flex>
        </>
    );
};