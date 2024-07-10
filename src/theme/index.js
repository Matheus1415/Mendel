import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors.js';
import { FontSize } from './foundations/FontSize.js';
import { sizes } from './foundations/Sizes.js';
import { globalStyles } from './globalStyles.js';

const theme = extendTheme({
  // Configurações globais do tema
  colors,
  fontSizes: FontSize,
  sizes,
  styles: {
    global:{
      ...globalStyles
    }
  },

  //configuração dos componentes
  components: {
    Text: {
      baseStyle: {
        // Estilos base para o componente Text
      },
      variants: {
        // Variantes para o componente Text
      }
    },
    Flex: {
      
    }

  }
});

export default extendTheme(theme);
