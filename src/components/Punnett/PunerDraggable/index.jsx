import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box, Button, Divider, Center, Text, Heading } from '@chakra-ui/react';
import ModalFeedback from '../../ModalFeedback';
import { rearrangeLetters } from '../../../config/rearrangeLetters';

const PunnettSquareDraggable = ({ 
    data = { 
        alelos: { pai: [], mae: [] }, 
        options: [], 
        title: "" 
    }, 
    onChangeCallback = () => {},
    onHomeCallback = () => {}
}) => {
    // Obtendo os alelos do pai e da mãe, opções e título a partir dos dados
    const alelosDoPai = data.alelos.pai;
    const alelosDaMae = data.alelos.mae;
    const options = data.options;
    const title = data.title; 

    // Definindo a quantidade de alelos e criando a matriz/grid inicial
    const quantidadeDeAlelos = alelosDoPai.length;
    const [grid, setGrid] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [matriz, setMatriz] = useState(Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null)));
    const [availableOptions, setAvailableOptions] = useState(options);
    const [draggedImgSrc, setDraggedImgSrc] = useState(''); // Estado para armazenar a fonte da imagem arrastada
    const [draggedNome, setDraggedNome] = useState(''); // Estado para armazenar o nome arrastado
    const [correctAnswers, setCorrectAnswers] = useState(0); // Estado para contar as respostas corretas
    const [totalAnswers, setTotalAnswers] = useState(quantidadeDeAlelos * quantidadeDeAlelos); // Total de respostas
    const [checked, setChecked] = useState(false); // Estado para verificar se algo foi checado
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // Estado para controlar a exibição do feedback
    const [userFeedback, setUserFeedback] = useState(''); // Estado para armazenar o feedback do usuário

    // Efeito que chama a função de callback sempre que a matriz é atualizada
    useEffect(() => {
        onChangeCallback(matriz);
    }, [matriz]);

    // Função para iniciar o arraste da imagem
    const handleDragStart = (e, src, nome) => {
        setDraggedImgSrc(src); // Armazena a fonte da imagem arrastada
        setDraggedNome(nome); // Armazena o nome da imagem arrastada
    };

    // Função para selecionar a imagem ao clicar
    const handleClickSelect = (src, nome) => {
        setDraggedImgSrc(src); // Define a imagem arrastada
        setDraggedNome(nome); // Define o nome arrastado
    };

    // Função para lidar com o clique na célula da matriz
    const handleCellClick = (rowIndex, colIndex) => {
        if (draggedImgSrc) { // Verifica se existe uma imagem arrastada
            // Atualiza o grid e a matriz com a imagem e nome arrastados
            const newGrid = grid.map((row, rIdx) =>
                row.map((src, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedImgSrc : src))
            );
            const newMatriz = matriz.map((row, rIdx) =>
                row.map((nome, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedNome : nome))
            );
            setGrid(newGrid);
            setMatriz(newMatriz);
        }
    };

    // Função para lidar com a soltura da imagem na célula
    const handleDrop = (rowIndex, colIndex) => {
        // Atualiza o grid e a matriz com a imagem e nome arrastados
        const newGrid = grid.map((row, rIdx) =>
            row.map((src, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedImgSrc : src))
        );
        const newMatriz = matriz.map((row, rIdx) =>
            row.map((nome, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? draggedNome : nome))
        );
        setGrid(newGrid);
        setMatriz(newMatriz);
    };

    // Função para permitir o arraste sobre a célula
    const handleDragOver = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do arraste
    };


    // Função para redefinir a matriz e o grid para o estado inicial
    const reset = () => {
        // Cria uma nova matriz com o tamanho de alelos e preenchida com null
        const newMatriz = Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null));
        setMatriz(newMatriz); // Atualiza a matriz no estado

        // Cria um novo grid com o mesmo tamanho e preenchido com null
        const newGrid = Array.from({ length: quantidadeDeAlelos }, () => Array.from({ length: quantidadeDeAlelos }, () => null));
        setGrid(newGrid); // Atualiza o grid no estado

        // Restaura as opções disponíveis
        setAvailableOptions(options); 
        setCorrectAnswers(0); // Reseta o contador de respostas corretas
        setChecked(false); // Reseta o estado de verificação
    };

    // Função para verificar as respostas
    const checkAnswers = () => {
        let correct = 0; // Contador de respostas corretas

        // Percorre cada linha da matriz
        matriz.forEach((row, rIdx) => {
            row.forEach((nome, cIdx) => {
                const aleloPai = alelosDoPai[cIdx]; // Obtém o alelo do pai
                const aleloMae = alelosDaMae[rIdx]; // Obtém o alelo da mãe
                const combinedAlelo = aleloPai + aleloMae; // Combina os alelos
                // Verifica se a combinação do alelo corresponde à opção correta
                const matchingOption = options.find(option => option.name === matriz[rIdx][cIdx] && rearrangeLetters(option.alelo) === rearrangeLetters(combinedAlelo));
                
                if (matchingOption) { // Se a opção correspondente for encontrada
                    correct++; // Incrementa o contador de respostas corretas
                }
            });
        });

        setCorrectAnswers(correct); // Atualiza o número de respostas corretas no estado
        setChecked(true); // Marca que a verificação foi realizada
    };

    // Função para obter uma mensagem de encorajamento com base nas respostas corretas
    const getEncouragementMessage = () => {
        const percentage = (correctAnswers / totalAnswers) * 100; // Calcula a porcentagem de acertos

        // Retorna uma mensagem com base na porcentagem de acertos
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
            feedback: userFeedback,
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
                // Feedback enviado com sucesso
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
                            onClick={() => handleClickSelect(option.src, option.name)}
                            cursor="pointer"
                        >
                            {!checked && (
                                <>
                                    <Text mb={2} fontWeight="bold" color="white">{rearrangeLetters(option.alelo)}</Text>
                                    <img
                                        style={{ 'maxWidth': '100px' }}
                                        className="cell"
                                        src={option.src}
                                        alt={option.name}
                                        draggable="true"
                                        onDragStart={(e) => handleDragStart(e, option.src, option.name)}
                                    />
                                </>
                            )}
                        </Box>
                    ))}
                </Flex>
                
                <Center height={checked ? "" : "800px"}>
                    <Divider orientation='vertical' />
                </Center>

                <Flex direction="column" align="center" justify="center" w="100%" >
                    <Heading variant="PrimaryTitle">{title}</Heading>
                    <Flex direction={!checked?"column":"row"} align="start" gap={10} justify="center">
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
                                                onClick={() => handleCellClick(rowIndex, colIndex)}
                                                borderBottom="none"
                                            >
                                                <Flex 
                                                    bg={src ? '' : '#6886af33'} 
                                                    justify='center' 
                                                    align='center' 
                                                    p={10}
                                                    w={250} 
                                                    h={180}
                                                    borderRadius={10}
                                                    border={checked ? (matriz[rowIndex][colIndex] && options.find(option => option.name === matriz[rowIndex][colIndex] && rearrangeLetters(option.alelo) === rearrangeLetters(alelosDoPai[colIndex] + alelosDaMae[rowIndex])) ? "2px solid green" : "2px solid #ff11006a") : "1px solid #ffff"}
                                                >
                                                    {src && <img style={{ 'maxWidth': '100px' }} src={src} alt={`cell-${rowIndex}-${colIndex}`} />}     
                                                </Flex>                                            

                                            </Td>
                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        {checked && (<Flex direction="column" align="center" justify="center" gap={10}>
                            <Flex direction="column" align="center" justify="center" gap={4}>
                                <Text fontWeight="bold" color="white" fontSize={23}>{getEncouragementMessage()}</Text>
                                <Text fontWeight="bold" color="white" fontSize={17}>Você acertou {correctAnswers} de {totalAnswers}</Text>
                            </Flex>
                            <Flex>
                                <Button variant="nextPage" onClick={reset} mr={4}>
                                    Resetar
                                </Button>
                                <Button variant="nextPage" onClick={() => setIsFeedbackOpen(true)}>
                                    Enviar Feedback
                                </Button>
                            </Flex>
                        </Flex>)}
                    </Flex>
                    
                    {!checked && (
                        <Flex gap={4} >
                            <Button variant="nextPage" onClick={checkAnswers} w="850px" textAlign="left">Verificar</Button>
                        </Flex>
                    )}
                </Flex>
            </Flex>

            <ModalFeedback 
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
                setUserFeedback={setUserFeedback}
                submitForm={submitForm}
            />
        </>
    );
};

export default PunnettSquareDraggable;
