import {
  Heading,
  Flex,
  Text,
  Box,
  Image,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue
} from "@chakra-ui/react";
import { useState } from "react";
import VLibras from "@djpfs/react-vlibras";
import { LayoutIntroduction } from "../../layout/LayoutIntroduction";
import ImportanceOfWomenInGenetics from "./ImportanceOfWomenInGenetics";

const MulheresXX = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const handleImageClick = (src, title, text) => {
    setSelectedImage(src);
    setSelectedTitle(title);
    setSelectedText(text);
    onOpen();
  };

  return (
    <>
      <LayoutIntroduction query="MULHERES">MULHERES da genética</LayoutIntroduction>
      <ImportanceOfWomenInGenetics />


















      <Flex
        width="80%"
        direction="column"
        alignItems="center"
        p={[4, 6]}
        mx="auto"
        maxWidth="80%"
        mb={4} // Ajustado para consistência
      >
        <Heading
          variant="PrimaryTitle"
          mb={10} // Ajustado para consistência
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          PIONEIRAS HISTÓRICAS
        </Heading>
        <Text
          variant="Paragraph"
          fontSize={{ base: "md", md: "lg" }}
          align="justify"
        >
          Francoise Barré-Sinoussi e Luc Montagnier fizeram uma descoberta
          crucial em 1983 ao identificar o HIV como o agente causador da AIDS, o
          que revolucionou o entendimento da doença e possibilitou o
          desenvolvimento de tratamentos antirretrovirais que transformaram
          vidas. Jennifer Doudna e Emmanuelle Charpentier criaram a tecnologia
          CRISPR-Cas9, uma ferramenta inovadora para a edição precisa do DNA com
          vastas aplicações em pesquisa e terapia genética. May-Britt Moser,
          junto com Edvard I. Moser e John O’Keefe, revelou como o cérebro usa
          células de localização para mapear o espaço, aprofundando a
          compreensão das funções cognitivas. Mary-Claire King identificou o
          gene BRCA1, essencial para a detecção precoce do câncer de mama e
          ovário, melhorando os métodos de diagnóstico e prevenção. Finalmente,
          Martha Chase e Alfred Hershey confirmaram que o DNA é o material
          genético responsável pela herança, solidificando a biologia molecular
          como a base do estudo genético. Essas contribuições avançaram
          significativamente a ciência e tiveram um impacto profundo na medicina
          e na vida cotidiana.
        </Text>
      </Flex>

      <Box p={[4, 6, 8]} mx="auto" width="60%" mb={40}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={8} // Ajustado o espaço entre os itens
        >
          {/* Imagens com padding padrão */}
          <Box borderRadius="md" overflow="hidden" p={2}>
            <Image
              src="/assets/Rectangle16-3.png"
              alt="Imagem 1"
              objectFit="cover"
              width="100%"
              height="auto"
              onClick={() =>
                handleImageClick(
                  "/assets/Rectangle16-3.png",
                  "May-Britt Moser",
                  "May-Britt Moser, junto com Edvard I. Moser e John O’Keefe, fez descobertas fundamentais sobre como o cérebro mapeia o espaço através das células de localização. Seu trabalho elucidou os mecanismos neurais que permitem a navegação espacial e a percepção do ambiente. Essas descobertas avançaram significativamente a compreensão das funções cognitivas e das bases genéticas do comportamento. Moser foi laureada com o Prêmio Nobel de Medicina em 2014, refletindo a importância de suas contribuições para a neurociência."
                )
              }
              cursor="pointer"
            />
          </Box>
          <Box borderRadius="md" overflow="hidden" p={2}>
            <Image
              src="/assets/Rectangle16-1.png"
              alt="Imagem 2"
              objectFit="cover"
              width="100%"
              height="auto"
              onClick={() =>
                handleImageClick(
                  "/assets/Rectangle16-1.png",
                  "Jennifer Doudna",
                  "Jennifer Doudna revolucionou a biologia molecular com o desenvolvimento da tecnologia CRISPR-Cas9, uma ferramenta precisa para a edição de DNA. Sua inovação permitiu avanços significativos na pesquisa genética e terapia, oferecendo novas possibilidades para o tratamento de doenças genéticas. O trabalho de Doudna, em colaboração com Emmanuelle Charpentier, transformou a abordagem científica à manipulação do genoma. Seu impacto na ciência é vasto, expandindo as fronteiras da genética e da medicina."
                )
              }
              cursor="pointer"
            />
          </Box>
          <Box borderRadius="md" overflow="hidden" p={2}>
            <Image
              src="/assets/Rectangle16-2.png"
              alt="Imagem 3"
              objectFit="cover"
              width="100%"
              height="auto"
              onClick={() =>
                handleImageClick(
                  "/assets/Rectangle16-2.png",
                  "Emmanuelle Charpentier",
                  "Emmanuelle Charpentier, em colaboração com Jennifer Doudna, desenvolveu a tecnologia CRISPR-Cas9, que revolucionou a edição genética. Esta ferramenta inovadora permite a manipulação precisa do DNA, abrindo novas possibilidades para a pesquisa e a terapia de doenças genéticas. Seu trabalho transformou a biologia molecular, oferecendo um poderoso recurso para a ciência e a medicina. Charpentier é amplamente reconhecida por seu impacto duradouro na área da genética."
                )
              }
              cursor="pointer"
            />
          </Box>
          <Box borderRadius="md" overflow="hidden" p={2}>
            <Image
              src="/assets/Rectangle16-4.png"
              alt="Imagem 4"
              objectFit="cover"
              width="100%"
              height="auto"
              onClick={() =>
                handleImageClick(
                  "/assets/Rectangle16-4.png",
                  "Mary-Claire King",
                  "Mary-Claire King é reconhecida por identificar o gene BRCA1, associado ao risco hereditário de câncer de mama e ovário, revolucionando o diagnóstico e a prevenção dessas doenças. Seu trabalho permitiu o desenvolvimento de testes genéticos para identificar indivíduos em risco, transformando as abordagens de triagem e tratamento. Além disso, King também pioneira na utilização de técnicas de DNA para resolver casos de desaparecimentos e direitos humanos. Suas contribuições são essenciais para a genética médica e a saúde pública."
                )
              }
              cursor="pointer"
            />
          </Box>
          <Box borderRadius="md" overflow="hidden" p={2}>
            <Image
              src="/assets/Rectangle16.png"
              alt="Imagem 5"
              objectFit="cover"
              width="100%"
              height="auto"
              onClick={() =>
                handleImageClick(
                  "/assets/Rectangle16.png",
                  "Françoise Barré-Sinoussi",
                  "Francoise Barré-Sinoussi, juntamente com Luc Montagnier, identificou o HIV em 1983, um avanço crucial para a compreensão da AIDS. Sua descoberta não apenas elucidou a causa da doença, mas também possibilitou o desenvolvimento de tratamentos antirretrovirais que transformaram a vida de milhões. Barré-Sinoussi recebeu o Prêmio Nobel de Medicina em 2008, reconhecendo o impacto significativo de seu trabalho na luta contra a infecção viral. Sua contribuição continua a influenciar profundamente a pesquisa e o tratamento de doenças infecciosas."
                )
              }
              cursor="pointer"
            />
          </Box>
          <Box borderRadius="md" overflow="hidden" p={2}>
            <Image
              src="/assets/Rectangle16-5.png"
              alt="Imagem 6"
              objectFit="cover"
              width="100%"
              height="auto"
              onClick={() =>
                handleImageClick(
                  "/assets/Rectangle16-5.png",
                  "Martha Chase",
                  "Martha Chase, em colaboração com Alfred Hershey, realizou o famoso experimento Hershey-Chase em 1952, que comprovou que o DNA é o material genético responsável pela herança. Esse trabalho foi crucial para consolidar a teoria de que o DNA carrega as informações genéticas, marcando um avanço fundamental na biologia molecular. Sua pesquisa ajudou a estabelecer a base para o entendimento moderno da genética e da transmissão de características hereditárias. Chase é lembrada por sua contribuição significativa para a ciência genética."
                )
              }
              cursor="pointer"
            />
          </Box>
        </Grid>
      </Box>

      <Flex
        height="800%"
        width="100%"
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
          fontSize={{ base: "2xl", md: "3xl" }}
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
          <Box p={[4, 6]} width="70%">
            <Heading
              variant="PrimaryTitle"
              mb={4} // Ajustado para consistência
              fontSize={{ base: "xl", md: "2xl" }}
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>{selectedTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={selectedImage}
              alt="Imagem selecionada"
              width="100%"
              mb={40}
            />
            <Text>{selectedText}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default MulheresXX;