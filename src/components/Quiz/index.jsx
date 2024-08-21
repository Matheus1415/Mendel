import { 
    Heading,
    VStack,
    Box,
    Button,
    Text,
    Badge,
    Image,
    Flex,
    useDisclosure
} from '@chakra-ui/react'
 import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitForm } from '../../config/submitForm.js'
import { Options } from './Options.jsx';
import { ResultsModal } from './ResultsModal.jsx';

/**
 * 
 * @param {object[]} questions - Array de questões
 * @param {string} questions[].question - Pergunta da questão
 * @param {object[]} question[].options - Opções da questão
 * @returns 
 */
export function Quiz({questions}){

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [winningHistory, setWinningHistory] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [zoomedImage, setZoomedImage] = useState(false)
    
    const {isOpen, onOpen, onClose} = useDisclosure()

    const zoomVariants = {
        //aqui vão as estilizações que devem ser feitas com base no state zoomedImage
        image: {
            initial: {scale: 1.0},
            zoomed: { position:'fixed' , top:'50%',left:'50%',transform: 'translate(-50%,-50%)', zIndex: '10000'}
        },
        div: {
            initial: {opacity: 0, display: 'none'},
            zoomed: {
                //estilos de quando a imagem fica em zoom;
            }
        }
    }    

    function showNextQuestion(){
        if (currentQuestion >= questions.length) {
            setShowResults(true)
            return;
        }
        setTimeout( ()=> setCurrentQuestion(currentQuestion + 1), 150)
    }

    function toggleZoomImage(){
        setZoomedImage(!zoomedImage)
    }

    //enviar essa função para o config
    function submitQuestion(e){
        e.preventDefault()
        const data = new FormData(e.currentTarget) 
        let isUserCorrect = false;
        switch (questions[currentQuestion - 1].questionType) {
            case 'UniqueItem':    
                let selectedOptionForUser = questions[currentQuestion - 1].options.find( option => {
                    return data.get('options') === option.content
                } )
    
                if(selectedOptionForUser.isCorrect === true){
                    isUserCorrect = true;
                }else{
                    isUserCorrect = false;
                }
                
                setWinningHistory( [...winningHistory, {
                    question: currentQuestion,
                    explanation: questions[ currentQuestion - 1 ].explanation,
                    answeredCorrectly: isUserCorrect
                }] );

                showNextQuestion()
                break;
    
            case 'MultipleItems':                   
                let selectedOptions = []
    
                for( let key of data.keys() ){
                    selectedOptions.push(key)
                }
    
                let correctQuestionOptions = questions[currentQuestion - 1].options.filter( option => {
                    return option.isCorrect
                })
    
                let isAllOptionsSelectedAreCorrect = selectedOptions.every( selectedOption => {
                    const anyCorrectOptionCorrespondsToTheSelectedItem = correctQuestionOptions.some( correctOption => correctOption.content === selectedOption )
                    return anyCorrectOptionCorrespondsToTheSelectedItem
                } )
    
                if( (isAllOptionsSelectedAreCorrect) && (selectedOptions.length === correctQuestionOptions.length) ){
                    isUserCorrect = true;
                }else{
                    isUserCorrect = false;
                }

                setWinningHistory( [...winningHistory, {
                    question: currentQuestion,
                    explanation: questions[ currentQuestion - 1 ].explanation,
                    answeredCorrectly: isUserCorrect
                }] );

                showNextQuestion()
                break;
    
            case 'InputQuestion':
                //lista booleanificada de valores que o usuario digitou correto
                const listOfCertainMarkedValues = [];
    
                for (const [name,value] of data) {
                    const currentInputField = questions[currentQuestion - 1].options.find( option => option.InputField === name )
    
                    const userEnteredCorrectValue = value === currentInputField.isCorrectValue
    
                    listOfCertainMarkedValues.push(userEnteredCorrectValue)
                }
    
                const userEnteredAllValuesCorrectly = listOfCertainMarkedValues.every( value => value === true )
                if(userEnteredAllValuesCorrectly){
                    isUserCorrect = true;
                }else{
                    isUserCorrect = false;
                }

                setWinningHistory( [...winningHistory, {
                    question: currentQuestion,
                    explanation: questions[ currentQuestion - 1 ].explanation,
                    answeredCorrectly: isUserCorrect
                }] );

                showNextQuestion()
                break;
        
            default:
                break;
            
        }
    }

    function resetQuiz(){
        setWinningHistory([])
        setCurrentQuestion(1)
        setShowResults(false)
    }

    
    let amountOfWins = winningHistory.filter( issueHistory => issueHistory.answeredCorrectly ).length
    let hitPercentage = ((amountOfWins / questions.length).toFixed(2)) * 100

    return(
        <Box mx='auto' backgroundColor='Fifth' minW={["90%","70%",'50%']} w='fit-content' borderRadius='xl' overflow='hidden' color='Primary'>
            {
                !showResults ? (
                    <Box as='form' p={['5', '10']}  onSubmit={submitQuestion} style={{position:'relative', margin: 0, backgroundColor:'transparent', borderRadius:0 }} >
                        <Badge position="absolute" top={['0.5rem',"1rem"]} right={['0.5rem',"1rem"]} py='0.125rem' px='0.5rem'>{`${currentQuestion}/${questions.length}`}</Badge>
                        <Heading size='md' mb='1.5rem' textAlign='center'>{questions[currentQuestion - 1].question}</Heading>
                        
                        {questions[currentQuestion - 1].image && (
                            <>
                                {zoomedImage && (
                                    <>
                                        <Box 
                                            as={motion.div} 
                                            variants={zoomVariants.div} 
                                            animate={zoomedImage ? 'zoomed' : 'initial' }
                                            position='fixed'
                                            top='0'
                                            left='0'
                                            right='0'
                                            bottom='0'
                                            opacity='0.8'
                                            backgroundColor='red'
                                            zIndex='10000'
                                        >
                                        </Box>
                                        <Image 
                                            src={questions[currentQuestion - 1].image}
                                            fallbackSrc='https://via.placeholder.com/150'
                                            borderRadius='xl'
                                            mx='auto'
                                            visibility={zoomedImage ? true : false}
                                        />
                                        
                                    </>
                                )}
                                <Image 
                                    src={questions[currentQuestion - 1].image} 
                                    onClick={toggleZoomImage}
                                    variants={zoomVariants.image}
                                    style={zoomedImage ? zoomVariants.image.zoomed : zoomVariants.image.initial }
                                    fallbackSrc='https://via.placeholder.com/150'
                                    borderRadius='xl'
                                    mx='auto'
                                />
                            </>
                        ) }
                        
                            <VStack spacing='24px' alignItems='flex-start' my='2'>
                                
                                {
                                    <Options 
                                        questionType={questions[currentQuestion - 1].questionType} 
                                        questionOptions={questions[currentQuestion - 1].options}
                                    />
                                }
                            </VStack>
                            <Button type='submit' position='block' display='flex' alignItems='center' gap='0.5rem' w='full' color='white' bgColor='Terciario' _hover={{opacity: 0.9}} >Enviar Respostas</Button>
                    </Box>
                ) : (
                    <Box p={['5', '10']} display='flex' flexDirection='column' alignItems='center' gap='0.75rem'>
                        <Heading textColor={hitPercentage < 40 ? 'red' : 'green'}>Pontuação: {amountOfWins} | ({hitPercentage})%</Heading>
                        <Text>Você acertou {amountOfWins} de {questions.length} questões.</Text>
                        <Flex direction='row' gap='0.25rem'>
                            <Button onClick={resetQuiz}>Reiniciar Quiz</Button>
                            <Button onClick={()=> {onOpen()}}>Ver resultados</Button>
                        </Flex>
                        <ResultsModal 
                            isModalOpenned={isOpen}
                            closeModalFunction={onClose}
                            winningHistory={winningHistory}
                        />
                    </Box>
                    
                )
            }
            
        </Box>
    )
}
