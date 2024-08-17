import { Box, Flex, Heading, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import {MainImage} from './MainImage'

export function BiographyGmendel() {

  const flexDirection = useBreakpointValue({base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'column-reverse', xl: 'row', '2xl':'row'})
  const marginTitle = useBreakpointValue({sm: '0px', md:'0px', lg:'20px'})
  const textSize = useBreakpointValue({base:'13px', sm:'17px', md:'17px', lg:'17px'}) 

  return (
  <Flex aling="Center" direction="column" bg='#02161F' w='100%' height='100%'>

    <Flex aling="center" direction={flexDirection} padding="24px 24px" margin='0 auto'>
      <Box marginTop={marginTitle}>
        
        <Heading top='111px' left='178px' fontWeight='275' lineHeight='60px' w='216px' h='60px' margin={['0 auto', '0 auto', '0 auto', '0 auto', '0']}>
          <Text fontSize='40px' bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text'>
            BIOGRAFIA
          </Text> 
        </Heading>

        <Text fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginTop='20px' marginBottom='10px'>
          <Highlight query={'professor, botânico e prelado agostiniano'} styles={{bgGradient: 'linear(to-r, #0D606780, #19BFCD80)', bgClip: 'text'}}>
              Nascido no Império Austro-Húngaro (hoje República Tcheca), foi um
              professor, botânico e prelado agostiniano, primeiro cientista a
              modelar o conceito de hereditariedade, complementando a Teoria de
              Charles Darwin.
            </Highlight>
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Nascido e criado em ambiente rural, teve sua
          capacidade acadêmica reconhecida pelo padre local, o que levou seus
          pais a o colocarem no colégio aos 11 anos. Seus estudos de Gymnasium
          (escola secundária) concluídos em 1840, Mendel entrou em um programa
          de dois anos em filosofia no Instituto Filosófico da Universidade de
          Olmütz (Olomouc, República Tcheca), onde se destacou em física e
          matemática, concluindo seus estudos em 1843.
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam facere at, atque velit tempore neque qui iste eveniet reiciendis repudiandae maiores id nobis culpa. Voluptas, ab. Odit, obcaecati reprehenderit!
        </Text>

        <Text fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique culpa eos modi minima accusantium vero ea dicta. Nisi inventore reiciendis illo voluptatem maiores eum cupiditate, saepe asperiores tenetur blanditiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique culpa eos modi minima accusantium vero ea dicta. Nisi inventore reiciendis illo voluptatem maiores eum cupiditate, saepe asperiores tenetur blanditiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur praesentium ratione voluptatum accusamus animi et. Consequatur quaerat eius commodi error mollitia.
        </Text>
      </Box>

{/* Page's image */}
        <Box 
        w={[240, 240, 500, 500, 552]}
        h={[346, 346, 590, 646, 800]}
        display='flex'
        alignSelf='center'
        justifySelf='center'
        marginLeft='5%'
        marginBottom='50px'
        >  
        <MainImage />
        </Box>
    </Flex>
  </Flex>
  )
}
