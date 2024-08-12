import React, { useState, useEffect } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import quadro2x2 from '../../data/quadro2x2.json'; 
import quadro4x4 from '../../data/quadro4x4.json'; 

const AulaQuadro = () => {
    const [state, setState] = useState(true);
    const [data, setData] = useState(quadro2x2);
    console.log(state);
    useEffect(() => {
        setData(state ? quadro2x2 : quadro4x4);
    }, [state]);

    return (
        <Flex w="100%" h={1200} direction="row" p={20} gap={10}>
            <Box w="100%" maxW="60%" h={800}>
                <Excalidraw
                    theme='dark'
                    langCode='pt-BR'
                    initialData={data}
                />
            </Box>
            <Box w="100%" maxW="40%" h={800}>
                <Heading variant="SecondTitle">Clique no botão</Heading>
                <Button variant="readMore" onClick={() => setState(!state)}>
                    Clique em mim
                </Button>
            </Box>
        </Flex>
    );
};

export default AulaQuadro;
