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
        
        <Heading fontSize='40px' fontWeight='275' lineHeight='60px' bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' w='216px' h='60px' margin={['0 auto', '0 auto', '0 auto', '0 auto', '0']}>
          BIOGRAFIA
        </Heading>

        <Text fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#EBEBEB' marginTop='20px' marginBottom='10px'>
          <Highlight query={'professor, botânico e prelado agostiniano'} styles={{bgGradient: 'linear(to-r, #0D606780, #19BFCD80)', bgClip: 'text'}}>
          Gregor Mendel nasceu em uma família com recursos limitados na Silésia de língua alemã e foi criado em um ambiente rural. Suas habilidades acadêmicas foram reconhecidas pelo padre local, que persuadiu seus pais a enviá-lo para a escola aos 11 anos. Após concluir o Gymnasium em 1840, Mendel entrou no Instituto Filosófico da Universidade de Olmütz (Olomouc, República Tcheca), onde se destacou em física e matemática, concluindo seus estudos em 1843.
            </Highlight>
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
        Seus primeiros anos longe de casa foram difíceis devido à falta de apoio financeiro familiar. Ele deu aulas particulares para sobreviver e sofreu de depressão grave duas vezes, precisando voltar para casa para se recuperar. Como único filho, era esperado que assumisse a fazenda da família, mas Mendel optou por entrar no mosteiro de Altbrünn como noviço da ordem agostiniana, adotando o nome de Gregor. 
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
        A mudança para o mosteiro levou Mendel a Brünn, onde encontrou um ambiente intelectual mais estimulante. Como padre, ele achou o trabalho paroquial angustiante e adoecer novamente. O abade Cyril Napp conseguiu para ele uma posição de professor substituto em Znaim (Znojmo, República Tcheca), onde teve sucesso. No entanto, em 1850, Mendel foi reprovado em um exame para certificação de professores e, como resultado, passou dois anos na Universidade de Viena para um novo programa de instrução científica. Em Viena, dedicou-se à física e à matemática, trabalhando com notáveis como Christian Doppler e Andreas von Ettinghausen, e estudou botânica com Franz Unger, um entusiasta da teoria celular e da visão desenvolvimentista da célula.
        </Text>

        {/* <Text fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
        O abade Cyril Napp encontrou para ele uma posição de professor substituto em Znaim ( Znojmo , República Tcheca), onde ele provou ser muito bem-sucedido. No entanto, em 1850 Mendel foi reprovado em um exame — introduzido por uma nova legislação para certificação de professores — e foi enviado para a Universidade de Viena por dois anos para se beneficiar de um novo programa de instrução científica.
        </Text>

        <Text  fontSize={textSize} w = {[300, 450, 550, 700, 600]} textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
        Assim como em Olmütz, Mendel dedicou seu tempo em Viena à física e à matemática, trabalhando com o físico austríaco Christian Doppler e o físico matemático Andreas von Ettinghausen. Ele também estudou a anatomia e a fisiologia das plantas e o uso do microscópio com o botânico Franz Unger, um entusiasta da teoria celular e um defensor da visão desenvolvimentista (pré-darwiniana) da célula.evolução da vida. Os escritos de Unger sobre o último fizeram dele um alvo de ataque pela imprensa católica romana de Viena pouco antes e durante o tempo de Mendel lá.
        </Text> */}

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
