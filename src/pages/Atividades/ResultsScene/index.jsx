import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

export function ResultsScene({resultState}){
    console.log('res', resultState);
    
    return (
        <Flex height='750px' w='full' justifyContent='space-around'>
            asaa
            <Box>
                <Heading variant='PrimaryTitle'>asas</Heading>
            </Box>
            <Divider orientation="vertical" colorScheme='blue' />
            <Box>
                <Heading variant='PrimaryTitle'>oie</Heading>
            </Box>
        </Flex>
    )
}