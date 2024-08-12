import React, { useState, useEffect } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const AulaQuadro = () => {


    return (
        <Flex w="100%" h={1200} direction="row" p={20} gap={10}>
            <Box w="100%" maxW="60%" h={800}>
                <Excalidraw
                    theme='dark'
                    langCode='pt-BR'
                />
            </Box>
        </Flex>
    );
};

export default AulaQuadro;
