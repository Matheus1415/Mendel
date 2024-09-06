import React, { useState } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { Box, Button, Flex, Heading, Text, Textarea } from '@chakra-ui/react';
import quadro2x2 from '../../data/quadro1.json'; 
import quadro4x4 from '../../data/quadro2.json'; 

const AulaQuadro = () => {
    const [isQuadro2x2, setIsQuadro2x2] = useState(true);
    const [key, setKey] = useState(0);

    const handleChangeData = () => {
        setIsQuadro2x2(!isQuadro2x2);
        setKey(prevKey => prevKey + 1); // Atualiza a chave para forçar a re-renderização
    };

    // Informações e anotações para cada quadro
    const annotations = isQuadro2x2 
        ? {
            title: "Quadro 2x2",
            description: "Este é um quadro 2x2 que é usado para análises simples e cruzamentos genéticos básicos.",
        } 
        : {
            title: "Quadro 4x4",
            description: "Este é um quadro 4x4 para análises mais complexas e cruzamentos genéticos avançados.",
        };

    return (
        <Flex w="100%" h='100vh' m='auto' direction="row" p="3.75rem 7rem " gap={10} bg="white" align='center' >
            <Box w="100%" maxW="60%" h={800}>
                <Excalidraw
                    key={key}
                    theme='light'
                    langCode='pt-BR'
                    initialData={isQuadro2x2 ? quadro2x2 : quadro4x4}
                />
            </Box>
            <Box w="100%" maxW="40%" h={800} p={5} borderLeft="2px solid #ddd" display='flex' flexDirection='column' alignItems='start'>
                <Heading mb={4} fontSize="2xl">{annotations.title}</Heading>
                <Text mb={4}>{annotations.description}</Text>
                <Button variant="solid" colorScheme="teal" onClick={handleChangeData}>
                    Trocar Quadro
                </Button>
                <Textarea placeholder='Digite aqui suas anotações'  flex='1' mt='1rem'/>
            </Box>
        </Flex>
    );
};

export default AulaQuadro;
