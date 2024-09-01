import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure, Checkbox, Icon, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";


export function ViewQuestion({ currentQuestionData, currentQuestionIndex, questionsAmount, nextButtonCallback, previousButtonCallback }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log('dentro do view',currentQuestionData, currentQuestionIndex, questionsAmount);
    

    const handleNext = (e) => {
        e.preventDefault();
        nextButtonCallback(e);
    };

    const handlePrev = (e) => {
        e.preventDefault();
        previousButtonCallback(e);
    };

    return (
        <Flex
            as='form'
            onSubmit={handleNext}
            color="white"
            direction="row"
            p={10}
            align="start"
        >
            <Flex mb={4} direction="column" maxW={(currentQuestionData.image && currentQuestionData.imageSize <= 400) ? "70%" : "100%"}>
                <Text fontSize={30} mb={10}>{currentQuestionIndex + 1}/{questionsAmount}</Text>
                <Heading variant="QuestionTile">
                    {currentQuestionData.question}
                    {currentQuestionData.imageSize > 400 && (
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
                
                {currentQuestionData.questionType === "MultipleItems" ? (
                    <Stack direction='column' marginTop={10}>
                        {currentQuestionData.options.map((option, index) => (
                            <Checkbox
                                key={index}
                                value={option.content || ""}
                                colorScheme="teal"
                                name={option.content}
                            >
                                {option.content}
                            </Checkbox>
                        ))}
                    </Stack>

                ) : currentQuestionData.questionType !== "InputQuestion" ? (
                    <RadioGroup marginTop={10}>
                        <Stack direction='column'>
                            <RadioGroup name='options' required display='flex' flexDirection='column'>
                                {currentQuestionData.options.map((option, index) => (
                                    <Radio
                                        key={index}
                                        value={option.content || ""}
                                        variant="QuestionRadio"
                                    >
                                        {option.content}
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </Stack>
                    </RadioGroup>
                ) : (
                    <>
                        {
                        currentQuestionData.options.map( (option, index) => {
                            return(
                                <FormControl key={index} isRequired display='flex' alignItems='center' justifyContent='space-between'>
                                    <FormLabel m='0' p='0.75rem' w='fit-content'>{option.InputField}:</FormLabel>
                                    <Input type='text' required name={option.InputField} flexGrow='1' maxLength={option.isCorrectValue.length}/>
                                </FormControl>
                            )
                        } )
                    }
                    </>
                )}
                <Flex direction="row" align="center" gap={10} mt={4}>
                    <Button variant="nextPage" onClick={handlePrev} maxW={300} disabled={currentQuestionIndex === 0}>
                        Pergunta Anterior
                    </Button>
                    <Button variant="nextPage" type='submit' maxW={300} disabled={currentQuestionIndex === questionsAmount - 1}>
                        Próxima Pergunta
                    </Button>
                </Flex>
            </Flex>
            {currentQuestionData.image && currentQuestionData.imageSize <= 400 && (
                <Flex direction="column" w={400} maxW="30%" p={5}>
                    <Box w={100} h={30}></Box>
                    <Image
                        src={currentQuestionData.image}
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
                    backgroundImage={`url(${currentQuestionData.image})`}
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
