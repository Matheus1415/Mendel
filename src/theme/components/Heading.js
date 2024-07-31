import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const PrimaryTitle = defineStyle({
    mb: 5,
    fontSize: 40,
    fontWeight: 275,
    fontWeight: 'thin',
    textTransform: 'uppercase',
    bg: 'linear-gradient(to right, #19BFCD 0%, #0D6067 100%)', //Essas duas propriedades não funcionam se mandadas pela Variant para funcionar basta copiar-las e colar no Heading em questão
    bgClip: 'text',
    //falta deixar o heading em gradiente
})

export const Heading = defineStyleConfig({
    variants: {
        PrimaryTitle
    }
})
