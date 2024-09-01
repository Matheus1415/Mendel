import { Box } from '@chakra-ui/react'
import { Biography } from "../../components/MendelPage/Biography";
import { Curiosities } from "../../components/MendelPage/Curiosities" 
import { BlogCards } from "../../components/MendelPage/BlogCards"
import { CardSection } from "../../components/MendelPage/CardSection"
import cardsContentsObject from '../../data/cardsContent.json'
import { LayoutQuiz } from '../../layout/LayoutQuiz';

import questionMock from '../../data/question-mock.json'

export function Mendel(){
    return(
            <Box>
                <CardSection objectJson={cardsContentsObject} />
                <LayoutQuiz questions={questionMock} title="titulo massa" />
            </Box>
    )
}
