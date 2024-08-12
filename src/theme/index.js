import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors.js';
import { FontSize } from './foundations/FontSize.js';
import { sizes } from './foundations/Sizes.js';
import { globalStyles } from './globalStyles.js';
import { Text } from './components/TextStyle.js';
import Radio from './components/Radio.js';
import Checkbox from './components/Checkbox.js';
import { Button } from './components/Button.js';
import { Heading } from './components/Heading.js';


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
    Radio,
    Checkbox,
    Button,
    Heading
  }
});

export default theme;
