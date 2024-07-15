import { 
    Heading,
    VStack,
    Box,
    Button,
    Badge,
    Image,
    FormControl,
    FormLabel,
    Input,
    IconButton,
    Icon,
    HStack,
    Checkbox,
    Radio,
    RadioGroup,
    Stack
 } from '@chakra-ui/react'
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoArrowForwardCircle } from 'react-icons/io5';


/**
 * 
 * @param {object[]} questions - Array de questões
 * @param {string} questions[].question - Pergunta da questão
 * @param {object[]} question[].options - Opções da questão
 * @returns 
 */
export function Quiz({questions}){

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [score, setScore] = useState(0)
    const [showResults, setShowResults] = useState(false)
    //history 
    function showNextQuestion(){
        setTimeout( ()=> setCurrentQuestion(currentQuestion + 1), 100)
    }

    function submitQuestion(e){
        e.preventDefault()
        // ToDo - depende do tipo da questão

        const data = new FormData(e.currentTarget)
        for (const [name,value] of data) {
            console.log(name, ":", value)
        }
        console.log( questions[currentQuestion - 1]);

        switch (questions[currentQuestion - 1].questionType) {
            case 'UniqueItem':
                let selectedOptionForUser = questions[currentQuestion - 1].options.find( option => {
                    return data.get('options') === option.content
                } )

                console.log('selected:',selectedOptionForUser);

                if(selectedOptionForUser.isCorrect === true){
                    alert('parabens')
                }else{
                    alert('errado')
                }
                showNextQuestion()
                break;

            case 'MultipleItems':
                console.log('chegou nos multiplos items');
                console.log(data.get('Sim'));
                let a = questions[currentQuestion - 1].options.map( option => {
                    return data.get(option.content)
                } )
                console.log(a);

                console.log('submit questão de item multiplos');
                showNextQuestion()
                break;

            case 'InputQuestion':
                console.log('submit questão de input');
                break;
        
            default:
                console.log('submit invalido');
                break;
            
        }


        //e.currentTarget.reset()
        // o formulario se alimpa
    }
    function renderOptionsFromQuestionType(questionType, options) {
        
        switch (questionType) {
            case "UniqueItem":
                let optionsJsx = options.map( (option, index) => {
                        return(
                            <Radio w='full' value={option.content} name='options'>{option.content}</Radio>
                        )
                } )
                //key para o radio group
                // required
                return (
                    <RadioGroup name='options' display='flex' flexDirection='column' gap='24px' alignItems='flex-start' w='full'>
                        {optionsJsx}
                    </RadioGroup>
                )

            case "MultipleItems":
                // chackra injeta value nos checkboxes por default
                return options.map( (option, index) => {
                    return(
                        <HStack p='0.25rem' spacing='2px' w='full' key={index}>
                            <Checkbox flex='1' value={option.content} name={option.content}>{option.content}</Checkbox>
                        </HStack>
                    )
                } )

                case "InputQuestion":
                    
                    return options.map( (option, index) => {
                        console.log(option.InputField);
                        return(
                            <FormControl key={index} isRequired display='flex' alignItems='center' justifyContent='space-between'>
                                <FormLabel m='0' p='0.75rem' w='fit-content'>{option.InputField}:</FormLabel>
                                <Input type='text' required name={option.InputField} flexGrow='1' maxLength={option.isCorrectValue.length}/>
                            </FormControl>
                        )
                    } )
        
            default:
                return "Deu ruim!!!"
        }
    }
    function zoomImage(e) {
        e.target.style.position = 'absolute'
        e.target.style.zIndex = '100'
        e.target.style.top = '0'
        e.target.style.bottom = '0'
        e.target.style.left = '0'
        e.target.style.right = '0'
        //pai dele é relativo, talvez tenha que usar State
    }

    //erro na hora de passar a questão era imprimido dois tipos sendo um da questão anterior e outro da atual
    return(
        <Box mx='auto' backgroundColor='lightgray' minW='50%' maxW='80%' w='fit-content'>
            <form onSubmit={submitQuestion} style={{ padding: '2.5rem', position:'relative' }} >
            

                <Badge position="absolute" top="1rem" right="1rem" py='0.125rem' px='0.5rem'>{`${currentQuestion}/${questions.length}`}</Badge>
                <Heading size='md' mb='1.5rem'>{questions[currentQuestion - 1].question}</Heading>
                
                {questions[currentQuestion - 1].image == undefined || (
                    <Image src={questions[currentQuestion - 1].image} fallbackSrc='https://via.placeholder.com/150' mx='auto' my='0.5rem' borderRadius='xl' transition='0.3s' _hover={{transform: 'scale(0.95)'}} />
                ) }
                
                    <VStack spacing='24px' alignItems='flex-start'>
                        {
                            renderOptionsFromQuestionType(questions[currentQuestion - 1].questionType, questions[currentQuestion - 1].options)
                        }
                    </VStack>
                    <Button type='submit' display='flex' alignItems='center' gap='0.5rem' w='full' color='white' bg='teal.500' _hover={{bg: 'teal.600'}} >Enviar Respostas</Button>
            </form>
            
        </Box>
    )
}
