import { Box, Flex } from "@chakra-ui/react"
import { DoubtsCards } from "./DoubtsCards"
import { DoubtsCardsSection } from "./DoubtsCardsSection"
import doubts from "../../data/doubts.json"

function showCardsDoubts(){
    const Cards = doubts.map((value) => {
        <DoubtsCards headerContent={value.headerContent}/>
    })
    return Cards
}

export function Doubts(){
    return(
        <>
            <Flex 
            justify='center' 
            align='center' 
            bg="red"
            w="100vw"
            maxW="100%"
            minH="1000px"
            backgroundRepeat="repeat" 
            backgroundSize="cover" 
            backgroundPosition="center" 
            backgroundImage="/activity_background.png"
        >
           <Flex
                position="absolute"
                width="100%"
                top={0}
                left={0}
                minH="1000px"
                bg="#02161fc3"
                justify='center' 
                align='center'     
           >
                <Box
                    width="100%"
                    maxW="1080px"
                    minH="800px"
                    border="2px solid #EBEBEB30"
                    bg="#0638443e" 
                    backdropFilter="blur(23px)" 
                    borderRadius="15px" 
                    p="4"
                >
                    <DoubtsCardsSection/>
                </Box>
           </Flex>
        </Flex>
        </>
    )
}
