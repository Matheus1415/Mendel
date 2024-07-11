import { Flex, Box, Image, Text } from "@chakra-ui/react";

export const Home = () => {
    return (
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
            <Box w={{ base: '100%', md: '50%' }} p={8} textAlign='center'>
                <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight='thin' mb={-10}>Seja bem-vindo(a) ao</Text>
                <Text fontSize={{ base: '6xl', md: '8xl' }} fontWeight='light' mb={4}>Mendel</Text>
                <Text fontSize='sm' fontWeight='light' textAlign='left' w='55%' ml={{ base: '0', md: '10rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </Text>
            </Box>
            <Box w={{ base: '100%', md: '50%' }} p={8} display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
                <Image 
                    src="/Dna-da-direita.png"
                    width={{ base: "80%", md: "120%" }}  // Largura responsiva
                    ml={{ base: "0", md: "-5%" }}        // Margem esquerda responsiva
                />
            </Box>
        </Flex>
    );
};
