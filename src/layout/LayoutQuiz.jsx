import { Box, Heading } from "@chakra-ui/react";
import { Quiz } from "../components/Quiz";

export function LayoutQuiz({questions, title}) {
    return(
        <Box w="80vw" mx="auto" py={16} position="relative" textAlign="center">
            <Heading variant="PrimaryTitle" mb={10}>{title}</Heading>
            <Quiz questions={questions}/>
        </Box>
    )
}