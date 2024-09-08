import { DoubtsCards } from "./DoubtsCards"
import doubts from "../../data/doubts.json"
import { Box } from "@chakra-ui/react"
export function DoubtsCardsSection(){

    function showCardsDoubts(){
        return doubts.map((value) => {
           return <DoubtsCards headerContent={value.headerContent} bodyContent={value.bodyContent}/>
        })
    }
    return(
        <>
            <Box >
                {showCardsDoubts()}
            </Box>
        </>
    )
}