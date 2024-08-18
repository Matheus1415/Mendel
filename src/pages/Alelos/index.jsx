import React from 'react';
import { Box, Heading, SimpleGrid, useBreakpointValue, Button, Text } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { AleloCards } from '../../components/AleloCards';

export const Alelos = () => {
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

    const alelosCardProps = [
        {
            title: "Múltiplos",
            imageSrc: "/assets/alelos1.png",
            imageAlt: "Alelo Múltiplos",
            listItems: [
                "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição de textos...",
                "Quando um impressor desconhecido pegou um galley de tipos e embaralhou tudo...",
                "Foi popularizado na década de 1960 com o lançamento das folhas de Letraset..."
            ]
        },
        {
            title: "Letal",
            imageSrc: "/assets/alelos2.png",
            imageAlt: "Alelo Letal",
            listItems: [
                "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição de textos...",
                "Quando um impressor desconhecido pegou um galley de tipos e embaralhou tudo...",
                "Foi popularizado na década de 1960 com o lançamento das folhas de Letraset..."
            ]
        },
        {
            title: "Codominante",
            imageSrc: "/assets/alelos1.png",
            imageAlt: "Alelo Codominante",
            listItems: [
                "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição de textos...",
                "Quando um impressor desconhecido pegou um galley de tipos e embaralhou tudo...",
                "Foi popularizado na década de 1960 com o lançamento das folhas de Letraset..."
            ]
        },
        {
            title: "Dominação",
            imageSrc: "/assets/alelos2.png",
            imageAlt: "Alelo de Dominação (Completa e incompleta)",
            listItems: [
                "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição de textos...",
                "Quando um impressor desconhecido pegou um galley de tipos e embaralhou tudo...",
                "Foi popularizado na década de 1960 com o lançamento das folhas de Letraset..."
            ]
        }
    ];

    return (
        <>
            <LayoutIntroduction query="VARIAÇÕES">VARIAÇÕES DO MODELO MENDERIANO</LayoutIntroduction>
            <Box as='section' w='100%' minHeight="64rem" p={4} position="relative">
                <Heading
                    variant="PrimaryTitle"
                    textAlign="center"
                    mt="6.75rem"
                    mb="4rem"
                    fontSize={headingFontSize}
                >
                    CATEGORIAS DE ALELOS
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {alelosCardProps.map((props, index) => (
                        <AleloCards key={index} {...props} />
                    ))}
                </SimpleGrid>
                <Box textAlign="right">
                    <Button
                        bg="transparent"
                        margin="5rem"
                        padding="1.5rem"
                        color="white"
                        border="1px"
                        variant="readMore"
                    >
                        <Text variant="Paragraph" textAlign="center" margin="1rem">
                            Ir para a próxima página
                        </Text>
                    </Button>
                </Box>
            </Box>
        </>
    );
};
