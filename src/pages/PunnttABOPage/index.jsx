import { Container, Flex, Text } from '@chakra-ui/react';
import{ PunnettComponent } from "../../components/Punnett"

export const PunnttABOPage = () => {

    return (
        <Container 
            w="100vw"
            maxW="100%"
            minH="1000px"
            backgroundRepeat="repeat" 
            backgroundSize="cover" 
            backgroundPosition="center" 
            backgroundImage="/activity_background.png"
        >
            <Flex
                position="absolute"
                width="100%"
                direction="column"
                top={0}
                left={0}
                minH="1000px"
                bg="#02161fc3"
                justify='start' 
                align='center'     
           >
                <PunnettComponent inputTrue={false} inputABO={true} title="Bem-vindo(a) ao nosso painel de Sistema ABO!"/>
           </Flex>
        </Container>
    );
};
