import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors.js';
import { FontSize } from './foundations/FontSize.js';
import { sizes } from './foundations/Sizes.js';
import { globalStyles } from './globalStyles.js';
import { Text } from './components/TextStyle.js';

const theme = extendTheme({
  // Configurações globais do tema
  colors,
  FontSize: FontSize,
  sizes,
  styles: {
    global:{
      ...globalStyles
    }
  },

  // Configuração dos componentes
  components: {
    Text,
  }
});

export default theme;
