import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { HiChevronRight } from "react-icons/hi";
export function DoubtsCards({headerContent, bodyContent}){
    return(
        <>
            <Box width='858px' border='1px solid #19BFCD' borderRadius='15px' maxH='210px' minH='92px' margin="0 auto">
                <Flex justifyContent='space-between' width='100%' alignItems='center' height='92px'>
                        <Text color="#e2e2e2" marginLeft='20px'>Why is BRIX Templates the best Webflow agency out there?</Text>
                        <Button marginRight='20px' bg="#0D6067" _hover="#0D6067" _active="#0D6067" color='white'>
                            <HiChevronRight />
                        </Button>
                </Flex> 
            </Box>
        </>
    )
}