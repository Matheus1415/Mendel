import { Flex, Text, Heading, Box, useBreakpointValue, Image } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import BiographyFatorRh from './BiographyFatorRh';
import { TableSection } from './TableSection';
import { ExamFactorRh } from './ExamFactorRh';
import { VideosAndBlogs } from './VideosAndBlogs';
import { PreviousNextPageNavigator } from '../../components/PreviousNextPageNavigator';

export const FatorRh = ({
    isImage = true,
    isRowReverse = true,
    isImageSrc = '../public/img/DNA.png',
    backgroundImage = '../public/img/background4.png'
}) => {

    // Responsividade
    const flexDirection = useBreakpointValue({ base: 'column', sm: 'column', md: isRowReverse ? 'row-reverse' : 'row' });
    const contentWidth = useBreakpointValue({ base: '100%', sm: '100%', md: '50%' });
    const flexAlignContent = useBreakpointValue({ base: 'center', sm: 'center', md: 'flex-start' });
    const imageWidth = useBreakpointValue({ base: '100%', md: 'lg' }); // Responsividade para a imagem

    return (
        <>
            <LayoutIntroduction query="Fator Rh">Fator Rh</LayoutIntroduction>

            <Box
                backgroundRepeat="repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundImage={`url(${backgroundImage})`}
            >
                <Flex
                    mx="auto"
                    maxW="1300px"
                    p={{ base: 4, md: 8 }} // Ajuste do padding para dispositivos menores
                    gap={6}
                    direction={flexDirection}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex
                        direction="column"
                        justifyContent="flex-start"
                        h="100%"
                        w="100%"
                        maxW={contentWidth}
                        alignItems={flexAlignContent}
                    >
                        <Heading variant="PrimaryTitle">
                            O que é
                        </Heading>
                        <Text variant="Paragraph">
                            O fator Rh é uma proteína que pode estar presente na superfície dos glóbulos vermelhos. Se uma pessoa tem essa proteína, ela é Rh positivo (Rh+). Se não a tem, é Rh negativo (Rh-). O fator Rh é importante em transfusões de sangue e durante a gravidez, pois incompatibilidades entre o fator Rh da mãe e do bebê podem causar complicações.
                        </Text>
                        <Text variant="Paragraph">
                            A descoberta do fator Rh, juntamente com o sistema ABO, foi crucial para a medicina transfusional, permitindo a realização de transfusões de sangue seguras. A incompatibilidade Rh pode levar a problemas graves, como a doença hemolítica do recém-nascido, onde o sistema imunológico da mãe ataca os glóbulos vermelhos do bebê.
                        </Text>
                        <Heading variant="PrimaryTitle">
                            Importância
                        </Heading>
                        <Text variant="Paragraph">
                            O fator Rh é especialmente importante durante a gravidez. Quando uma mãe Rh- carrega um bebê Rh+, seu corpo pode reconhecer as células do bebê como invasores e produzir anticorpos contra elas. Isso pode causar complicações, especialmente em gestações subsequentes. Hoje, esse problema pode ser tratado com uma injeção de imunoglobulina anti-D.
                        </Text>
                        <Text variant="Paragraph">
                            Além disso, o fator Rh é um dos principais determinantes para a compatibilidade sanguínea em transfusões. Pessoas com Rh+ podem receber sangue Rh+ ou Rh-, mas pessoas com Rh- devem receber sangue Rh-, para evitar reações imunológicas.
                        </Text>
                    </Flex>

                    {isImage && (
                        <Image
                            w={imageWidth}
                            ml={{ base: '0', md: '-100px' }}
                            borderRadius="2xl"
                            objectFit="cover"
                            src={isImageSrc}
                            alt="Imagem de fundo sobre DNA"
                        />
                    )}
                </Flex>

                <Heading
                    p={{ base: '30px', md: '50px' }} // Ajuste de padding para diferentes tamanhos de tela
                    textAlign="center"
                    variant="PrimaryTitle"
                    fontWeight={275}
                    bgGradient="linear(to-r, #0D066780, #19BFCD80)"
                    bgClip="text"
                >
                    Criadores
                </Heading>

                <BiographyFatorRh
                    title="Karl Landsteiner"
                    isImageSrc="../public/img/KarlLandsteiner.jpg"
                    isRowReverse={true}
                />
                <br />
                <BiographyFatorRh
                    title="Alexander S. Wiener"
                    isImageSrc="../public/img/Wiener.png"
                    isRowReverse={true}
                />

                <TableSection />
                <ExamFactorRh />
                <VideosAndBlogs />
            </Box>
            <PreviousNextPageNavigator 
                previousPageRoute="/variations"
                nextPageRoute="/sistema-abo"
            />
        </>
    );
};
