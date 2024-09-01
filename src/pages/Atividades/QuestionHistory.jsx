import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export function QuestionHistory({response, questionType}){
    
    function renderQuestionHistory(){
        switch (questionType){
            case 'UniqueItem':
                return (
                    <ListItem mb='1rem' color='white' isTruncated mt='1.5rem'>
                        {response.questionStatment}
                        <List mt='0.75rem'>
                            {
                                response.isCorrect ? (
                                    <ListItem display='flex' alignItems='center' isTruncated>
                                        <ListIcon as={FaCheck} color='green.500' />
                                        {response.markedItem}
                                    </ListItem>
                                ) : (
                                    <>
                                        <ListItem display='flex' alignItems='center' isTruncated>
                                            <ListIcon as={FaXmark} color='red.500' />
                                            {response.markedItem}
                                        </ListItem>
                                        <ListItem display='flex' mt='0.25rem' alignItems='center' isTruncated>
                                            <ListIcon as={FaCheck} color='green.500' />
                                            {response.correctItem.content}
                                        </ListItem>
                                    </>
                                )
                            }
                        </List>
                    </ListItem>
                )

            case 'MultipleItems':
                
                const wronglyMarkedOptions = response.selectedOptions.filter( selectedOption => {
                    return !(response.correctQuestionOptions.some( correctOption => selectedOption == correctOption.content ))
                } );
                
                const wrongMarkedsJSX = wronglyMarkedOptions.map( wrongMarkedOption => {
                    return (
                        <ListItem display='flex' alignItems='center' isTruncated color='white'>
                            <ListIcon as={FaXmark} color='red.500' />
                            {wrongMarkedOption}
                        </ListItem>
                    )
                } )
                const correctMarkedsJSX = response.correctQuestionOptions.map( correctMarkedOption => {
                    return (
                        <ListItem display='flex' mt='0.25rem' alignItems='center' isTruncated>
                            <ListIcon as={FaCheck} color='green.500' />
                            {correctMarkedOption.content}
                        </ListItem>
                    )
                } )
                
                return (
                    <ListItem mb='1rem' color='white' isTruncated mt='1.5rem'>
                        {response.questionStatment}
                        <List mt='0.75rem'>
                            {wrongMarkedsJSX}
                            {correctMarkedsJSX}
                        </List>
                    </ListItem>
                )
            
            case 'InputQuestion':
                let inputsFieldJSX = [];

                for(let inputField in response.results){

                    inputsFieldJSX.push(
                        <ListItem display='flex' flexDirection="column">
                            <Flex direction='row' align='center'>
                                <ListIcon as={FaInfoCircle} color='Primary' />
                                {inputField}
                            </Flex>
                            <List marginLeft='1rem'>
                                {response.results[inputField].userEnteredCorrectValue ? (
                                    <>
                                        <ListItem display='flex' alignItems='center'>
                                            <ListIcon as={FaCheck} color='green.500' />
                                            {response.results[inputField].enteredValue}
                                        </ListItem>
                                    </>
                                ) : (
                                    <>
                                        <ListItem  display='flex' alignItems='center'>
                                            <ListIcon as={FaXmark} color='red.500' />
                                            {response.results[inputField].enteredValue}
                                        </ListItem>
                                        <ListItem  display='flex' alignItems='center'>
                                            <ListIcon as={FaCheck} color='green.500' />
                                            {response.results[inputField].correctValue}
                                        </ListItem>
                                    </>
                                ) }
                            </List>
                        </ListItem>
                    )
                    
                }
                
                
                return(
                    <ListItem mb='1rem' color='white' isTruncated mt='1.5rem'>
                        {response.questionStatment}
                        <List display='flex' flexDirection='column' marginLeft='0.5rem' gap='0.25rem'>
                            {inputsFieldJSX}
                        </List>
                    </ListItem>
                )
        }
    }

    return renderQuestionHistory();
}
