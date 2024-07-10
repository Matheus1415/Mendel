import { 
    Heading,
    VStack,
    Box,
    Button,
    Badge
 } from '@chakra-ui/react'
import { useState } from 'react';

export function Quiz({questions}){
    console.log(questions);

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [score, setScore] = useState(0)

    function showNextQuestion(){
        setTimeout( ()=> setCurrentQuestion(currentQuestion + 1), 100)
    }

    function submitQuestion(e){
        e.preventDefault()
        let data = new FormData(e.currentTarget)

        let userResponse = data.get('options')
        let optionSelectedForUser = questions[currentQuestion - 1].options.find( option => option.content === userResponse )
        console.log(optionSelectedForUser);
        if(optionSelectedForUser.isTheCorrect){
            setScore(score+1)
        }
    }


    return(
        <form onSubmit={submitQuestion} >
            <Box p='10' position='relative'>
                <Badge position="absolute" top="1rem" right="1rem" py='0.125rem' px='0.5rem'>{`${score}/${questions.length}`}</Badge>
                <Heading size='md' mb='1.5rem'>{questions[currentQuestion - 1].question}</Heading>
                
                    <VStack spacing='24px' alignItems='flex-start'>
                        {
                            questions[currentQuestion - 1].options.map( (option, index) => {
                                return(
                                    <div key={index} style={{display:'flex', alignItems:'center',gap: "0.5rem"}}>
                                        <input type='radio' style={{width:'fit-content'}} name='options' value={option.content} key={index}/>
                                        <p>{option.content}</p>
                                    </div>
                                )
                            } )
                        }
                    </VStack>
            </Box>
            <Button type='submit' bg='teal.500' onClick={showNextQuestion}>Button</Button>
        </form>
    )
}
