import { Container, Text, Box, Heading, Flex, Image} from '@chakra-ui/react';
import Titulo from '../Titulo';
export const Rhesus = () => {

    return(
    
        <Container maxWidth="4x1" m="0px" p="0px">
            <Titulo />
            <Box 
            pt="30px"
            backgroundColor="#02161F"
            bgSize="cover" 
            bgPosition="center right" 
            bgRepeat="no-repeat"
            w="100vw" 
            height="100%"
            >
                {/* Utilize um Flex para alinhar texto e imagem */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Box flex="1">
                        <Heading
                            as="h2"
                            color="Terciario"
                            fontWeight="ExtraLight"
                            fontSize="30px"
                            mb="20px"
                            p="10px"
                            maxWidth='100%'
                        >
                            O que é Fator Rh?
                        </Heading>
                        <Text
                            as="p"
                            fontWeight="ExtraLight"
                            fontSize="17px"
                            color="#ebebeb"
                            mb="20px"
                            p="10px"
                            maxWidth={['80%', '70%', '50%']} 
                            textIndent="30px"
                            lineHeight="30px"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                        </Text>
                    </Box>

                    <Box position="relative" w="200px" h="200px">
                        <Image
                        src="/img/celula.png"
                        w="200px"
                        h="200px" 
                        position="absolute"
                        top="0" 
                        left={['-30%', '-50%', '-70%']}
                        borderRadius="full"
                        />
                    </Box>
                </Flex>


                <Flex justifyContent="space-between" alignItems="center">
                    <Box flex="1">
                        <Heading
                        as="h2"
                        color="Terciario"
                        fontWeight="ExtraLight"
                        fontSize="30px"
                        mb="20px"
                        p="10px"
                        maxWidth='100%'
                        >
                            Qual a sua importância na tipagem sanguínea?
                        </Heading>
                        <Text
                        as="p"
                        fontWeight="ExtraLight"
                        fontSize="17px"
                        color="#ebebeb"
                        mb="20px"
                        p="10px"
                        maxWidth={['80%', '70%', '50%']} 
                        textIndent="30px"
                        lineHeight="30px"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                        </Text>
                    </Box>
                    <Box position="relative" w="200px" h="200px">
                        <Image
                        src="/img/celula.png"
                        w="200px"
                        h="200px" 
                        position="absolute"
                        top="0" 
                        left={['-30%', '-50%', '-70%']}
                        borderRadius="full"
                        />
                    </Box>
                </Flex>


                <Flex justifyContent="space-between" alignItems="center">
                    <Box flex="1">
                        <Heading
                        as="h2"
                        color="Terciario"
                        fontWeight="ExtraLight"
                        fontSize="30px"
                        mb="20px"
                        p="10px"
                        maxWidth={['80%']}
                        >
                            Como ele pode influenciar transfusões de sangue e a saúde durante a gravidez?
                        </Heading>
                        <Text
                        as="p"
                        fontWeight="ExtraLight"
                        fontSize="17px"
                        color="#ebebeb"
                        mb="20px"
                        p="10px"
                        maxWidth={['80%', '70%', '50%']} 
                        textIndent="30px"
                        lineHeight="30px"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                        </Text>
                    </Box>
                    <Box position="relative" w="200px" h="200px">
                        <Image
                        src="/img/celula.png"
                        w="200px"
                        h="200px" 
                        position="absolute"
                        top="0" 
                        left={['-30%', '-50%', '-70%']}
                        borderRadius="full"
                        />
                    </Box>
                </Flex>
            </Box>
        </Container>
       
    )
}

export default Rhesus;