import { Container, Text } from '@chakra-ui/react';
import ParentInput from '../../components/ParentInput';
import PunnettSquare from '../../components/PunnettSquare';
import { useState } from 'react';

export const Puner = () => {
    const [parents, setParents] = useState([]);

    return (
        <Container maxW="100%">
            <Text variant="h3" align="center">Quadro de Punner</Text>
            <ParentInput setParents={setParents} />
            <PunnettSquare parents={parents} maxAlelo={2} />
        </Container>
    );
};
