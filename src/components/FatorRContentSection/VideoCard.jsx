import {Box, Card, CardHeader, CardBody, CardFooter, Image, Button, Text, Link} from "@chakra-ui/react"

export function VideoCard({imageTumb='', titleVideo='Your Title here', link='#', descriptionVideo='Your description here', index}) {
    return(
        <Box>
            <Card w='300px' h='470px' bg='#0D6067' transform={`translateX(-${index}px)`} transition='transform 0.5s'>
                <CardHeader w='100%' h='70%' marginBottom='10px'>
                    <Image src={imageTumb} w='100%' h='100%' borderRadius='15px'/>
                </CardHeader>
                <CardBody color='#EBEBEB' display='flex' justifyContent='space-between'>
                    <Text fontSize='18px'>{titleVideo}</Text>
                    <Button w='100px' h='25px' border='1px solid #EBEBEB' colorScheme='#0D6067' fontSize='12px' fontWeight='275' borderRadius='100px'><Link href={link} target="blank">Assista</Link></Button>
                </CardBody>
                <CardFooter fontSize='12px' color='#EBEBEB'>{descriptionVideo}</CardFooter>
            </Card>
        </Box>
    )
}