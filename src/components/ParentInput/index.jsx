import { Box, Input, Text, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const ParentInput = ({ setParents }) => {
    const [parent1, setParent1] = useState('');
    const [parent2, setParent2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit do formulário
        
        // Verifica se parent1 e parent2 são strings válidas antes de dividir
        if (typeof parent1 === 'string' && typeof parent2 === 'string') {
            setParents([parent1.split(''), parent2.split('')]); // Chama a função setParents do componente pai com os valores de parent1 e parent2
        } else {
            console.error('Parent alleles must be strings.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex justify="center" align="center" maxW="100%" color="Second">
                <Box padding="10px" w="50%">
                    <Text variant="p">Parent 1 Alleles:</Text>
                    <Input
                        placeholder='Enter alleles for parent 1'
                        value={parent1}
                        onChange={(e) => setParent1(e.target.value)}
                    />
                </Box>
                <Box padding="10px" w="50%">
                    <Text variant="p">Parent 2 Alleles:</Text>
                    <Input
                        placeholder='Enter alleles for parent 2'
                        value={parent2}
                        onChange={(e) => setParent2(e.target.value)}
                    />
                </Box>
            </Flex>
            <Button colorScheme='purple' type="submit" marginTop="10px" marginBottom="40px" w="100%">Generate Punnett Square</Button>
        </form>
    );
};

export default ParentInput;
