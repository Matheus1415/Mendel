import { Box, Button, Flex, Heading, Image, Text, UnorderedList, ListItem, useBreakpointValue } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';

export const Alelos = () => {
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });
    const textFontSize = useBreakpointValue({ base: 'md', md: 'lg' });

    return (
        <>
            <LayoutIntroduction query="VARIAÇÕES">VARIAÇÕES DO MODELO MENDERIANO</LayoutIntroduction>
            <Box as='section' w='100%' minHeight="64rem" p={4}>
                <Heading variant={"PrimaryTitle"} textAlign={"center"} mt={"6.75rem"} mb={"4rem"} fontSize={headingFontSize}>
                    CATEGORIAS DE ALELOS
                </Heading>
                <Flex justifyContent={"space-around"} wrap="wrap">
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"2.25rem"} maxWidth={"25.5rem"}>
                        <Heading color="Primary" variant={"PrimaryTitle"}>
                            Múltiplos
                        </Heading>
                        <Image src='/assets/diploid-cell.png' alt='Célula Diploide' />
                        <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={textFontSize} fontWeight={"275"}>
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it...</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets...</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"2.25rem"} maxWidth={"25.5rem"}>
                        <Heading color="Primary" variant={"PrimaryTitle"}>
                            Letal
                        </Heading>
                        <Image src='/assets/haploid-cell.png' alt='Célula Haploide' />
                        <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={textFontSize} fontWeight={"275"}>
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it...</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets...</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
                <Flex justifyContent={"space-around"} wrap="wrap">
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"2.25rem"} maxWidth={"25.5rem"}>
                        <Heading color="Primary" variant={"PrimaryTitle"}>
                            Codominante
                        </Heading>
                        <Image src='/assets/diploid-cell.png' alt='Célula Diploide' />
                        <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={textFontSize} fontWeight={"275"}>
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it...</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets...</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"2.25rem"} maxWidth={"25.5rem"}>
                        <Heading color="Primary" variant={"PrimaryTitle"}>
                            Dominação
                            <Text variant={"Paragraph"} textAlign={"center"}>(Completa e incompleta)</Text>
                        </Heading>
                        
                        <Image src='/assets/haploid-cell.png' alt='Célula Haploide' />
                        <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={textFontSize} fontWeight={"275"}>
                            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</ListItem>
                            <ListItem>When an unknown printer took a galley of type and scrambled it...</ListItem>
                            <ListItem>It was popularised in the 1960s with the release of Letraset sheets...</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};
