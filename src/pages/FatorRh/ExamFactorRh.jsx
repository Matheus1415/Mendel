import {Box, Grid, Heading, Text} from '@chakra-ui/react'
import ExamRh from '../../data/ExamRh.json'
export function ExamFactorRh(){

    function styleTexts(indexOfArray, valueReturnTrue, valueReturnFalse){
        if(indexOfArray%2 === 0){
            return valueReturnTrue
        }else{
            return valueReturnFalse
        }
    }

 function showContentBoxes(){
    
    return ExamRh.map((Value, index) => (
        <Box marginBottom='100px' marginLeft={styleTexts(index, '0', '20px')} marginRight={styleTexts(index, '20px', '0')}>
            <Heading color='#fff' fontSize='30px' fontWeight='275' maxW='350px' marginBottom='40px' textAlign={styleTexts(index, 'left', 'right') }>{Value.title}</Heading>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='350px' textAlign='justify' marginBottom='40px'>{Value.firstParagraphy}</Text>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='350px' textAlign='justify'>{Value.secondParagrapy}</Text>
        </Box>
    ))
 }

    return(
        <Box>
            <Heading color='white' fontSize={40} textAlign='center' fontWeight={275} bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' marginTop='70px' marginBottom='100px'>EXAME DO FATOR RH</Heading>
            <Grid templateColumns={'repeat(2, 400px)'} margin='0 auto' width='800px'>
                {showContentBoxes()}
            </Grid>
        </Box>
    )
}