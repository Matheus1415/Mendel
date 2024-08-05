import {Box, Image} from '@chakra-ui/react'
export function CardImage({urlImage}){
    return (
        <Box w={300} h={300} border='1px solid #000' borderRadius={15}>
            <Image src={urlImage} w='100%' h='100%' alt='imagem rh'/>
        </Box>
    )
}