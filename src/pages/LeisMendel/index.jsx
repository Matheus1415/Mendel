import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { Box, Text, Heading, Image, UnorderedList, ListItem } from '@chakra-ui/react';

export const LeisMendel = () => {
    return (
        <>
            <LayoutIntroduction query="LEIS DE MENDEL">
                LEIS DE MENDEL
            </LayoutIntroduction>

            <Box
                h="100vh"
                backgroundImage="assets/LeisMendel/bg1.png"
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box padding="2rem">
                    <Heading variant="SecondTitle">
                        COMO MENDEL FEZ SEUS EXPERIMENTOS
                    </Heading>
                    <Text variant="Paragraph">
                        Gregor Mendel conduziu seus experimentos utilizando ervilhas pelos seguintes motivos:
                    </Text>
                    <UnorderedList
                        textAlign="left"
                        color="Primary"
                        fontSize="1.2rem"
                        fontWeight="normal"
                    >
                        <ListItem>Planta de fácil cultivo e desenvolvimento em curto período;</ListItem>
                        <ListItem>Produção de muitas sementes;</ListItem>
                        <ListItem>Rápido ciclo reprodutivo;</ListItem>
                        <ListItem>Facilidade de controlar a fecundação das plantas;</ListItem>
                        <ListItem>Capacidade de realizar autofecundação;</ListItem>
                    </UnorderedList>

                    <Heading variant="SecondTitle" mt="4rem">
                        Características observadas por Mendel:
                    </Heading>
                    <UnorderedList
                        textAlign="left"
                        color="Primary"
                        fontSize="1.2rem"
                        fontWeight="normal"
                    >
                        <ListItem>Cor da semente;</ListItem>
                        <ListItem>Textura da semente;</ListItem>
                        <ListItem>Cor da casca da semente;</ListItem>
                        <ListItem>Forma da vagem;</ListItem>
                        <ListItem>Cor da vagem;</ListItem>
                        <ListItem>Posição das flores;</ListItem>
                        <ListItem>Altura das flores;</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Image src="assets/LeisMendel/ervilha.svg" alt="Ilustração da ervilha" />
                </Box>
            </Box>

            <Box
                h="100vh"
                backgroundImage="assets/LeisMendel/bg2.png"
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="2rem"
            >
                <Heading 
                    variant="SecondTitle" 
                    bgGradient="linear(270deg, rgba(25, 191, 205, 0.5) 0%, rgba(13, 96, 103, 0.5) 100%)"
                    bgClip="text"
                    fontSize="4xl"
                    mb="2rem"
                >
                    1° LEI DE MENDEL
                </Heading>

                <Box 
                    display="flex" 
                    justifyContent="space-between" 
                    alignItems="center"
                    w="100%" 
                    maxW="1200px"
                    gap="2rem"
                >
                    <Box flex="1" color="white" textAlign="left">
                        <Text variant="Paragraph" mb="1rem">
                            A Primeira Lei de Mendel ou Lei da Segregação dos Fatores determina que cada característica é condicionada por dois fatores que se separam na formação dos gametas.
                        </Text>
                        <Text variant="Paragraph" mb="1rem">
                            Essa lei possui o seguinte enunciado: "Cada caráter é determinado por um par de fatores que se separam na formação dos gametas, indo um fator de cada par para cada gameta, que é, portanto, puro".
                        </Text>
                        <Text variant="Paragraph" mb="1rem">
                            Mendel fez essa dedução após constatar que as ervilhas mesmo híbridas - originárias da fecundação de duas linhagens diferentes -, a geração F1 era formada somente por ervilhas de sementes amarelas. Assim como, a geração F2 era constituída por sementes amarelas (75%) e de sementes verdes (25%).
                        </Text>
                        <Text variant="Paragraph" mb="1rem">
                            Resumidamente, as ervilhas da geração F1 amarelas carregavam o fator A, que se manifestou, sendo nomeado de dominante. Enquanto o fator b, que não se manifestou na F1, foi denominado de recessivo.
                        </Text>
                        <Text variant="Paragraph">
                            Tal lei afirma que cada característica do indivíduo é determinada por dois fatores (genes), que se separam na formação dos gametas e após a fecundação o fator de um indivíduo se une a de outro. Consequentemente é estabelecida uma relação de dominância, que faz com que uma das características seja expressa.
                        </Text>
                    </Box>
                    <Box flex="1">
                        <Image 
                            src="assets/LeisMendel/diagramaMendel.svg" 
                            alt="Diagrama de herança Mendel" 
                            boxSize="70%"
                            m="2rem" 
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                h="100vh"
                backgroundImage="assets/LeisMendel/bg3.png"
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="2rem"
            >
                <Heading 
                    variant="PrimaryTitle" 
                    bgGradient="linear(270deg, rgba(25, 191, 205, 0.5) 0%, rgba(13, 96, 103, 0.5) 100%)"
                    bgClip="text"
                    fontSize="4xl"
                    mb="2rem"
                >
                    2° LEI DE MENDEL
                </Heading>

                <Box 
                    display="flex" 
                    justifyContent="space-between" 
                    alignItems="center"
                    w="100%" 
                    maxW="1200px"
                    gap="2rem"
                >
                    <Box flex="1" color="white" textAlign="left">
                        <Text variant="Paragraph" mb="1rem">
                            Na segunda lei, Mendel também realizou o cruzamento de ervilhas de linhagens puras: sementes amarelas e lisas (fator dominante) com sementes verdes e rugosas (fator recessivo). Como ele esperava, a geração F1 foi composta por sementes amarelas e lisas.
                        </Text>
                        <Text variant="Paragraph" mb="1rem">
                            Em seguida, as ervilhas da F1 foram autofecundadas e descobriu-se na F2 diferentes fenótipos:
                        </Text>
                        <UnorderedList>
                            <ListItem>9 sementes amarelas e lisas;</ListItem>
                            <ListItem>3 sementes verdes e lisas;</ListItem>
                            <ListItem>3 sementes amarelas e rugosas;</ListItem>
                            <ListItem>1 semente verde e rugosa</ListItem>
                        </UnorderedList>
                        <Text variant="Paragraph">Essa lei possui o seguinte enunciado:</Text>
                        <Text variant="Paragraph">
                            “As diferenças de uma característica são herdadas independentemente das diferenças em outras características”.
                        </Text>
                        <Text variant="Paragraph">
                            Dessa forma, Mendel considerou que as características eram passadas de forma independente, ou seja, os fatores de características diferentes eram segregados independentemente, gerando indivíduos de características não relacionadas (uma semente amarela não necessariamente será lisa, e uma semente verde não necessariamente será rugosa).
                        </Text>
                    </Box>
                    <Box flex="1">
                        <Image 
                            src="assets/LeisMendel/diagramaMendel2.svg" 
                            alt="Diagrama de herança Mendel 2" 
                            boxSize="70%"
                            m="2rem" 
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
