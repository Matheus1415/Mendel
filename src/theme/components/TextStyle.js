import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const Paragraph = defineStyle({
    fontSize:'17px',
    fontWeight: "thin",
    textAlign: 'justify',
    color: 'Primary',
    color:'white',
    mb:'3.5'
})
const forContentsPage = defineStyle({
    fontSize:'lg',
    fontWeight: "thin",
    textAlign: 'justify',
    color: 'Primary',
    mb: '0.25rem'
})


export const Text = defineStyleConfig({
    variants: {
        Paragraph,
        forContentsPage
    }
})