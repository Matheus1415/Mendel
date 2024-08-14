import React, { useContext, useState, useEffect } from 'react';
import { Flex, Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Text, Alert, AlertIcon, IconButton } from '@chakra-ui/react';
import { FormHome } from '../../contexts/formContext';
import MaskedInput from 'react-text-mask';
import { IoCloseSharp } from "react-icons/io5";

const FormHomeComponent = () => {
  const { nome, setNome, tel, setTel, sobrenome, setSobrenome, message, setMessage } = useContext(FormHome);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({ nome: false, sobrenome: false, tel: false, message: false });

  useEffect(() => {
    if (alert.message) {
       // Limpa o alerta após 5 segundos
      const timer = setTimeout(() => {
        setAlert({ type: '', message: '' });
      }, 5000);

      // Limpa o timer se o componente for desmontado antes do tempo passar
      return () => clearTimeout(timer);
    }
  }, [alert.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    const newErrors = {
      nome: !nome.trim(),
      sobrenome: !sobrenome.trim(),
      tel: !tel.trim(),
      message: !message.trim(),
    };

    setErrors(newErrors);
    // Verificar se há erros
    if (Object.values(newErrors).includes(true)) {
      return; // Não enviar o formulário se houver erros
    }

    const formData = {
      Nome: nome,
      Sobrenome: sobrenome,
      Telefone: tel,
      Mensagem: message,
    };

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/wsp38piVzJYAq43fWgfa4M', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNome('');
        setSobrenome('');
        setTel('');
        setMessage('');
        setAlert({ type: 'success', message: 'Formulário enviado com sucesso!' });
      } else {
        setAlert({ type: 'error', message: 'Ocorreu um erro ao enviar o formulário.' });
      }
    } catch (error) {
      console.error('Erro:', error);
      setAlert({ type: 'error', message: 'Ocorreu um erro ao enviar o formulário.' });
    }
  };

  return (
    <Box maxW="500px" maxH={800} mx="auto" p={5} borderWidth={1} borderRadius={8} boxShadow="lg" color="white">
      <Text fontSize={24}>VAMOS SE CONECTAR</Text>
      <Text fontSize={14} marginTop={5} marginBottom={5}> Entre em contato conosco e dê o seu feedback de como foi a sua experiência com Mendel!</Text>

      {alert.message && (
        <Alert 
          status={alert.type} 
          mb={4}
          maxW="400px"
          position="fixed"
          top="10px"
          right="10px"
          color="black"
          padding="20px"
          borderRadius="md"
          boxShadow="lg"
          zIndex="1000"
          variant='left-accent'
        >
          <AlertIcon />
          {alert.message}
          <IconButton
            aria-label="Close alert"
            icon={<IoCloseSharp />}
            onClick={() => setAlert({ type: '', message: '' })}
            position="absolute"
            top="2px"
            right="2px"
            variant="ghost"
            size="sm"
          />
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Flex gap={5}>
            <FormControl id="first-name" w="100%" maxW="50%" isInvalid={errors.nome}>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                placeholder="Seu nome"
                bg="#ffffff2a"
                _placeholder={{ color: 'white' }}
                p={6}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                borderColor={errors.nome ? 'red.500' : 'gray.200'}
                _focus={{ borderColor: errors.nome ? 'red.500' : 'blue.500' }}
              />
            </FormControl>

            <FormControl id="last-name" w="100%" maxW="50%" isInvalid={errors.sobrenome}>
              <FormLabel>Sobrenome</FormLabel>
              <Input
                type="text"
                placeholder="Seu sobrenome"
                bg="#ffffff2a"
                _placeholder={{ color: 'white' }}
                p={6}
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                borderColor={errors.sobrenome ? 'red.500' : 'gray.200'}
                _focus={{ borderColor: errors.sobrenome ? 'red.500' : 'blue.500' }}
              />
            </FormControl>
          </Flex>

          <FormControl id="phone" isInvalid={errors.tel}>
            <FormLabel>Telefone</FormLabel>
            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              guide={false}
              placeholder="(xx) xxxxx-xxxx"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              render={(ref, inputProps) => (
                <Input
                  ref={ref}
                  {...inputProps}
                  type="tel"
                  bg="#ffffff2a"
                  _placeholder={{ color: 'white' }}
                  p={6}
                  borderColor={errors.tel ? 'red.500' : 'gray.200'}
                  _focus={{ borderColor: errors.tel ? 'red.500' : 'blue.500' }}
                />
              )}
            />
          </FormControl>

          <FormControl id="message" isInvalid={errors.message}>
            <FormLabel>Mensagem</FormLabel>
            <Textarea
              placeholder="Sua mensagem"
              bg="#ffffff2a"
              _placeholder={{ color: 'white' }}
              p={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              borderColor={errors.message ? 'red.500' : 'gray.200'}
              _focus={{ borderColor: errors.message ? 'red.500' : 'blue.500' }}
            />
          </FormControl>

          <Button colorScheme="teal" type="submit" width="full">
            Enviar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default FormHomeComponent;
