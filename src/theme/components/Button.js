import { defineStyle } from "@chakra-ui/react"

export const Button = defineStyle({
    variants: {
        readMore: {
            background:'linear-gradient(to left, #007A87 0%, #01414C) 100%',
            py: "0.15rem",
            minWidth: '3xs',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: 'thin',
            fontSize: 'lg',
            boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            borderRadius: 'lg',
            '_hover': {
                background: 'linear-gradient(to right, #007A87 0%, #01414C) 100%',
                fontSize: '20px',
                transform: 'scale(1.05)'
            }

        },
        nextPage:{
            border:'1px solid' ,
            borderColor:'#EBEBEB',
            colorScheme:'#000100', 
            color:'white',
            borderRadius:'50px', 
            fontWeight:'275px', 
            _hover:{
                shadow: 'md',
                bgColor:"#EBEBEB",
                color:'#000100',
                transform: 'translateY(-5px)',
                transitionDuration: '0.2s',
                transitionTimingFunction: "ease-in-out",
            }
        }
    }
})
