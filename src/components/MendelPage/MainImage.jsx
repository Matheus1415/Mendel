import GregorMendelImage from '../../images/Gregor_Mendel.jpg'
import { GlassEfect } from './GlassEfect'
import {Flex, Image} from '@chakra-ui/react'

export function MainImage(){
return(
    <Flex
        w={[240, 240, 510, 500, 552]}
        h={[346, 346, 590, 646, 800]}
        direction='row'
        justifyContent='end'
        alignItems='start'
        position='absolute'
        sx={{transition: ' opacity 1s ease'}}
        _hover={{opacity: 0}}>
        <GlassEfect/>
        <Image
            src={GregorMendelImage}
            alt='Imagem do Mendel'
            w={[246, 246, 510, 500, 510]}
            h={[346, 346, 590, 646, 780]}
            borderRadius='15px'
            cursor='pointer'
            marginRight='20px'
            marginTop='20px'
            position='absolute'
            alignSelf='center'
            justifySelf='center'
            
            /> 
    </Flex>
)
}
