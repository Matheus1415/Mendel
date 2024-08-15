import { Flex, Box, Text, useBreakpointValue, Link } from "@chakra-ui/react";
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
                bg="#02161F"  // Adicionando um fundo para maior contraste
            >
                <Text fontSize={{ base: "40px", md: "50px" }} fontWeight="bold">LOGO</Text>
                <Flex gap={10} direction={flexDirection} wrap="wrap" justifyContent="center">
                    <RouterLink to="/" style={{ color: linkColor }}>Home</RouterLink>
                    <RouterLink to="/atividade" style={{ color: linkColor }}>Atividade</RouterLink>
                    <RouterLink to="/conteudo" style={{ color: linkColor }}>Conteúdo</RouterLink>
                    <RouterLink to="/duvidas" style={{ color: linkColor }}>Dúvidas</RouterLink>
                    <RouterLink to="/informacao" style={{ color: linkColor }}>Informação</RouterLink>
                </Flex>
            </Flex>

            <Flex
                direction="column"
                w="100%"
                color="white"
                p={10}
                bg="#02161F"  // Adicionando um fundo para maior contraste
            >
                <Box borderTop="2px solid white" width="100%" mb={4} />
                <Flex
                    justifyContent="space-between"
                    direction={flexDirection}
                    gap={5}
                    wrap="wrap"  // Garante que o texto não fique quebrado em telas pequenas
                >
                    <Text fontSize={{ base: "14px", md: "17px" }} textAlign={{ base: "center", md: "left" }}>email_exemplo@gmail.com</Text>
                    <Text fontSize={{ base: "14px", md: "17px" }} textAlign={{ base: "center", md: "right" }}>© Mendel – Todos os direitos reservados</Text>     
                </Flex>
            </Flex>
        </>
    );
};
