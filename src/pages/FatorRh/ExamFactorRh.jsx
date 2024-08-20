import {Box, Grid, GridItem, Heading, Text} from '@chakra-ui/react'
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
        <Box marginBottom='100px' key={Value.title}>
            <Heading color='#fff' fontSize='30px' fontWeight='275' maxW='600px' marginBottom='40px' textAlign={styleTexts(index, 'left', 'right') }>{Value.title}</Heading>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='450px' textAlign='justify' marginBottom='40px'>{Value.firstParagraphy}</Text>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='450px' textAlign='justify'>{Value.secondParagrapy}</Text>
        </Box>
    ))
 }



    return(
        <Box>
            <Heading color='white' fontSize={40} textAlign='center' fontWeight={275} bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' marginTop='70px' marginBottom='100px'>EXAME DO FATOR RH</Heading>
            <Grid templateColumns={'repeat(2, 400px)'} margin='0 auto' width='1000px' gap='230px' bg='red'>
                <GridItem>
                {showContentBoxes()[0]}
                {showContentBoxes()[2]}
                </GridItem>
                <GridItem>
                {showContentBoxes()[1]}
                {showContentBoxes()[3]}
                </GridItem>
            </Grid>
        </Box>
    )
}