import { Text, Heading, Image, Box, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import { LayoutIntroduction } from "../../layout/LayoutIntroduction";
import { LayoutBaseModify } from "../../layout/LayoutBaseModify";

export const Alelos = () => {
    return (
        <>
            <LayoutIntroduction query="alelos">
                Classificação dos alelos
            </LayoutIntroduction>
            <LayoutBaseModify>
                <Box as='section' w='100%' h="64rem">
                    <Heading variant={"PrimaryTitle"} textAlign={"center"} mt={"6.75rem"} mb={"4rem"}>
                        Alelos X Alelos Múltiplos
                    </Heading>
                    <Flex justifyContent={"space-around"} alignItems="flex-start">
                        <Box
                            margin={"10px"}
                            marginBottom={"0"}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"2.25rem"}
                            maxWidth={"25.5rem"}
                        >
                            <Heading color="Primary" variant={"PrimaryTitle"}>
                                Alelos
                            </Heading>
                            <Image src='/assets/diploid-cell.png' alt='Alelos'/>
                            <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={"17px"} fontWeight={"275"}>
                                <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                                <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box
                            margin={"0"}
                            marginBottom={"0"}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"2.25rem"}
                            maxWidth={"27.5rem"}
                        >
                            <Heading color="Primary" variant={"PrimaryTitle"} textAlign={"center"}>
                                Alelos Múltiplos
                            </Heading>
                            <Image src='/assets/haploid-cell.png' alt='Alelos Múltiplos' />
                            <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={"17px"} fontWeight={"275"}>
                                <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                                <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                                <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
                            </UnorderedList>
                        </Box>
                    </Flex>
                </Box>
                    
                <Heading variant='PrimaryTitle'>Alelo Letal</Heading>
                <Text variant="Paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commodi id assumenda labore. Blanditiis voluptatum error repellendus provident modi.
                </Text>

                <Heading variant='PrimaryTitle'>Alelo Codominante</Heading>
                <Text variant="Paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commod.
                </Text>

                <Heading variant='PrimaryTitle'>Alelo de Dominação Completa</Heading>
                <Text variant="Paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commod.
                </Text>
            </LayoutBaseModify>
        </>
    );
};
