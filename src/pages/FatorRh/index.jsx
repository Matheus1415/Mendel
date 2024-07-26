import { Flex, Text, Container, Box, Image } from "@chakra-ui/react"
export const FatorRh = () => {
    return(
        <Flex>
           <Container maxWidth='4x1' >
                <Box as="section" h='150px'>
                    <Text variant='h1' textAlign='center' color='Terciario'>Fator RH</Text>
                </Box>
                <Box as="section">
                    <Text variant='h3' textAlign='right' color='Terciario'>O que é fator Rh?</Text>
                    <Text variant='p' textAlign='justify' marginRight='0' marginLeft='auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil consectetur fugit sequi quam doloribus, velit facere quo ratione culpa esse ea odio minima architecto pariatur fugiat asperiores odit neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit saepe repellendus quam amet adipisci magnam autem alias! Natus, quam at molestias rerum amet deserunt mollitia distinctio deleniti? Adipisci, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati accusantium, laborum harum enim sapiente et unde iure est ullam deleniti quisquam impedit ducimus nesciunt, accusamus id veniam a dolore?</Text>
                </Box>
           </Container>
        </Flex>
    )
}