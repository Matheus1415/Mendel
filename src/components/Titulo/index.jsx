import { Container, Box, Text, Flex } from '@chakra-ui/react';
import image2 from '../../img/background2.png'
const Titulo = () => {
    return(
        <Flex>
            <Container 
            maxWidth="4x1"
            m="0px" 
            p="0px"
            >
                <Box 
                bgImage={`url(${image2} )`}
                bgSize="cover" 
                bgPosition="center center" bgRepeat="no-repeat"
                height="500px"
                >
                    <Text 
                    textAlign="center" 
                    variant="h1"  
                    fontWeight="ExtraLight" fontSize="40px" 
                    color="#01414C"
                    >
                        Fator Rhesus
                    </Text>
                </Box>
            </Container>
        </Flex>
    );
};

export default Titulo;