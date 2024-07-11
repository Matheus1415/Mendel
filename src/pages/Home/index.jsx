import { Flex, Box, Image, Text } from "@chakra-ui/react";

export const Home = () => {
    return (
        <Box>
            <Flex
                bg='Sixth'
                bgImage='/Dna-borrado-esquerda.png'
                bgPosition="left"
                bgRepeat="no-repeat"
                minH='100vh'
                justify='center'
                align='center'
                color='Primary'
                flexWrap="wrap"
            >
                {/**********INICIO BOX DE INICIO/CONFIGURAÇÕES**********/}

                <Box w={{ base: '100%', md: '29%' }} textAlign='center' p='2'>

                    <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight='thin' mb={-7}>Seja bem-vindo(a) ao </Text>

                    <Text fontSize={{ base: '8xl', md: '8xl' }} fontWeight='light' mb={4}>Mendel</Text>

                    <Text
                        fontSize='sm'
                        fontWeight='thin'
                        textAlign='left'
                        w='auto'
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </Text>

                </Box>

                 {/**********FIM BOX DE INICIO/CONFIGURAÇÕES**********/}

                 {/**********INICIO BOX DA IMAGEM DO DNA DIREITO/CONFIGURAÇÕES**********/}

                <Box w={{ base: '100%', md: '50%' }} p={8} display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>

                    <Image
                        src="/Dna-da-direita.png"
                        width={{ base: "85%", md: "130%" }}  // Largura responsiva
                        ml={{ base: "0", md: "-5%" }}        // Margem esquerda responsiva
                    />

                </Box>

                 {/**********FIM BOX DA IMAGEM DO DNA DIREITO/CONFIGURAÇÕES**********/}

            </Flex>
        </Box>
    );
};
