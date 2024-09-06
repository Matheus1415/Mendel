import { Box, Button, Divider, Flex, Heading, OrderedList } from "@chakra-ui/react";
import { QuestionHistory } from "../QuestionHistory";

export function ResultsScene({resultState}){
    // 675 262
    return (
        <Flex height='750px' w='full' justifyContent='space-around' gap='0.75rem'>
            <Box flex='2.5' maxWidth='70%'>
                <OrderedList>
                {
                    resultState.userResponses.map( response => {
                        
                        return (<QuestionHistory
                            response={response}
                            questionType={response.questionType}
                        />)
                        
                    } )
                }
                </OrderedList>
            </Box>
            <Divider orientation="vertical" colorScheme='blue' />

            <Box flex='1' flexShrink='0' display='flex' flexDirection='column' justifyContent='space-between'>
                <Heading variant='SecondTitle' textAlign='center'>Porcentagem de Acertos</Heading>
                
                <Flex direction='column'>
                    <Heading variant='PrimaryTitle' textAlign='center' fontSize='2.75rem'>Nota: 7,0</Heading>
                    <Heading variant='SecondTitle' textAlign='center' fontSize='2rem'>Não esqueça de ler as questões com calma!</Heading>
                </Flex>

                <Flex direction='column'>
                    <Heading variant='SecondTitle' fontSize='2rem' >Múltiplas: 45%</Heading>
                    <Heading variant='SecondTitle' fontSize='2rem' >Únicas: 70%</Heading>
                    <Heading variant='SecondTitle' fontSize='2rem' >Digitaveis: 25%</Heading>    
                </Flex>  

                <Flex justifyContent='space-between'>
                    <Button variant='nextPage' >Voltar</Button> 
                    <Button variant='nextPage' >Atividade</Button>
                </Flex>
            </Box>
        </Flex>
    )
}
