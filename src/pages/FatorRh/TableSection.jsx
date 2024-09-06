import { Box, Heading, Text, Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

export function TableSection() {
    return (
        <Box>
            <Heading 
                color='white' 
                fontSize={["24px", "32px", "40px"]} // Responsivo: tamanho do texto varia conforme o tamanho da tela
                textAlign='center' 
                fontWeight={275} 
                bgGradient='linear(to-r, #0D606780, #19BFCD80)' 
                bgClip='text' 
                marginBottom='40px' 
                marginTop='70px'
            >
                DIFERENÇA DE RH POSITIVO E NEGATIVO
            </Heading>
            <Box margin={['10px', '20px']} marginBottom='50px'>
                <Text 
                    margin='0 auto' 
                    fontWeight='275' 
                    color='#FFFFFF' 
                    textAlign='justify' 
                    fontSize={["14px", "16px", "17px"]} // Responsivo
                    maxW={["100%", "100%", 1110]} // Responsivo: largura máxima total para telas pequenas
                    marginBottom='20px'
                >
                    O fator Rh é uma proteína encontrada na superfície dos glóbulos vermelhos. Quando presente, o sangue é considerado Rh positivo (Rh+); quando ausente, é Rh negativo (Rh-). O fator Rh tem grande importância em transfusões de sangue e na gravidez, pois pode ocorrer incompatibilidade entre o sangue da mãe e do bebê, levando a complicações.
                </Text>
                <Text 
                    margin='0 auto' 
                    color='#FFFFFF' 
                    fontWeight='275' 
                    textAlign='justify' 
                    fontSize={["14px", "16px", "17px"]} // Responsivo
                    maxW={["100%", "100%", 1110]} // Responsivo
                >
                    Pessoas com sangue Rh positivo podem receber tanto sangue Rh positivo quanto negativo, mas pessoas com sangue Rh negativo só podem receber sangue Rh negativo, para evitar reações imunológicas. A incompatibilidade de Rh é uma condição séria, especialmente durante a gravidez, quando uma mãe Rh- pode produzir anticorpos contra o feto Rh+.
                </Text>
            </Box>
            <TableContainer maxW={["100%", "100%", 1110]} margin='0 auto' border="1px solid #fff" borderRadius="15px">
                <Table>
                    <Thead>
                        <Tr>
                            <Td textAlign="center" fontSize={["14px", "16px", "18px"]} color="#e2e2e2">Genótipo</Td>
                            <Td textAlign="center" fontSize={["14px", "16px", "18px"]} color="#e2e2e2">Fenótipo</Td>
                            <Td textAlign="center" fontSize={["14px", "16px", "18px"]} color="#e2e2e2">Hemácias</Td>
                            <Td textAlign="center" fontSize={["14px", "16px", "18px"]} color="#e2e2e2">Plasma</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">RR</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Rh positivo</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Com antígeno Rh</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">-</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Rr</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Rh positivo</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Com antígeno Rh</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">-</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">rr</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Rh negativo</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2">Sem antígeno Rh</Td>
                            <Td textAlign="center" fontSize={["12px", "14px", "16px"]} color="#e2e2e2"></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
