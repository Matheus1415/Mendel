import { Box, Flex, Heading, Text, Button} from '@chakra-ui/react';

export const GenoPhenoTypes = () => {
    return (
<Box as='section' bgImage="/assets/bgFundamentos/bgGenoPheno.jpg" bgRepeat='no-repeat' bgPosition="center" bgSize="cover">
  

  <Heading // BOX DE FENOTIPO E GENOTIPO
    variant="PrimaryTitle"
    textAlign="center"
    pt="6.75rem"
    mt="0"
    mb="4rem"
  >
  FENÓTIPO E GENÓTIPO
  </Heading>
  <Flex 
    justifyContent="space-around" 
    direction={{base:'column', lg:'row'}} 
    alignItems={{base:'center'}}
    pb='2rem'
  >

      <Box // BOX DO FENOTIPO
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="2.25rem"
        maxWidth="25.5rem"
        p={{base:"1rem"}}
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
        p={{base:"1rem"}}
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
        fontWeight='275' 
        top='-1rem'
        cursor='pointer'
        left={{base:"46%", lg:"73%"}} 
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
  )
}