import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// const FlexVariants = defineStyle({
//     'contentWrapper': {
//         direction: 'column',
//         border: '1px solid red',
//         p: {
//             sm: 3,
//             md: 4,
//             lg: 8
//         },
//         maxW: '950px',
//         mx: 'auto',
//         alignItems: 'flex-start',
//         bg: 'red.500'
//     },
//     'caixaAzul':{
//         bgColor: 'red.500',
//         height: 400
//     }
// })

const Flex = defineStyleConfig({
    variants: {
        'contentWrapper': {
            direction: 'column',
            border: '1px solid red',
            p: {
                sm: 3,
                md: 4,
                lg: 8
            },
            maxW: '950px',
            mx: 'auto',
            alignItems: 'flex-start',
            bg: 'red.500'
        }
    }
})

export default Flex;