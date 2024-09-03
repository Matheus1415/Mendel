import { Box, Flex, Heading, Image, Text, Tooltip} from '@chakra-ui/react';

export const Chromossomes = () => {
return (

<Box as='section' bgImage="/assets/bgFundamentos/bgChromo.jpg" bgRepeat='no-repeat' bgPosition="center" bgSize="cover">
  <Heading variant="PrimaryTitle" textAlign="center" mb="10rem" mt={{base:"2rem", lg:"5rem"}} pt="5rem">
  CROMOSSOMOS
  </Heading>
  <Flex
    textAlign='center'
    alignItems='center'
    justifyContent='space-around'
    direction={{base:'column-reverse', lg:'row'}}
  >
    <Box
      maxWidth={{base:'55rem', lg:'25rem'}}
      p={{base:"1rem"}}
    >
      <Text variant="Paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      <Text variant="Paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
            
      <Text variant="Paragraph">CROMOSSOMOS HOMÓLOGOS: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years.</Text>
      <Text variant="Paragraph">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
    </Box>

    <Box // BOX DE CROMOSSOMOS COM AREAS DE INTERACAO
      maxHeight='29rem' 
      maxWidth='30rem' 
      position='relative'
    >
      <Image src='/assets/cromossome-image.png' alt="Cromossomos" />
      <Tooltip label='Esta parte denomina-se Telômeno' hasArrow placement='top' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO SUPERIOR DO CROMOSSOM
          h='14%'
          w='12%'
          borderRadius='40%'
          position='absolute'
          top='2%'
          left='1%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Telômeno' hasArrow placement='top' maxW='fit-content' >
        <Box // BRAÇO DIREITO SUPERIOR DO CROMOSSOMO
          h='14%'
          w='13%'
          borderRadius='40%'
          position='absolute'
          top='3%'
          left='41%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Telômeno' hasArrow placement='bottom' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO INFERIOR DO CROMOSSOMO
          h='15.7%'
          w='15%'
          borderRadius='40%'
          position='absolute'
          top='82.5%'
          left='1.5%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Telômeno' hasArrow placement='bottom' maxW='fit-content'>
        <Box // BRAÇO DIREITO INFERIOR DO CROMOSSOMO
          h='16%'
          w='14%'
          borderRadius='40%'
          position='absolute'
          top='83%'
          left='39.3%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Centrômeno' hasArrow placement='right' maxW='fit-content'>
        <Box // CENTRÕMENO(O MEIO DO CROMOSSMO)
          h='14%'
          w='17%'
          borderRadius='50%'
          position='absolute'
          top='42.5%'
          left='18.5%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='left' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO SUPERIOR DO CROMOSSMO)
          h='32%'
          w='10.5%'
          top='15%'
          left='7%'
          position='absolute'
          transform='auto'
          rotate='-25deg'
          borderTopLeftRadius='15%'
          borderBottomLeftRadius='60%'
          borderBottomRightRadius='36%'
        ></Box>
        </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='right' maxW='fit-content'>
        <Box // BRAÇO DIREITO SUPERIOR DO CROMOSSMO)
          h='30%'
          w='10%'
          top='17.9%'
          left='38%'
          position='absolute'
          transform='auto'
          rotate='25deg'
          borderTopLeftRadius='15%'
          borderTopRightRadius='30%'
          borderBottomLeftRadius='20%'
          borderBottomRightRadius='60%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='left' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO INFERIOR DO CROMOSSMO)
          w='10.5%'
          h='30%'
          top='53%'
          left='8%'
          position='absolute'
          transform='auto'
          rotate='25deg'
          borderTopLeftRadius='35%'
          borderBottomRightRadius='25%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='right' maxW='fit-content'>
        <Box // BRAÇO DIREIRO INFERIOR DO CROMOSSMO)
          w='12%'
          h='32%'
          top='52%'
          left='36%'
          position='absolute'
          transform='auto'
          rotate='-22deg'
          borderTopLeftRadius='30%'
          borderTopRightRadius='45%'
          borderBottomLeftRadius='15%'
        ></Box>
      </Tooltip>

    </Box>
  </Flex>
</Box>

    )
}