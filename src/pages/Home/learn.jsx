import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";

export const Learn = () => {
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });
<<<<<<< HEAD
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });

    return(
        <Box p={30} color="white">
            <Flex w="100%" bg="#02161F" direction={flexDirection} justifyContent="center" gap={30}>
                <Box w="100%" maxW={Wintroducao} p={10}>
                    <Text fontSize={40}>APRENDA COM FACILIDADE</Text>
                    <Text fontSize={16} textAlign="justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
=======
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const fontSizeTitle = useBreakpointValue({ base: "28px", md: "40px" });
    const padding = useBreakpointValue({ base: "10", md: "30" });
    const gap = useBreakpointValue({ base: "10", md: "30" });
    const displayImages = useBreakpointValue({ base: "none", md: "flex" });

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
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
