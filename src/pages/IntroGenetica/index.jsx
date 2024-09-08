import React from "react";
import { Box, Image, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { LayoutIntroduction } from "../../layout/LayoutIntroduction";
import CustomButton from "../../components/customButton";
import { PreviousNextPageNavigator } from "../../components/PreviousNextPageNavigator";

export const IntroGenetica = () => {
    return (
        <>
            <LayoutIntroduction query="GENÉTICA">
                INTRODUÇÃO SOBRE GENÉTICA
            </LayoutIntroduction>
            <Box
                as="section"
                w="100%"
                m={0}
                p={0}
                minHeight="50rem"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                textAlign="left"
            >

                <Image
                    flex="1"
                    borderRight={{ base: "none", md: "1px solid gray.300" }}
                    src="/assets/dnaBig.svg"
                    alt="Imagem representando o DNA"
                    maxW="100%"
                    h="120rem"
                />
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

                    <Box>
                        <Box mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaClassica.svg"
                                altText="Genética Clássica (Mendeliana)"
                            >
                                Genética Clássica (Mendeliana)
                            </CustomButton>
                        </Box>

                        <SimpleGrid columns={2} spacing={4} mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/farmacogenetica.svg"
                                altText="Farmacogenética"
                            >
                                Farmacogenética
                            </CustomButton>
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaMolecular.svg"
                                altText="Genética Molecular"
                            >
                                Genética Molecular
                            </CustomButton>
                        </SimpleGrid>

                        <Box mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaPopulacoes.svg"
                                altText="Genética de Populações"
                            >
                                Genética de Populações
                            </CustomButton>
                        </Box>

                        <SimpleGrid columns={2} spacing={4} mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/genomica.svg"
                                altText="Genômica"
                            >
                                Genômica
                            </CustomButton>
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/epigenetica.svg"
                                altText="Epigenética"
                            >
                                Epigenética
                            </CustomButton>
                        </SimpleGrid>

                        <Box mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaConservacao.svg"
                                altText="Genética de Conservação"
                            >
                                Genética de Conservação
                            </CustomButton>
                        </Box>

                        <SimpleGrid columns={2} spacing={4} mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaNutricional.svg"
                                altText="Nutrigenômica"
                            >
                                Nutrigenômica
                            </CustomButton>
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaQuantitativa.svg"
                                altText="Genética Quantitativa"
                            >
                                Genética Quantitativa
                            </CustomButton>
                        </SimpleGrid>

                        <Box mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/ecologica.svg"
                                altText="Genética Ecológica"
                            >
                                Genética Ecológica
                            </CustomButton>
                        </Box>

                        <SimpleGrid columns={2} spacing={4} mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaFlorence.svg"
                                altText="Genética Florence"
                            >
                                Genética Florence
                            </CustomButton>
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaComparativa.svg"
                                altText="Genética Comparativa"
                            >
                                Genética Comparativa
                            </CustomButton>
                        </SimpleGrid>

                        <Box mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaDesenvolvimento.svg"
                                altText="Genética do Desenvolvimento"
                            >
                                Genética do Desenvolvimento
                            </CustomButton>
                        </Box>

                        <SimpleGrid columns={2} spacing={4} mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaMedica.svg"
                                altText="Genética Médica"
                            >
                                Genética Médica
                            </CustomButton>
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/geneticaEvolutiva.svg"
                                altText="Genética Evolutiva"
                            >
                                Genética Evolutiva
                            </CustomButton>
                        </SimpleGrid>

                        <Box mb="1rem">
                            <CustomButton
                                imageSrc="public/assets/introGenetica/areaEstudo/veterinaria.svg"
                                altText="Veterinária"
                            >
                                Veterinária
                            </CustomButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <a href="#opa">opaaaaaaaaaaaaaaaaaaaa</a>
            <PreviousNextPageNavigator 
                previousPageRoute="/sistema-abo"
            />
        </>
    );
};
