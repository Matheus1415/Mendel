import React from 'react';
import { Box, Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { AlelosCard } from '../../components/AlelosCard';

export const Alelos = () => {
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });
    const textFontSize = useBreakpointValue({ base: 'md', md: 'lg' });

    return (
        <>
            <LayoutIntroduction query="VARIAÇÕES">VARIAÇÕES DO MODELO MENDERIANO</LayoutIntroduction>
            <Box as='section' w='100%' minHeight="64rem" p={4} position="relative">
                <Heading
                    variant={"PrimaryTitle"} // Ensure this variant exists in your theme
                    textAlign={"center"}
                    mt={"6.75rem"}
                    mb={"4rem"}
                    fontSize={headingFontSize}
                >
                    CATEGORIAS DE ALELOS
                </Heading>
                {/* Usa SimpleGrid para layout em duas colunas */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <AlelosCard
                        title="Múltiplos"
                        imageSrc="/assets/alelos1.png" // Corrected path
                        imageAlt="Alelos Múltiplos"
                        listItems={[
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
                            "When an unknown printer took a galley of type and scrambled it...",
                            "It was popularised in the 1960s with the release of Letraset sheets..."
                        ]}
                    />
                    <AlelosCard
                        title="Letal"
                        imageSrc="/assets/alelos2.png" // Corrected path
                        imageAlt="Alelos Letal"
                        listItems={[
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
                            "When an unknown printer took a galley of type and scrambled it...",
                            "It was popularised in the 1960s with the release of Letraset sheets..."
                        ]}
                    />
                    <AlelosCard
                        title="Codominante"
                        imageSrc="/assets/alelos1.png" // Corrected path
                        imageAlt="Alelos Codominante"
                        listItems={[
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
                            "When an unknown printer took a galley of type and scrambled it...",
                            "It was popularised in the 1960s with the release of Letraset sheets..."
                        ]}
                    />
                    <AlelosCard
                        title="Dominação"
                        subTitle="(completa e incompleta)"
                        imageSrc="/assets/alelos2.png" // Corrected path
                        imageAlt="Alelos Dominação"
                        listItems={[
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
                            "When an unknown printer took a galley of type and scrambled it...",
                            "It was popularised in the 1960s with the release of Letraset sheets..."
                        ]}
                    />
                </SimpleGrid>
            </Box>
        </>
    );
};
