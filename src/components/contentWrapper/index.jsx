import { Flex } from "@chakra-ui/react";


export function ContentsWrapper({children, stylesOverrides}){
    return(
        <Flex direction='column' p={[3,4,8]} maxW='950px' mx='auto' alignItems='flex-start' sx={stylesOverrides}>
            {children}
        </Flex>
    )
}