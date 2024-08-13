import { Box, Button, Flex } from "@chakra-ui/react"
import { VideoCard } from "./VideoCard"
import VideoCards from '../../data/VideoCards.json'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useState } from 'react'

export function VideoCardSection(){

    console.log(VideoCards.length)

    const [index, setIndex] = useState(0)

    function showVideoCardsArray(){
        return VideoCards.map((card) => (
            <VideoCard key={card.link} imageTumb={card.imagemUrl} titleVideo={card.title} link={card.link} descriptionVideo={card.description} index={index}/>
        ))}

    // function showVideoCardsArray(){
    //     return VideoCards.reduce()
    // }

    function moveToLeft(){
        return setIndex((indexArray) => (indexArray === 0 ? VideoCards.length -1: indexArray - 1))
    }

    function moveToRight(){
        return setIndex((indexArray) => (indexArray === VideoCards.length ? 0 : indexArray + 1))
    }

    return(
        <Flex justifyContent='center' alignItems='center' gap='20px' marginTop='20px'>
            <Button onClick={moveToLeft} bg='transparent' _hover={{}} _active={{}}>
                <HiChevronLeft size={37} color="#fff"/>
            </Button>
            <Box display='flex' width='940px' overflowX='hidden' gap='20px'>
                {showVideoCardsArray()}
            </Box>
            <Button onClick={moveToRight} bg='transparent' _hover={{}} _active={{}}>
                <HiChevronRight size={37} color="#fff"/>
            </Button>
        </Flex>
    )
}