import { Heading, Flex, Highlight, Text, Image} from "@chakra-ui/react";
export function Biography() {
  return (
  <Flex aling="Center" direction="column">
    <Heading>
      <Highlight query="World" styles={{bg:"Brand.primary", px:"5", rounded:"full"}}>
        Quem foi Mendel?
      </Highlight>
    </Heading>
    {/* conteudo da pagina */}
    <Flex aling="Center" direction="Row">
        <Text fontSize= 'lg' maxWidth = {600}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima ex exercitationem eveniet quaerat ipsam distinctio obcaecati sunt ab. Omnis earum aut ipsam possimus quisquam recusandae debitis, dolor natus dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio exercitationem consequuntur, repellendus neque, eum ipsam tempore quod obcaecati labore accusantium asperiores assumenda eaque illum voluptatem harum in similique amet non!
        </Text>
    <Image 
      src="../images/Gregor_Mendel"
      alt='Imagem do Mendel'
      boxSize='100px'/>
    </Flex>
  </Flex>
  )
}
