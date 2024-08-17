import {Box, Grid, Heading, Text} from '@chakra-ui/react'
import ExamRh from '../../data/ExamRh.json'
export function ExamFactorRh(){


 function showContentBoxes(){
    return ExamRh.map((Value) => (
        <Box>
            <Heading color='#fff'>{Value.title}</Heading>
            <Text>{Value.firstParagraphy}</Text>
            <Text>{Value.secondParagrapy}</Text>
        </Box>
    ))
 }

    return(
        <Box>
            <Heading>EXAME DO FATOR RH</Heading>
            <Grid>
                {showContentBoxes()}
            </Grid>
        </Box>
    )
}