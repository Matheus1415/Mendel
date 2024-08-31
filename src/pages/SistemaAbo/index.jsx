import React from "react";
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { Box, Image, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import AleloCards from "../../components/AleloCards";
import transSangueAbo from '../../data/transSangueAbo.json';

export const SistemaAbo = () => {
    const imageWidth = useBreakpointValue({ base: "15rem", sm: "20rem", md: "25rem", lg: "30rem" });
    const imageMaxHeight = useBreakpointValue({ base: "20rem", sm: "25rem", md: "30rem", lg: "40rem" });
    const textPadding = useBreakpointValue({ base: "1rem", sm: "1.5rem", md: "2rem", lg: "4rem" });
    const textAlign = useBreakpointValue({ base: "center", md: "left" });
    const cardPadding = useBreakpointValue({ base: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" });
    const gap = useBreakpointValue({ base: "1rem", sm: "2rem", md: "3rem", lg: "4rem" });

    return (
        <>
            <LayoutIntroduction query="SISTEMA ABO">
                SISTEMA ABO
            </LayoutIntroduction>

            <Box
                as="section"
                w="100%"
                minHeight="50rem"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                px={{ base: "1rem", md: "2rem", lg: "4rem" }}
                py={{ base: "1rem", md: "2rem" }}
            >
                <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    mb={{ base: "1rem", md: "0" }}
                >
                    <Image 
                        src="/assets/hexagono.svg" 
                        alt="Hexágono" 
                        width={imageWidth}
                        maxHeight={imageMaxHeight}
                    />
                </Box>
                <Box 
                    flex="1"
                    textAlign={textAlign}
                    px={textPadding}
                    maxWidth="100%"
                >
                    <Heading variant="PrimaryTitle" mb="1rem">SURGIMENTO</Heading>
                    <Text variant="Paragraph" mb="1rem">
                        O sistema ABO foi descoberto pelo cientista Karl Landsteiner em 1901, ao estudar as reações de aglutinação entre o sangue de diferentes pessoas. Ele identificou três tipos principais de sangue: A, B e O, que posteriormente foram complementados pelo tipo AB. Esse sistema é crucial para a realização de transfusões de sangue seguras.
                    </Text>
                    <Text variant="Paragraph" mb="1rem">
                        A classificação ABO baseia-se na presença ou ausência de dois antígenos, A e B, na superfície dos glóbulos vermelhos. As pessoas com sangue tipo A têm antígenos A, as com sangue tipo B têm antígenos B, as com sangue AB têm ambos os antígenos, e as com sangue tipo O não possuem nenhum dos dois.
                    </Text>
                    <Text variant="Paragraph" mb="1rem">
                        Além dos antígenos, o plasma sanguíneo pode conter anticorpos contra os antígenos que não estão presentes nos glóbulos vermelhos. Por exemplo, uma pessoa com sangue tipo A tem anticorpos anti-B, que reagem contra o sangue tipo B.
                    </Text>
                    <Text variant="Paragraph">
                        A descoberta do sistema ABO tornou possível a prática de transfusões de sangue seguras e efetivas, evitando reações adversas potencialmente fatais.
                    </Text>
                </Box>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border="1px solid"
                borderRadius="10px"
                padding={cardPadding}
                borderColor="gray.200"
                width="50%"
                maxWidth="100%"
                mx="auto"
                my="1rem"
            >
                <Box 
                    display="flex"
                    flexDirection={{ base: "column", sm: "column", md: "row" }}
                    alignItems="center"
                    gap={gap}
                >
                    <AleloCards
                        title="AGLUTINOGÊNEO"
                        imageSrc="/assets/aglutinogenio.svg"
                        imageAlt="Aglutinogênio"
                        listItems={["Aglutinogênios são antígenos presentes na superfície dos glóbulos vermelhos que determinam o tipo sanguíneo ABO de uma pessoa."]}
                    />
                    <AleloCards
                        title="AGLUTININA"
                        imageSrc="/assets/aglutinina.svg"
                        imageAlt="Aglutinina"
                        listItems={["Aglutininas são anticorpos encontrados no plasma sanguíneo, que reagem contra os antígenos que não estão presentes no próprio sangue."]}
                    />
                </Box>
            </Box>

            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                mt="7rem"
            >
                <Heading 
                    variant="PrimaryTitle" 
                    textAlign="center" 
                    mb="4rem"
                >
                    TIPOS SANGUÍNEOS
                </Heading>
                <Image 
                    src="/assets/tipssanguineos.svg" 
                    alt="Tipos Sanguíneos" 
                />
            </Box>

            <Box>
                <Heading
                    variant="PrimaryTitle" 
                    textAlign="center" 
                    margin="4rem"
                >
                    TRANSFUSÕES DE SANGUE
                </Heading>
                <Box 
                    display="grid" 
                    gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} 
                    gap="2rem"
                >
                    {transSangueAbo.map((props, index) => (
                        <AleloCards key={index} {...props} />
                    ))}
                </Box>
                <Text variant="Paragraph" textAlign="center" margin="4rem" fontSize="2rem">
                    RESUMINDO
                </Text>
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    mt="2rem"
                >
                    <Image
                        src="/assets/resumoAbo.svg" 
                        alt="Resumo dos tipos sanguíneos" 
                    />
                </Box>
            </Box>
        </>
    );
}
