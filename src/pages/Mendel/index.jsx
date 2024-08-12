import { Box } from '@chakra-ui/react'
import { Biography } from "../../components/MendelPage/Biography";
import { Curiosities } from "../../components/MendelPage/Curiosities" 
import { BlogCards } from "../../components/MendelPage/BlogCards"
import { CardSection } from "../../components/MendelPage/CardSection"
import cardsContentsObject from '../../data/cardsContent.json'

export function Mendel(){
    return(
            <Box>
                <Biography/>
                <Curiosities/>
                <CardSection objectJson={cardsContentsObject} />
            </Box>
    )
}
