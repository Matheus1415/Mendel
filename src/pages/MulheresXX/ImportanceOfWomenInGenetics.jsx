import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
} from "@chakra-ui/react";

const ImportanceOfWomenInGenetics = () => {
  const flexDirection = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "row-reverse",
  });
  const contentWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "50%",
  });
  const felxAlignContent = useBreakpointValue({
    base: "center",
    sm: "center",
    md: "",
  });

  return (
    <Box>
      <Flex
        mx="auto"
        maxW="1300px"
        p={8}
        gap={6}
        direction={flexDirection}
        justifyContent="space-between"
      >
        <Flex
          direction="column"
          justifyContent="flex-start"
          h="100%"
          w="100%"
          maxW={contentWidth}
          alignItems={felxAlignContent}
        >
          <Heading variant="PrimaryTitle" textAlign="right">
            Importância
          </Heading>
          <Text variant="Paragraph">
            A ciência genética é crucial para entender a hereditariedade e os
            mecanismos moleculares da vida. As mulheres desempenharam papéis
            fundamentais nesse campo, contribuindo significativamente para suas
            pioneiras em desafios ao conhecimento estabelecido e na expansão da
            biologia.
            <br />
            <br />
            Rosalind Franklin, com suas imagens de raios X do DNA, revelou a
            estrutura em dupla hélice da molécula, transformando a compreensão
            da hereditariedade e confirmando teorias existentes. Recentemente,
            Essa inovação tem vastas implicações para tratar doenças genéticas e
            melhorar saúde e agricultura.
            <br />
            <br />
            Essas contribuições demonstram não apenas investigações pioneiras,
            mas também habilidades analíticas e criativas essenciais para o
            desenvolvimento da genética. Reconhecer o impacto das mulheres na 
            Reconhecer o impacto das mulheres na ciência genética é essencial 
            para valorizar a diversidade nas pesquisas. Suas contribuições, 
            muitas vezes subestimadas, impulsionaram avanços importantes e 
            inspiraram novas gerações a seguirem carreiras científicas. Ao 
            destacar esses feitos, promove-se uma ciência mais inclusiva e 
            inovadora, enriquecida por diversas perspectivas e abordagens.
          </Text>
        </Flex>
        <Image
          w="lg"
          borderRadius="2xl"
          objectFit="cover"
          src="./public/img/DNA.png"
          alt="DNA.png"
        />
      </Flex>
    </Box>
  );
};

export default ImportanceOfWomenInGenetics;
