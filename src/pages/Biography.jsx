import { Flex, Heading, Highlight, Image, Text  } from "@chakra-ui/react";
import '../themes/biography.css'
import '../themes/response.css'
import GregorMendelImage from '../images/Gregor_Mendel.jpg'
import GregorNotesImage from '../images/Anotacoes_Mendel.jpg'
import { MdOpacity } from "react-icons/md";

export function Biography() {
  return (
  <Flex aling="Center" direction="column">

{/*Title*/}

    <Heading size='4xl' marginLeft="5%" id="Title">
      <Highlight query='Mendel' styles={{color: "#00FF7F"}}>
        Quem foi Mendel ?
      </Highlight> 
    </Heading>

{/* Pages's content */}

    <Flex aling="center" direction="Row" justify='space-between' padding="24px 24px" marginTop="20px" id="Container">
        <Text fontSize= '2xl' maxWidth = {600} marginLeft="5%" textAlign='justify' aling="center" marginTop="18px" fontWeight='700' id="Bio"> 
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

{/* Page's images */}
        <Flex position="relative" marginRight="5%" id="Image_area" marginLeft="5%">
          <Image
            id="Image_mendel"
            src={GregorMendelImage}
            alt='Imagem do Mendel'
            borderRadius='50%' />

          <Image
            id="Image_anot"
            src={GregorNotesImage}
            alt='Imagem anotações'/>

        </Flex>
    </Flex>
  </Flex>
  )
}
