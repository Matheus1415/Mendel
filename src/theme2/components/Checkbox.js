import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)
// see in documentation about anatomy
const baseStyle = definePartsStyle({
  // define the part you're going to style
  icon: {
    backgroundColor: 'Terciario',
    borderColor: 'Terciario'
  },
  control: {
    borderColor: 'Terciario'
  },
  label: {
      textAlign: 'left', // from the anatomy of the Radio component, I style your label
      w: 'full'
  }
})
  
const checkboxTheme = defineMultiStyleConfig({ baseStyle })
export default checkboxTheme