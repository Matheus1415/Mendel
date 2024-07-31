import { Container, Text, Box, Heading, Image } from '@chakra-ui/react';
export const Rhesus = () => {


    return(
       <Container maxWidth="4x1" p="10px">
            <Box>
                <Text variant="h1" textAlign="center" color="Terciario" fontWeight="ExtraLight" fontSize="40px">Fator Rh</Text>
            </Box>
            <Box>
                <Heading as="h2" color="Terciario" fontWeight="ExtraLight"  fontSize="30px">O que é Fator Rh?</Heading>
                
                <Text fontWeight="ExtraLight" fontSize="17px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                </Text>
                <Heading as="h2" color="Terciario">Qual a sua importância na tipagem sanguínea?</Heading>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                </Text>
                <Heading as="h2" color="Terciario">Como ele pode influenciar transfusões de sangue e a saúde durante a gravidez?</Heading>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                </Text>
            </Box>

       </Container>
    )
}

export default Rhesus;