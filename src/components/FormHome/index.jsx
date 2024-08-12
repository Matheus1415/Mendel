import React from 'react';
import { Flex, Box, Button, FormControl, FormLabel, Input, Textarea, VStack,Text } from '@chakra-ui/react';

const FormHome = () => {
  return (
    <Box maxW="500px" maxH={800} mx="auto" p={5} borderWidth={1} borderRadius={8} boxShadow="lg" color="white">
        <Text fontSize={24}>VAMOS SE CONECTAR</Text>
        <Text fontSize={14} marginTop={5} marginBottom={5}> Entre em contato conosco e dê o seu feedback de como foi a sua experiência com Mendel!</Text>
      <form>
        <VStack spacing={4}>
          <Flex gap={5}>
            <FormControl id="first-name" w="100%" maxW="50%">
              <FormLabel>Nome</FormLabel>
              <Input type="text" placeholder="Seu nome" bg="#ffffff2a"  _placeholder={{color:'white'}} p={6}/>
            </FormControl>

            <FormControl id="last-name"  w="100%" maxW="50%">
              <FormLabel>Sobrenome</FormLabel>
              <Input type="text" placeholder="Seu sobrenome" bg="#ffffff2a"  _placeholder={{color:'white'}} p={6}/>
            </FormControl>
          </Flex>

          <FormControl id="phone" >
            <FormLabel>Telefone</FormLabel>
            <Input type="tel" placeholder="Seu telefone" bg="#ffffff2a"  _placeholder={{color:'white'}} p={6}/>
          </FormControl>

          <FormControl id="message" >
            <FormLabel>Mensagem</FormLabel>
            <Textarea placeholder="Sua mensagem" bg="#ffffff2a"  _placeholder={{color:'white'}} p={6}/>
          </FormControl>

          <Button colorScheme="teal" type="submit" width="full">
            Enviar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default FormHome;
