import { Flex, Text, Container, Box, Image } from "@chakra-ui/react"
export const FatorRh = () => {
    return(
        <Flex>
           <Container maxWidth='4x1'>
                <Box as="section" mb='20px'>
                    <Text variant='h2' textAlign='center'>Fator Rh</Text>
                    <Text variant='p' textAlign='justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni natus, repudiandae reprehenderit hic quibusdam, eum inventore iusto assumenda minus odio accusantium ratione. Cum tempore iste sapiente reprehenderit nisi officiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, earum alias! Sapiente pariatur vitae ratione consequuntur debitis, rerum fugiat quisquam molestiae reprehenderit harum itaque alias, impedit quos vel enim assumenda.
                    </Text>
                </Box>
                <Text variant='h2' textAlign='center' mb='10px'>Video sobre Fator Rh</Text>
                <Flex justify='space-between'>
                    <Box id="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/DhndJ4R5GwA?si=0XeurXPyU1ppsV0p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Box>
                    <Box id="image">
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                </Flex>
           </Container>
        </Flex>
    )
}