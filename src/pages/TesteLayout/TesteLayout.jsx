import { Box, Flex } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
export const TesteLayout = () =>{
    return(
        <>
        <LayoutIntroduction query="GENÉTICA">INTRODUÇÃO SOBRE GENÉTICA</LayoutIntroduction>
        <LayoutBaseModify
            title='Biografia'
            titleStyle='SecondTitle'
            isRowReverse
            isImage
            isImageSrc="assets/estatuaMendel.png"
        >
           <Flex direction="column" color="red.500">
                <Box color="red.500" > 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tenetur modi magni ex sunt ducimus reprehenderit error atque veritatis dolor, quas ea. Nesciunt a at porro architecto nemo repellendus sapiente!
                </Box>
                <Box color="red.500">
                    nada
                </Box>
           </Flex>
        </LayoutBaseModify>
        </>
    )
}