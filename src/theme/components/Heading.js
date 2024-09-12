import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const PrimaryTitle = defineStyle({
    mt: 7,
    mb: 3,
    fontSize: 40,
    fontWeight: 275,
    fontWeight: 'light',
    textTransform: 'uppercase',
    bg: 'linear-gradient(to right, #19BFCD 0%, #137a83 100%)',
    bgClip: 'text'
})

const SecondTitle = defineStyle({
    mt: 7,
    mb: 3,
    fontSize: 40,
    fontWeight: 275,
    fontWeight: 'light',
    textTransform: 'uppercase',
    color: 'white'
})

const QuestionTile = defineStyle({
    fontSize: 20,
    fontWeight: 275,
    fontWeight: 'light',
    textTransform: 'uppercase',
    color: 'white',
    textAlign:"justify"
})

export const Heading = defineStyleConfig({
    variants: {
        PrimaryTitle,
        SecondTitle,
        QuestionTile
    }
})
