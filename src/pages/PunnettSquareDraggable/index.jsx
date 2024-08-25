import { Box, Flex } from "@chakra-ui/react"
import PunnettSquareDraggable from "../../components/Punnett/PunerDraggable"

export const PunnettSquareDraggablePage = () => {
    return(
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
                <Flex
                    border='4px'
                    borderColor='#ebebeb7e'                 
                    width="90%"
                    minH="800px"
                    bg="#0638443e" 
                    backdropFilter="blur(23px)" 
                    borderRadius="15px" 
                    p="4"
                    justify='center' 
                    align='center'         
                >
                    <PunnettSquareDraggable/>
                </Flex>
           </Flex>
        </Flex>
    )
}