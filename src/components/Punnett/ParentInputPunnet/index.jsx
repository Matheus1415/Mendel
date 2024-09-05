import React, { useState, useContext, useEffect } from 'react';
import { Box, Input, Text, Button, Flex, Select, useBreakpointValue } from '@chakra-ui/react';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';
import { motion } from 'framer-motion';

// Definir os componentes animados do Framer Motion
const MotionBox = motion(Box);
const MotionInput = motion(Input);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionSelect = motion(Select);
const MotionFlex = motion(Flex);

export const ParentInputPunnet = () => {
  const [parent1, setParent1] = useState(['', '', '', '']);
  const [parent2, setParent2] = useState(['', '', '', '']);
  const [dominantMother, setDominantMother] = useState('');
  const [recessiveMother, setRecessiveMother] = useState('');
  const [dominantFather, setDominantFather] = useState('');
  const [recessiveFather, setRecessiveFather] = useState('');
  const { setParentsAlelo, setCaracteristica, resetContext } = useContext(CaracteristicaContext);
  const [alelos1, setAlelos1] = useState([]);
  const [alelos2, setAlelos2] = useState([]);

  const allCharacteristicsFilled = dominantMother && recessiveMother && dominantFather && recessiveFather;

  const handleSelectChange = (index, value) => {
    setParent1(prev => {
      const newParent1 = [...prev];
      newParent1[index] = value;
      return newParent1;
    });
  };

  const handleSelectChange2 = (index, value) => {
    setParent2(prev => {
      const newParent2 = [...prev];
      newParent2[index] = value;
      return newParent2;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newparent1 = parent1.join('');
    const newparent2 = parent2.join('');

    if (newparent1 && newparent2) {
      setParentsAlelo([newparent1.split(''), newparent2.split('')]);
    }

    if (dominantMother && recessiveMother && dominantFather && recessiveFather) {
      setCaracteristica([dominantMother, recessiveMother, dominantFather, recessiveFather]);
    }
  };

  const handleReset = () => {
    setParent1(['', '', '', '']);
    setParent2(['', '', '', '']);
    setDominantMother('');
    setRecessiveMother('');
    setDominantFather('');
    setRecessiveFather('');
    setAlelos1([]);
    setAlelos2([]);
    resetContext();
  };

  useEffect(() => {
    if (allCharacteristicsFilled) {
      const createAleloOptions = (dominant, recessive) => [
        { value: dominant.charAt(0).toUpperCase(), label: `${dominant.charAt(0).toUpperCase()} (${dominant})`, fullname: dominant },
        { value: recessive.charAt(0).toLowerCase(), label: `${recessive.charAt(0).toLowerCase()} (${recessive})`, fullname: recessive }
      ];

      setAlelos1(createAleloOptions(dominantMother, recessiveMother));
      setAlelos2(createAleloOptions(dominantFather, recessiveFather));
    }
  }, [dominantMother, recessiveMother, dominantFather, recessiveFather, allCharacteristicsFilled]);

  const containerProps = useBreakpointValue({
    base: { direction: 'column', p: '2' },
    sm: { direction: 'column', p: '4' },
    md: { direction: 'row', p: '6' },
    lg: { direction: 'row', p: '8' }
  });

  const boxProps = useBreakpointValue({
    base: { maxW: 'full', p: '2' },
    sm: { maxW: '100%', p: '4' },
    md: { maxW: '500px', p: '6' }
  });

  return (
    <form onSubmit={handleSubmit}>
      <MotionFlex
        {...containerProps}
        align="center"
        direction="column"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex direction="row" wrap="wrap" justify="center" gap="4">
          <MotionFlex
            direction="column"
            align="center"
            color="white"
            bg="#0f4264"
            backdropFilter="blur(10px)"
            borderRadius="15px"
            {...boxProps}
            mb="4"
            boxShadow="4px 10px 10px rgba(0, 0, 0, 0.6)"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MotionText fontSize={{ base: 'xl', sm: '2xl' }} mb="4">
              Características da Mãe
            </MotionText>
            
            <Box padding="4" maxW="full" mb="4">
              <Text mb="2">Característica Dominante da Mãe</Text>
              <MotionInput
                placeholder="Exemplo: Alto"
                value={dominantMother}
                color="white"
                _placeholder={{ color: "white" }}
                onChange={(e) => setDominantMother(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Box>
            
            <Box padding="4" maxW="full">
              <Text mb="2">Característica Recessiva da Mãe</Text>
              <MotionInput
                placeholder="Exemplo: Baixo"
                value={recessiveMother}
                color="white"
                _placeholder={{ color: "white" }}
                onChange={(e) => setRecessiveMother(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Box>
          </MotionFlex>

          <MotionFlex
            direction="column"
            align="center"
            color="white"
            bg="#1c5e8a"
            backdropFilter="blur(10px)"
            borderRadius="15px"
            {...boxProps}
            mb="4"
            boxShadow="4px 10px 10px rgba(0, 0, 0, 0.6)"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MotionText fontSize={{ base: 'xl', sm: '2xl' }} mb="4">
              Características do Pai
            </MotionText>
            
            <Box padding="4" maxW="full" mb="4">
              <Text mb="2">Característica Dominante do Pai</Text>
              <MotionInput
                placeholder="Exemplo: Amarelo"
                value={dominantFather}
                color="white"
                _placeholder={{ color: "white" }}
                onChange={(e) => setDominantFather(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Box>
            
            <Box padding="4" maxW="full">
              <Text mb="2">Característica Recessiva do Pai</Text>
              <MotionInput
                placeholder="Exemplo: Verde"
                value={recessiveFather}
                color="white"
                _placeholder={{ color: "white" }}
                onChange={(e) => setRecessiveFather(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Box>
          </MotionFlex>
        </Flex>

        {allCharacteristicsFilled && (
          <MotionFlex
            direction="column"
            align="center"
            color="white"
            bg="#1c5e8a"
            backdropFilter="blur(10px)"
            borderRadius="15px"
            p="6"
            mb="4"
            width="100%"
            boxShadow="4px 10px 10px rgba(0, 0, 0, 0.6)"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MotionText fontSize={{ base: 'lg', sm: 'xl' }} mb="4">
              Alelos dos Pais
            </MotionText>
            <Flex direction="row" wrap="wrap" justify="center" gap="4">
              {[0, 1, 2, 3].map(index => (
                <Box key={index} padding="2" maxW="125px" flex="1">
                  <MotionSelect
                    bgColor="#fff"
                    color="#064669"
                    placeholder="Selecione o alelo"
                    value={parent2[index]}
                    onChange={(e) => handleSelectChange2(index, e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {alelos2.map(opcao => (
                      <option key={opcao.value} value={opcao.value}>
                        {opcao.label}
                      </option>
                    ))}
                  </MotionSelect>
                </Box>
              ))}
            </Flex>
            <Flex direction="row" wrap="wrap" justify="center" gap="4">
              {[0, 1, 2, 3].map(index => (
                <Box key={index} padding="2" maxW="125px" flex="1">
                  <MotionSelect
                    placeholder="Selecione o alelo"
                    value={parent1[index]}
                    bgColor="#fff"
                    color="#064669"
                    onChange={(e) => handleSelectChange(index, e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {alelos1.map(opcao => (
                      <option key={opcao.value} value={opcao.value}>
                        {opcao.label}
                      </option>
                    ))}
                  </MotionSelect>
                </Box>
              ))}
            </Flex>
            <Flex direction="row" wrap="wrap" justify="center" mt="4" gap="4">
              <MotionButton
                type="submit"
                variant="solid"
                colorScheme="teal"
                w={{ base: 'full', sm: 300 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Enviar
              </MotionButton>
              <MotionButton
                type="button"
                onClick={handleReset}
                w={{ base: 'full', sm: 300 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Resetar
              </MotionButton>
            </Flex>
          </MotionFlex>
        )}
      </MotionFlex>
    </form>
  );
};
