import { Box, Heading, Text} from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';

export const Gene = () => {
    return (
<LayoutBaseModify
 isRowReverse
 backgroundImage="assets/bgFundamentos/bgGene.jpg"
>
  <Box 
    maxWidth='25rem' 
    mb='10rem'
  >
    <Heading variant='PrimaryTitle' textAlign='right'>DNA</Heading>
    <Text variant='Paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque neque esse facere fugit eligendi eos quaerat suscipit at recusandae, pariatur enim non vero asperiores id beatae et assumenda nostrum.</Text>
    <Text variant='Paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque neque esse facere fugit eligendi eos quaerat suscipit at recusandae, pariatur enim non vero asperiores id beatae et assumenda nostrum.</Text>
    <Heading variant='PrimaryTitle' textAlign='right'>RNA</Heading>
    <Text variant='Paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque neque esse facere fugit eligendi eos quaerat suscipit at recusandae, pariatur enim non vero asperiores id beatae et assumenda nostrum.</Text>
    <Text variant='Paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque neque esse facere fugit eligendi eos quaerat suscipit at recusandae, pariatur enim non vero asperiores id beatae et assumenda nostrum.</Text>
    <Heading variant='PrimaryTitle' textAlign='right'>GENE</Heading>
    <Text variant='Paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque neque esse facere fugit eligendi eos quaerat suscipit at recusandae, pariatur enim non vero asperiores id beatae et assumenda nostrum.</Text>
    <Text variant='Paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque neque esse facere fugit eligendi eos quaerat suscipit at recusandae, pariatur enim non vero asperiores id beatae et assumenda nostrum.</Text>
  </Box>
</LayoutBaseModify>
    )
}