import { Box } from '@chakra-ui/react'
import { Biography } from "./Biography";
import { Curiosities } from "./Curiosities" 
import { LayoutBaseModify } from "../../layout/LayoutBaseModify"
import { CardSection } from "../../components/MendelPage/CardSection"
import cardsContentsObject from '../../data/cardsContent.json'

export function Mendel(){
    return(
            <Box>
                <LayoutBaseModify>
                    <Biography/>
                </LayoutBaseModify>
                <Curiosities/>
                <CardSection objectJson={cardsContentsObject} />
            </Box>
    )
}
