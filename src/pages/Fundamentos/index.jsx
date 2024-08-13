import { Box, Button, Flex, Heading, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { CiTextAlignCenter } from 'react-icons/ci';

export const Fundamentos = () =>{
    return(
        <>
            <LayoutIntroduction query="FUNDAMENTOS"> FUNDAMENTOS DA GENÉTICA </LayoutIntroduction>

            <Box as='section' w='100%' h="64rem">
                <Heading variant={"PrimaryTitle"} textAlign={"center"} mt={"6.75rem"} mb={"4rem"}>CATEGORIAS DA CÉLULAS</Heading>
                <Flex justifyContent={"space-around"}>
                    <Box display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"2.25rem"}
                        maxWidth={"25.5rem"}>

                        <Heading color="Primary"
                         variant={"PrimaryTitle"}
                        >
                            CELULA DIPLOIDE

                        </Heading>
                        <Image src='public/assets/diploid-cell.png' ></Image>
                        <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={"17px"} fontWeight={"275"}>
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box position="relative"
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"2.25rem"}
                        maxWidth={"25.5rem"}>

                        <Heading color="Primary"
                         variant={"PrimaryTitle"}

                        >
                            CELULA HAPLOIDE

                            </Heading>
                        <Image src='public/assets/haploid-cell.png' ></Image>
                        <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={"17px"} fontWeight={"275"}>
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>

            <Box as='section' w='100%' h="64rem">
            <Heading variant={"PrimaryTitle"} textAlign={"center"} mt={"6.75rem"} mb={"4rem"}>CROMOSSOMOS</Heading>
                <Flex alignItems='center' justifyContent='space-around'>
                    <Box maxWidth='25rem'>
                        <Text variant={"Paragraph"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                        <Text variant={"Paragraph"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                        <Text variant={"Paragraph"}>CROMOSSOMOS HOMÓLOGOS: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</Text>
                        <Text variant={"Paragraph"}>t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                    </Box>
                    
                    <Image src='public/assets/cromossome-image.png' maxWidth='31rem' maxHeight='30rem'></Image>
                </Flex>
            </Box>

            {/* <Box h={"800px"} w={"800px"} mx='auto' position='relative'>
            <Image src='public/assets/cromossome-image.png' h='100%' w={"100%"} />
            <Box bg='red.500' opacity='0.4' h='200px' w='200px' position='absolute' top='0'></Box>
            </Box> */}
        </>
    )
}