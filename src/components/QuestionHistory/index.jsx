import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure, Checkbox, Icon } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

export function QuestionHistory({ questionData }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const currentQuestion = questionData[currentQuestionIndex];

    const handleAnswerChange = (value) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestionIndex]: value
        }));
    };

    const submitQuestionCallback = () => {
        // Process userAnswers for currentQuestionIndex
        console.log(`Answers for question ${currentQuestionIndex}:`, userAnswers[currentQuestionIndex]);
    };

    const handleNext = () => {
        submitQuestionCallback(); // Save current answers before moving to the next question
        if (currentQuestionIndex < questionData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        submitQuestionCallback(); // Save current answers before moving to the previous question
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <Flex
            color="white"
            direction="row"
            p={10}
            align="start"
        >
            <Flex mb={4} direction="column" maxW={currentQuestion.image && currentQuestion.imageSize <= 400 ? "70%" : "100%"}>
                <Text fontSize={30} mb={10}>{currentQuestionIndex + 1}/{questionData.length}</Text>
                <Heading variant="QuestionTile">
                    {currentQuestion.question}
                    {currentQuestion.imageSize > 400 && (
                        <Button
                            onClick={onOpen}
                            leftIcon={<Icon as={FaEye} boxSize={6} />}
                            fontSize="lg"
                            bg="transparent"
                            color="white"
                            p={2}
                            ml={5}
                            _hover={{bg:"transparent",color:"#4bffff"}}
                        >
                            Ver Imagem
                        </Button>
                    )}
                </Heading>
                {currentQuestion.questionType === "MultipleItems" ? (
                    <Stack direction='column' marginTop={10}>
                        {currentQuestion.options.map((option, index) => (
                            <Checkbox
                                key={index}
                                value={option.content || ""}
                                colorScheme="teal"
                                onChange={(e) => handleAnswerChange(e.target.checked ? option.content : '')}
                            >
                                {option.content}
                            </Checkbox>
                        ))}
                    </Stack>
                ) : currentQuestion.questionType !== "InputQuestion" ? (
                    <RadioGroup marginTop={10}>
                        <Stack direction='column'>
                            {currentQuestion.options.map((option, index) => (
                                <Radio
                                    key={index}
                                    value={option.content || ""}
                                    variant="QuestionRadio"
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                >
                                    {option.content}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                ) : (
                    <Text mt={4}>
                        Resposta:
                        <input
                            type="text"
                            placeholder="Digite sua resposta..."
                            onChange={(e) => handleAnswerChange(e.target.value)}
                        />
                    </Text>
                )}
                <Flex direction="row" align="center" gap={10} mt={4}>
                    <Button variant="nextPage" onClick={handlePrev} maxW={300} disabled={currentQuestionIndex === 0}>
                        Pergunta Anterior
                    </Button>
                    <Button variant="nextPage" onClick={handleNext} maxW={300} disabled={currentQuestionIndex === questionData.length - 1}>
                        Próxima Pergunta
                    </Button>
                </Flex>
            </Flex>
            {currentQuestion.image && currentQuestion.imageSize <= 400 && (
                <Flex direction="column" w={400} maxW="30%" p={5}>
                    <Box w={100} h={30}></Box>
                    <Image
                        src={currentQuestion.image}
                        alt="Imagem da questão"
                        boxSize="200px"
                        mr={4}
                        cursor="pointer"
                        onClick={onOpen}
                    />
                </Flex>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="center center"
                    backgroundImage={`url(${currentQuestion.image})`}
                    w="100%"
                    maxW={1200}
                    h={600}
                >
                    <ModalCloseButton />    
                </ModalContent>
            </Modal>
        </Flex>
    );
}
