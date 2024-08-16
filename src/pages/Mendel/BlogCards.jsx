import { Box, Button, Card, CardHeader, CardBody, Divider, Text, Link} from "@chakra-ui/react"
export function BlogCards({title, description, link, indexTransition}) {

  return(
    <Box>
        <Card w='523px' h='127px' backgroundColor='#0D6067' borderRadius='15px' 
        transform={`translateX(-${indexTransition}px) `} transition='transform 0.8s ease-in-out'>

            <CardHeader display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>           
                <Text fontSize='18px' fontWeight='300' color='#EBEBEB' lineHeight='27px'>
                    {title}
                </Text>
                <Button w='92px' h='30px' border='1px solid #EBEBEB' colorScheme='#0D6067' fontSize='12px' fontWeight='275' borderRadius='100px'><Link href={link} isExternal>Leia mais</Link></Button>
            </CardHeader>
        <Divider w='479px' h='1px' color='#E6E6E6' margin='0 auto'/>

            <CardBody color='#E6E6E6' fontSize='10px' fontWeight='275'>
                {description}
            </CardBody>
        </Card>
    </Box>
  )
}

BlogCards.defaultProps = {
    title: 'YOUR TITLE HERE',
    description: 'YOUR DESCRIPTION HERE',
    link: ''
}