import { Heading, Highlight } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import VLibras from "@djpfs/react-vlibras";

export function MulheresXX() {
  return (
    <Flex
      h="100vh"
      w="full"
      direction="column"
      justify="center"
      align="center"
      bg="url(assets/banner.jpg)"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading
        variant="PrimaryTitle"
        color="Primary"
        textAlign="center"
        fontSize={[25, 25, 40]}
      >
        <Highlight
          query="Genes XX"
          styles={{ fontSize: "3.5em", color: "Primary", display: "block" }}
        >
          Introdução sobre ao Genes XX
        </Highlight>
      </Heading>
      <VLibras forceOnload />
      <Flex
        direction="column"
        p={[3, 4, 8]}
        maxW="950px"
        mx="auto"
        alignItems="flex-start"
      >
        <Heading variant="PrimaryTitle">Mulheres Na Ciencia</Heading>
        <Text variant="forContentsPage">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora
          eaque tempore vitae, dicta iusto, minus iste assumenda officia
          voluptatibus suscipit. Tempore vel, dolores distinctio asperiores
          molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab
          aspernatur, obcaecati consequuntur iste dolores excepturi eveniet
          repellendus maxime nihil eligendi dignissimos possimus. Repellat,
          soluta ducimus!
        </Text>
      </Flex>
    </Flex>
  );
}
