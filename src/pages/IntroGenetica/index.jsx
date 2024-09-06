import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { LayoutIntroduction } from "../../layout/LayoutIntroduction";

export const IntroGenetica = () => {
    return (
        <>
            <LayoutIntroduction query="GENÉTICA">
                INTRODUÇÃO SOBRE GENÉTICA
            </LayoutIntroduction>
            <Box
                as="section"
                w="100%"
                minHeight="50rem"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                textAlign="left"
            >
                <Box
                    flex="1"
                    p={{ base: "1rem", md: "2rem" }}
                    borderRight={{ base: "none", md: "1px solid gray.300" }}
                >
                    <Image
                        src="/assets/dnaBig.svg"
                        alt="Imagem de DNA"
                        maxW="100%"
                        h="auto"
                    />
                </Box>
                <Box
                    flex="1"
                    p={{ base: "1rem", md: "2rem" }}
                >
                    <Heading variant="PrimaryTitle">O QUE É GENÉTICA?</Heading>
                    <Text variant="Paragraph">
                        Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma caixa de tipos e a embaralhou para fazer um livro de amostras de tipos. Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma caixa de tipos e a embaralhou para fazer um livro de amostras de tipos. Ao contrário da crença popular, Lorem Ipsum não é apenas um texto aleatório. Tem raízes em um pedaço de literatura latina clássica de 45 a.C., tornando-o mais de 2000 anos.
                    </Text>

                    <Heading variant="PrimaryTitle">HISTÓRIA</Heading>
                    <Text variant="Paragraph">
                        Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma caixa de tipos e a embaralhou para fazer um livro de amostras de tipos. Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma caixa de tipos e a embaralhou para fazer um livro de amostras de tipos.
                    </Text>

                    <Heading variant="PrimaryTitle">IMPORTÂNCIA</Heading>
                    <Text variant="Paragraph">
                        Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma caixa de tipos e a embaralhou para fazer um livro de amostras de tipos. Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma caixa de tipos e a embaralhou para fazer um livro de amostras de tipos.
                    </Text>
                    
                    <Heading variant="PrimaryTitle">ÁREAS DE ESTUDO</Heading>
                    <Button variant="readMore">
                        <Image src="public/assets/introGenetica/areaEstudo/geneticaClassica.svg"></Image>
                        Genética Clássica (Mendeliana)
                    </Button>
                    <Button variant="readMore">
                        <Image src="public/assets/introGenetica/areaEstudo/farmacogenetica.svg"></Image>
                        Farmacogenética
                    </Button>
                    <Button variant="readMore">
                        <Image src="public/assets/introGenetica/areaEstudo/geneticaMolecular.svg"></Image>
                        genética molecular
                    </Button>
                
                </Box>
            </Box>
        </>
    );
};
