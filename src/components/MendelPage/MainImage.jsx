import GregorMendelImage from '../../images/Gregor_Mendel.jpg'
import GregorMendelAnotacoes from '../../images/Anotacoes_Mendel.jpg'
import {Flex, Image} from '@chakra-ui/react'
import {GlassEfect} from './GlassEfect'

export function MainImage(){
return(
    <Flex
    
        w='100%'
        h='100%'
        direction='row'
        justifyContent='end'
        alignItems='start'
        position='relative'
        marginTop='20px'>
            
        <GlassEfect/> 

        <Flex
        direction='row'
        justifyContent='end'
        alignItems='start'
        position='absolute'
        w='100%'
        h='100%'
        marginTop='20px'
        zIndex={1}>

            <Image
                src={GregorMendelImage}
                alt='Imagem do Mendel'
                w={[240, 240, 510, 500, 552]}
                h={[346, 346, 646, 646, 780]}
                borderRadius='15px'
                cursor='pointer'
                marginRight='20px'
                position='absolute'
                sx={{transition: ' opacity 0.8s ease'}}
                _hover={{opacity: 0}}/>

            <Image
                src={GregorMendelAnotacoes}
                alt='Anotações do Mendel'
                boxSize='100%'
                w={[240, 240, 510, 500, 552]}
                h={[346, 346, 646, 646, 780]}
                marginRight='20px'
                borderRadius='15px'
                cursor='pointer' />
        </Flex>
    </Flex>
)
}
