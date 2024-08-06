import {Flex} from '@chakra-ui/react'
import ImgsCards from '../../data/ImgsCards.json'
import {CardImage} from './CardImage'
export function CardImageSection(){

const showCardsArray = ImgsCards.map((card, index) =>{
    return <CardImage key={index} urlImage={card.urlImage}/>
})
    return(
        <Flex w='100%' margin='0 auto' marginTop='10px' gap='20px' justifyContent='center'>
            {showCardsArray}
        </Flex>
    )
}