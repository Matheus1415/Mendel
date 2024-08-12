import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";

export const Learn = () => {
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });

    return(
        <Box p={30} color="white">
            <Flex w="100%" bg="#02161F" direction={flexDirection} justifyContent="center" gap={30}>
                <Box w="100%" maxW={Wintroducao} p={10}>
                    <Text fontSize={40}>APRENDA COM FACILIDADE</Text>
                    <Text fontSize={16} textAlign="justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                    <Button
                        bg="Dark" 
                        color="white"
                        marginTop={10}
                        w={160}
                        fontWeight={300}
                        _hover={{
                            bg: "#0D6067", 
                            transform: "scale(1.05)",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
                        }}
                    >
                        APROFUNDE-SE
                    </Button>
                </Box>

                <Flex p={10} w="100%" maxW={WintroducaoBox} wrap="wrap" align="center" direction={flexDirection}>
                    <Flex direction="row" wrap="wrap" justify={flexDirection} align="center" justifyContent="center">
                        <Image w="50%" maxW="250px" src='/public/pgHome/img50.png' alt='Fundo azul brilhante' />
                        <Image w="25%" maxW="118px" src='/public/pgHome/img25.png' alt='Olho azul' />
                        <Image w="25%" maxW="160px" src='/public/pgHome/img25_1.png' alt='fundo azul com genese' />
                    </Flex>

                    <Flex direction="row" wrap="wrap" justify={flexDirection} align="center" justifyContent="center">
                        <Image w="25%" maxW="118px" src='/public/pgHome/img25_222.png' alt='Fundo azul brilhante' />
                        <Image w="25%" maxW="178px" src='/public/pgHome/img25_2.png' alt='Olho azul' />
                        <Image w="50%" maxW="250px" src='/public/pgHome/img50_2.png' alt='fundo azul com genese' />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}