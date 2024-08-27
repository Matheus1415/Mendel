import { Heading, Highlight, Flex, Text, Box, Image } from "@chakra-ui/react";
import VLibras from "@djpfs/react-vlibras";

export function MulheresXX() {
  return (
    <>
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
            Introdução sobre os Genes XX
          </Highlight>
        </Heading>
        <VLibras forceOnload />
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        p={[3, 4, 8]}
        width="70%"
        mx="auto"
        alignItems="flex-start"
        gap={6}
        justify="center"
        position="relative"
        overflow="hidden"
        justifyContent="space-between"
      >
        <Box>
         <Image src ="../../../public/assets/DNA.png"
         />
        </Box>
        

        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          textAlign="justify"
          p={4}
          zIndex="1"
          maxWidth="500px"
        >
          <Heading
            variant="PrimaryTitle"
            mb={4}
            textAlign="left"
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Importância
          </Heading>
          <Text variant="Paragraph">
      

A ciência genética é crucial para entender a hereditariedade e os mecanismos moleculares da vida. As mulheres desempenharam papéis fundamentais nesse campo, contribuindo significativamente para suas descobertas e avanços. Desde o início da genética, elas foram pioneiras em desafios ao conhecimento estabelecido e na expansão da biologia.
<br />
Rosalind Franklin, com suas imagens de raios X do DNA, revelou a estrutura em dupla hélice da molécula, transformando a compreensão da hereditariedade e confirmando teorias existentes. Recentemente, Jennifer Doudna e Emmanuelle Charpentier avançaram com a tecnologia de edição genética CRISPR-Cas9, permitindo manipulação precisa do DNA. Essa inovação tem vastas implicações para tratar doenças genéticas e melhorar saúde e agricultura.
<br />
Essas contribuições demonstram não apenas investigações pioneiras, mas também habilidades analíticas e criativas essenciais para o desenvolvimento da genética. Reconhecer o impacto das mulheres na genética é vital, pois seu trabalho é crucial para o progresso da ciência e da prática médica moderna. O legado feminino na genética reflete a importância de sua presença e impacto na ciência contemporânea.





          </Text>
        </Box>
      </Flex>
    </>
  );
}
