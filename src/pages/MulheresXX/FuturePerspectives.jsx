import { Heading, Flex, Text, Box, Image, Grid } from "@chakra-ui/react";
const FuturePerspectives = () => {
  return (
    <Flex h="100vh" justify="center" align="center" position="relative" mb={40}>
      {/* Imagem de Fundo */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="url('/assets/Background.png') no-repeat center center"
        bgSize="cover"
        zIndex="-1"
        filter="brightness(50%)" // Adiciona um filtro de escurecimento
      />

      {/* Camada de Sobreposição Escura */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.1)" // Ajuste a opacidade para escurecer mais ou menos
      />

      <Box
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
        maxWidth="1200px"
        maxHeight="900px"
        width="1078.73px"
        height="595.28px"
        background="rgba(6, 38, 44, 0.6)"
        backdropFilter="blur(10px)"
        position="relative" // Certifique-se de que o conteúdo está acima da sobreposição
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          p={9}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <Box>
            <Heading variant="PrimaryTitle">PERSPECTIVA FUTURA</Heading>
            <Text variant="Paragraph" textAlign="justify">
              O futuro das mulheres na genética está cheio de transformações e
              oportunidades, com o avanço de tecnologias como a edição de genes
              e a genômica personalizada. A maior presença feminina em papéis de
              liderança e pesquisa está enriquecendo a ciência e diversificando
              abordagens, resultando em avanços significativos, como a medicina
              personalizada e um melhor entendimento de condições genéticas.
            </Text>
            <Text variant="Paragraph" textAlign="justify">
              O futuro das mulheres na genética promete mais equidade de gênero,
              com políticas e iniciativas promovendo igualdade de oportunidades.
              Esse ambiente mais inclusivo e colaborativo, com mulheres em
              posições de destaque, deve impulsionar inovação e uma abordagem
              mais holística para os desafios genéticos, evidenciando o impacto
              positivo da diversidade de gênero nas ciências.
            </Text>
          </Box>
          <Box display={{ base: "none", md: "flex" }} justifyContent="center">
            <Image
              src="/assets/Vector.svg"
              alt="Descrição da Imagem"
              w="92.83px"
              h="588.7px"
              borderRadius="md"
              boxShadow="md"
            />
            <Image
              src="/assets/Vector-copy.svg"
              alt="Descrição da Imagem"
              w="92.83px"
              h="588.7px"
              borderRadius="md"
              boxShadow="md"
            />
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default FuturePerspectives;
