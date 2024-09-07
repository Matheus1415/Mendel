import { Container } from '@chakra-ui/react';
import PunerAll from '../../components/PunnerAll';

export const Puner = () => {

    return (
        <Container maxW="100%">
            <PunerAll inputTrue={true} title="Meu quadro" />
        </Container>
    );
};
