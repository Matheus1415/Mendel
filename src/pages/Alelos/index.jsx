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
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
                "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ]
        },
        {
            title: "Letal",
            imageSrc: "/assets/alelos2.png",
            imageAlt: "Alelo Letal",
            listItems: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
                "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ]
        },
        {
            title: "Codominante",
            imageSrc: "/assets/alelos1.png",
            imageAlt: "Alelo Codominante",
            listItems: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
                "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ]
        },
        {
            title: "Dominação",
            subTitle: "(completa e incompleta)",
            imageSrc: "/assets/alelos2.png",
            imageAlt: "Alelo de Dominação (Completa e incompleta)",
            listItems: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
                "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ]
        }
    ];

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
                        {alelosCardProps.map((props, index) => (
                            <AleloCards key={index} {...props} />
                        ))}
                    </SimpleGrid>
                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            bg="transparent"
                            p={{ base: "0.5rem", md: "1rem" }}
                            color="white"
                            border="1px"
                            borderColor="currentColor"
                            borderRadius="10rem"
                            variant="readMore"
                            display="inline-block"
                            lineHeight="1.5rem"
                            height="auto"
                            fontSize={{ base: "sm", md: "md", lg: "lg" }}
                            mr={{ base: "1rem", md: "3rem", lg: "6rem", xl: "12rem" }}
                        >
                            <Text variant="Paragraph" textAlign="center" m="0">
                                Ir para a próxima página
                            </Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
