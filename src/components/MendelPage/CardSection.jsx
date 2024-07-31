import {Flex, Button, Box} from '@chakra-ui/react'
import {BlogCards} from './BlogCards'
import { useState } from 'react'

export function CardSection(){
    

    const cardsContents = [
        {
            title:"1 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora",
            link: "https://v2.chakra-ui.com/docs/components/link/usage"
        },
        {
            title:"2 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora",
            link: "https://v2.chakra-ui.com/docs/components/link/usage"
        },
        {
            title:"3 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora",
            link: "https://v2.chakra-ui.com/docs/components/link/usage"
        },
        {
            title:"4 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora",
            link: "https://v2.chakra-ui.com/docs/components/link/usage"
        },
        {
            title:"5 Your Title Here",
        
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi expedita facere, assumenda qui recusandae suscipit rerum. Quos, eos exercitationem unde iusto tempora",
            link: "https://v2.chakra-ui.com/docs/components/link/usage"
        },
    ]
 
const [index, setIndex] = useState(0)

function showCards(){
    return cardsContents.map((value) => (
        <BlogCards title={value.title} description={value.description} link={value.link} index={index}/>
    ))
}


function moveToLeft(){
    setIndex((prevIndex) => prevIndex === 0?cardsContents.length -1:prevIndex +1)
}

function moveToRight(){
    setIndex((prevIndex) => prevIndex < cardsContents.length?prevIndex +1:0)
}

return(
    <Flex direction='row'  h='127px' justifyContent='center' alignItems='center' gap='20px'>
        <Button onClick={moveToLeft}>left</Button>

        <Box display='flex' flexDirection='row' w='1066px' overflow='hidden' gap='20px'>            
        {showCards()}
        </Box>
        <Button onClick={moveToRight}>right</Button>
    </Flex>
)
}