import React from "react";
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { Box, Image, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import ABOCards, { AleloCards } from "../../components/AleloCards";

export const ABO = () => {
    const imageWidth = useBreakpointValue({ base: "20rem", sm: "25rem", md: "30rem", lg: "40rem" });
    const imageMaxHeight = useBreakpointValue({ base: "30rem", sm: "40rem", md: "50rem", lg: "60rem" });
    const textPadding = useBreakpointValue({ base: "2rem", md: "4rem", lg: "8rem" });
    const textAlign = useBreakpointValue({ base: "center", md: "right" });

    return (
        <>
            <LayoutIntroduction query="SISTEMA ABO">
                SISTEMA ABO
            </LayoutIntroduction>
            <Box
                as="section"
                w="100%"
                minHeight="64rem"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                px={{ base: "1rem", md: "4rem", lg: "8rem" }}
                py={{ base: "2rem", md: "4rem" }}
            >
                <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    mb={{ base: "2rem", md: "0" }}
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
                    <Text variant="Paragraph" mb="1rem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    <Text variant="Paragraph" mb="1rem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    <Text variant="Paragraph" mb="1rem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    <Text variant="Paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.</Text>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid"
                borderRadius="10px"
                padding="1rem"
                borderColor="gray.200"
                width="100%"
                maxWidth="50rem"
                mx="auto"
                my="2rem"
            >
                <Box 
                    display="flex"
                    flexDirection="row"  // Alterado para 'row'
                    alignItems="center"
                    gap="2rem"  // Ajuste o valor conforme necessário
                >
                    <AleloCards
                        title="AGLUTINOGÊNEO"
                        imageSrc="/assets/aglutinogenio.svg"
                        imageAlt="Aglutinogênio"
                        listItems={["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."]}
                    />
                    <AleloCards
                        title="AGLUTININA"
                        imageSrc="/assets/aglutinina.svg"
                        imageAlt="Aglutinina"
                        listItems={["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."]}
                    />
                </Box>
            </Box>
        </>
    );
}
