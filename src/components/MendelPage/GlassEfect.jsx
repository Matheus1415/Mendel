import {Box} from '@chakra-ui/react'

export function GlassEfect(){
    return( 
        <Box backdropFilter='Blur(4px)' boxShadow="0px 4px 4px 0px #00000040 inset" w='83px' h='244px' borderRadius='15px' background='#0D606733 20%' cursor='pointer'
        zIndex={2}></Box>
    )

}