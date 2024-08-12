import { Box, Input, Text, Button, Flex } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';

export const ParentInput = () => {
    const [parent1, setParent1] = useState('');
    const [parent2, setParent2] = useState('');
    const [caracteristica1, setCaracteristica1] = useState('');
    const [caracteristica2, setCaracteristica2] = useState('');
    const { setParentsAlelo, setCaracteristica } = useContext(CaracteristicaContext);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        // Verifica se parent1 e parent2 são strings válidas antes de dividir
        if (typeof parent1 === 'string' && typeof parent2 === 'string') {
            setParentsAlelo([parent1.split(''), parent2.split('')]); 
        } 

        if (typeof caracteristica1 === 'string' && typeof caracteristica2 === 'string') {
            setCaracteristica([caracteristica1, caracteristica2]); 
        } 
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex direction="column" justify="center" align="center" maxW="100%" color="Second" justifyContent="center">
                <Flex justify="center" align="center">
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">Alelo da Mãe</Text>
                        <Input
                            placeholder='Coloque o alelo da mãe'
                            value={parent1}
                             color="white"
                            onChange={(e) => setParent1(e.target.value)}
                        />
                    </Box>
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">Alelo do Pai</Text>
                        <Input
                            placeholder='Coloque o alelo do pai'
                            value={parent2}
                             color="white"
                            onChange={(e) => setParent2(e.target.value)}
                        />
                    </Box>
                </Flex>
                <Flex justify="center" align="center">
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">Caracteristica da Mãe</Text>
                        <Input
                            placeholder='Caracteristica da Mãe'
                            value={caracteristica1}
                             color="white"
                            onChange={(e) => setCaracteristica1(e.target.value)}
                        />
                    </Box>
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">Caracteristica do Pai</Text>
                        <Input
                            placeholder='Caracteristica do pai'
                            value={caracteristica2}
                             color="white"
                            onChange={(e) => setCaracteristica2(e.target.value)}
                        />
                    </Box>
                </Flex>

                <Button 
                _hover={{
                    bg: 'Quarter'
                }}
                bg="Terciario" 
                color="white" 
                type="submit" 
                marginTop="10px" 
                marginBottom="40px" 
                w="100%"
                maxW="500px"
            >Generate Punnett Square</Button>

            </Flex>
        </form>
    );
};

