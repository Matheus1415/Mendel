import {Flex} from '@chakra-ui/react'
import ImgsCards from '../../data/ImgsCards.json'
import {CardImage} from './CardImage'
export function CardImageSection(){

const showCardsArray = ImgsCards.map((cards, index) =>{
    return <CardImage key={index} urlImage={cards.urlImage}/>
})
    return(
        <Flex>
            {showCardsArray}
        </Flex>
    )
}