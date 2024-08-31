import React from 'react';
import { Box, Flex, Heading, Image, UnorderedList, ListItem } from '@chakra-ui/react';

export const Cells = () => {
    return (
        <Box as='section' bgImage="/assets/bgFundamentos/bgCells.jpg" bgRepeat='no-repeat' bgPosition="center" bgSize="cover">
            
            <Heading 
                variant="PrimaryTitle"
                textAlign="center"
                mt="6.75rem"
                mb="4rem"
            >
                CATEGORIAS DAS CÉLULAS
            </Heading>

            <Flex 
                justifyContent="space-around"
                direction={{ base: "column", lg: "row" }} 
                alignItems={{ base: 'center' }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="2.25rem"
                    maxWidth="25.5rem"
                >
                    {/* Título para célula diploide */}
                    <Heading variant="SecondTitle">
                        CÉLULA DIPLOIDE
                    </Heading>

                    {/* Imagem da célula diploide */}
                    <Image src='/assets/diploid-cell.png' alt="Célula Diploide" />

                    {/* Lista de descrições da célula diploide */}
                    <UnorderedList 
                        textAlign="justify" 
                        color="Primary" 
                        fontSize="17px" 
                        fontWeight="275" 
                        p={{ base: "1rem" }}
                    >
                        <ListItem>As células diploides possuem dois conjuntos completos de cromossomos, um de cada progenitor. Em humanos, isso significa 46 cromossomos no total.</ListItem>
                        <ListItem>Elas são encontradas em células somáticas, que compõem a maior parte dos tecidos e órgãos do corpo, como pele, músculos e cérebro.</ListItem>
                        <ListItem>A mitose é o processo pelo qual as células diploides se dividem, resultando em duas células filhas geneticamente idênticas.</ListItem>
                    </UnorderedList>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="2.25rem"
                    maxWidth="25.5rem"
                >
                    {/* Título para célula haploide */}
                    <Heading variant="SecondTitle">
                        CÉLULA HAPLOIDE
                    </Heading>

                    <Image src='/assets/haploid-cell.png' alt="Célula Haploide" />

                    <UnorderedList 
                        textAlign="justify" 
                        color='Primary' 
                        fontSize="17px" 
                        fontWeight="275" 
                        p={{ base: "1rem" }}
                    >
                        <ListItem>As células haploides possuem apenas um conjunto de cromossomos, totalizando 23 em humanos, metade do número presente nas células diploides.</ListItem>
                        <ListItem>Essas células estão presentes em gametas, ou células sexuais, como espermatozoides e óvulos.</ListItem>
                        <ListItem>A meiose é o processo responsável pela formação das células haploides, essencial para a reprodução sexual e a diversidade genética.</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
        </Box>
    );
};
