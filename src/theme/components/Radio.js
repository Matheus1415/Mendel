import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)
// see in documentation about anatomy
const baseStyle = definePartsStyle({
  // define the part you're going to style
  control: {
    borderColor: 'Terciario'
  },
  label: {
      textAlign: 'left', // from the anatomy of the Radio component, I style your label
      w: 'full'
  }
})
  
const radioTheme = defineMultiStyleConfig({ baseStyle })
export default radioTheme
