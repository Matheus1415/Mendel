import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const PrimaryTitle = defineStyle({
    mb: 5,
    fontSize: 40,
    fontWeight: 200,
    //falta deixar o heading em gradiente
})

export const Heading = defineStyleConfig({
    variants: {
        PrimaryTitle
    }
})