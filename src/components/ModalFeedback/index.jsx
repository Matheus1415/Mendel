import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Textarea, Button, Flex, Text } from '@chakra-ui/react';

const ModalFeedback = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = () => {
        // Lógica para enviar feedback
        console.log({ name, feedback, suggestions, experience });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Feedback</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction="column" gap={4}>
                        <Input
                            placeholder="Seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Textarea
                            placeholder="O que achou da atividade?"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                        <Textarea
                            placeholder="Sugestões para melhorias"
                            value={suggestions}
                            onChange={(e) => setSuggestions(e.target.value)}
                        />
                        <Textarea
                            placeholder="Experiência geral"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Fechar
                    </Button>
                    <Button colorScheme="blue" onClick={handleSubmit}>
                        Enviar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalFeedback;
