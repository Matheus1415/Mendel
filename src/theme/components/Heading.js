import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const PrimaryTitle = defineStyle({
    mt: 7,
    mb: 3,
    fontSize: 40,
    fontWeight: 275,
    fontWeight: 'light',
    textTransform: 'uppercase',
    bg: 'linear-gradient(to right, #19BFCD 0%, #0D6067 100%)',
    bgClip: 'text'
})

export const Heading = defineStyleConfig({
    variants: {
        PrimaryTitle
    }
})
