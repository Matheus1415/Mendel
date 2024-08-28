import {  Flex, Heading, Highlight, useBreakpointValue,  } from "@chakra-ui/react";

export const LayoutIntroduction = ({query,children}) => {
    const textSize = useBreakpointValue({base:"18px", md:"30px", lg:"35px"})
    return(
        <Flex justify='center' align='center' minH='100vh' backgroundImage='assets/banner.jpg' bgRepeat='no-repeat' bgSize='cover'>
            <Heading variant='PrimaryTitle' color='Primary' textAlign='center' fontSize={textSize} opacity='0.3' fontWeight={30} letterSpacing='wider' >

                <Highlight query={query} styles={{fontSize: '3.5em', color: 'Primary', display: 'block', fontWeight:'thin', letterSpacing:'1px'}}>{children}</Highlight>
            </Heading>
        </Flex>
    )
}