import React from 'react';
import { Box, Flex, Heading, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionUnorderedList = motion(UnorderedList);

export const Cells = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <Box as='section' bgImage="/assets/bgFundamentos/bgCells.jpg" bgRepeat='no-repeat' bgPosition="center" bgSize="cover">
            
            <MotionHeading 
                variant="PrimaryTitle"
                textAlign="center"
                mb="4rem"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                CATEGORIAS DAS CÉLULAS
            </MotionHeading>

            <Flex 
                justifyContent="space-around"
                direction={{ base: "column", lg: "row" }} 
                alignItems={{ base: 'center' }}
            >
                <MotionBox
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="2.25rem"
                    maxWidth="25.5rem"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    {/* Título para célula diploide */}
                    <MotionHeading variant="SecondTitle" {...fadeInUp}>
                        CÉLULA DIPLOIDE
                    </MotionHeading>

                    {/* Imagem da célula diploide */}
                    <MotionImage src='/assets/diploid-cell.png' alt="Célula Diploide" {...fadeInUp} />

                    {/* Lista de descrições da célula diploide */}
                    <MotionUnorderedList 
                        textAlign="justify" 
                        color="Primary" 
                        fontSize="17px" 
                        fontWeight="275" 
                        p={{ base: "1rem" }}
                        {...fadeInUp}
                    >
                        <ListItem>As células diploides possuem dois conjuntos completos de cromossomos, um de cada progenitor. Em humanos, isso significa 46 cromossomos no total.</ListItem>
                        <ListItem>Elas são encontradas em células somáticas, que compõem a maior parte dos tecidos e órgãos do corpo, como pele, músculos e cérebro.</ListItem>
                        <ListItem>A mitose é o processo pelo qual as células diploides se dividem, resultando em duas células filhas geneticamente idênticas.</ListItem>
                    </MotionUnorderedList>
                </MotionBox>

                <MotionBox
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="2.25rem"
                    maxWidth="25.5rem"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    {/* Título para célula haploide */}
                    <MotionHeading variant="SecondTitle" {...fadeInUp}>
                        CÉLULA HAPLOIDE
                    </MotionHeading>

                    <MotionImage src='/assets/haploid-cell.png' alt="Célula Haploide" {...fadeInUp} />

                    <MotionUnorderedList 
                        textAlign="justify" 
                        color='Primary' 
                        fontSize="17px" 
                        fontWeight="275" 
                        p={{ base: "1rem" }}
                        {...fadeInUp}
                    >
                        <ListItem>As células haploides possuem apenas um conjunto de cromossomos, totalizando 23 em humanos, metade do número presente nas células diploides.</ListItem>
                        <ListItem>Essas células estão presentes em gametas, ou células sexuais, como espermatozoides e óvulos.</ListItem>
                        <ListItem>A meiose é o processo responsável pela formação das células haploides, essencial para a reprodução sexual e a diversidade genética.</ListItem>
                    </MotionUnorderedList>
                </MotionBox>
            </Flex>
        </Box>
    );
};
