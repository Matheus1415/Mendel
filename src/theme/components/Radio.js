import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyleConfig } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const QuestionRadio = definePartsStyle({
  control: {
    borderRadius: '12px', 
    borderColor: '#19BFCD', 
  },
  label:{
    p:2,
    fontSize:20
  },
  container:{
    marginBottom:2
  }
})

export const Radio = defineStyleConfig({
  variants: {
    QuestionRadio,
  }
})
