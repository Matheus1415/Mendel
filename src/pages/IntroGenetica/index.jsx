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
                        A genética é o ramo da biologia que estuda os genes, a hereditariedade e a variação dos organismos. Ela examina como os traços e características são passados de uma geração para a próxima e como as variações genéticas contribuem para a diversidade biológica.
                    </Text>

                    <Heading variant="PrimaryTitle">HISTÓRIA</Heading>
                    <Text variant="Paragraph">
                        A história da genética remonta aos experimentos de Gregor Mendel no século XIX, onde ele descreveu as leis da hereditariedade através do estudo de plantas de ervilha. Desde então, a genética evoluiu significativamente, levando ao desenvolvimento da genética molecular, que desvenda a estrutura e função do DNA.
                    </Text>

                    <Heading variant="PrimaryTitle">IMPORTÂNCIA</Heading>
                    <Text variant="Paragraph">
                        A genética é fundamental para a compreensão da vida e da evolução. Ela tem aplicações em áreas como medicina, agricultura e biotecnologia, permitindo avanços em tratamentos médicos, melhoramento de culturas agrícolas e muito mais.
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
            <PreviousNextPageNavigator 
                previousPageRoute="/leis-de-mendel"
                nextPageRoute={"/fundamentos"}                
            />
        </>
    );
};
