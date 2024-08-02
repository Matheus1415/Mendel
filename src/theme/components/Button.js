import { defineStyle } from "@chakra-ui/react"

export const Button = defineStyle({
    variants: {
        readMore: {
            background: 'linear-gradient(to right, #19BFCD 0%, #0D6067 100%)',
            py: "0.15rem",
            minWidth: '3xs',
            textTransform: 'uppercase',
            fontWeight: 'thin',
            fontSize: 'lg',
            boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            borderRadius: 'lg',
            _hover: {
                backgroundColor: 'red'
            }

        }
    }
})
