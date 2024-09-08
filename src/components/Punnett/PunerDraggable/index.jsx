import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box, Button, Divider, Center, Text, Heading } from '@chakra-ui/react';
import ModalFeedback from '../../ModalFeedback';

const PunnettSquareDraggable = ({ 
    data = { 
        alelos: { pai: [], mae: [] }, 
        options: [], 
        title: "" 
    }, 
    onChangeCallback = () => {},
    onHomeCallback = () => {}
}) => {
    const alelosDoPai = data.alelos.pai;
    const alelosDaMae = data.alelos.mae;
    const options = data.options;
    const title = data.title; 

    const quantidadeDeAlelos = alelosDoPai.length;
    const [grid, setGrid] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [matriz, setMatriz] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [availableOptions, setAvailableOptions] = useState(options);
    const [draggedImgSrc, setDraggedImgSrc] = useState('');
    const [draggedNome, setDraggedNome] = useState('');
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalAnswers, setTotalAnswers] = useState(quantidadeDeAlelos * quantidadeDeAlelos);
    const [checked, setChecked] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [userFeedback, setUserFeedback] = useState(''); // Estado para armazenar o feedback do usuário

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
        setCorrectAnswers(0);
        setChecked(false);
    };

    const checkAnswers = () => {
        let correct = 0;

        matriz.forEach((row, rIdx) => {
            row.forEach((nome, cIdx) => {
                const aleloPai = alelosDoPai[cIdx];
                const aleloMae = alelosDaMae[rIdx];
                const combinedAlelo = aleloPai + aleloMae;

                const matchingOption = options.find(option => option.name === nome && option.alelo === combinedAlelo);
                if (matchingOption) {
                    correct++;
                }
            });
        });

        setCorrectAnswers(correct);
        setChecked(true);
    };

    const getEncouragementMessage = () => {
        const percentage = (correctAnswers / totalAnswers) * 100;

        if (percentage === 100) {
            return "Parabéns! Você acertou todas as combinações!";
        } else if (percentage === 0) {
            return "Não desanime! Tente novamente!";
        } else if (percentage >= 50) {
            return "Bom trabalho! Você acertou mais da metade!";
        } else {
            return "Continue tentando, você está quase lá!";
        }
    };

    const submitForm = async () => {
        const feedbackData = {
            feedback: userFeedback, // Apenas o feedback do usuário
        };

        try {
            const response = await fetch('https://api.sheetmonkey.io/form/z4HmbPWt7Rr2WuYi9NMma', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            if (response.ok) {
                
            } else {
                console.error('Erro ao enviar o feedback:', response.statusText);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    return (
        <>
            <Flex direction="row" w="100%" align="center" justifyContent="center">
                <Flex p={4} direction="column" gap={4} align="start">
                    {availableOptions.map((option, index) => (
                        <Box 
                            key={index} 
                            p={4}
                            borderRadius="20px"
                            textAlign="center"
                        >
                            <Text mb={2} fontWeight="bold" color="white">{option.AleloTitle}</Text>
                            <img
                                style={{ 'maxWidth': '100px' }}
                                className="cell"
                                src={option.src}
                                alt={option.name}
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, option.src, option.name)}
                            />
                        </Box>
                    ))}
                </Flex>
                
                <Center height={checked ? "" : "800px"}>
                    <Divider orientation='vertical' />
                </Center>

                <Flex direction="column" align="center" justify="center" w="100%" gap={10}>
                    <Heading variant="PrimaryTitle">{title}</Heading>
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
                                                border={checked ? (matriz[rowIndex][colIndex] && options.find(option => option.name === matriz[rowIndex][colIndex] && option.alelo === alelosDoPai[colIndex] + alelosDaMae[rowIndex]) ? "2px solid green" : "2px solid red") : "1px solid #ffff"}
                                            >
                                                {src && <img style={{ 'maxWidth': '100px' }} src={src} alt={`cell-${rowIndex}-${colIndex}`} />}     
                                            </Flex>                                            
                                        </Td>
                                    ))}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    {!checked && (
                        <Flex gap={4}>
                            <Button
                                variant="nextPage"
                                onClick={checkAnswers}
                                borderRadius={8}
                                width="200px"
                            >
                                Verificar
                            </Button>
                        </Flex>
                    )}
                    {checked && (
                        <Flex direction="column" align="start" justify="start" gap={4} mt={4}>
                            <Text fontSize={30} color="white">
                                Você acertou {correctAnswers}/{totalAnswers}
                            </Text>
                            <Text fontSize={24} color="white">
                                {getEncouragementMessage()}
                            </Text>
                            <Flex direction="row" gap={4}>
                                <Button
                                    variant="nextPage"
                                    onClick={() => setIsFeedbackOpen(true)}
                                    borderRadius={8}
                                    width="200px"
                                >
                                    Enviar Feedback
                                </Button>
                                <Button
                                    variant="nextPage"
                                    onClick={reset}
                                    borderRadius={8}
                                    width="200px"
                                >
                                    Resetar
                                </Button>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>

            <ModalFeedback 
                isOpen={isFeedbackOpen} 
                onClose={() => setIsFeedbackOpen(false)}
                onSubmit={submitForm} // Chama a função submitForm ao enviar o feedback
                feedback={userFeedback}
                onFeedbackChange={(e) => setUserFeedback(e.target.value)} // Atualiza o feedback do usuário
            />
        </>
    );
};

export default PunnettSquareDraggable;

