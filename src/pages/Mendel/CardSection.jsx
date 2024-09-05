import {Flex, Button, Box} from '@chakra-ui/react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import {BlogCards} from './BlogCards'
import { useState } from 'react'

export function CardSection({objectJson}){
const [index, setIndex] = useState(0)

const endOfTheArray = (objectJson.length * 543) - 1086

function showCards(){

    return objectJson.map((value) => (
        <BlogCards key={value.title} title={value.title} description={value.description} link={value.link} indexTransition={index}/>
    ))
}

function moveToLeft(){
    setIndex((prevIndex) => prevIndex === 0? endOfTheArray :prevIndex -543)
}

function moveToRight(){
    setIndex((prevIndex) => prevIndex === endOfTheArray ? 0 : prevIndex +543)
}

return(
    <Flex direction='row' justifyContent='center' alignItems='center' gap='20px'>
        <Button onClick={moveToLeft} bg='transparent' _hover={{}} _active={{}}>          
            <HiChevronLeft size={37}/>
        </Button>
        <Box display='flex' flexDirection='row' w='1066px' overflow='hidden' gap='20px'>
            {showCards()}
        </Box>
        <Button onClick={moveToRight} bg='transparent' _hover={{}} _active={{}}>   
            <HiChevronRight size={37}/>
        </Button>
    </Flex>
)
}
