import { Box, Button, Flex, Text, Collapse, useDisclosure } from "@chakra-ui/react"
import { HiChevronRight } from "react-icons/hi";
export function DoubtsCards({headerContent, bodyContent}){

        const { isOpen, isToggle } = useDisclosure()
    
    return(
        <>
            <Box width='858px' border='1px solid #19BFCD' borderRadius='15px' maxH='210px' minH='92px' margin="0 auto" transition="height 0.5s ease-in-out" marginBottom="15px">
                <Flex justifyContent='space-between' width='100%' alignItems='center' height='92px'>
                        <Text color="#e2e2e2" marginLeft='20px'>{headerContent}</Text>
                        <Button marginRight='20px' bg="#0D6067" _hover="#0D6067" _active="#0D6067" color='white' onClick={isToggle}>
                            <HiChevronRight />
                        </Button>
                </Flex> 
                <Collapse in={isOpen}>
                    <Box >
                        <Text color="#e2e2e2" maxW='700px' marginLeft='20px' marginBottom='10px'>
                            {bodyContent}
                        </Text>
                    </Box>
                </Collapse>
            </Box>
        </>
    )
}