import { Box, Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react';

export const Chromossomes = () => {
    return (
        <Box as='section' mb='10rem' bgImage="/assets/bgFundamentos/bgChromo.jpg" bgRepeat='no-repeat' bgPosition="center" bgSize="cover">
            <Heading variant="PrimaryTitle" textAlign="center" mb="5rem" mt={{base:"2rem", lg:"0"}} pt="10rem">
                CROMOSSOMOS
            </Heading>
            <Flex
                textAlign='center'
                alignItems='center'
                justifyContent='space-around'
                direction={{base:'column-reverse', lg:'row'}}
            >
                <Box
                    maxWidth={{base:'55rem', lg:'25rem'}}
                    marginTop='2rem'
                    p={{base:"1rem"}}
                >
                    <Text variant="Paragraph">Os cromossomos são estruturas localizadas no núcleo das células eucarióticas, compostas por DNA e proteínas. Eles carregam a informação genética necessária para o desenvolvimento, funcionamento e reprodução dos organismos vivos.</Text>
                    <Text variant="Paragraph">Em humanos, cada célula somática contém 23 pares de cromossomos, totalizando 46 cromossomos. Desses, 22 pares são autossomos e um par é de cromossomos sexuais, que determinam o sexo biológico do indivíduo.</Text>
                    
                    <Text variant="Paragraph"><strong>CROMOSSOMOS HOMÓLOGOS:</strong> São pares de cromossomos, um herdado do pai e outro da mãe, que possuem a mesma sequência de genes, mas podem ter alelos diferentes. Eles são responsáveis pela recombinação genética durante a meiose, o que aumenta a variabilidade genética.</Text>
                    <Text variant="Paragraph">Durante a meiose, os cromossomos homólogos se emparelham e podem trocar segmentos de DNA, um processo conhecido como crossing-over, que é essencial para a diversidade genética.</Text>
                </Box>

                <Box 
                    maxHeight='29rem' 
                    maxWidth='30rem' 
                    position='relative'
                >
                    <Image src='/assets/cromossome-image.png' alt="Cromossomos" />
                    <Tooltip label='Esta parte denomina-se Telômero' hasArrow placement='top' maxW='fit-content'>
                        <Box 
                            h='14%'
                            w='12%'
                            borderRadius='40%'
                            position='absolute'
                            top='2%'
                            left='1%'
                        ></Box>
                    </Tooltip>
                    <Tooltip label='Esta parte denomina-se Telômero' hasArrow placement='top' maxW='fit-content'>
                        <Box 
                            h='14%'
                            w='13%'
                            borderRadius='40%'
                            position='absolute'
                            top='3%'
                            left='41%'
                        ></Box>
                    </Tooltip>
                    <Tooltip label='Esta parte denomina-se Telômero' hasArrow placement='bottom' maxW='fit-content'>
                        <Box 
                            h='15.7%'
                            w='15%'
                            borderRadius='40%'
                            position='absolute'
                            top='82.5%'
                            left='1.5%'
                        ></Box>
                    </Tooltip>
                    <Tooltip label='Esta parte denomina-se Telômero' hasArrow placement='bottom' maxW='fit-content'>
                        <Box 
                            h='16%'
                            w='14%'
                            borderRadius='40%'
                            position='absolute'
                            top='83%'
                            left='39.3%'
                        ></Box>
                    </Tooltip>
                    <Tooltip label='Esta parte denomina-se Centrômero' hasArrow placement='right' maxW='fit-content'>
                        <Box 
                            h='14%'
                            w='17%'
                            borderRadius='50%'
                            position='absolute'
                            top='42.5%'
                            left='18.5%'
                        ></Box>
                    </Tooltip>
                    <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='left' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO SUPERIOR DO CROMOSSMO)
          h='32%'
          w='10.5%'
          top='15%'
          left='7%'
          position='absolute'
          transform='auto'
          rotate='-25deg'
          borderTopLeftRadius='15%'
          borderBottomLeftRadius='60%'
          borderBottomRightRadius='36%'
        ></Box>
        </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='right' maxW='fit-content'>
        <Box // BRAÇO DIREITO SUPERIOR DO CROMOSSMO)
          h='30%'
          w='10%'
          top='17.9%'
          left='38%'
          position='absolute'
          transform='auto'
          rotate='25deg'
          borderTopLeftRadius='15%'
          borderTopRightRadius='30%'
          borderBottomLeftRadius='20%'
          borderBottomRightRadius='60%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='left' maxW='fit-content'>
        <Box // BRAÇO ESQUERDO INFERIOR DO CROMOSSMO)
          w='10.5%'
          h='30%'
          top='53%'
          left='8%'
          position='absolute'
          transform='auto'
          rotate='25deg'
          borderTopLeftRadius='35%'
          borderBottomRightRadius='25%'
        ></Box>
      </Tooltip>
      <Tooltip label='Esta parte denomina-se Braço' hasArrow placement='right' maxW='fit-content'>
        <Box // BRAÇO DIREIRO INFERIOR DO CROMOSSMO)
          w='12%'
          h='32%'
          top='52%'
          left='36%'
          position='absolute'
          transform='auto'
          rotate='-22deg'
          borderTopLeftRadius='30%'
          borderTopRightRadius='45%'
          borderBottomLeftRadius='15%'
        ></Box>
      </Tooltip>
                </Box>
            </Flex>
        </Box>
    )
}
