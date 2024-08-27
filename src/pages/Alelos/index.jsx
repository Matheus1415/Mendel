import React from 'react';
import { Box, Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { AleloCards } from '../../components/AleloCards';
import conteudoAlelos from '../../data/conteudoAlelos.json';
import { Quiz } from '../../components/Quiz';
import questionMock from '../../data/question-mock-alelos.json';

export const Alelos = () => {
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

    return (
        <>
            <LayoutIntroduction query="VARIAÇÕES">
                VARIAÇÕES DO MODELO MENDERIANO
            </LayoutIntroduction>
            <Box as="section" w="100%" minHeight="64rem" p={4}>
                <Heading
                    variant="PrimaryTitle"
                    textAlign="center"
                    mt="6.75rem"
                    mb="4rem"
                    fontSize={headingFontSize}
                >
                    CATEGORIAS DE ALELOS
                </Heading>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="stretch"
                >
                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={10}
                        mb="4rem"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {conteudoAlelos.map((props, index) => (
                            <AleloCards key={index} {...props} />
                        ))}
                    </SimpleGrid>
                </Box>
                <Box
                    textAlign="center">
                    <Quiz questions={questionMock} />
                </Box>
            </Box>
        </>
    );
};
