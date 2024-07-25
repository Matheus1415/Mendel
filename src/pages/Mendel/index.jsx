import { Box } from '@chakra-ui/react'
import { Biography } from "../../components/MendelPage/Biography";
import { Curiosities } from "../../components/MendelPage/Curiosities" 
import { BlogCards } from "../../components/MendelPage/BlogCards"

export function Mendel(){
    return(
            <Box>
                <Biography />
                <Curiosities />
                <Box display='flex' gap='10px' bg='#02161F' justifyContent='center'>
                    <BlogCards 
                    title='TÍTULO DO BLOG 1'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'/>

                    <BlogCards 
                    title='TÍTULO DO BLOG 2'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'/>
                </Box>
            </Box>
    )
}
