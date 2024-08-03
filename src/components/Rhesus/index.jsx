import { Container, Text, Box, Heading} from '@chakra-ui/react';
import image4 from '../../img/background4.png'
import Titulo from '../Titulo';
export const Rhesus = () => {

    return(
       <Container 
       maxWidth="4x1" 
       m="0px" 
       p="0px"
       >
            <Titulo/>
            <Box 
            bgImage={`url(${image4})`}
            bgSize="cover" 
            bgPosition="center rigth" 
            bgRepeat="no-repeat"
            height="1000px"
            >
                <Heading
                as="h2"
                color="Terciario"
                fontWeight="ExtraLight"
                fontSize="30px"
                mt="0px"
                mb="20px"
                p="10px"
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
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                </Text>
                <Heading
                as="h2"
                color="Terciario"
                fontWeight="ExtraLight"
                fontSize="30px"
                mb="20px"
                p="10px"
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
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                </Text>
                <Heading
                as="h2"
                color="Terciario"
                fontWeight="ExtraLight"
                fontSize="30px"
                mb="20px"
                p="10px"
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
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem modi praesentium nam? Commodi optio, dolore perferendis facilis voluptas aut inventore illum. At dicta optio iure neque totam repudiandae illum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit tenetur, cumque distinctio beatae vero ipsum sed laboriosam non eum accusantium excepturi alias velit aut eos et modi dolor. Praesentium.
                </Text>
            </Box>

       </Container>
    )
}

export default Rhesus;