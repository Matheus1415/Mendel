import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const GenoPhenoTypes = () => {
    return (
        <Box 
            as='section' 
            bgImage="/assets/bgFundamentos/bgGenoPheno.jpg" 
            bgRepeat='no-repeat' 
            bgPosition="center" 
            bgSize="cover"
        >
            <Heading // TÍTULO DA SEÇÃO
                variant="PrimaryTitle"
                textAlign="center"
                pt="6.75rem"
                mt="0"
                mb="4rem"
            >
                FENÓTIPO E GENÓTIPO
            </Heading>
            <Flex 
                justifyContent="space-around" 
                direction={{base:'column', lg:'row'}} 
                alignItems={{base:'center'}}
                pb='2rem'
            >
                <Box // BOX DO FENÓTIPO
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="2.25rem"
                    maxWidth="25.5rem"
                    p={{base:"1rem"}}
                >
                    <Heading color="Primary" variant="SecondTitle">
                        FENÓTIPO
                    </Heading>
                    <Text variant='Paragraph' textAlign='justify'>
                        O fenótipo refere-se às características observáveis de um organismo, como altura, cor dos olhos, e tipo sanguíneo. Essas características resultam da interação entre o genótipo, que é a constituição genética do organismo, e fatores ambientais. O fenótipo pode ser influenciado por mutações nos genes, interações genéticas, e condições externas.
                    </Text>
                </Box>

                <Box // BOX DO GENÓTIPO
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="2.25rem"
                    maxWidth="25.5rem"
                    p={{base:"1rem"}}
                >
                    <Heading color="Primary" variant="SecondTitle">
                        GENÓTIPO
                    </Heading>
                    <Text variant='Paragraph' textAlign='justify'>
                        O genótipo é o conjunto de genes que um organismo carrega. Ele determina o potencial genético do organismo e, em conjunto com o ambiente, influencia o fenótipo. Enquanto o fenótipo pode variar ao longo do tempo devido a fatores externos, o genótipo permanece constante ao longo da vida do organismo, a menos que ocorram mutações.
                    </Text>
                </Box>
            </Flex>    
        </Box>
    )
}
