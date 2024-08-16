import {Box, Image} from '@chakra-ui/react'
export function CardImage({urlImage}){
    const sizeImages =[240, 240, 300, 300, 300]

    return (
        <Box w={sizeImages} h={sizeImages} border='1px solid #000' borderRadius={15} _hover={{transform: 'scale(1.1)'}} transition='transform 0.3s'>
            <Image src={urlImage} w='100%' h='100%' alt='imagem rh' borderRadius={15} cursor='pointer'/>
        </Box>
    )
}