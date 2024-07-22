import { 
    Heading,
    VStack,
    Box,
    Button,
    Text,
    Badge,
    Image,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    CheckboxGroup,
    Flex
 } from '@chakra-ui/react'
 import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitForm } from '../../config/submitForm.js'

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

    const zoomVariants = {
        //aqui vão as estilizações que devem ser feitas com base no state zoomedImage
        image: {
            initial: {scale: 1.0},
            zoomed: {transform: 'scale(1.2;1.2)', position:'fixed' , top:'50%',left:'50%',transform: 'translate(-50%,-50%)', zIndex: '10000'}
        },
        div: {
            initial: {opacity: 0, display: 'none'},
            zoomed: {
                //alou
            }
        }
    }    

    function showNextQuestion(){
        if (currentQuestion >= questions.length) {
            setShowResults(true)
            console.log('chegou no final', winningHistory);
            return;
        }
        console.log(`da questão ${currentQuestion} -> ${currentQuestion + 1} | \n Resultado:`,winningHistory);

        setTimeout( ()=> setCurrentQuestion(currentQuestion + 1), 150)
    }

    function toggleZoomImage(){
        setZoomedImage(!zoomedImage)
        console.log(`zoom ${zoomedImage} -> ${!zoomedImage}`);
    }

    //enviar essa função para o config
    function submitQuestion(e){
        e.preventDefault()
    
        const data = new FormData(e.currentTarget)
        console.log("---Valores do Form Data---");
        for (const [name,value] of data) {
            console.log(name, ":", value)
        }
        console.log( questions[currentQuestion - 1]);
        console.log("---/Valores do Form Data---");
    
    
        switch (questions[currentQuestion - 1].questionType) {
            case 'UniqueItem':    
                console.log('submit questão de item unico');
                let selectedOptionForUser = questions[currentQuestion - 1].options.find( option => {
                    return data.get('options') === option.content
                } )
    
                if(selectedOptionForUser.isCorrect === true){
                    console.log('unique certo');
                    setWinningHistory( [...winningHistory, {
                        Question: currentQuestion,
                        answeredCorrectly: true
                    }] )
                }else{
                    console.log('unique errado');
                    setWinningHistory( [...winningHistory, {
                        Question: currentQuestion,
                        answeredCorrectly: false
                    }] )
                }
                showNextQuestion()
                break;
    
            case 'MultipleItems':
                    
                console.log('submit questão de item Multiplos');
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
                    setWinningHistory([...winningHistory, {
                        Question: currentQuestion,
                        answeredCorrectly: true
                    }])
                }else{
                    setWinningHistory([...winningHistory, {
                        Question: currentQuestion,
                        answeredCorrectly: false
                    }])
                }
                showNextQuestion()
                break;
    
            case 'InputQuestion':
                console.log('submit questão de input');
                //lista booleanificada de valores que o usuario digitou correto
                const listOfCertainMarkedValues = [];
    
                for (const [name,value] of data) {
                    const currentInputField = questions[currentQuestion - 1].options.find( option => option.InputField === name )
    
                    const userEnteredCorrectValue = value === currentInputField.isCorrectValue
    
                    listOfCertainMarkedValues.push(userEnteredCorrectValue)
                }
    
                const userEnteredAllValuesCorrectly = listOfCertainMarkedValues.every( value => value === true )
                console.log('Usuario digitou todos valores corretamente: ',userEnteredAllValuesCorrectly);
    
                console.log('lista de valores booleanificados: ',listOfCertainMarkedValues);
                if(userEnteredAllValuesCorrectly){
                    console.log('input certo');
                    setWinningHistory( [...winningHistory, {
                        Question: currentQuestion,
                        answeredCorrectly: true
                    }] )
                }else{
                    console.log('input errado');
                    setWinningHistory( [...winningHistory, {
                        Question: currentQuestion,
                        answeredCorrectly: false
                    }] )
                }
                showNextQuestion()
                break;
        
            default:
    
                console.log('submit invalido');
                break;
            
        }
        
    
        //e.currentTarget.reset()
        // o formulario se alimpa
    }

    function resetQuiz(){
        setWinningHistory([])
        setCurrentQuestion(1)
        setShowResults(false)
    }

    function renderOptionsFromQuestionType(questionType, options) {
        
        switch (questionType) {
            case "UniqueItem":
                const radiosJsx = options.map( (option, index) => {
                        return(
                            <Radio w='full' key={index} value={option.content} name='options'>{option.content}</Radio>
                        )
                } )
                //key para o radio group
                // required
                return (
                    <RadioGroup name='options' display='flex' flexDirection='column' gap='24px' alignItems='flex-start' w='full'>
                        {radiosJsx}
                    </RadioGroup>
                )

            case "MultipleItems":
                // chackra injeta value nos checkboxes por default
                const checkboxesJsx = options.map( (option, index) => {
                    return <Checkbox w='full' key={index} name={option.content} >{option.content}</Checkbox>
                } )

                return (
                    <CheckboxGroup p='0.25rem' spacing='2px' w='full' alignItems='center'>
                        {checkboxesJsx}
                    </CheckboxGroup>
                )

                case "InputQuestion":
                    
                    return options.map( (option, index) => {
                        return(
                            <FormControl key={index} isRequired display='flex' alignItems='center' justifyContent='space-between'>
                                <FormLabel m='0' p='0.75rem' w='fit-content'>{option.InputField}:</FormLabel>
                                <Input type='text' required name={option.InputField} flexGrow='1' maxLength={option.isCorrectValue.length}/>
                            </FormControl>
                        )
                    } )
        
            default:
                return console.warn('Nâo foi possivel renderizar as Opções')
        }
    }

    
    let amountOfWins = winningHistory.filter( issueHistory => issueHistory.answeredCorrectly ).length
    let hitPercentage = ((amountOfWins / questions.length).toFixed(2)) * 100


    //erro na hora de passar a questão era imprimido dois tipos sendo um da questão anterior e outro da atual
    return(
        <Box mx='auto' backgroundColor='lightgray' minW='50%' maxW='80%' w='fit-content' borderRadius='xl' overflow='hidden'>
            {
                !showResults ? (
                    <form onSubmit={submitQuestion} style={{ padding: '2.5rem', position:'relative', margin: 0, backgroundColor:'transparent', borderRadius:0 }} >
                        <Badge position="absolute" top="1rem" right="1rem" py='0.125rem' px='0.5rem'>{`${currentQuestion}/${questions.length}`}</Badge>
                        <Heading size='md' mb='1.5rem'>{questions[currentQuestion - 1].question}</Heading>
                        
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
                                            //position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.4, backgroundColor: 'red'
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
                        
                            <VStack spacing='24px' alignItems='flex-start'>
                                {
                                    renderOptionsFromQuestionType(questions[currentQuestion - 1].questionType, questions[currentQuestion - 1].options)
                                }
                            </VStack>
                            <Button type='submit' position='block' display='flex' alignItems='center' gap='0.5rem' w='full' color='white' bg='teal.500' _hover={{bg: 'teal.600'}} >Enviar Respostas</Button>
                    </form>
                ) : (
                    <Box p='10' display='flex' flexDirection='column' alignItems='center' gap='0.75rem'>
                        <Heading textColor={hitPercentage < 40 ? 'red' : 'green'}>Pontuação: {amountOfWins} | ({hitPercentage})%</Heading>
                        <Text>Você acertou {amountOfWins} de {questions.length} questões.</Text>
                        <Flex direction='row' gap='0.25rem'>
                            <Button onClick={resetQuiz}>Reiniciar Questionario</Button>
                            <Button onClick={()=> console.log(winningHistory)}>Imprimir O history</Button>
                        </Flex>
                    </Box>
                )
            }
            
        </Box>
    )
}
