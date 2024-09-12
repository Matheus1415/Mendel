import {Card, CardBody, CardHeader, Flex, Grid, Heading, HStack, Stack, Text} from '@chakra-ui/react'
import { VerticalBar } from './VerticalBar'
export function Curiosities () {
return ( 
    <Flex aling="Center" direction="column" bg='#02161F' marginTop='40px'>
        <Heading textAlign='center' fontSize={[25, 25, 40, 40, 40]} fontWeight='275' margin='10px' bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text'>
            CURIOSIDADES SOBRE MENDEL
        </Heading>

        <Grid bg='#02161F' templateColumns={['repeat(1, 523px)', 'repeat(1, 523px)', 'repeat(1, 523px)','repeat(2, 523px)']} margin='20px auto' >
            <Stack>
                <HStack>
                    <VerticalBar/>
                    <Card maxWidth={['400', '523']} bg='#02161F'>
                        <CardHeader color='#EBEBEB' fontWeight='275' fontSize={['20px','25px']}>
                            Abade do Mosteiro
                        </CardHeader>
                        <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth={['360', '523']} lineHeight='29.75px'> 
                            <Text>                             
                                Gregor Mendel foi abade do Mosteiro de Brünn a partir de 1851, onde supervisionou a administração e as atividades diárias enquanto continuava suas pesquisas com plantas de ervilha.
                            </Text>
                        </CardBody>
                    </Card> 
                </HStack> 
            </Stack>

            <Stack>
                <HStack spacing='0px'>
                    <VerticalBar/>
                    <Card maxWidth={['400', '523']} bg='#02161F'>
                        <CardHeader color='#EBEBEB' fontWeight='273' fontSize={['20px','25px']}>
                            Apicultor
                        </CardHeader>
                        <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth={['360', '523']} lineHeight='29.75px'>
                            <Text>                   
                            Gregor Mendel era apicultor e estudou o comportamento das abelhas e a polinização no jardim do mosteiro. Seu interesse na apicultura refletia sua curiosidade científica.
                            </Text>
                        </CardBody>
                    </Card>
                </HStack> 
            </Stack>

            <Stack>
                <HStack spacing='0px'>
                    <VerticalBar/>
                    <Card maxWidth={['400', '523']} bg='#02161F'>
                        <CardHeader color='#EBEBEB' fontWeight='273' fontSize={['20px','25px']}>
                            Jardim do Mosteiro
                        </CardHeader>
                        <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth={['360', '523']} lineHeight='29.75px'>
                            <Text>
                                Gregor Mendel usou o jardim do Mosteiro de Brünn para suas pesquisas, cultivando plantas como ervilhas e praticando apicultura. O espaço foi fundamental para seus experimentos sobre hereditariedade e polinização.
                            </Text>
                        </CardBody>
                    </Card>
                </HStack> 
            </Stack>

            <Stack>
                <HStack spacing='0px'>
                    <VerticalBar/>
                    <Card maxWidth={['400', '523']} bg='#02161F'>
                        <CardHeader color='#EBEBEB' fontWeight='273' fontSize={['20px','25px']}>
                            Monge Agostiniano
                        </CardHeader>
                        <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth={['360', '523']} lineHeight='29.75px'>
                            <Text>                          
                                Como monge agostiniano, Gregor Mendel entrou na Ordem em 1843 e foi ordenado sacerdote em 1847. Ele supervisionou o Mosteiro de Brünn e dedicou seu tempo livre à pesquisa científica sobre hereditariedade.
                            </Text>
                        </CardBody>
                    </Card>
                </HStack> 
            </Stack>

            <Stack>
                <HStack spacing='0px'>
                    <VerticalBar/>
                    <Card maxWidth={['400', '523']} bg='#02161F' >
                        <CardHeader color='#EBEBEB' fontWeight='273' fontSize={['20px','25px']}>
                            Problemas de Saúde
                        </CardHeader>
                        <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth={['360', '523']} lineHeight='29.75px'>
                            <Text>
                                Gregor Mendel teve problemas de saúde, incluindo resfriados frequentes, problemas respiratórios e pressão alta, que afetaram sua capacidade de trabalho nos últimos anos de sua vida.
                            </Text>
                        </CardBody>
                    </Card>
                </HStack> 
            </Stack>

            <Stack>
                <HStack spacing='0px'>
                    <VerticalBar/>
                    <Card maxWidth={['400', '523']} bg='#02161F'>
                        <CardHeader color='#EBEBEB' fontWeight='273' fontSize={['20px','25px']}>
                            Origem Humilde
                        </CardHeader>
                        <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth={['360', '523']} lineHeight='29.75px'>
                            <Text>                               
                                Gregor Mendel nasceu em 1822 em Heinzendorf, numa família humilde de agricultores. Sua origem modesta contrastava com o impacto de suas contribuições científicas.
                            </Text>
                        </CardBody>
                    </Card>
                </HStack> 
            </Stack>
        </Grid>
    </Flex>
    )
}
