import { Box, Flex, Heading, Grid, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";
import React, { useState } from 'react';

const HistoricPionners = () => {
  
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


    <Box>
      <Flex
          direction="column"
          alignItems="center"
          mx="auto"
          maxWidth="80%"
        >
          <Heading
            variant="PrimaryTitle"
            mb={10} // Ajustado para consistência
            textAlign="center"
          >
            PIONEIRAS HISTÓRICAS
          </Heading>
          <Text
            variant="Paragraph"
            textAlign="justify"
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

        <Box p={[4, 6, 8]} mx="auto" width="85%" mb={40}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={8} // Ajustado o espaço entre os itens
          >
            {/* Imagens com padding padrão */}
            <Box borderRadius="md" overflow="hidden" p={2}>
              <Image
                src="/assets/Rectangle 16.png"
                alt="Imagem 1"
                objectFit="cover"
                width="100%"
                height="auto"
                onClick={() =>
                  handleImageClick(
                    "/assets/Rectangle 16.png",
                    "May-Britt Moser",
                    "May-Britt Moser, junto com Edvard I. Moser e John O’Keefe, fez descobertas fundamentais sobre como o cérebro mapeia o espaço através das células de localização. Seu trabalho elucidou os mecanismos neurais que permitem a navegação espacial e a percepção do ambiente. Essas descobertas avançaram significativamente a compreensão das funções cognitivas e das bases genéticas do comportamento. Moser foi laureada com o Prêmio Nobel de Medicina em 2014, refletindo a importância de suas contribuições para a neurociência."
                  )
                }
                cursor="pointer"
              />
            </Box>
            <Box borderRadius="md" overflow="hidden" p={2}>
              <Image
                src="/assets/Rectangle 16 (1).png"
                alt="Imagem 2"
                objectFit="cover"
                width="100%"
                height="auto"
                onClick={() =>
                  handleImageClick(
                    "/assets/Rectangle 16 (1).png",
                    "Jennifer Doudna",
                    "Jennifer Doudna revolucionou a biologia molecular com o desenvolvimento da tecnologia CRISPR-Cas9, uma ferramenta precisa para a edição de DNA. Sua inovação permitiu avanços significativos na pesquisa genética e terapia, oferecendo novas possibilidades para o tratamento de doenças genéticas. O trabalho de Doudna, em colaboração com Emmanuelle Charpentier, transformou a abordagem científica à manipulação do genoma. Seu impacto na ciência é vasto, expandindo as fronteiras da genética e da medicina."
                  )
                }
                cursor="pointer"
              />
            </Box>
            <Box borderRadius="md" overflow="hidden" p={2}>
              <Image
                src="/assets/Rectangle 16 (2).png"
                alt="Imagem 3"
                objectFit="cover"
                width="100%"
                height="auto"
                onClick={() =>
                  handleImageClick(
                    "/assets/Rectangle 16 (2).png",
                    "Emmanuelle Charpentier",
                    "Emmanuelle Charpentier, em colaboração com Jennifer Doudna, desenvolveu a tecnologia CRISPR-Cas9, que revolucionou a edição genética. Esta ferramenta inovadora permite a manipulação precisa do DNA, abrindo novas possibilidades para a pesquisa e a terapia de doenças genéticas. Seu trabalho transformou a biologia molecular, oferecendo um poderoso recurso para a ciência e a medicina. Charpentier é amplamente reconhecida por seu impacto duradouro na área da genética."
                  )
                }
                cursor="pointer"
              />
            </Box>
            <Box borderRadius="md" overflow="hidden" p={2}>
              <Image
                src="/assets/Rectangle 16 (3).png"
                alt="Imagem 4"
                objectFit="cover"
                width="100%"
                height="auto"
                onClick={() =>
                  handleImageClick(
                    "/assets/Rectangle 16 (3).png",
                    "Mary-Claire King",
                    "Mary-Claire King é reconhecida por identificar o gene BRCA1, associado ao risco hereditário de câncer de mama e ovário, revolucionando o diagnóstico e a prevenção dessas doenças. Seu trabalho permitiu o desenvolvimento de testes genéticos para identificar indivíduos em risco, transformando as abordagens de triagem e tratamento. Além disso, King também pioneira na utilização de técnicas de DNA para resolver casos de desaparecimentos e direitos humanos. Suas contribuições são essenciais para a genética médica e a saúde pública."
                  )
                }
                cursor="pointer"
              />
            </Box>
            <Box borderRadius="md" overflow="hidden" p={2}>
              <Image
                src="/assets/Rectangle 16 (4).png"
                alt="Imagem 5"
                objectFit="cover"
                width="100%"
                height="auto"
                onClick={() =>
                  handleImageClick(
                    "/assets/Rectangle 16 (4).png",
                    "Françoise Barré-Sinoussi",
                    "Francoise Barré-Sinoussi, juntamente com Luc Montagnier, identificou o HIV em 1983, um avanço crucial para a compreensão da AIDS. Sua descoberta não apenas elucidou a causa da doença, mas também possibilitou o desenvolvimento de tratamentos antirretrovirais que transformaram a vida de milhões. Barré-Sinoussi recebeu o Prêmio Nobel de Medicina em 2008, reconhecendo o impacto significativo de seu trabalho na luta contra a infecção viral. Sua contribuição continua a influenciar profundamente a pesquisa e o tratamento de doenças infecciosas."
                  )
                }
                cursor="pointer"
              />
            </Box>
            <Box borderRadius="md" overflow="hidden" p={2}>
              <Image
                src="/assets/Rectangle 16 (5).png"
                alt="Imagem 6"
                objectFit="cover"
                width="100%"
                height="auto"
                onClick={() =>
                  handleImageClick(
                    "/assets/Rectangle 16 (5).png",
                    "Martha Chase",
                    "Martha Chase, em colaboração com Alfred Hershey, realizou o famoso experimento Hershey-Chase em 1952, que comprovou que o DNA é o material genético responsável pela herança. Esse trabalho foi crucial para consolidar a teoria de que o DNA carrega as informações genéticas, marcando um avanço fundamental na biologia molecular. Sua pesquisa ajudou a estabelecer a base para o entendimento moderno da genética e da transmissão de características hereditárias. Chase é lembrada por sua contribuição significativa para a ciência genética."
                  )
                }
                cursor="pointer"
              />
            </Box>
          </Grid>
        </Box>
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
      </Box>
         
  )
}

export default HistoricPionners;