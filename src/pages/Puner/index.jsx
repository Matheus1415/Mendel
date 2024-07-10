import { Container, Text } from '@chakra-ui/react';
import ParentInput from '../../components/ParentInput';
import PunnettSquare from '../../components/PunnettSquare';
import { useState } from 'react';

export const Puner = () => {
    const [parents, setParents] = useState([]);

    console.log('Parents state:', parents); // Adicione um log para depurar o estado de parents

    return (
        <Container>
            <Text variant="h3">Quadro de Punner</Text>
            <ParentInput setParents={setParents} />
            <PunnettSquare parents={parents} />
        </Container>
    );
};
