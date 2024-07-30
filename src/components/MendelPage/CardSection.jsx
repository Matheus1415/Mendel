import {Flex, Button, Box} from '@chakra-ui/react'
import {BlogCards} from './BlogCards'
import { useState } from 'react'

export function CardSection(){
    

    const cardsContents = [
        {
            title:"1 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora"
        },
        {
            title:"2 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora"
        },
        {
            title:"3 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora"
        },
        {
            title:"4 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora"
        },
        {
            title:"5 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora"
        },
    ]
 
const [cardsShow, setCardsShow] = useState(cardsContents)

function moveToLeft(){
    let newCardsShow = [...cardsShow]
    let firstItem = newCardsShow.shift()
    newCardsShow.push(firstItem)
    setCardsShow(newCardsShow)
}

function moveToRight(){
    let newCardsShow = [...cardsShow]
    let lastItem = newCardsShow.pop()
    newCardsShow.unshift(lastItem)
    setCardsShow(newCardsShow)
}

return(
    <Flex direction='row'  h='127px' justifyContent='center' alignItems='center' gap='20px'>
        <Button onClick={moveToLeft}>left</Button>

        <Box display='flex' flexDirection='row' w='1065px' overflow='hidden' gap='20px'>
            
        {cardsShow.map((value) => (
            <BlogCards title={value.title} description={value.description}/>
        ))}
        </Box>
        <Button onClick={moveToRight}>right</Button>
    </Flex>
)
}