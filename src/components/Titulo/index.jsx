import { Container, Box, Text, Flex } from '@chakra-ui/react';
import background6 from '../../../public/img/background6.png';
const Titulo = () => {
    return(
        <Flex>
            <Container 
            maxWidth="4x1"
            m="0px" 
            p="0px"
            >
                <Box 
                backgroundColor="#02161F"
                bgImage={`url(${background6} )`}
                bgSize="cover" 
                bgPosition="center center"
                bgRepeat="no-repeat"
                bgAttachment="fixed"
                height="500px"
                textAlign="center" 
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100vw"
                >
                    <Text 
                    variant="h1"  
                    fontWeight="ExtraLight"
                    fontSize="60px" 
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