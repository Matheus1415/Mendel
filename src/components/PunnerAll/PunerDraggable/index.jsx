import React, { useState, useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box, Text } from '@chakra-ui/react';

const PunnettSquareDraggable = ({ maxAlelo }) => {
    const [grid, setGrid] = useState(Array(maxAlelo).fill(Array(maxAlelo).fill(null)));
    const [draggedImgSrc, setDraggedImgSrc] = useState('');

    const handleDragStart = (e, src) => {
        setDraggedImgSrc(src);
    };

    const handleDrop = (rowIndex, colIndex) => {
        const newGrid = grid.map((row, rIdx) =>
            row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedImgSrc : cell))
        );
        setGrid(newGrid);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    return (
        <Flex direction="column" align="center" justify="center" wrap="wrap" m="4">
            <Text variant="h3" align="center">Quadro de Punnett Draggable</Text>
            <Table border="2px" borderColor="gray.300" mb="4">
                <Thead>
                    <Tr>
                        <Th border="2px" borderColor="gray.300" bg="gray.400" sx={{ textTransform: 'none' }}></Th>
                        {Array(maxAlelo).fill().map((_, idx) => (
                            <Th key={idx} border="2px" borderColor="gray.300" sx={{ textTransform: 'none' }}>B{idx + 1}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {grid.map((row, rowIndex) => (
                        <Tr key={rowIndex}>
                            <Th border="2px" borderColor="gray.300">A{rowIndex + 1}</Th>
                            {row.map((cell, colIndex) => (
                                <Td
                                    key={colIndex}
                                    border="2px"
                                    borderColor="gray.300"
                                    onDrop={() => handleDrop(rowIndex, colIndex)}
                                    onDragOver={handleDragOver}
                                >
                                    {cell ? (
                                        <img style={{'maxWidth': '100px'}} src={cell} alt={`cell-${rowIndex}-${colIndex}`} draggable="false" />
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
                <img
                    style={{'maxWidth': '200px'}}
                    className="cell"
                    src="https://static.vecteezy.com/ti/vetor-gratis/p3/29202543-silhueta-do-uma-arvore-sem-folhas-icone-ou-pictograma-ilustracao-ilustracao-vetor.jpg"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, "https://static.vecteezy.com/ti/vetor-gratis/p3/29202543-silhueta-do-uma-arvore-sem-folhas-icone-ou-pictograma-ilustracao-ilustracao-vetor.jpg")}
                />
                <img
                    style={{'maxWidth': '200px'}}
                    className="cell"
                    src="https://static.vecteezy.com/ti/vetor-gratis/p1/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, "https://static.vecteezy.com/ti/vetor-gratis/p1/15223714-icone-da-arvore-estilo-cartoon-vetor.jpg")}
                />
            </Box>
        </Flex>
    );
};

export default PunnettSquareDraggable;
