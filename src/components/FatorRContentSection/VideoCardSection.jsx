import { Box, Button, Flex } from "@chakra-ui/react"
import { VideoCard } from './VideoCard'
import VideoCards from '../../data/VideoCards.json'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useState } from 'react'

export function VideoCardSection(){

    const [index, setIndex] = useState(3)

    function showVideoCardsArray(){
        const arrayCards = []
        
        for(let i= 0; i < 3 ; i++){
            if (VideoCards[i]){
                arrayCards.push(<VideoCard key={VideoCards[i].link} imageTumb={VideoCards[i].imagemUrl} titleVideo={VideoCards[i].title} link={VideoCards[i].link} descriptionVideo={VideoCards[i].description}/>)
            }
        }
        return arrayCards
    }

    function moveToLeft(){
        return setIndex((indexArray) => (indexArray === 0 ? VideoCards.length -1: indexArray - 1))
    }

    function moveToRight(){
        
        VideoCards.shift()
        setIndex((indexArray) => (indexArray === VideoCards.length ? 3 : indexArray + 3))
        return setIndex
    }

    return(
        <Flex justifyContent='center' alignItems='center' gap='20px' marginTop='20px' marginBottom='20px'>
            <Button bg='transparent' _hover={{}} _active={{}}>
                <HiChevronLeft size={37} color="#fff"/>
            </Button>
            <Box display='flex' width='940px' overflow='hidden' gap='20px'>
                {showVideoCardsArray()}
            </Box>
            <Button onClick={moveToRight} bg='transparent' _hover={{}} _active={{}}>
                <HiChevronRight size={37} color="#fff"/>
            </Button>
        </Flex>
    )
}
