//a tabela tá tuda em maiusculo
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
  
  const [parent3, setParent3] = useState(['', '', '', '']);
  const [parent4, setParent4] = useState(['', '', '', '']);

  const [parent2, setParent2] = useState(['', '', '', '']);

  const [characteristicDominant1, setCharacteristicDominant1] = useState('');
  const [characteristicRecessive1, setCharacteristicRecessive1] = useState('');

  const [characteristicDominant2, setCharacteristicDominant2] = useState('');
  const [characteristicRecessive2, setCharacteristicRecessive2] = useState('');

  const { setParentsAlelo, setCaracteristica, resetContext } = useContext(CaracteristicaContext);

  const [alelos1, setAlelos1] = useState([]);
  const [alelos2, setAlelos2] = useState([]);


  const allCharacteristicsFilled = characteristicDominant2 && characteristicRecessive2 && characteristicDominant1 && characteristicRecessive1;

  const handleSelectChange1 = (index, value) => {
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

  const handleSelectChange3 = (index, value) => {
    setParent3(prev => {
      const newParent3 = [...prev];
      newParent3[index] = value;
      return newParent3;
    });
  };

  const handleSelectChange4 = (index, value) => {
    setParent4(prev => {
      const newParent4 = [...prev];
      newParent4[index] = value;
      return newParent4;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newparent1 = parent1.join('');
    const newparent2 = parent2.join('');
    const newparent3 = parent3.join('');
    const newparent4 = parent4.join('');

    const maternalAlleles = [...newparent1.split(''), ...newparent2.split('')]
    const partinalAlleles = [...newparent3.split(''), ...newparent4.split('')]

    console.log('data1:',maternalAlleles)
    console.log('data2:',partinalAlleles)

    if (newparent1 && newparent2) {
      setParentsAlelo([maternalAlleles,partinalAlleles]);
    }

    if (characteristicDominant2 && characteristicRecessive2 && characteristicDominant1 && characteristicRecessive1) {
      setCaracteristica([characteristicDominant2, characteristicRecessive2, characteristicDominant1, characteristicRecessive1]);
    }
  };

  const handleReset = () => {
    setParent1(['', '', '', '']);
    setParent2(['', '', '', '']);
    setParent3(['', '', '', '']);
    setParent4(['', '', '', '']);
    setCharacteristicDominant2('');
    setCharacteristicRecessive2('');
    setCharacteristicDominant1('');
    setCharacteristicRecessive1('');
    setAlelos1([]);
    setAlelos2([]);
    resetContext();
  };

  useEffect(() => {
    if (allCharacteristicsFilled) {
      const createAleloOptions = (dominant, recessive) => [
        { value: recessive.charAt(0).toUpperCase(), label: `${recessive.charAt(0).toUpperCase()} (${dominant})`, fullname: dominant },
        { value: recessive.charAt(0).toLowerCase(), label: `${recessive.charAt(0).toLowerCase()} (${recessive})`, fullname: recessive }
      ];

      setAlelos1(createAleloOptions(characteristicDominant2, characteristicRecessive2));
      setAlelos2(createAleloOptions(characteristicDominant1, characteristicRecessive1));
    }
  }, [characteristicDominant2, characteristicRecessive2, characteristicDominant1, characteristicRecessive1, allCharacteristicsFilled]);

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
              Característica 1
            </MotionText>
            
            <Box padding="4" maxW="full" mb="4">
              <Text mb="2">Alelo Dominante 1</Text>
              <MotionInput
                placeholder="Exemplo: Alto"
                value={characteristicDominant2}
                color="white"
                _placeholder={{ color: "white", opacity:0.75 }}
                onChange={(e) => setCharacteristicDominant2(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Box>
            
            <Box padding="4" maxW="full">
              <Text mb="2">Alelo Recessivo 1</Text>
              <MotionInput
                placeholder="Exemplo: Baixo"
                value={characteristicRecessive2}
                color="white"
                _placeholder={{ color: "white", opacity:0.75 }}
                onChange={(e) => setCharacteristicRecessive2(e.target.value)}
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
              Característica 2
            </MotionText>
            
            <Box padding="4" maxW="full" mb="4">
              <Text mb="2">Alelo Dominante 2</Text>
              <MotionInput
                placeholder="Exemplo: Amarelo"
                value={characteristicDominant1}
                color="white"
                _placeholder={{ color: "white", opacity:0.75 }}
                onChange={(e) => setCharacteristicDominant1(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Box>
            
            <Box padding="4" maxW="full">
              <Text mb="2">Alelo Recessivo 2</Text>
              <MotionInput
                placeholder="Exemplo: Verde"
                value={characteristicRecessive1}
                color="white"
                _placeholder={{ color: "white", opacity:0.75 }}
                onChange={(e) => setCharacteristicRecessive1(e.target.value)}
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
            <Flex direction="row" wrap="wrap" justify="center" gap="4" alignItems="center">
             Genótipo materno
              {[0, 1].map(index => (
                <Box key={index} padding="2" maxW="125px" flex="1">
                  <MotionSelect
                    bgColor="#fff"
                    color="#064669"
                    placeholder="Selecione o alelo"
                    value={parent1[index]}
                    onChange={(e) => handleSelectChange1(index, e.target.value)}
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
              {[0, 1].map(index => (
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
            <Flex direction="row" wrap="wrap" justify="center" gap="4" alignItems="center">
            Genótipo paterno
              {[0, 1].map(index => (
                <Box key={index} padding="2" maxW="125px" flex="1">
                <MotionSelect
                  bgColor="#fff"
                  color="#064669"
                  placeholder="Selecione o alelo"
                  value={parent3[index]}
                  onChange={(e) => handleSelectChange3(index, e.target.value)}
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
              {[0, 1].map(index => (
                <Box key={index} padding="2" maxW="125px" flex="1">
                  <MotionSelect
                    bgColor="#fff"
                    color="#064669"
                    placeholder="Selecione o alelo"
                    value={parent4[index]}
                    onChange={(e) => handleSelectChange4(index, e.target.value)}
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
