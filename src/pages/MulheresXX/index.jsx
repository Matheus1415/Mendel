import { Heading, Highlight, Flex, Text, Box } from "@chakra-ui/react";
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
        maxW="1300px"
        mx="auto"
        alignItems="flex-start"
        gap={6}
        justify="center"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          right="800"
          top="0"
          h="100%"
          w="60%"
          backgroundImage="url('/assets/DNA.png')"
          backgroundPosition="left"
          backgroundRepeat="no-repeat"
          opacity="0.7"
        />

        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          textAlign="justify"
          p={4}
          zIndex="1"
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
            A ciência genética, enquanto uma das disciplinas mais centrais na
            esfera da biologia, tem sido crucial para o aprofundamento de nossa
            compreensão da hereditariedade e dos processos vitais que regem a
            vida. O campo da genética não se restringe apenas à análise dos
            padrões de herança, mas também se estende à compreensão dos
            mecanismos moleculares que fundamentam a expressão e a variação
            genética. Nesse contexto, as mulheres desempenharam um papel
            fundamental, sendo protagonistas em muitas das descobertas e avanços
            que moldaram a genética moderna. Desde os primórdios da genética, as
            mulheres estiveram na vanguarda de explorações científicas que
            desafiaram o conhecimento estabelecido e expandiram as fronteiras do
            que era possível compreender sobre a biologia dos organismos. O
            impacto de suas contribuições é notável não apenas pelo volume de
            descobertas inovadoras, mas também pela profundidade e pela
            complexidade dessas descobertas. As mulheres científicas não apenas
            se destacaram por suas investigações pioneiras, mas também por suas
            habilidades analíticas e criativas, que têm sido essenciais para o
            desenvolvimento de teorias e tecnologias genéticas.
            <br />
            Por exemplo, a observação meticulosa e a análise crítica realizadas
            por cientistas como Rosalind Franklin, com suas imagens de raios X
            do DNA, foram fundamentais para a elucidação da estrutura em dupla
            hélice da molécula. Esse marco transformou radicalmente nossa
            compreensão da hereditariedade, confirmando teorias existentes e
            revelando novas dimensões sobre a estrutura e a função do DNA. Essas
            descobertas forneceram a base para uma série de avanços subsequentes
            na biologia molecular. No cenário mais contemporâneo, as
            contribuições de mulheres como Jennifer Doudna e Emmanuelle
            Charpentier com o desenvolvimento da tecnologia de edição genética
            CRISPR-Cas9 representam um salto paradigmático no campo. A
            capacidade de manipular o material genético com precisão tem
            implicações vastas e profundas, desde o tratamento de doenças
            genéticas até a modificação de características de organismos para
            melhorar a saúde e a agricultura. O trabalho dessas cientistas não
            só expandiu nosso arsenal de ferramentas genéticas, mas também
            reconfigurou o horizonte da pesquisa genética e das aplicações
            clínicas.
            <br />
            Portanto, ao refletirmos sobre a evolução da ciência genética, é
            imperativo reconhecer e valorizar as contribuições das mulheres,
            cuja influência foi e continua a ser inestimável para o progresso da
            disciplina. Seus esforços incansáveis e suas inovações notáveis não
            apenas enriqueceram nosso conhecimento, mas também estabeleceram
            novos paradigmas para a investigação científica e a prática médica.
            O legado das mulheres na genética é uma testemunha da importância de
            sua presença e impacto na construção da ciência moderna.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
