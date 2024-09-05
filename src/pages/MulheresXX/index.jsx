import {
  Heading,
  Highlight,
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
} from "@chakra-ui/react";
import { useState } from "react";
import VLibras from "@djpfs/react-vlibras";

export function MulheresXX() {
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
      {/* Banner inicial */}
      <Flex
        h="100vh"
        w="full"
        direction="column"
        justify="center"
        align="center"
        bg="url('/assets/banner.jpg') no-repeat center center"
        bgSize="cover"
        mb={8}
      >
        <Heading
          variant="PrimaryTitle"
          color="rgb(86, 101, 115)"
          textAlign="center"
          fontSize={[25, 25, 40]}
        >
          <Highlight
            query="Mulheres"
            styles={{
              fontSize: "3.5em",
              color: "rgb(86, 101, 115)",
              display: "block",
            }}
          >
            Mulheres na Genética
          </Highlight>
        </Heading>
        <VLibras forceOnload />
      </Flex>

      {/* Seção de conteúdo */}
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
        mb={40}
      >
        <Box>
          <Image src="/assets/DNA.png" width="600px" />
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
            textAlign="right"
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Importância
          </Heading>
          <Text variant="Paragraph">
            A ciência genética é crucial para entender a hereditariedade e os
            mecanismos moleculares da vida. As mulheres desempenharam papéis
            fundamentais nesse campo, contribuindo significativamente para suas
            descobertas e avanços. Desde o início da genética, elas foram
            pioneiras em desafios ao conhecimento estabelecido e na expansão da
            biologia.
            <br />
            Rosalind Franklin, com suas imagens de raios X do DNA, revelou a
            estrutura em dupla hélice da molécula, transformando a compreensão
            da hereditariedade e confirmando teorias existentes. Recentemente,
            Jennifer Doudna e Emmanuelle Charpentier avançaram com a tecnologia
            de edição genética CRISPR-Cas9, permitindo manipulação precisa do
            DNA. Essa inovação tem vastas implicações para tratar doenças
            genéticas e melhorar saúde e agricultura.
            <br />
            Essas contribuições demonstram não apenas investigações pioneiras,
            mas também habilidades analíticas e criativas essenciais para o
            desenvolvimento da genética. Reconhecer o impacto das mulheres na
            genética é vital, pois seu trabalho é crucial para o progresso da
            ciência e da prática médica moderna. O legado feminino na genética
            reflete a importância de sua presença e impacto na ciência
            contemporânea.
          </Text>
        </Box>
      </Flex>

      <Flex
        width="80%"
        direction="column"
        alignItems="center"
        p={4}
        mx="auto"
        maxWidth="80%"
        mb={8}
      >
        <Heading
          variant="PrimaryTitle"
          mb={20}
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

      <Box p={[4, 6, 8]} mx="auto" width="60%" mb={8}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          mb={40}
        >
          <Box borderRadius="md" overflow="hidden">
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
          <Box borderRadius="md" overflow="hidden">
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
          <Box borderRadius="md" overflow="hidden">
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
          <Box borderRadius="md" overflow="hidden">
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
          <Box borderRadius="md" overflow="hidden">
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
          <Box borderRadius="md" overflow="hidden">
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
        height="80%"
        direction="column"
        alignItems="center"
        p={4}
        mx="auto"
        maxWidth="80%"
        mb={8}
      >
        <Heading
          variant="PrimaryTitle"
          mb={4}
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Desafios e Barreiras Enfrentadas
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          mb={40}
        >
          <Box mb={8}>
            <Heading
              variant="PrimaryTitle"
              mb={2}
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="right"
            >
              Título 1
            </Heading>
            <Text variant="Paragraph" align="justify" maxWidth="80%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              molestias doloribus est perspiciatis ut excepturi distinctio quam
              rerum, placeat saepe ad doloremque necessitatibus ipsam eum soluta
              unde voluptatibus et temporibus! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Commodi maiores dolores ipsa quam
              recusandae! Ex, sunt? Incidunt praesentium impedit provident
              maxime quidem exercitationem. Voluptates fugiat, officiis
              consectetur molestias animi delectus?
            </Text>
          </Box>
          <Box mb={8}>
            <Heading
              variant="PrimaryTitle"
              mb={2}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Título 2
            </Heading>
            <Text variant="Paragraph" align="justify" maxWidth="80%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              doloremque perspiciatis iure earum alias natus enim dolorem
              adipisci culpa eligendi quos recusandae deserunt assumenda illo
              corporis, nesciunt, harum suscipit ab? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab sequi voluptate a aut ratione
              voluptatibus aperiam, doloremque distinctio, minima tempore veniam
              suscipit inventore rerum commodi. Voluptate vero expedita laborum
              harum.
            </Text>
          </Box>
          <Box mb={8}>
            <Heading
              variant="PrimaryTitle"
              mb={2}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Título 3
            </Heading>
            <Text variant="Paragraph" align="justify" maxWidth="80%">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
              veritatis earum assumenda quo commodi eius sapiente delectus,
              cumque recusandae quae aliquam doloremque nulla rem illo ipsam,
              iure inventore! Accusantium, harum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi fuga dolores natus obcaecati
              perferendis alias, eligendi corporis eveniet libero consequuntur,
              expedita cumque! Veritatis velit, voluptate tempore neque
              recusandae eum consectetur!
            </Text>
          </Box>
          <Box mb={8}>
            <Heading
              variant="PrimaryTitle"
              mb={2}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Título 4
            </Heading>
            <Text variant="Paragraph" align="justify" maxWidth="80%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi laboriosam velit nisi ad maxime eum, similique saepe
              fugit nostrum repudiandae unde sunt rerum fuga perspiciatis,
              placeat asperiores praesentium cupiditate dignissimos! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Earum culpa,
              aliquid animi perferendis maiores excepturi explicabo beatae iure
              incidunt deserunt cupiditate illum! Amet ipsam rerum ipsum quasi
              dolorum perferendis officiis.
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
        mb={8}
      >
        <Box
          p={60}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          maxWidth="1500px"
          maxHeight="900px"
          width="100%"
          height="70%"
          background="rgba(6, 38, 44, 0.6)" /* Cor de fundo semi-transparente */
          backdropFilter="blur(10px)" /* Efeito de desfoque */
        >
          <Heading mb={4}>Título Centralizado</Heading>
          <Text>
            Este é um exemplo de texto dentro da Box centralizada na página.
            Você pode ajustar o conteúdo e o estilo conforme necessário.
          </Text>
        </Box>
      </Flex>

      {/* Modal para exibir imagem, título e texto */}
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
              mb={4}
            />
            <Text>{selectedText}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
