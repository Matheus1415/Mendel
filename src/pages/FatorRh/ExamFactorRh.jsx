import {Box, Grid, Heading, Text} from '@chakra-ui/react'
import ExamRh from '../../data/ExamRh.json'
export function ExamFactorRh(){

    function alingTexts(indexOfArray){
        if(indexOfArray%2 === 0){
            return 'left'
        }else{
            return 'right'
        }
    }

 function showContentBoxes(){
    
    return ExamRh.map((Value, index) => (
        <Box marginBottom='40px'>
            <Heading color='#fff' fontSize='30px' fontWeight='275' maxW='350px' marginBottom='' textAlign={alingTexts(index) }>{Value.title}</Heading>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='350px' textAlign='justify'>{Value.firstParagraphy}</Text>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='350px' textAlign='justify'>{Value.secondParagrapy}</Text>
        </Box>
    ))
 }

    return(
        <Box>
            <Heading color='white' fontSize={40} textAlign='center' fontWeight={275} bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' marginBottom='100px' marginTop='70px'>EXAME DO FATOR RH</Heading>
            <Grid templateColumns={'repeat(2, 370px)'} gap='100px' >
                {showContentBoxes()}
            </Grid>
        </Box>
    )
}