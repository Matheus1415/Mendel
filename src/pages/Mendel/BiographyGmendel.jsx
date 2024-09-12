import { Box, Flex, Heading, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import {MainImage} from './MainImage'

export function BiographyGmendel() {

  const flexDirection = useBreakpointValue({base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'column-reverse', xl: 'row', '2xl':'row'})
  const marginTitle = useBreakpointValue({sm: '0px', md:'0px', lg:'20px'})
  const textSize = useBreakpointValue({base:'13px', sm:'17px', md:'17px', lg:'17px'}) 

  return (
  <Flex aling="Center" direction="column" w='100%' height='100%'>

    <Flex aling="center" direction={flexDirection} padding="24px 24px" margin='0 auto'>
      <Box marginTop={marginTitle}>
        
        <Heading fontSize='40px' fontWeight='275' lineHeight='60px' bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' w='218px' h='60px' margin={['0 auto', '0 auto', '0 auto', '0 auto', '0']}>
          BIOGRAFIA
        </Heading>

        <Text fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#EBEBEB' marginTop='20px' marginBottom='10px'>
          <Highlight query={'professor, botânico e prelado agostiniano'} styles={{bgGradient: 'linear(to-r, #0D606780, #19BFCD80)', bgClip: 'text'}}>
          Gregor Mendel, nascido em 20 de julho de 1822 no Império Austro-Húngaro (hoje República Tcheca), foi um monge agostiniano, professor e botânico que se tornou o pioneiro da genética moderna. Desde cedo, demonstrou interesse pela ciência e, após ingressar no mosteiro de São Tomás em Brno, dedicou-se aos estudos de matemática e ciências naturais. Sua formação incluiu estudos na Universidade de Viena, onde foi influenciado por renomados cientistas, como Christian Doppler, que contribuíram para seu rigor metodológico.
            </Highlight>
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#EBEBEB' marginBottom='10px'>
        De 1856 a 1863, Mendel realizou experimentos em um jardim do mosteiro, onde cultivava plantas de ervilha (Pisum sativum). Ele observou que certos traços eram passados de geração em geração de forma previsível, levando à formulação das Leis de Mendel da Hereditariedade.
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#EBEBEB' marginBottom='10px'>
        Essas leis incluem a Lei da Segregação, que explica como os pares de genes se separam durante a formação dos gametas, e a Lei da Segregação Independente, que descreve como diferentes pares de genes são transmitidos de maneira independente.
        
        </Text>

        <Text fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#EBEBEB' marginBottom='10px'>
          
        Apesar da importância de suas descobertas, Mendel foi amplamente ignorado durante sua vida. Seus artigos de 1866 não receberam a atenção devida, e somente no início do século XX suas descobertas foram reconhecidas. 
        
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#EBEBEB' marginBottom='10px'>
          
        Mendel continuou suas pesquisas como abade e faleceu em 1884 sem reconhecimento científico. Hoje, é celebrado como o "pai da genética", com suas leis formando a base da genética moderna.
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
