import React, { useState, useContext, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box, Text, Button } from '@chakra-ui/react';

const optionsExample = [
        {
            nome: "arvoreSemFolha",
            src: "https://static.vecteezy.com/ti/vetor-gratis/p3/29202543-silhueta-do-uma-arvore-sem-folhas-icone-ou-pictograma-ilustracao-ilustracao-vetor.jpg"
        },
        {
            nome: "arvoreComFolha",
            src: "https://static.vecteezy.com/ti/vetor-gratis/p1/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg"
        }
]

const PunnettSquareDraggable = ({ 
    alelosDoPai = ['A', 'a'], 
    alelosDaMae = ['a', 'a'],  
    options = optionsExample, 
    onChangeCallback= ()=>{console.log('callback');}
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

    console.log(grid); 
    console.log(draggedImgSrc); 

    return (
        <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
            <Table border="2px" borderColor="gray.300" mb="4">
                <Thead>
                    <Tr>
                        <Th border="2px" borderColor="gray.300" bg="gray.400" sx={{ textTransform: 'none' }}></Th>
                        {alelosDoPai.map((alelo, idx) => (
                            <Th key={idx} border="2px" borderColor="gray.300" color='white' sx={{ textTransform: 'none' }}>{alelo}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {grid.map((row, rowIndex) => (
                        <Tr key={rowIndex}>
                            <Th border="2px" borderColor="gray.300" color='white'>{alelosDaMae[rowIndex]}</Th>
                            {row.map((src, colIndex) => (
                                <Td
                                    key={colIndex}
                                    border="2px"
                                    borderColor="gray.300"
                                    onDrop={() => handleDrop(rowIndex, colIndex)}
                                    onDragOver={handleDragOver}
                                >
                                    {src ? (
                                        <img style={{'maxWidth': '100px'}} src={src} alt={`cell-${rowIndex}-${colIndex}`} draggable="false" />
                                    ) : (
                                        <Box w="50px" h="50px" border="1px" borderColor="gray.300" />
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Box>
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
    );
};

export default PunnettSquareDraggable;
