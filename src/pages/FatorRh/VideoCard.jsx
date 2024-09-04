import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Flex, Box, background, Link } from '@chakra-ui/react'

export function VideoCard ({title, author, description, img, link, indexTransition}) {
    return(
        <Box>
            <Card w='342px' borderRadius='lg' bgColor="#0D6067" transform={`translateX(-${indexTransition}px) `} transition='transform 0.8s ease-in-out'>

                <CardHeader h={44} borderTopRadius='lg' bgColor="gray" backgroundSize="cover" backgroundRepeat='no-repeat' backgroundPosition="center" backdropFilter='auto' filter='brightness(0.9)' bgImage={img}>

                </CardHeader>
                <CardBody color='white' pb={2}>

                    <Flex direction='column' gap={5}>
                        <Box>
                            <Heading fontWeight={300} fontSize={18} lineHeight={7} textTransform="uppercase" noOfLines={1}>{title}</Heading>
                            <Heading fontWeight={275} fontSize={14} lineHeight={7} noOfLines={2}>{author}</Heading>
                        </Box>
                        <Text fontWeight={275} fontSize={10} lineHeight={4} noOfLines={[1,2,3,4]}>{description}</Text>
                    </Flex>

                </CardBody>
                <CardFooter borderBottomRadius='lg' justifyContent="end" pt={2}>

                    <Button _hover={{bgColor:'transparent'}} borderRadius={100} color="white" bgColor='transparent' borderWidth={1} fontWeight={300} px={8} py={21} textTransform='capitalize'><Link href={link} isExternal>Assista</Link></Button>

                </CardFooter>

            </Card>
        </Box>
    )
}