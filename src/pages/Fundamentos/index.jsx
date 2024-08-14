import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciamento de estado
import { Box, Flex, Heading, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react'; // Importa os componentes do Chakra UI
import { LayoutIntroduction } from '../../layout/LayoutIntroduction'; // Importa o layout de introdução

export const Fundamentos = () => {
    // Estado para controlar o efeito de hover
    const [mouseOver, setMouseOver] = useState(false);

    // Função para ser chamada quando o mouse passar sobre o elemento
    const telomenoOver = () => {
        setMouseOver(true);
        console.log("Mouse Over Telomeno"); // Log no console quando o mouse passa sobre o elemento
    }

    return (
        <>
            {/* Componente de introdução com uma consulta específica */}
            <LayoutIntroduction query="FUNDAMENTOS">
                FUNDAMENTOS DA GENÉTICA
            </LayoutIntroduction>
            
            {/* Seção para exibir categorias das células */}
            <Box as='section' w='100%' h="64rem">
                <Heading variant="PrimaryTitle" textAlign="center" mt="6.75rem" mb="4rem">
                    CATEGORIAS DA CÉLULAS
                </Heading>
                <Flex justifyContent="space-around">
                    {/* Caixa para Célula Diploide */}
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
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ListItem>
                            <ListItem>It has survived not only five centuries, but also the leap into electronic typesetting.</ListItem>
                            <ListItem>Popularised in the 1960s with the release of Letraset sheets.</ListItem>
                        </UnorderedList>
                    </Box>

                    {/* Caixa para Célula Haploide */}
                    <Box
                        position="relative"
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
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ListItem>
                            <ListItem>It has survived not only five centuries, but also the leap into electronic typesetting.</ListItem>
                            <ListItem>Popularised in the 1960s with the release of Letraset sheets.</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>

            {/* Seção para exibir cromossomos */}
            <Box as='section' w='100%' h="64rem">
                <Heading variant="PrimaryTitle" textAlign="center" mt="6.75rem" mb="4rem">
                    CROMOSSOMOS
                </Heading>
                <Flex textAlign='center' alignItems='center' justifyContent='space-around'>
                    <Box maxWidth='25rem'>
                        {/* Textos explicativos sobre cromossomos */}
                        <Text variant="Paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.
                        </Text>
                        <Text variant="Paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </Text>
                        <Text variant="Paragraph">
                            CROMOSSOMOS HOMÓLOGOS: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.
                        </Text>
                        <Text variant="Paragraph">
                            It has survived not only five centuries, but also the leap into electronic typesetting.
                        </Text>
                    </Box>

                    {/* Caixa para imagem de cromossomos com áreas destacadas */}
                    <Box maxHeight='30rem' maxWidth='31rem' position='relative'>
                        <Image src='/assets/cromossome-image.png' alt="Cromossomos" />
                        {/* Áreas destacadas no cromossomo */}
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='13.7%'
                            w='13%'
                            borderRadius='40%'
                            position='absolute'
                            top='2%'
                            left='0.5%'
                            onMouseOver={telomenoOver} // Define o evento de hover
                        ></Box> {/* Telômetro superior esquerdo */}
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='14%'
                            w='13%'
                            borderRadius='40%'
                            position='absolute'
                            top='3%'
                            left='41%'
                            onMouseOver={telomenoOver} // Define o evento de hover
                        ></Box> {/* Telômetro superior direito */}
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='15.7%'
                            w='15%'
                            borderRadius='40%'
                            position='absolute'
                            top='82.5%'
                            left='1.5%'
                            onMouseOver={telomenoOver} // Define o evento de hover
                        ></Box> {/* Telômetro inferior esquerdo */}
                        <Box
                            bg='red.500'
                            opacity='0.4'
                            h='16%'
                            w='14%'
                            borderRadius='40%'
                            position='absolute'
                            top='83%'
                            left='39.3%'
                            onMouseOver={telomenoOver} // Define o evento de hover
                        ></Box> {/* Telômetro inferior direito */}
                    </Box>
                </Flex>
            </Box>
        </>
    );
};
