import { Heading, Flex, Text, Box, Grid, } from "@chakra-ui/react";
const ChallengesAndBarriersFaced = () => {
  return(
    <Flex
      direction="column"
      maxWidth="1500px"
      alignItems="center"
      p={[2, 6]} // Padding ajustado
      mx="auto"
      mb={40} // Ajustado para consistência
    >
      <Heading
        variant="PrimaryTitle"
        mb={4} // Ajustado para consistência
        textAlign="center"
      >
        Desafios e Barreiras Enfrentadas
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Duas colunas
        gap={30} // Espaço entre os boxes
        width="100%"
        mb={4} // Ajustado para consistência
        alignItems="center"
      >
        <Box width="70%">
          <Heading
            variant="SecondTitle"
            mb={4} // Ajustado para consistência
            textAlign="left"

          >
            Sub-Representação em Posições de Liderança
          </Heading>
          <Text variant="Paragraph" align="justify">
            A sub-representação das mulheres em posições de liderança persiste
            apesar dos avanços em igualdade de gênero. Barreiras estruturais e
            culturais, estereótipos e a falta de redes de apoio contribuem
            para essa desigualdade. Mesmo quando mulheres alcançam cargos de
            liderança, enfrentam desafios adicionais, como a necessidade de
            provar seu valor com mais frequência que os homens.
            <br />
            <br />
            Além disso, políticas inadequadas de conciliação entre vida
            profissional e pessoal e a falta de mentorias eficazes dificultam
            a ascensão das mulheres. Para combater essa disparidade, é crucial
            que as organizações implementem medidas proativas, como programas
            de desenvolvimento de liderança e políticas mais inclusivas,
            promovendo um ambiente que favoreça a equidade de gênero e a
            diversidade nas decisões estratégicas.
          </Text>
        </Box>
        <Box p={[4, 6]} width="70%">
          <Heading
            variant="PrimaryTitle"
            mb={4} // Ajustado para consistência
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="right"
          >
            desafios da vida profissional e pessoal
          </Heading>
          <Text variant="Paragraph" align="justify">
            Conciliar a vida profissional e pessoal é um desafio significativo
            para muitos, especialmente para mulheres. A pressão para
            equilibrar responsabilidades no trabalho e em casa pode levar a
            estresse e burnout. Expectativas sociais e profissionais muitas
            vezes exigem longas horas de trabalho, enquanto as demandas
            familiares também são intensas, criando um constante conflito de
            prioridades.
            <br />
            <br />
            Além disso, a falta de políticas adequadas, como licença parental
            flexível e opções de trabalho remoto, dificulta a criação de um
            equilíbrio sustentável. Para enfrentar esses desafios, é essencial
            que as empresas adotem práticas que promovam a flexibilidade e o
            suporte, permitindo que os indivíduos integrem suas vidas pessoais
            e profissionais de forma mais harmoniosa e saudável.
          </Text>
        </Box>
        <Box p={[4, 6]} width="70%">
          <Heading
            variant="PrimaryTitle"
            mb={4} // Ajustado para consistência
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="left"
          >
            Desigualdade Salarial
          </Heading>
          <Text variant="Paragraph" align="justify">
            A desigualdade salarial é um problema persistente no mercado de
            trabalho, refletindo disparidades significativas entre diferentes
            grupos, especialmente entre gêneros e etnias. Mulheres
            frequentemente enfrentam uma remuneração inferior à dos homens
            para desempenharem funções semelhantes, apesar de avanços na
            educação e na qualificação profissional. Esse gap salarial é
            exacerbado em setores predominantemente femininos e em cargos de
            liderança, onde a discrepância é ainda mais pronunciada.
            <br />
            <br />A desigualdade salarial é influenciada por fatores como
            discriminação implícita, falta de oportunidades de avanço e a
            sub-representação de grupos diversos em posições de tomada de
            decisão. Para abordar esse problema, é crucial implementar
            políticas de transparência salarial e promover práticas de
            contratação e promoção baseadas em mérito, garantindo igualdade de
            remuneração para trabalho igual e reconhecendo as habilidades e
            contribuições de todos os colaboradores de forma justa.
          </Text>
        </Box>
        <Box p={[4, 6]} width="70%">
          <Heading
            variant="PrimaryTitle"
            mb={4} // Ajustado para consistência
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="right"
          >
            Discriminação
          </Heading>
          <Text variant="Paragraph" align="justify">
            A discriminação contra as mulheres no ambiente de trabalho
            persiste como um desafio significativo para a igualdade de gênero.
            As mulheres frequentemente enfrentam barreiras invisíveis que
            limitam suas oportunidades de crescimento e desenvolvimento
            profissional. Isso inclui desigualdades salariais, falta de
            reconhecimento por seus desempenhos, e dificuldades em acessar
            posições de liderança.
            <br />
            <br />
            Além disso, as mulheres podem sofrer discriminação direta ou
            indireta, como estereótipos de gênero e expectativas desiguais
            quanto a suas habilidades e capacidades. Tais práticas prejudicam
            não apenas a carreira individual, mas também a dinâmica e o
            sucesso organizacional como um todo. É crucial adotar políticas
            inclusivas e promover uma cultura de respeito para garantir que
            todas as colaboradoras tenham as mesmas chances de sucesso e
            realização profissional.
          </Text>
        </Box>
      </Grid>
    </Flex>
  )
}

export default ChallengesAndBarriersFaced;