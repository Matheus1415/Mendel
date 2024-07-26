import { Box } from '@chakra-ui/react'
import { Biography } from "../../components/MendelPage/Biography";
import { Curiosities } from "../../components/MendelPage/Curiosities" 
import { BlogCards } from "../../components/MendelPage/BlogCards"

export function Mendel(){
    return(
            <Box>
                <Biography />
                <Curiosities />
            </Box>
    )
}
