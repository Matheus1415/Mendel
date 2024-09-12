import { Box, Button, Divider, Flex, Heading, OrderedList } from "@chakra-ui/react";
import { QuestionHistory } from "../QuestionHistory";
import { truncateDecimal } from "../../../config/truncateDecimal";
import { PreviousNextPageNavigator } from "../../../components/PreviousNextPageNavigator";

export function ResultsScene({resultState}){

    const questionAmount = resultState.questions.length;

    const questionsAnsweredAmountCorrectly = resultState.userResponses.filter( response => response.isCorrect ).length;
    const victoriesPercentage = truncateDecimal(((questionsAnsweredAmountCorrectly / questionAmount) * 10), 2);

    // Conseguindo dados das questões de items unícos
    const UniqueItemQuestionsAmount = resultState.userResponses.filter( response => {
        if (response.questionType === 'UniqueItem') {
            return true;
        }    
    } ).length;
    const UniqueItemQuestionsCorrectAmount = resultState.userResponses.filter( response => {
        if (response.questionType === 'UniqueItem') {
            return response.isCorrect
        }    
    } ).length;
    const UniqueItemVictoriesPercentage = (UniqueItemQuestionsCorrectAmount / UniqueItemQuestionsAmount).toFixed(2) * 100;

    // Conseguindo dados das questões de items multiplos
    const MultiplesItemQuestionsAmount = resultState.userResponses.filter( response => {
        if (response.questionType === 'MultipleItems') {
            return true;
        }    
    } ).length;
    const MultiplesItemQuestionsCorrectAmount = resultState.userResponses.filter( response => {
        if (response.questionType === 'MultipleItems') {
            return response.isCorrect
        }    
    } ).length;
    const MultiplesItemVictoriesPercentage = (MultiplesItemQuestionsCorrectAmount / MultiplesItemQuestionsAmount).toFixed(2) * 100;

    // Conseguindo dados das questões de input's
    const TypeableQuestionsAmount = resultState.userResponses.filter( response => {
        if (response.questionType === 'InputQuestion') {
            return true;
        }    
    } ).length;
    const TypeableQuestionsCorrectAmount = resultState.userResponses.filter( response => {
        if (response.questionType === 'InputQuestion') {
            return response.isCorrect
        }    
    } ).length;
    const TypeableVictoriesPercentage = (TypeableQuestionsCorrectAmount / TypeableQuestionsAmount).toFixed(2) * 100;


    console.log(resultState, questionAmount, questionsAnsweredAmountCorrectly, victoriesPercentage, TypeableVictoriesPercentage);

    return (
        <Flex height='750px' w='full' justifyContent='space-around' gap='0.75rem'>
            <Box flex='2.5' maxWidth='70%' overflowY='auto' decorar>
                <OrderedList color='white'>
                    {
                        resultState.userResponses.map( (response, index) => {
                            
                            return (<QuestionHistory
                                key={index}
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
                    <Heading variant='PrimaryTitle' textAlign='center' fontSize='2.75rem'>Nota: {victoriesPercentage.replace('.', ',')}</Heading>
                    <Heading variant='SecondTitle' textAlign='center' fontSize='2rem'>Não esqueça de ler as questões com calma!</Heading>
                </Flex>

                <Flex direction='column'>
                    {/* TODO: Implementar isso de maneira melhor */}
                    <Heading variant='SecondTitle' fontSize='2rem' >Múltiplas: {MultiplesItemVictoriesPercentage || 0}%</Heading>
                    <Heading variant='SecondTitle' fontSize='2rem' >Únicas: {UniqueItemVictoriesPercentage || 0}%</Heading>
                    <Heading variant='SecondTitle' fontSize='2rem' >Digitaveis: {TypeableVictoriesPercentage || 0}%</Heading>    
                </Flex>  

                <Flex justifyContent='space-between'>
                    <PreviousNextPageNavigator 
                        previousPageRoute="/"
                    />
                </Flex>
            </Box>
        </Flex>
    )
}
