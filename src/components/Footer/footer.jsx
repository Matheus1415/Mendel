import { Flex, Box, Text, useBreakpointValue, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Footer = () => {
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });

    return(
        <>
            <Flex direction="column" align="center" justifyContent="center" w="100%" minH="20px" p={10} color="white" gap={5}>
                <Text fontSize={50}>LOGO</Text>
                <Flex gap={10} direction={flexDirection}>
                    <Link to="/">Home</Link>
                    <Link>Atividade</Link>
                    <Link to="/manutencao">Conteúdo</Link>
                    <Link to="/manutencao">Duvidade</Link>
                    <Link to="/manutencao">Informação</Link>
                </Flex>
            </Flex>

            <Flex direction="column" w="100%"color="white" padding={20}>
                <Box borderTop="2px solid white" width="100%" marginBottom={4}></Box>
                <Flex justifyContent="space-between"direction={flexDirection} gap={5}>
                <Text fontSize={17}>email_exemplo@gmail.com</Text>
                <Text fontSize={17}>© Mendel – Todos os direitos reservados</Text>     
                </Flex> 
            </Flex>
        </>
    )
}