import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export function QuestionHistory({question, markedItem, markedItemIsCorrect, correctItem=""}){
    return(
        <ListItem mb='1rem'>
            {question}
            <List>
                {
                    markedItemIsCorrect ? (
                        <ListItem display='flex' alignItems='center'>
                            <ListIcon as={FaCheck} color='green.500' />
                            {markedItem}
                        </ListItem>
                    ) : (
                        <>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon as={FaCheck} color='green.500' />
                                {markedItem}
                            </ListItem>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon as={FaXmark} color='red.500' />
                                {correctItem}
                            </ListItem>
                        </>
                    )
                }
            </List>
        </ListItem>
    )
}