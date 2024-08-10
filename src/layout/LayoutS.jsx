import { Box, Flex, Image } from "@chakra-ui/react";

export function LayoutS({children}){
    return(
        <Box backgroundRepeat="repeat" backgroundSize="cover" backgroundPosition="center" backgroundImage="url(assets/3_Legado.png)">
            <Flex mx="auto" maxW="6xl" p={8} direction={["column","column","column","row"]} alignItems="center" gap={6} >
                <Flex direction="column" justifyContent="flex-start" gap={20}>
                    {children}
                </Flex>

                <Image w="lg" borderRadius="2xl" objectFit="cover" src="assets/estatuaMendel.png" alt="Estatua de Mendel" />
            </Flex>
        </Box>
    )
}