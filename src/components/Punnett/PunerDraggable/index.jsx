import React, { useState, useContext, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box, Text, Button, Heading } from '@chakra-ui/react';

const optionsExample = [
        {
            name: "arvoreSemFolha",
            src: "https://static.vecteezy.com/ti/vetor-gratis/p3/29202543-silhueta-do-uma-arvore-sem-folhas-icone-ou-pictograma-ilustracao-ilustracao-vetor.jpg"
        },
        {
            name: "arvoreComFolha",
            src: "https://static.vecteezy.com/ti/vetor-gratis/p1/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg"
        }
]

const PunnettSquareDraggable = ({ 
    alelosDoPai = ['A', 'a'], 
    alelosDaMae = ['a', 'a'],  
    options = optionsExample, 
    onChangeCallback= ()=>{}
}) => {
    const quantidadeDeAlelos = alelosDoPai.length
    const [grid, setGrid] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [draggedImgSrc, setDraggedImgSrc] = useState('');
    const [draggedNome, setDraggedNome] = useState('')
    const [matriz, setMatriz] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    

    useEffect(()=>{
        onChangeCallback(matriz)
    }, [matriz]);

    const handleDragStart = (e, src, nome) => {
        setDraggedImgSrc(src);
        setDraggedNome(nome)
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
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    return (
        <Flex direction="column" w="100%" >
            <Heading variant="PrimaryTitle" align="center">Quadro de Punnett Draggable</Heading>
            <Flex direction="row" align="center" justify="center" wrap="wrap"  w="100%" gap={10}>
                <Table border="2px" borderColor="white" mb="4" maxW="50%">
                    <Thead borderColor="white">
                        <Tr borderColor="white">
                        <Th border="2px" borderColor="white" bg="Dark" color="white"></Th>
                            {alelosDoPai.map((alelo, idx) => (
                                <Th fontSize={25} textAlign="center" key={idx} border="2px" borderColor="white" color="white" sx={{ textTransform: 'none' }}>{alelo}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody borderColor="white">
                        {grid.map((row, rowIndex) => (
                            <Tr borderColor="white" key={rowIndex} >
                                <Th fontSize={25} textAlign="center" border="2px" borderColor="white" color="white" sx={{ textTransform: 'none' }} >{alelosDaMae[rowIndex]}</Th>
                                {row.map((src, colIndex) => (
                                    <Td
                                        key={colIndex}
                                        border="2px"
                                        borderColor="white"
                                        onDrop={() => handleDrop(rowIndex, colIndex)}
                                        onDragOver={handleDragOver}
                                        bg={src? '': 'red.800'}
                                        p={src?5:10}
                                    >
                                        {src && <img style={{'maxWidth': '100px'}} src={src} alt={`cell-${rowIndex}-${colIndex}`} draggable="false" />}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Box maxW="50%">
                    {options.map((option, index) => (
                        <img
                            key={index}
                            style={{'maxWidth': '200px'}}
                            className="cell"
                            src={option.src}
                            draggable="true"
                            onDragStart={(e) => handleDragStart(e, option.src, option.name)}
                        />
                    ))}
                </Box>
            </Flex>
        </Flex>
    );
};

export default PunnettSquareDraggable;
