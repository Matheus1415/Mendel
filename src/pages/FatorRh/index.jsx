import { Container, Divider} from '@chakra-ui/react';
import { CardImageSection } from '../../components/ContentSection/CardImageSection'
export const FatorRh = () => {
    return(
        <Container maxWidth="4x1" m="0px" p="0px" w='100%' h='800px' bg='#02161F'>
            <CardImageSection/>
            <Divider width='80%' h='2px' color='#fff' marginTop='30px' marginLeft='10%'/>
        </Container>
       
    );
}


