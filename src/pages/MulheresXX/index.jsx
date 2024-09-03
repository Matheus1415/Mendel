import {
  Heading,
  Highlight,
  Flex,
  Text,
  Box,
  Image,
  Grid,
} from "@chakra-ui/react";
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
        mb={8}
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
        mb={40}
      >
        <Box>
          <Image src="../../../public/assets/DNA.png" width="600px" />
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
          mb={4}
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Importância das mulheres
        </Heading>
        <Text
          variant="Paragraph"
          fontSize={{ base: "md", md: "lg" }}
          align="justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          omnis ducimus dolores vero quo consectetur sapiente mollitia deserunt,
          modi eligendi temporibus harum eaque? Quibusdam similique nostrum ipsa
          repellendus pariatur minima. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate iusto ea dignissimos saepe pariatur,
          mollitia consequuntur dolores repudiandae nam ab placeat odit. Nemo
          eum similique exercitationem, harum explicabo ea voluptas!
        </Text>
      </Flex>
      <Box p={[4, 6, 8]} mx="auto" width="60%" mb={8}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          mb={40}
        >
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image
              src="../../../public/assets/Rectangle16-3.png"
              alt="Imagem 1"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image
              src="../../../public/assets/Rectangle16-1.png"
              alt="Imagem 2"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image
              src="../../../public/assets/Rectangle16-2.png"
              alt="Imagem 3"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image
              src="../../../public/assets/Rectangle16-4.png"
              alt="Imagem 4"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image
              src="../../../public/assets/Rectangle16.png"
              alt="Imagem 5"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image
              src="../../../public/assets/Rectangle16-5.png"
              alt="Imagem 6"
              objectFit="cover"
              width="100%"
              height="auto"
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
          textAlign="left"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Desafios e Barreiras Enfrentadas
        </Heading>
      </Flex>

      <Box p={[4, 6, 8]} mx="auto" width="80%">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={40}
        >
          <Box mb={8}>
            <Heading
              variant="PrimaryTitle"
              mb={2}
              fontSize={{ base: "xl", md: "2xl" }}
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
      </Box>
      <Flex
        h="100vh"
        w="full"
        direction="column"
        justify="center"
        align="center"
        bg="url(assets/Background.png)"
        bgRepeat="no-repeat"
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
          width= "100%"
          height= "70%"
          background= "rgb(063844)" /* Cor de fundo semi-transparente */
          backdrop-filter= "blur(10px)" /* Efeito de desfoque */
          border-radius= "10px;"
          padding="20px"
          box-shadow= "0 4px 8px rgba(0, 0, 0, 0.9)"
          color= "#333"
          text-align= "center"
        >
          <Heading mb={4}>Título Centralizado</Heading>
          <Text>
            Este é um exemplo de texto dentro da Box centralizada na página.
            Você pode ajustar o conteúdo e o estilo conforme necessário.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
