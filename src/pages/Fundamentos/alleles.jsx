import { Box, Flex, Image, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

export const Alleles = () => {
    const Walleles = useBreakpointValue({ base:"25rem", md:"50rem", lg:"67rem" });
    const Halleles = useBreakpointValue({lg:"36.8rem"});

    return (
        <Flex // SEÇÃO DE ALELOS
            as='section'
            direction='column'
            position='relative'
            justifyContent='space-evenly'
            alignItems='center'
            bgImage='/assets/bgFundamentos/bgAlleles.jpg'
            bgRepeat='no-repeat'
            bgSize='cover'
        >   
            <Flex // BOX TRANSPARENTE DE ALELOS
                direction={{ base:"column-reverse", lg:"row" }}
                marginTop='4rem'
                minWidth={Walleles}
                minHeight={Halleles}
                bgColor='#06384430'
                backdropFilter='auto'
                backdropBlur='1rem'
                padding={{ base:"3.625rem", lg:'5.625rem'}}
                borderRadius='1.87rem'
                gap='20px'
                alignItems='center'
            >
                <Box maxWidth='25rem'> {/* BOX DENTRO DA BOX TRANSPARENTE QUE CONTÉM O CONTEÚDO */}
                    <Heading variant='PrimaryTitle' textAlign={{base: 'center', lg:'left'}}>ALELOS</Heading>
                    <Text variant='Paragraph' textAlign='justify'>
                        Alelos são diferentes versões de um mesmo gene que podem surgir devido a mutações. Eles determinam características específicas, como a cor dos olhos ou o tipo sanguíneo. Cada indivíduo herda dois alelos para cada gene, um de cada progenitor, e esses alelos podem ser idênticos ou diferentes.
                    </Text>
                    <Text variant='Paragraph' textAlign='justify'>
                        A combinação dos alelos que um indivíduo possui influencia as características que ele exibe. Quando ambos os alelos para um gene são idênticos, o indivíduo é chamado de homozigoto para esse gene. Se os alelos são diferentes, o indivíduo é chamado de heterozigoto.
                    </Text>
                </Box>,
                <Image src='public/assets/ALELOS-image.png' maxH='20rem'></Image>
            </Flex>

            <Box // BOX ZIGOTO E HETEROZIGOTO
                maxWidth='45rem' 
                position='relative'
                mb='4rem'
            >
                <Heading 
                    variant='SecondTitle' 
                    fontSize={{base:'1.7rem', lg:'1.8rem'}} 
                    textAlign='center'
                >
                    DIFERENÇA DE HOMOZIGOTO E HETEROZIGOTO
                </Heading>
                <Flex 
                    justifyContent='space-between' 
                    alignItems={{base:'center'}} 
                    direction={{base:'column', lg:'row'}} 
                    gap='1rem' 
                >
                    <Box>
                        <Text variant='Paragraph' maxWidth='326px'>
                            Um homozigoto possui dois alelos idênticos para um gene específico, seja dominante ou recessivo. Isso significa que a característica determinada por esse gene será expressa de forma uniforme. Por exemplo, se um indivíduo herda dois alelos dominantes para a cor dos olhos, ambos marrons, ele terá olhos marrons.
                        </Text>
                    </Box>
                    <Box>
                        <Text variant='Paragraph' maxWidth='326px'>
                            Um heterozigoto, por outro lado, possui dois alelos diferentes para um gene específico. Nesse caso, a característica expressa pode depender de qual alelo é dominante. Por exemplo, se um indivíduo herda um alelo para olhos marrons (dominante) e um para olhos azuis (recessivo), ele provavelmente terá olhos marrons.
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}
