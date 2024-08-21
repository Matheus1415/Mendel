import { Box, Input, Text, Button, Flex, Select, Grid, GridItem } from '@chakra-ui/react';
import React, { useState, useContext, useEffect } from 'react';
import { CaracteristicaContext } from '../../../contexts/CaracteristicaContext';

export const ParentInput = () => {
    const [parent1, setParent1] = useState(['', '', '', '']);
    const [parent2, setParent2] = useState(['', '', '', '']);
    const [caracteristicaDominante1, setCaracteristicaDominante1] = useState('');
    const [caracteristicaDominante2, setCaracteristicaDominante2] = useState('');
    const [caracteristicaResseciva1, setCaracteristicaResseciva1] = useState('');
    const [caracteristicaResseciva2, setCaracteristicaResseciva2] = useState('');
    const { setParentsAlelo, setCaracteristica } = useContext(CaracteristicaContext);
    const [alelos1, setAlelos1] = useState([
    ]);
    const [alelos2, setAlelos2] = useState([
    ]);
    // Função para atualizar as opções
    
    const handleSelectChange = (index, value) => {
        setParent1(prev => {
            const newParent1 = [...prev]; // Cria uma cópia do estado atual
            newParent1[index] = value; // Atualiza o valor no índice especificado
            return newParent1; // Retorna o novo estado
        });
    };
    const handleSelectChange2 = (index, value) => {
        setParent2(prev => {
            const newParent2 = [...prev]; // Cria uma cópia do estado atual
            newParent2[index] = value; // Atualiza o valor no índice especificado
            return newParent2; // Retorna o novo estado
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        // Verifica se parent1 e parent2 são strings válidas antes de dividir
        let newparent1 = parent1.join('')
        let newparent2 = parent2.join('')
        if (typeof newparent1 === 'string' && typeof newparent2 === 'string') {
            setParentsAlelo([newparent1.split(''), newparent2.split('')]); 
        } 

        if (typeof caracteristicaDominante1 === 'string' && typeof caracteristicaDominante2 === 'string') {
            setCaracteristica([caracteristicaDominante1, caracteristicaResseciva1,caracteristicaDominante2, caracteristicaResseciva2]); 
        } 
    };

    useEffect(() => {
        if (caracteristicaResseciva1 && caracteristicaDominante1 && caracteristicaResseciva2 && caracteristicaDominante2) {
            let primeiraLetra1 = caracteristicaResseciva1.charAt(0).toUpperCase()
            let segundaLetra1 = caracteristicaResseciva1.charAt(0).toLowerCase()
            setAlelos1([{ value: primeiraLetra1, label: `${primeiraLetra1} (${caracteristicaDominante1})`, fullname: caracteristicaDominante1},
                { value: segundaLetra1, label: `${segundaLetra1} (${caracteristicaResseciva1})`, fullname: caracteristicaResseciva1}
            ])
            let primeiraLetra2 = caracteristicaResseciva2.charAt(0).toUpperCase()
            let segundaLetra2 = caracteristicaResseciva2.charAt(0).toLowerCase()
            setAlelos2([{ value: primeiraLetra2, label: `${primeiraLetra2} (${caracteristicaDominante2})`, fullname: caracteristicaDominante2},
                { value: segundaLetra2, label: `${segundaLetra2} (${caracteristicaResseciva2})`, fullname: caracteristicaResseciva2}
            ])
        }
    },[caracteristicaResseciva1, caracteristicaDominante1, caracteristicaResseciva2, caracteristicaDominante2]);


    return (
        <form onSubmit={handleSubmit}>
            <Flex direction="column" justify="center" align="center" maxW="100%" color="Second" justifyContent="center">
                <Flex justify="center" align="center" color="white">
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">1 Caracteristica Dominante</Text>
                        <Input
                            placeholder='Alto'
                            value={caracteristicaDominante1}
                             color="white"
                            onChange={(e) => setCaracteristicaDominante1(e.target.value)}
                        />
                    </Box>
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">2 Caracteristica Dominante</Text>
                        <Input
                            placeholder='Amarelo'
                            value={caracteristicaDominante2}
                             color="white"
                            onChange={(e) => setCaracteristicaDominante2(e.target.value)}
                        />
                    </Box>
                </Flex>
                <Flex justify="center" align="center" color="white">
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">1 Caracteristica Recessiva</Text>
                        <Input
                            placeholder='Baixo'
                            value={caracteristicaResseciva1}
                             color="white"
                            onChange={(e) => setCaracteristicaResseciva1(e.target.value)}
                        />
                    </Box>
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">2 Caracteristica Recessiva</Text>
                        <Input
                            placeholder='Verde'
                            value={caracteristicaResseciva2}
                             color="white"
                            onChange={(e) => setCaracteristicaResseciva2(e.target.value)}
                        />
                    </Box>
                </Flex>
                <Flex justify="center" align="center" color="white">
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">Alelo da Mãe</Text>
                        <Input
                            placeholder='Coloque o alelo da mãe'
                            value={parent1.join('')}
                             color="white"
                            
                        />
                    </Box>
                    <Box padding="10px" maxW="500px">
                        <Text variant="p">Alelo do Pai</Text>
                        <Input
                            placeholder='Coloque o alelo do pai'
                            value={parent2.join('')}
                             color="white"
                        />
                    </Box>
                </Flex>
                <Text variant="p"  color="white" align="left">Alelo da Mãe</Text>     
                <Flex justify="center" align="center">
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' value={parent1[0]}  color="gray" onChange={(e) => handleSelectChange(0, e.target.value)}>
                        {alelos1.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                        ))}
                        </Select>
                    </Box>
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' className="alelo1"  color="gray" value={parent1[1]} onChange={(e) => handleSelectChange(1, e.target.value)}>
                            {alelos1.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                            ))}
                        </Select>
                    </Box>
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' className="alelo2"  color="gray" value={parent1[2]} onChange={(e) => handleSelectChange(2, e.target.value)}>
                        {alelos2.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                        ))}
                        </Select>
                    </Box>
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' className="alelo2" color="gray" value={parent1[3]} onChange={(e) => handleSelectChange(3, e.target.value)}>
                        {alelos2.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                        ))}
                        </Select>
                    </Box>
                </Flex>
                <Text variant="p"  color="white" align="left">Alelo do Pai</Text>     
                <Flex justify="center" align="center">
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' value={parent2[0]}  color="gray" onChange={(e) => handleSelectChange2(0, e.target.value)}>
                        {alelos1.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                        ))}
                        </Select>
                    </Box>
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' className="alelo1"  color="gray" value={parent2[1]} onChange={(e) => handleSelectChange2(1, e.target.value)}>
                            {alelos1.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                            ))}
                        </Select>
                    </Box>
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' className="alelo2"  color="gray" value={parent2[2]} onChange={(e) => handleSelectChange2(2, e.target.value)}>
                        {alelos2.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                        ))}
                        </Select>
                    </Box>
                    <Box padding="10px" maxW="125px">
                        <Select placeholder='Select option' className="alelo2" color="gray" value={parent2[3]} onChange={(e) => handleSelectChange2(3, e.target.value)}>
                        {alelos2.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.label}
                            </option>
                        ))}
                        </Select>
                    </Box>
                </Flex>

                <Button 
                _hover={{
                    bg: 'Quarter'
                }}
                bg="Terciario" 
                color="white" 
                type="submit" 
                marginTop="10px" 
                marginBottom="40px" 
                w="100%"
                maxW="500px"
            >Generate Punnett Square</Button>

            </Flex>
        </form>
    );
};

