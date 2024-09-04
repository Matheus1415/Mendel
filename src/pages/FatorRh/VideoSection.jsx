import {Flex, Button, Box} from '@chakra-ui/react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useState } from 'react'
import { VideoCard } from './VideoCard'

export function VideoSection({objectJson}){
    
const [index, setIndex] = useState(0)

const endOfTheArray = (objectJson.length * 369) - 1107

function showCards(){

    return objectJson.map((value) => (
        <VideoCard key={value.title} title={value.title} description={value.description} link={value.link} indexTransition={index}/>
    ))
}

function moveToLeft(){
    setIndex((prevIndex) => prevIndex < 0? endOfTheArray :prevIndex - 369)
}

function moveToRight(){
    setIndex((prevIndex) => prevIndex >= endOfTheArray ? 0 : prevIndex + 369)
}

return(
    <Flex direction='row' justifyContent='center' alignItems='center' gap='20px'>
        <Button onClick={moveToLeft} bg='transparent' _hover={{}} _active={{}}>          
            <HiChevronLeft 
                size={37}
                color="#19BFCD80"/>
        </Button>
        <Box display='flex' flexDirection='row' w='1080px' overflow='hidden' gap='27px'>
            {showCards()}
        </Box>
        <Button onClick={moveToRight} bg='transparent' _hover={{}} _active={{}}>   
            <HiChevronRight 
                size={37}
                color="#19BFCD80"/>
        </Button>
    </Flex>
)
}