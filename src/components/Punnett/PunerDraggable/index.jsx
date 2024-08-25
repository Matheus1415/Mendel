import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box, Button, Divider, Center } from '@chakra-ui/react';

const optionsExample = [
    {
        id: 1,
        name: "arvoreSemFolha",
        src: "https://static.vecteezy.com/ti/vetor-gratis/p3/29202543-silhueta-do-uma-arvore-sem-folhas-icone-ou-pictograma-ilustracao-ilustracao-vetor.jpg"
    },
    {
        id: 2,
        name: "arvoreComFolha",
        src: "https://static.vecteezy.com/ti/vetor-gratis/p1/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg"
    },
    {
        id: 3,
        name: "arvoreComFolha2",
        src: "https://static.vecteezy.com/ti/vetor-gratis/p3/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg"
    },
    {
        id: 4,
        name: "arvoreComFolha3",
        src: "https://static.vecteezy.com/ti/vetor-gratis/p2/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg"
    }
];


const PunnettSquareDraggable = ({ 
    alelosDoPai = ['A', 'a'], 
    alelosDaMae = ['a', 'a'],  
    options = optionsExample, 
    onChangeCallback = () => {}
}) => {
    const quantidadeDeAlelos = alelosDoPai.length;
    const [grid, setGrid] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [matriz, setMatriz] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [availableOptions, setAvailableOptions] = useState(options);
    const [draggedImgSrc, setDraggedImgSrc] = useState('');
    const [draggedNome, setDraggedNome] = useState('');

    useEffect(() => {
        onChangeCallback(matriz);
    }, [matriz]);

    const handleDragStart = (e, src, nome) => {
        setDraggedImgSrc(src);
        setDraggedNome(nome);
    };

    const handleDrop = (rowIndex, colIndex) => {
        const newGrid = grid.map((row, rIdx) =>
            row.map((src, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedImgSrc : src))
        );
        const newMatriz = matriz.map((row, rIdx) =>
            row.map((nome, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedNome : nome))
        );
        setGrid(newGrid);
        setMatriz(newMatriz);
        
        setAvailableOptions(availableOptions.filter(option => option.src !== draggedImgSrc));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const reset = () => {
        const newMatriz = Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null));
        setMatriz(newMatriz);
        const newGrid = Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null));
        setGrid(newGrid);
        setAvailableOptions(options); 
    };

    return (
        <>
            <Flex direction="row" w="100%" align="center" justifyContent="center">
                <Flex p={4} direction="column" gap={10} align="start">
                    {availableOptions.map((option, index) => (
                        <Box 
                            key={index} 
                            p={4}
                            borderRadius="20px"
                        >
                            <img
                                style={{ 'maxWidth': '100px' }}
                                className="cell"
                                src={option.src}
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, option.src, option.name)}
                            />
                        </Box>
                    ))}
                </Flex>
                
                <Center height='800px'>
                    <Divider orientation='vertical' />
                </Center>

                <Flex direction="column" align="center" justify="center" w="100%" gap={10}>
                    <Table 
                        maxW="50%"
                        align="center"
                    >
                        <Thead>
                            <Tr>
                                <Th borderBottom="none">
                                    <Flex 
                                        bg="#ebebebaf" 
                                        justify='center' 
                                        align='center' 
                                        p={10}
                                        w={250} 
                                        h={180}
                                        borderRadius={10}
                                        border="1px solid #ffff"
                                    >
                                            
                                    </Flex>
                                </Th>
                                {alelosDoPai.map((alelo, idx) => (
                                    <Th 
                                        fontSize={25} 
                                        textAlign="center"  
                                        key={idx}   
                                        color="white" 
                                        sx={{ textTransform: 'none' }}
                                        borderBottom="none"
                                    >
                                        <Flex 
                                            justify='center' 
                                            align='center' 
                                            p={10}
                                            w={250} 
                                            h={180}
                                            borderRadius={10}
                                            border="1px solid #ffff"
                                        >
                                            {alelo}
                                        </Flex>
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {grid.map((row, rowIndex) => (
                                <Tr key={rowIndex}>
                                    <Th 
                                        fontSize={25}  
                                        color="white" 
                                        sx={{ textTransform: 'none' }}   
                                        borderBottom="none"
                                    >   
                                        <Flex 
                                            justify='center' 
                                            align='center' 
                                            p={10}
                                            w={250} 
                                            h={180}
                                            borderRadius={10}
                                            border="1px solid #ffff"
                                        >
                                            {alelosDaMae[rowIndex]}       
                                        </Flex>
                                    </Th>
                                    {row.map((src, colIndex) => (
                                        <Td
                                            key={colIndex}
                                            onDrop={() => handleDrop(rowIndex, colIndex)}
                                            onDragOver={handleDragOver}
                                            borderBottom="none"
                                        >
                                            <Flex 
                                                bg={src ? '' : '#6886af'} 
                                                justify='center' 
                                                align='center' 
                                                p={10}
                                                w={250} 
                                                h={180}
                                                borderRadius={10}
                                                border="1px solid #ffff"
                                            >
                                                {src && <img style={{ 'maxWidth': '100px' }} src={src} alt={`cell-${rowIndex}-${colIndex}`} draggable="false" />}     
                                            </Flex>                                            
                                        </Td>
                                    ))}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <Button
                        variant="nextPage"
                        w={300}
                        borderRadius={8}
                        onClick={reset}
                    >
                        Resetar
                    </Button>
                </Flex>
                
                
            </Flex>
        </>
    );
};

export default PunnettSquareDraggable;
