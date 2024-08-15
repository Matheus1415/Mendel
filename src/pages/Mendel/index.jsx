import { Box } from '@chakra-ui/react'
import { Biography } from "../../components/MendelPage/Biography";
import { Curiosities } from "../../components/MendelPage/Curiosities" 
import { CardSection } from "../../components/MendelPage/CardSection"
import cardsContentsObject from '../../data/cardsContent.json'

export function Mendel(){

    return(
            <Box>
                <Biography/>
                <Curiosities/>
                <CardSection objectJson={cardsContentsObject}/>
            </Box>
    )
}
