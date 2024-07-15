import { Box, Flex, Heading, Highlight, Image, Text  } from "@chakra-ui/react";
import '../themes/biography.css'
import GregorMendelImage from '../images/Gregor_Mendel.jpg'
import GregorNotesImage from '../images/Anotacoes_Mendel.jpg'

export function Biography() {
  return (
  <Flex aling="Center" direction="column" maxWidth='1438'>

    <Flex aling="center" direction={["column-reverse", "row"]} justify={['start', 'space-between']} padding="24px 24px" marginTop={['10px', '20px']} id="Container">
      <Box>
        <Heading fontSize='40px' marginLeft="5%" id="Title" top='111px' left='178pxs'  fontWeight='275' lineHeight='60px'>
          <Highlight query='Biografia' styles={{color: "#00FF7F"}}>
            biografia
          </Highlight> 
        </Heading>
        <Text fontSize={['md', '2xl', '2xl', '2xl']} w = {[300, 600]} marginLeft="5%" textAlign='justify' aling="center" marginTop="0px" fontWeight='700' id="Bio"> 
          Nascido no Império Austro-Húngaro (hoje República Tcheca), foi um
          professor, botânico e prelado agostiniano, primeiro cientista a
          modelar o conceito de hereditariedade, complementando a Teoria de
          Charles Darwin. Nascido e criado em ambiente rural, teve sua
          capacidade acadêmica reconhecida pelo padre local, o que levou seus
          pais a o colocarem no colégio aos 11 anos. Seus estudos de Gymnasium
          (escola secundária) concluídos em 1840, Mendel entrou em um programa
          de dois anos em filosofia no Instituto Filosófico da Universidade de
          Olmütz (Olomouc, República Tcheca), onde se destacou em física e
          matemática, concluindo seus estudos em 1843.
        </Text>
      </Box>

{/* Page's images */}
        <Box position="relative" marginRight="5%" id="Image_area" marginLeft="5%">
          <Image
            id="Image_mendel"
            src={GregorMendelImage}
            alt='Imagem do Mendel'
            boxSize={[300, 500]} />

          <Image
            id="Image_anot"
            src={GregorNotesImage}
            alt='Imagem anotações'
            boxSize={[300, 500]}/>

        </Box>
    </Flex>
  </Flex>
  )
}
