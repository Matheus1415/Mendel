import {Flex, Button, Box} from '@chakra-ui/react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import {BlogCards} from './BlogCards'
import { useState } from 'react'

export function CardSection({objectJson}){
    
const cardsContents = objectJson
const [index, setIndex] = useState(0)

function showCards(){
    return cardsContents.map((value) => (
        <BlogCards title={value.title} description={value.description} link={value.link} index={index}/>
    ))
}


function moveToLeft(){
    setIndex((prevIndex) => prevIndex == 0?cardsContents.length :prevIndex -1)
}

function moveToRight(){
    setIndex((prevIndex) => prevIndex <= cardsContents.length?prevIndex +1:0)
}

return(
    <Flex direction='row' justifyContent='center' alignItems='center' gap='20px'>
        <Button onClick={moveToLeft} bg='transparent' _hover={{}} _active={{}}>          
            <HiChevronLeft 
                size={37}/>
        </Button>
        <Box display='flex' flexDirection='row' w='1066px' overflow='hidden' gap='20px'>
            {showCards()}
        </Box>
        <Button onClick={moveToRight} bg='transparent' _hover={{}} _active={{}}>   
            <HiChevronRight 
                size={37}/>
        </Button>
    </Flex>
)
}
