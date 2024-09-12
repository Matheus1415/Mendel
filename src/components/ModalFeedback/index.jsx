import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Textarea, Button, Flex } from '@chakra-ui/react';

const ModalFeedback = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [experience, setExperience] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const formData = {
            name,
            feedback,
            suggestions,
            experience,
        };

        try {
            const response = await fetch('https://api.sheetmonkey.io/form/z4HmbPWt7Rr2WuYi9NMma', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Feedback enviado com sucesso!');
                setName('');
                setFeedback('');
                setSuggestions('');
                setExperience('');
            } else {
                setMessage('Erro ao enviar o feedback, tente novamente.');
            }
        } catch (error) {
            setMessage('Erro de rede: ' + error.message);
        } finally {
            setIsSubmitting(false);
            onClose(); // Fecha o modal após o envio
        }
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
                    <Button colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting}>
                        Enviar
                    </Button>
                </ModalFooter>
                {message && <Text p={4} color="green.500">{message}</Text>}
            </ModalContent>
        </Modal>
    );
};

export default ModalFeedback;
