import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import ExamRh from '../../data/ExamRh.json';

export function ExamFactorRh() {

    const displayForContentBox = useBreakpointValue({ base: 'column', sm: 'column', md: 'flex', lg: 'flex', xl: 'flex' });

    function styleTexts(indexOfArray, valueReturnTrue, valueReturnFalse) {
        return indexOfArray % 2 === 0 ? valueReturnTrue : valueReturnFalse;
    }

    function showContentBoxes() {
        return ExamRh.map((Value, index) => (
            <Box marginBottom='100px' key={Value.title} textAlign='center'>
                <Heading 
                    color='#fff' 
                    fontSize='30px' 
                    fontWeight='275' 
                    marginBottom='40px' 
                    textAlign={styleTexts(index, 'left', 'right')}
                >
                    {Value.title}
                </Heading>
                <Text 
                    fontSize='17px' 
                    fontWeight='275' 
                    color='#FFFFFF' 
                    textAlign='justify' 
                    marginBottom='40px'
                >
                    {Value.firstParagraphy}
                </Text>
                <Text 
                    fontSize='17px' 
                    fontWeight='275' 
                    color='#FFFFFF' 
                    textAlign='justify'
                >
                    {Value.secondParagrapy}
                </Text>
            </Box>
        ));
    }

    return (
        <Box>
            <Heading 
                color='white' 
                fontSize={40} 
                textAlign='center' 
                fontWeight={275} 
                bgGradient='linear(to-r, #0D606780, #19BFCD80)' 
                bgClip='text' 
                marginTop='70px' 
                marginBottom='100px'
            >
                EXAME DO FATOR RH
            </Heading>
            <Box 
                display='flex'
                gap='3rem'
                // tirei o valor que vem do useBreakpoint para tornar as divs mais tornar o tamanho mais relativo
                // {displayForContentBox} 
                margin='0 auto' 
                width='1110px' 
                justifyContent='space-between'
            >
                <Box textAlign='center' flex='1' maxW='400px'>
                    {showContentBoxes()[0]}
                    {showContentBoxes()[2]}
                </Box>
                <Box flex='1' maxW='400px'>
                    {showContentBoxes()[1]}
                    {showContentBoxes()[3]}
                </Box>
            </Box>
        </Box>
    );
}
