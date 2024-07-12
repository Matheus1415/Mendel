import { 
    Heading,
    VStack,
    Box,
    Button,
    Badge,
    Image
 } from '@chakra-ui/react'
import { useState } from 'react';


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
    //history 
    function showNextQuestion(){
        setTimeout( ()=> setCurrentQuestion(currentQuestion + 1), 100)
    }

    function submitQuestion(e){
        //depende do tipo da questão
        e.preventDefault()
        let data = new FormData(e.currentTarget)

        let userResponse = data.get('options')
        let optionSelectedForUser = questions[currentQuestion - 1].options.find( option => option.content === userResponse )
        if(optionSelectedForUser.isTheCorrect){
            setScore(score+1)
        }

        e.currentTarget.reset()
        // o formulario se alimpa
    }
    function renderOptionsFromQuestionType(questionType, options) {
        console.log('o que chegou no render',questionType, options);
        
        switch (questionType) {
            case "UniqueItem":
                return options.map( (option, index) => {
                    console.log(option);
                        return(
                            <div key={index} style={{display:'flex', alignItems:'baseline',gap: "0.5rem"}}>
                                <input type='radio' style={{width:'fit-content'}} name='options' value={option.content} key={index}/>
                                <p style={{textAlign: 'left'}}>{option.content}</p>
                            </div>
                        )
                } )

            case "MultipleItems":
                return options.map( (option, index) => {
                    return(
                        <div key={index} style={{display:'flex', alignItems:'baseline',gap: "0.5rem"}}>
                            <input type='checkbox' style={{width:'fit-content'}} name='options' value={option.content} key={index}/>
                            <p style={{textAlign: 'left'}}>{option.content}</p>
                        </div>
                    )
                } )

                case "InputQuestion":
                    
                    return options.map( (option, index) => {
                        console.log(option);
                        return(
                            <div key={index} style={{display:'flex', alignItems:'baseline',gap: "0.5rem"}}>
                                <p>{option.InputField}</p>
                                <input type='text' placeholder={option.InputField} style={{width:'fit-content'}} name='options' value={option.content} key={index}/>
                            </div>
                        )
                    } )
        
            default:
                return "Deu ruim!!!"
        }
    }


    console.log(questions[currentQuestion - 1].questionType, questions[currentQuestion - 1]);
    //erro na hora de passar a questão era imprimido dois tipos sendo um da questão anterior e outro da atual
    return(
        <form onSubmit={submitQuestion} style={{marginInline: 'auto'}}>
            <Box p='10' position='relative'>
                <Badge position="absolute" top="1rem" right="1rem" py='0.125rem' px='0.5rem'>{`${currentQuestion}/${questions.length}`}</Badge>
                <Heading size='md' mb='1.5rem'>{questions[currentQuestion - 1].question}</Heading>
                
                {questions[currentQuestion - 1].image == undefined || (
                    <Image src={questions[currentQuestion - 1].image} fallbackSrc='https://via.placeholder.com/150' mx='auto' my='0.5rem' />
                ) }
                
                    <VStack spacing='24px' alignItems='flex-start'>
                        {
                            renderOptionsFromQuestionType(questions[currentQuestion - 1].questionType, questions[currentQuestion - 1].options)
                        }
                    </VStack>
            </Box>
            <Button type='submit' bg='teal.500' onClick={showNextQuestion}>Button</Button>
        </form>
    )
}
