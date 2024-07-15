import { textDecoration } from "@chakra-ui/react";
import { FontSize } from "../foundations/FontSize";

export const Text = {
    baseStyle: {
        fontSize:'xs'
    },
    variants: {
        // Variantes para o componente Text
        'h1':{
            fontSize:'6xl',
            fontWeight: "bold",
        },
        'h2':{
            fontSize:'5xl',
            fontWeight: "800",
        },
        'h3':{
            fontSize:'4xl',
            fontWeight: "700",
        },
        'h4':{
            fontSize:'3xl',
            fontWeight: "600",
        },
        'link':{
            fontSize:'lg',
            fontWeight: "light",
            textDecoration: 'underline',
        },
        'p':{
            fontSize:'lg',
            fontWeight: "light",
        },
    }
}