import { Box, Flex, Heading, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import React from 'react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify'

export const Fundamentos = () => {
    // Function to handle hover events
    const telomenoOver = () => {
        console.log("Mouse Over Telômero"); // Log to console on hover
    };

    return (
        <>
            <LayoutIntroduction query="FUNDAMENTOS" >
                FUNDAMENTOS DA GENÉTICA
            </LayoutIntroduction>

            {/* Section for Cell Categories */}
            <Box as='section'>
                <Heading variant="PrimaryTitle" textAlign="center" mt="6.75rem" mb="4rem">
                    CATEGORIAS DA CÉLULAS
                </Heading>
                <Flex justifyContent="space-around" direction={{base:'column', lg:'row'}} alignItems={{base:'center'}}>
                    {/* Box for Diploid Cell */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="2.25rem"
                        maxWidth="25.5rem"
                    >
                        <Heading color="Primary" variant="PrimaryTitle">
                            CÉLULA DIPLOIDE
                        </Heading>
                        <Image src='/assets/diploid-cell.png' alt="Célula Diploide" />
                        <UnorderedList textAlign="justify" color="Primary" fontSize="17px" fontWeight="275">
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
                        </UnorderedList>
                    </Box>

                    {/* Box for Haploid Cell */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="2.25rem"
                        maxWidth="25.5rem"
                    >
                        <Heading color="Primary" variant="PrimaryTitle">
                            CÉLULA HAPLOIDE
                        </Heading>
                        <Image src='/assets/haploid-cell.png' alt="Célula Haploide" />
                        <UnorderedList textAlign="justify" color="Primary" fontSize="17px" fontWeight="275">
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>

            {/* Section for Chromosomes */}
            <Box as='section' w='100%' h="64rem">
                <Heading variant="PrimaryTitle" textAlign="center" mt="6.75rem" mb="4rem">
                    CROMOSSOMOS
                </Heading>
                <Flex textAlign='center' alignItems='center' justifyContent='space-around' direction={{base:'column-reverse', lg:'row'}}>
                    <Box maxWidth={{base:'55rem', lg:'25rem'}} marginTop='2rem'>
                        <Text variant="Paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                        <Text variant="Paragraph">CROMOSSOMOS HOMÓLOGOS: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years.</Text>
                        <Text variant="Paragraph">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                    </Box>

                    {/* Box for Chromosome Image with Highlighted Areas */}
                    <Box maxHeight='30rem' maxWidth='31rem' position='relative'>
                        <Image src='/assets/cromossome-image.png' alt="Cromossomos" />
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='13.7%'
                            w='13%'
                            borderRadius='40%'
                            position='absolute'
                            top='2%'
                            left='0.5%'
                            onMouseOver={telomenoOver}
                        ></Box>
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='14%'
                            w='13%'
                            borderRadius='40%'
                            position='absolute'
                            top='3%'
                            left='41%'
                            onMouseOver={telomenoOver}
                        ></Box>
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='15.7%'
                            w='15%'
                            borderRadius='40%'
                            position='absolute'
                            top='82.5%'
                            left='1.5%'
                            onMouseOver={telomenoOver}
                        ></Box>
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='16%'
                            w='14%'
                            borderRadius='40%'
                            position='absolute'
                            top='83%'
                            left='39.3%'
                            onMouseOver={telomenoOver}
                        ></Box>
                    </Box>
                </Flex>
            </Box>

            <LayoutBaseModify
            isRowReverse
            >
                <Box></Box>
                <Heading variant='PrimaryTitle' marginLeft={'auto'}>Dna</Heading>
            <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
            <Text variant="Paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</Text> 
                <Heading variant='PrimaryTitle' marginLeft={'auto'}>RNA</Heading>
            <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
            <Text variant="Paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</Text> 
                <Heading variant='PrimaryTitle' marginLeft={'auto'}>GENE</Heading>
            <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
            <Text variant="Paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</Text> 
                 



            </LayoutBaseModify>
        </>
    );
};
