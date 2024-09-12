import { Heading, Text, Flex, Box, useBreakpointValue, Image } from '@chakra-ui/react';

const BiographyFatorRh = ({
    title,
    isRowReverse,
    isImage = true,
    isImageSrc = '../public/img/DNA.png',
}) => {

    const flexDirection = useBreakpointValue({ base: "column", sm: "column", md: isRowReverse ? 'row-reverse' : 'row' });
    const contentWidth = useBreakpointValue({ base: "100%", sm: "100%", md: '50%' });
    const flexAlignContent = useBreakpointValue({ base: "center", sm: "center", md: '' });

    const styleText = {
        fontSize: '17px',
        fontWeight: 275,
        lineHeight: '25.5px',
        textAlign: 'justify'
    };
    const styleHeading = {
        fontSize: '40px',
        textAlign: 'left',
        fontWeight: 275,
    };

    return (
        <Box>
            <Flex
                mx="auto"
                maxW="1300px"
                p={8}
                gap={6}
                direction={flexDirection}
                justifyContent="space-between"
                alignItems="center"
            >
                {isImage && <Image w="lg" borderRadius="2xl" objectFit="cover" src={isImageSrc} alt="Imagem relacionada" />}
                <Flex
                    direction="column"
                    justifyContent="flex-start"
                    h="100%" w="100%"
                    maxW={contentWidth}
                    alignItems={flexAlignContent}
                >
                    <Box>
                        <Heading variant="SecondTitle" sx={styleHeading}>{title}</Heading>
                        <Text variant="Paragraph" sx={styleText}>
                            Karl Landsteiner, um imunologista austríaco, descobriu o sistema ABO de grupos sanguíneos em 1901. Ele também desempenhou um papel crucial na descoberta do fator Rh em 1940, em colaboração com Alexander S. Wiener. Suas descobertas revolucionaram a medicina transfusional, permitindo transfusões de sangue seguras e eficientes.
                        </Text>
                        <Text variant="Paragraph" sx={styleText}>
                            O trabalho de Landsteiner no fator Rh foi fundamental para o entendimento das complicações durante a gravidez, como a doença hemolítica do recém-nascido, que ocorre quando uma mãe Rh- carrega um feto Rh+.
                        </Text>
                        <Text variant="Paragraph" sx={styleText}>
                            Alexander S. Wiener, imunologista norte-americano, colaborou com Landsteiner na descoberta do fator Rh. Ele conduziu estudos detalhados que elucidaram a importância do fator Rh na compatibilidade sanguínea, contribuindo significativamente para a imunologia moderna.
                        </Text>
                        <Text variant="Paragraph" sx={styleText}>
                            Juntos, Landsteiner e Wiener ajudaram a moldar a compreensão da compatibilidade sanguínea e sua importância em transfusões e gravidezes, salvando inúmeras vidas através de suas descobertas.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default BiographyFatorRh;
