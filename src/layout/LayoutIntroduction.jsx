import {  Flex, Heading, Highlight,  } from "@chakra-ui/react";

export const LayoutIntroduction = ({query,children}) => {
    return(
        <Flex justify='center' align='center' minH='100vh' backgroundImage='assets/banner.jpg' bgRepeat='no-repeat' bgSize='cover'>
            <Heading variant='PrimaryTitle' color='Primary' textAlign='center' fontSize={[25, 25, 40]} opacity='0.3' fontWeight={30} letterSpacing='wider' >

                <Highlight query={query} styles={{fontSize: '3.5em', color: 'Primary', display: 'block', fontWeight:'thin', letterSpacing:'1px'}}>{children}</Highlight>
            </Heading>
        </Flex>
    )
}