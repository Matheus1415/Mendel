import { Box, Button, Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
  
export function TrabsAndimportance () {
    return(
        <Box backgroundRepeat="repeat" backgroundSize="cover" backgroundPosition="center" backgroundImage="url(assets/3_Legado.png)">
            <Flex mx="auto" maxW="6xl" p={8} direction={["column","column","column","row"]} alignItems="center" gap={6} >
                <Flex direction="column" justifyContent="flex-start" gap={20}>
                    <Box>
                        <Heading variant="PrimaryTitle">
                            Importância para biologia
                        </Heading>
                        <Text variant="p" fontSize={16} lineHeight={8} fontWeight={300} color="Primary" textAlign="justify">    
                                Gregor Mendel é crucial para a biologia por ter descoberto as leis da herança, que explicam como as características são transmitidas entre gerações. Seus experimentos com ervilhas revelaram padrões de herança, estabelecendo fundamentos para a genética moderna.
                        </Text>
                    </Box>
                    
                    <Box>
                        <Heading variant="PrimaryTitle">
                            TRABALHOS CIENTÍFICOS
                        </Heading>
                        <UnorderedList spacing={4} mb={9}>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">Gregor Mendel estudou a hereditariedade em ervilhas, cruzando plantas com diferentes características e observando padrões de transmissão. Seus experimentos mostraram que características seguiam padrões previsíveis, desafiando ideias anteriores sobre hereditariedade.</ListItem>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">Mendel estabeleceu a Lei da Segregação, que afirma que alelos se separam na formação dos gametas, e a Lei da Distribuição Independente, que afirma que alelos de diferentes características são distribuídos independentemente.</ListItem>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">As descobertas de Mendel foram redescobertas no início do século XX, impactando profundamente a biologia. Suas leis formaram a base da genética científica, influenciando a biologia molecular, a medicina e a engenharia genética.</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>

                <Image w="lg" borderRadius="2xl" objectFit="cover" src="assets/estatuaMendel.png" alt="Estatua de Mendel" />
            </Flex>
        </Box>
    )
}