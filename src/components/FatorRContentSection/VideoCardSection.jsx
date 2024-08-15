import { Box, Button, Flex } from "@chakra-ui/react";
import { VideoCard } from './VideoCard';
import VideoCards from '../../data/VideoCards.json';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from 'react';

export function VideoCardSection(){
    let endOfArray = (VideoCards.length * 320) - 960
    const [index, setIndex] = useState(0)

    function showVideoCardsArray(){
    return VideoCards.map((element) => (
        <VideoCard key={element.link} imageTumb={element.imagemUrl} titleVideo={element.title} link={element.link} descriptionVideo={element.description} index={index}/>))
    }

    function moveToLeft(){
        return setIndex((indexArray) => (indexArray === 0 ? endOfArray : indexArray - 320))
    }

    function moveToRight(){
        return setIndex((indexArray) => (indexArray === endOfArray ? 0 : indexArray + 320))
    }
    console.log(index)
    return(
        <Flex justifyContent='center' alignItems='center' gap='20px' marginTop='20px' marginBottom='20px'>
            <Button onClick={moveToLeft} bg='transparent' _hover={{}} _active={{}}>
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
