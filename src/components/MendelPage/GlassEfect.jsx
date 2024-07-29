import {Box, useBreakpointValue} from '@chakra-ui/react'

export function GlassEfect(){

    const sizeBarW = useBreakpointValue({base:'36px', sm:'36px', md:'77px', lg:'75px', xl:'83px'})
    const sizeBarH = useBreakpointValue({base:'108px', sm:'108px', md:'202px', lg:'202px', xl:'244px'})

    return( 
        <Box backdropFilter='Blur(4px)' boxShadow="0px 4px 4px 0px #00000040 inset" w={sizeBarW} h={sizeBarH} borderRadius='15px' background='#0D606733 20%' cursor='pointer'
        zIndex={2}></Box>
    )

}