import { Box, Flex } from "@chakra-ui/react"

//arq do matheus

export const LayoutActivity = ({children}) => {
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
                <Box
                    width="90%"
                    minH="800px"
                    border="2px solid #EBEBEB30"
                    bg="#0638443e" 
                    backdropFilter="blur(23px)" 
                    borderRadius="15px" 
                    p="4"
                >
                    {children}
                </Box>
           </Flex>
        </Flex>
    )
}