import {Flex, useBreakpointValue} from '@chakra-ui/react'
import ImgsCards from '../../data/ImgsCards.json'
import {CardImage} from './CardImage'
export function CardImageSection(){

    const flexDirection = useBreakpointValue({base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row', '2xl':'row'})

const showCardsArray = ImgsCards.map((card, index) =>{
    return <CardImage key={index} urlImage={card.urlImage}/>
})
    return(
        <Flex direction={flexDirection} w='100%' margin='0 auto' marginTop='20px' gap='20px' justifyContent='center' alignItems='center'>
            {showCardsArray}
        </Flex>
    )
}