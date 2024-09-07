import {
  Heading,
  Flex,
  Text,
  Box,
  Image,
  Grid,
} from "@chakra-ui/react";
import { LayoutIntroduction } from "../../layout/LayoutIntroduction";
import ImportanceOfWomenInGenetics from "./ImportanceOfWomenInGenetics";
import HistoricPionners from "./HistoricPionners";
import ChallengesAndBarriersFaced from "./ChallengesAndBarriersFaced";

export function MulheresXX() {

  

  return (
    <>

      <LayoutIntroduction query="MULHERES">MULHERES da genética</LayoutIntroduction>
      <ImportanceOfWomenInGenetics />
      <HistoricPionners />
      <ChallengesAndBarriersFaced />

      <Flex
        h="100vh"
        w="full"
        direction="column"
        justify="center"
        align="center"
        bg="url('/assets/Background.png') no-repeat center center"
        bgSize="cover"
        mb={40} // Ajustado para consistência
        px={[4, 6, 8]} // Adicionado padding horizontal
        
      >
        <Box
          p={[6, 8]}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          maxWidth="1200px"
          maxHeight="900px"
          width="80%" // Ajustado para maior consistência
          height="80%" // Ajustado para manter a proporção
          background="rgba(6, 38, 44, 0.6)"
          backdropFilter="blur(10px)"
         
          
          
        >
   <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={10}
      p={9}
      // Adicionando alinhamento central para o grid em telas maiores
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Box>
        <Heading
          variant="PrimaryTitle"
          mb={4}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          PERSPECTIVA FUTURA
        </Heading>
        <Text color="white">
          O futuro das mulheres na genética promete ser uma era de grandes transformações e oportunidades. Com o avanço das tecnologias genéticas, como a edição de genes e a genômica personalizada, as mulheres estão cada vez mais presentes em papéis de liderança e inovação no campo. A crescente inclusão de mulheres em pesquisas e projetos de genética não só está enriquecendo a qualidade do trabalho científico, mas também ampliando a diversidade de perspectivas e abordagens. Isso resulta em avanços significativos que beneficiam a sociedade como um todo, desde a medicina personalizada até o entendimento mais profundo de condições genéticas específicas.
          <br />
          <br />
          Além disso, a perspectiva futura para as mulheres na genética é marcada por uma maior equidade de gênero em ambientes acadêmicos e profissionais. Políticas e iniciativas que promovem a igualdade de oportunidades estão ganhando força, criando um ambiente mais inclusivo e colaborativo. À medida que mais mulheres assumem posições de destaque e influenciam as direções da pesquisa genética, podemos esperar uma maior inovação e uma abordagem mais holística para resolver os desafios genéticos, refletindo o impacto positivo da diversidade de gênero nas ciências.
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" gap={4}>
        <Image
          src="/assets/Vector.svg"
          alt="Descrição da Imagem"
          width="30%"
          height="70%"
          borderRadius="md"
          boxShadow="md"
        />
        <Image
          src="/assets/Vector.svg"
          alt="Descrição da Imagem"
          width="30%"
          height="70%"
          borderRadius="md"
          boxShadow="md"
        />
      </Box>
    </Grid>
        </Box>
      </Flex>

   
    </>
  );
}
