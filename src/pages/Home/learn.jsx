import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Learn = () => {
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const fontSizeTitle = useBreakpointValue({ base: "28px", md: "40px" });
    const padding = useBreakpointValue({ base: "10", md: "30" });
    const gap = useBreakpointValue({ base: "10", md: "30" });
    const displayImages = useBreakpointValue({ base: "none", md: "flex" });

    const navigate = useNavigate()

    return (
        <Box p={padding} color="white">
            <Flex 
                w="100%" 
                bg="#02161F" 
                direction={flexDirection} 
                justifyContent="center" 
                gap={gap}
            >
                <Box w="100%" maxW={Wintroducao} p={padding}>
                    <Text fontSize={fontSizeTitle}>APRENDA COM FACILIDADE</Text>
                    <Text fontSize="16px" textAlign="justify">
                        Aprender sobre genética nunca foi tão acessível. Com nosso conteúdo, você pode explorar os conceitos fundamentais da genética de forma clara e envolvente. Desde a herança genética básica até as aplicações avançadas, oferecemos materiais e recursos que ajudam você a entender e aplicar o conhecimento genético com facilidade. Venha descobrir como nossa plataforma pode transformar seu aprendizado.
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
                        onClick={()=> {navigate("/mendel"); window.scrollTo(0, 0); }}
                    >
                        APROFUNDE-SE
                    </Button>
                </Box>

                <Flex 
                    p={padding} 
                    w="100%" 
                    maxW={WintroducaoBox} 
                    wrap="wrap" 
                    align="center" 
                    justifyContent="center"
                    display={displayImages} 
                >
                    <Flex w="100%" display="flex" justifyContent="center" alignItems="center" >
                        <Image w="50%" maxW="280px" src='/pgHome/img50.png' alt='Fundo azul brilhante' />
                        <Image w="25%" maxW="120px" src='/pgHome/img25.png' alt='Olho azul' />
                        <Image w="25%" maxW="155px" src='/pgHome/img25_1.png' alt='Fundo azul com genética' />
                    </Flex>
                    <Flex w="100%" display="flex" justifyContent="center" alignItems="center" >
                        <Image w="25%" maxW="130px" src='/pgHome/img25_222.png' alt='Fundo azul brilhante' />
                        <Image w="25%" maxW="159px" src='/pgHome/img25_2.png' alt='Olho azul' />
                        <Image w="50%" maxW="280px" src='/pgHome/img50_2.png' alt='Fundo azul com genética' />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
