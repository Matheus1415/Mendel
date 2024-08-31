import React from "react";
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { Box, Image, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import AleloCards from "../../components/AleloCards";
import transSangueAbo from '../../data/transSangueAbo.json';

export const ABO = () => {
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text variant="Paragraph" mb="1rem">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text variant="Paragraph" mb="1rem">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text variant="Paragraph">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                        in a piece of classical Latin literature from 45 BC, making it over 2000 years.
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
                        alt="Resumindo tipos sanguíneos" 
                    />
                </Box>
            </Box>
        </>
    );
}
