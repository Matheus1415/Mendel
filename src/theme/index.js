import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors.js';
import { FontSize } from './foundations/FontSize.js';
import { Heights } from './foundations/Heights.js';

const theme = extendTheme({
  // Configurações globais do tema
  colors:colors,
  fontSizes: FontSize,
  height: Heights,

  //configuração dos componentes
  components: {
    Text: {
      baseStyle: {
        // Estilos base para o componente Text
      },
      variants: {
        // Variantes para o componente Text
      }
    }
  }
});

export default extendTheme(theme);
