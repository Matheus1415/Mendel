import { Flex, Box, Text, useBreakpointValue, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const linkColor = useBreakpointValue({ base: "gray.400", md: "white" });

    return (
        <>
            <Flex
                direction="column"
                align="center"
                justifyContent="center"
                w="100%"
                minH="20px"
                p={10}
                color="white"
                gap={5}
                bg="#02161F"
            >
                <RouterLink to="/">
                    <Image maxW={200} src="/logoMendel.jpeg" alt="Logo Mendel" cursor="pointer" />
                </RouterLink>
                
                <Flex gap={10} direction={flexDirection} wrap="wrap" justifyContent="center">
                    <RouterLink to="/" style={{ color: linkColor }}>Home</RouterLink>
                    <RouterLink to="/punner-arastavel" style={{ color: linkColor }}>Atividade</RouterLink>
                    <RouterLink to="/manutencao" style={{ color: linkColor }}>Dúvidas</RouterLink>
                    <RouterLink to="/manutencao" style={{ color: linkColor }}>Informação</RouterLink>
                </Flex>
            </Flex>

            <Flex
                direction="column"
                w="100%"
                color="white"
                p={10}
                bg="#02161F"
            >
                <Box borderTop="2px solid white" width="100%" mb={4} />
                <Flex
                    justifyContent="space-between"
                    direction={flexDirection}
                    gap={5}
                    wrap="wrap"
                >
                    <Text fontSize={{ base: "14px", md: "17px" }} textAlign={{ base: "center", md: "left" }}>mendel.web.project@gmail.com</Text>
                    <Text fontSize={{ base: "14px", md: "17px" }} textAlign={{ base: "center", md: "right" }}>© Mendel – Todos os direitos reservados</Text>     
                </Flex>
            </Flex>
        </>
    );
};
