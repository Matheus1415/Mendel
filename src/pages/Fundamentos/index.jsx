import React from 'react';
import { Box, Flex, Heading, Image, Text, UnorderedList, ListItem, Button, Tooltip } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';


export const Fundamentos = () => {

return (

<>
<LayoutIntroduction query="FUNDAMENTOS" >
FUNDAMENTOS DA GENÉTICA
</LayoutIntroduction>

{/* Section for Cell Categories */}
<Box as='section' marginBottom='10rem'>
    
    <Heading 
      variant="PrimaryTitle"
      textAlign="center"
      mt="6.75rem"
      mb="4rem"
    >
        CATEGORIAS DA CÉLULAS
    </Heading>
    <Flex justifyContent="space-around"
    direction={{base:'column', lg:'row'}} 
    alignItems={{base:'center'}}
    >
        {/* Box for Diploid Cell */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2.25rem"
          maxWidth="25.5rem"
        >
            <Heading variant="SecondTitle">
                CÉLULA DIPLOIDE
            </Heading>
            <Image src='/assets/diploid-cell.png' alt="Célula Diploide" />
            <UnorderedList textAlign="justify" color="Primary" fontSize="17px" fontWeight="275">
                <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
            </UnorderedList>
        </Box>

        {/* Box for Haploid Cell */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2.25rem"
          maxWidth="25.5rem"
        >
            <Heading variant="SecondTitle">
                CÉLULA HAPLOIDE
            </Heading>
            <Image src='/assets/haploid-cell.png' alt="Célula Haploide" />
            <UnorderedList textAlign="justify" color='Primary' fontSize="17px" fontWeight="275">
                <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
            </UnorderedList>
        </Box>
    </Flex>
</Box>

{/* Section for Chromosomes */}
<Box as='section' mb='10rem'>
  <Heading variant="PrimaryTitle" textAlign="center" mb="5rem">
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
      marginTop='2rem'
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
      <Tooltip label='Esta parte se denomina Telõmeno' hasArrow placement='top' maxW='fit-content'>
      <Box // BRAÇO ESQUERDO SUPERIOR DO CROMOSSOMO
        bg='red.500'
        opacity='0.4'
        h='14%'
        w='12%'
        borderRadius='40%'
        position='absolute'
        top='2%'
        left='1%'
      ></Box>
      </Tooltip>
      <Tooltip label='Esta parte se denomina Telõmeno' hasArrow placement='top' maxW='fit-content' >
        <Box // BRAÇO DIREITO SUPERIOR DO CROMOSSOMO
          bg='red.500'
          opacity='0.4'
          h='14%'
          w='13%'
          borderRadius='40%'
          position='absolute'
          top='3%'
          left='41%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte se denomina Telõmeno' hasArrow placement='bottom' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO INFERIOR DO CROMOSSOMO
          bg='red.500'
          opacity='0.4'
          h='15.7%'
          w='15%'
          borderRadius='40%'
          position='absolute'
          top='82.5%'
          left='1.5%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte se denomina Telõmeno' hasArrow placement='bottom' maxW='fit-content'>
        <Box // BRAÇO DIREITO INFERIOR DO CROMOSSOMO
          bg='red.500'
          opacity='0.4'
          h='16%'
          w='14%'
          borderRadius='40%'
          position='absolute'
          top='83%'
          left='39.3%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte se denomina Centrõmeno' hasArrow placement='right' maxW='fit-content'>
      <Box // CENTRÕMENO(O MEIO DO CROMOSSMO)
          bg='red.500'
          opacity='0.4'
          h='14%'
          w='17%'
          borderRadius='50%'
          position='absolute'
          top='42.5%'
          left='18.5%'
        ></Box>
      </Tooltip>
    </Box>
  </Flex>
</Box>

<LayoutBaseModify
isRowReverse
>
  <Box 
    maxWidth='25rem' 
    marginLeft='auto'
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

<Flex // SEÇÃO DE ALELOS
  as='section'
  mb='6.6rem'
  direction='column'
  position='relative'
  justifyContent='space-evenly'
  alignItems='center'
  backgroundImage="url('../../public/assets/dna-background.jpg')"
  bgRepeat='no-repeat'
  bgSize='cover'
>
    <Box // COR DE FUNDO PARA COLOCAR UMA CRIAR DE FUNDO PARA O BACKGROUND
      position='absolute' 
      w='100%' 
      h="100%" 
      bgColor='Sixth' 
      opacity='85%'
    >
    </Box>
    
    <Box // BOX TRANSPARENTE DE ALELOS
      marginTop='4rem'
      minWidth={{base:'50rem', lg:'67rem'}}
      h='36.8rem'
      bgColor='#06384430'
      backdropFilter='auto'
      backdropBlur='1rem'
      padding='5.625rem'
      borderRadius='1.87rem'
    >
        <Box maxWidth='25rem'> {/* BOX DENTRO DA BOX TRANSPARENTE QUE CONTÉM O CONTEUDO */}
            <Heading variant='PrimaryTitle'>ALELOS</Heading>
            <Text variant='Paragraph' textAlign='justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
            <Text variant='Paragraph' textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi obcaecati illo deserunt eaque incidunt laboriosam consequatur voluptas iure necessitatibus aspernatur, optio tenetur! Voluptate ducimus quos aspernatur ipsa nam. Vel.</Text>
        </Box>
    </Box>

    <Box // BOX ZIGOTO E HETEROZIGOTO
      maxWidth='45rem' 
      position='relative'
    >
        <Heading 
          variant='SecondTitle' 
          fontSize={{base:'1.7rem', lg:'1.8rem'}} 
          textAlign='center'
        
        >
          DIFERENÇA DE HOMOZIGOTO E HETEROZIGOTO
        </Heading>
        <Flex 
          justifyContent='space-between' 
          alignItems={{base:'center'}} 
          direction={{base:'column', lg:'row'}} 
          gap='1rem' 
          marginBottom='6.6rem'
        >
        <Box>
            <Text variant='Paragraph' maxWidth='326px' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,. Contrary to popular belief, Lorem Ipsum is not simply random text</Text>
        </Box>
        <Box>
            <Text  variant='Paragraph' maxWidth='326px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,. Contrary to popular belief, Lorem Ipsum is not simply random text</Text>
        </Box>
        </Flex>
        
    </Box>
    </Flex>

<Box as='section'>
    

    <Heading // BOX DE FENOTIPO E GENOTIPO
      variant="PrimaryTitle"
      textAlign="center"
      mt="6.75rem"
      mb="4rem"
    >
    FENÓTIPO E GENÓTIPO
    </Heading>
    <Flex 
      justifyContent="space-around" 
      direction={{base:'column', lg:'row'}} 
      alignItems={{base:'center'}}
    >

        <Box // BOX DO FENOTIPO
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2.25rem"
          maxWidth="25.5rem"
        >
          <Heading color="Primary" variant="SecondTitle">
          FENÓTIPO
          </Heading>
          <Text variant='Paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> 
        </Box>

        {/* Box for Haploid Cell */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2.25rem"
          maxWidth="25.5rem"
        >
          <Heading color="Primary" variant="SecondTitle">
          GENÓTIPO
          </Heading>
          <Text variant='Paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </Box>
    </Flex>

        <Button 
          border='1px solid' 
          borderColor='#EBEBEB'
          colorScheme='#000100' 
          borderRadius='50px' 
          fontWeight='275px' 
          marginTop='3rem' 
          marginLeft='73%' 
          _hover={{
          shadow: 'md',
          bgColor:"#EBEBEB",
          color:'#000100',
          transform: 'translateX(10px)',
          transitionDuration: '0.2s',
          transitionTimingFunction: "ease-in-out"
          }}
        >Ir para a próxima página</Button>
    
</Box>

</>
);
};