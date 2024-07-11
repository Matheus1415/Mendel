import { Heading, Flex, Text, Image, Highlight} from "@chakra-ui/react";
import '../themes/biography.css'
import GregorMendelImage from '../images/Gregor_Mendel.jpg'
import GregorNotesImage from '../images/Anotacoes_Mendel.jpg'

export function Biography() {
  return (
  <Flex aling="Center" direction="column">

    <Heading size='4xl' marginLeft="5%">
      <Highlight query='Mendel' styles={{color: "#00FF7F"}}>
        Quem foi Mendel ?
      </Highlight> 
    </Heading>

    {/* conteudo da pagina */}

    <Flex aling="center" direction="Row" justify='space-between' padding="24px 24px" marginTop="20px">
        <Text fontSize= '2xl' maxWidth = {600} marginLeft="5%" textAlign='justify' marginTop="50px" fontWeight='700'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima ex exercitationem eveniet quaerat ipsam distinctio obcaecati sunt ab. Omnis earum aut ipsam possimus quisquam recusandae debitis, dolor natus dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio exercitationem consequuntur, repellendus neque, eum ipsam tempore quod obcaecati labore accusantium asperiores assumenda eaque illum voluptatem harum in similique amet non!
        </Text>

    {/*Imagem da página*/}
    <Flex position="relative" marginRight="5%" id="Image_area">
      <Image
        id="Image_mendel"
        src={GregorMendelImage}
        alt='Imagem do Mendel'
        boxSize='500px'
        borderRadius='50%'
        marginRight="5%"
        cursor="pointer" />

      <Image
        id="Image_anot"
        src={GregorNotesImage}
        alt='Imagem anotações'
        boxSize='500px'
        marginRight="5%"
        cursor='pointer'
      />
    </Flex>
    </Flex>
  </Flex>
  )
}
