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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            ducimus nobis atque natus maxime provident eos! Eum quas illum,
            quaerat, ducimus inventore magni illo at doloribus facilis deserunt
            deleniti provident! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam necessitatibus impedit odio? Quaerat
            deleniti ut consectetur neque fugit obcaecati ratione asperiores
            tempore. Optio vitae alias repellat, rerum sapiente adipisci ipsa.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quos
            impedit fugiat illum. Ut tenetur praesentium libero, fuga ipsam sit
            vel, corrupti vitae consectetur, dicta tempore illo? Deserunt, saepe
            fuga.
          </Text>
        </Flex>
        <Image
          w="lg"
          borderRadius="2xl"
          objectFit="cover"
          src="/assets/DNA.png"
          alt="DNA"
        />
      </Flex>
    </Box>
  );
};

export default ImportanceOfWomenInGenetics;
