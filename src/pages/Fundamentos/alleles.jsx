import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

export const Alleles = () => {
    const Walleles = useBreakpointValue({ base:"25rem", md:"50rem", lg:"67rem" })

return (
        
<Flex // SEÇÃO DE ALELOS
  as='section'
  direction='column'
  position='relative'
  justifyContent='space-evenly'
  alignItems='center'
  bgImage='/assets/bgFundamentos/bgAlleles.jpg'
  bgRepeat='no-repeat'
  bgSize='cover'
>   
  <Box // BOX TRANSPARENTE DE ALELOS
    marginTop='4rem'
    minWidth={Walleles}
    minHeight='36.8rem'
    bgColor='#06384430'
    backdropFilter='auto'
    backdropBlur='1rem'
    padding={{ base:"3.625rem", lg:'5.625rem'}}
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
    mb='4rem'
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
  )
}