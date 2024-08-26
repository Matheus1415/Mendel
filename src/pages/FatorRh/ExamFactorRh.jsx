import {Box, Heading, Text, useBreakpointValue} from '@chakra-ui/react'
import ExamRh from '../../data/ExamRh.json'
export function ExamFactorRh(){

    const displayForContentBox = useBreakpointValue({base: 'column', sm: 'column', md: 'flex', lg:'flex', xl:'flex'})
    const widthOfBoxeContent = useBreakpointValue({base: 300, sm: 370, md: 1110, lg: 1110, xl:1110})

    function styleTexts(indexOfArray, valueReturnTrue, valueReturnFalse){
        if(indexOfArray%2 === 0){
            return valueReturnTrue
        }else{
            return valueReturnFalse
        }
    }

 function showContentBoxes(){
    return ExamRh.map((Value, index) => (
        <Box marginBottom='100px' key={Value.title} textAlign='center' >
            <Heading color='#fff' fontSize='30px' fontWeight='275' maxW='350px' marginBottom='40px' textAlign={styleTexts(index, 'left', 'right') }>{Value.title}</Heading>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='350px' textAlign='justify' marginBottom='40px'>{Value.firstParagraphy}</Text>
            <Text fontSize='17px' fontWeight='275' color='#FFFFFF' maxW='350px' textAlign='justify'>{Value.secondParagrapy}</Text>
        </Box>
    ))
 }
    return(
        <Box>
            <Heading color='white' fontSize={40} textAlign='center' fontWeight={275} bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' marginTop='70px' marginBottom='100px'>EXAME DO FATOR RH</Heading>
            <Box display={displayForContentBox} margin='0 auto' width={widthOfBoxeContent} justifyContent='space-between'>
                <Box >
                    {showContentBoxes()[0]}
                    {showContentBoxes()[2]}
                </Box>
                <Box>
                    {showContentBoxes()[1]}
                    {showContentBoxes()[3]}
                </Box>
            </Box>
        </Box>
    )
}