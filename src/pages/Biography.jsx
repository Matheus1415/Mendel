import { Box, Flex, Heading, Image, Text  } from "@chakra-ui/react";
import GregorMendelImage from '../images/Gregor_Mendel.jpg'

export function Biography() {
  return (
  <Flex aling="Center" direction="column" bg='#02161F'>

    <Flex aling="center" direction={["column-reverse", "row"]} justify={['start', 'space-between']} padding="24px 24px" marginTop={['10px', '20px']} id="Container">
      <Box>
        <Heading  marginLeft="5%" id="Title" top='111px' left='178pxs'  fontWeight='275' lineHeight='60px' w='216px' h='60px'>
          <Text fontSize='40px' bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text'>
            BIOGRAFIA
          </Text> 
        </Heading>
        <Text fontSize='17px' w = {[300, 600]} marginLeft="5%" textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
            Nascido no Império Austro-Húngaro (hoje República Tcheca), foi um
            professor, botânico e prelado agostiniano, primeiro cientista a
            modelar o conceito de hereditariedade, complementando a Teoria de
            Charles Darwin.
        </Text>

        <Text  fontSize='17px' w = {[300, 600]} marginLeft="5%" textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Nascido e criado em ambiente rural, teve sua
          capacidade acadêmica reconhecida pelo padre local, o que levou seus
          pais a o colocarem no colégio aos 11 anos. Seus estudos de Gymnasium
          (escola secundária) concluídos em 1840, Mendel entrou em um programa
          de dois anos em filosofia no Instituto Filosófico da Universidade de
          Olmütz (Olomouc, República Tcheca), onde se destacou em física e
          matemática, concluindo seus estudos em 1843.
        </Text>

        <Text  fontSize='17px' w = {[300, 600]} marginLeft="5%" textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam facere at, atque velit tempore neque qui iste eveniet reiciendis repudiandae maiores id nobis culpa. Voluptas, ab. Odit, obcaecati reprehenderit!
        </Text>

        <Text fontSize='17px' w = {[300, 600]} marginLeft="5%" textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique culpa eos modi minima accusantium vero ea dicta. Nisi inventore reiciendis illo voluptatem maiores eum cupiditate, saepe asperiores tenetur blanditiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>

        <Text  fontSize='17px' w = {[300, 600]} marginLeft="5%" textAlign='justify' aling="center" fontWeight='275' color='#ffffff' marginBottom='10px'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique culpa eos modi minima accusantium vero ea dicta. Nisi inventore reiciendis illo voluptatem maiores eum cupiditate, saepe asperiores tenetur blanditiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur praesentium ratione voluptatum accusamus animi et. Consequatur quaerat eius commodi error mollitia illum reprehenderit maiores possimus sunt, omnis eos, exercitationem quidem.
        </Text>
      </Box>

{/* Page's image */}
        <Box position="relative" marginRight="5%" id="Image_area" marginLeft="5%">
          <Image
            id="Image_mendel"
            src={GregorMendelImage}
            alt='Imagem do Mendel'
            w='546' 
            h='826'
            borderRadius='15px'
            cursor='pointer'/>

        </Box>
    </Flex>
  </Flex>
  )
}
