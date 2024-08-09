import { Flex, Box, Text, useBreakpointValue, Button} from "@chakra-ui/react";


export const Action = () => {
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });

    return(
        <Flex 
            p={30}
            color="white"
            textAlign="center"
            direction="column"
            align="center"
            justifyContent="center"
            gap={6}
        >
            <Text
                fontSize={40}
            >DOMINE A GENÉTICA NA <br /> PRÁTICA E  NA TEORIA</Text>
            <Text
                maxW={800}
                fontSize={16}
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique sed eos fugit nostrum ducimus iure eveniet animi, vero corporis laboriosam dolore, aliquam nam voluptatem assumenda necessitatibus, sunt expedita atque.</Text>
            <Flex wrap="wrap" direction={flexDirection} align="center" justifyContent="center" gap={10}>
                <Box w="50%" maxW="500">
                    <img src="/pgHome/5_Atividades.png" alt="" />
                </Box>
                <Box w="50%" maxW="500">
                    <img src="/pgHome/6_Atividade.png" alt="" />
                </Box>
            </Flex>
            <Button
                bg="Dark" 
                color="white"
                marginTop={10}
                w={260}
                fontWeight={300}
                _hover={{
                    bg: "#0D6067", 
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
                }}
            >
                PRATIQUE
            </Button>
        </Flex>
    )
}