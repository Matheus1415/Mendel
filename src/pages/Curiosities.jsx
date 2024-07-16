import {Card, CardBody, CardHeader, Flex, Grid, Heading, Text} from '@chakra-ui/react'
export function Curiosities () {
return ( 
    <Flex aling="Center" direction="column" bg='#02161F'>
       <Heading textAlign='center' fontSize='40px' fontWeight='275' margin='10px' bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text'>
            CURIOSIDADES SOBRE MENDEL
       </Heading>

        <Grid bg='#02161F' templateColumns='repeat(2, 523px)' margin='20px auto' >
        
                <Card maxWidth='523' bg='#02161F' >
                <CardHeader color='#EBEBEB' fontWeight='275' fontSize='25px'>
                    Abade do Mosteiro
                </CardHeader>
                <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth='493px' lineHeight='29.75px'>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </CardBody>
            </Card>

                <Card maxWidth='523' bg='#02161F'>
                <CardHeader color='#EBEBEB' fontWeight='273' fontSize='25px'>
                    Apicultor
                </CardHeader>
                <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth='493px' lineHeight='29.75px'>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </CardBody>
            </Card>

           
                <Card maxWidth='523' bg='#02161F'>
                <CardHeader color='#EBEBEB' fontWeight='273' fontSize='25px'>
                    Jardim do Mosteiro
                </CardHeader>
                <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth='493px' lineHeight='29.75px'>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </CardBody>
            </Card>

            
                <Card maxWidth='523' bg='#02161F'>
                <CardHeader color='#EBEBEB' fontWeight='273' fontSize='25px'>
                    Monge Agostiniano
                </CardHeader>
                <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth='493px' lineHeight='29.75px'>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </CardBody>
            </Card>

            
                <Card maxWidth='523' bg='#02161F'>
                <CardHeader color='#EBEBEB' fontWeight='273' fontSize='25px'>
                        Problemas de Saúde
                </CardHeader>
                <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth='493px' lineHeight='29.75px'>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </CardBody>
                </Card>

            
                <Card maxWidth='523' bg='#02161F'>
                <CardHeader color='#EBEBEB' fontWeight='273' fontSize='25px'>
                   Origem Humilde
                </CardHeader>
                <CardBody  textAlign='justify' color='#EBEBEB' fontWeight='273' fontSize='17px' maxWidth='493px' lineHeight='29.75px'>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                    </CardBody>
                </Card>
        </Grid>
    </Flex>
    )
}