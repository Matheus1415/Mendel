import React from 'react';
import { Box, Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { AleloCards } from '../../components/AleloCards';
import { Quiz } from '../../components/Quiz';
import questionMock from '../../data/question-mock-alelos.json'

export const Alelos = () => {
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

    const alelosCardProps = [
        {
            title: "Múltiplos",
            imageSrc: "/assets/alelos1.png",
            imageAlt: "Alelo Múltiplo",
            listItems: [
                "Embora cada característica hereditária em um indivíduo seja determinada por apenas dois alelos (um de cada progenitor), uma população pode ter múltiplos alelos para um mesmo gene. Isso significa que, além dos dois alelos presentes em um indivíduo, a população como um todo pode possuir várias variantes genéticas diferentes para esse gene. Esse fenômeno, conhecido como polimorfismo alélico, contribui para a variabilidade genética e a diversidade dentro da população. Por exemplo, o sistema de grupos sanguíneos ABO em humanos é um exemplo de polimorfismo alélico, onde três alelos (A, B e O) determinam os diferentes grupos sanguíneos."
            ]
        },
        {
            title: "Letal",
            imageSrc: "/assets/alelos2.png",
            imageAlt: "Alelo Letal",
            listItems: [
                "Alelodetermina a morte do indivíduo quando presente em homozigose, geralmente durante as fases iniciais do desenvolvimento. Esses alelos podem levar a doenças graves que frequentemente resultam na morte antes da reprodução, reduzindo a frequência desses alelos na população. Exemplos de alelos letais incluem aqueles associados à fibrose cística e à distrofia muscular de Duchenne, que são causadas por alelos recessivos letais."
            ]
        },
        {
            title: "Codominante",
            imageSrc: "/assets/alelos1.png",
            imageAlt: "Alelo Codominante",
            listItems: [
                "Os alelos codominantes são aqueles que, quando presentes em um indivíduo, ambos se manifestam igualmente no fenótipo. Um exemplo clássico é o sistema de grupos sanguíneos AB, onde os alelos A e B são codominantes, resultando na expressão de ambos os tipos de antígenos na superfície das células vermelhas do sangue. Isso contrasta com os alelos dominantes, onde apenas um alelo é expresso no fenótipo."
            ]
        },
        {
            title: "Dominância",
            subTitle: "(completa e incompleta)",
            imageSrc: "/assets/alelos2.png",
            imageAlt: "Alelo de Dominância (Completa e incompleta)",
            listItems: [
                "A dominância completa ocorre quando um alelo dominante mascara completamente a expressão do alelo recessivo. Em contraste, a dominância incompleta é quando o fenótipo de um heterozigoto é intermediário entre os fenótipos dos dois homozigotos. Por exemplo, nas flores de snapdragon, uma planta heterozigota exibe uma cor de flor rosa intermediária entre as flores vermelhas (homozigoto dominante) e brancas (homozigoto recessivo)."
            ]
        }
    ];

    return (
        <>
            <LayoutIntroduction query="VARIAÇÕES">
                VARIAÇÕES DO MODELO MENDELiano
            </LayoutIntroduction>
            <Box as="section" w="100%" minHeight="64rem" p={4}>
                <Heading
                    variant="PrimaryTitle"
                    textAlign="center"
                    mt="6.75rem"
                    mb="4rem"
                    fontSize={headingFontSize}
                >
                    CATEGORIAS DE ALELOS
                </Heading>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="stretch"
                >
                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={10}
                        mb="4rem"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {alelosCardProps.map((props, index) => (
                            <AleloCards key={index} {...props} />
                        ))}
                    </SimpleGrid>
                </Box>
                <Box textAlign="center">
                    <Quiz questions={questionMock}/>
                </Box>
            </Box>
        </>
    );
};
