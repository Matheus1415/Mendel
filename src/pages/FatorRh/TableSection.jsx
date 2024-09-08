import { Box, Heading, Text, Image } from "@chakra-ui/react";
import ilustracao_tabela from "../../images/ilustracao_tabelaRH.png"

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
            <Box margin="0 auto" width="90%" marginTop="30px" h="140px" > 
                <Image
                    src={ilustracao_tabela}
                    width="100%"
                    height="100%"
                    maxH="140px"
                    maxW="1110px"
                    margin="0 auto"
                />
            </Box>
        </Box>
    );
}
