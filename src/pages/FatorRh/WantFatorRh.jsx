import { Box, Flex, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const WantFatorRh = () => {

  const flexDirection = useBreakpointValue({ base: "column", sm: "column", md: "row-reverse" });
  const contentWidth = useBreakpointValue({  base: "100%",  sm: "100%", md: '50%'});
  const flexAlignContent = useBreakpointValue({  base: "center",  sm: "center", md: ''});

  return(
    
    <Box>
      <Flex
        mx="auto"
        maxW="1300px"
        p={8}
        gap={6}
        direction={ flexDirection }
        justifyContent="space-between"
      >
        <Flex
          direction="column"
          justifyContent="flex-start"
          maxW={ contentWidth }
          h="100%"
          w="100%"
          alignItems={ flexAlignContent }
        >
          <Box>
            <Heading 
              variant="PrimaryTitle"
              textAlign="right"
            >
              O que e
            </Heading>
            <Text variant="Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti cupiditate explicabo mollitia veritatis ipsa placeat aut, culpa nulla architecto dignissimos neque non debitis magni libero asperiores amet voluptatem excepturi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptates animi! Voluptate, officiis, libero deserunt quasi debitis facilis officia possimus, doloremque architecto ipsum a! Ducimus molestias in ex rem unde?</Text>
            <Text variant="Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam, dolor quae, tempora velit rem similique eligendi ipsum aliquid voluptatum commodi. Fugiat facilis et necessitatibus distinctio dolorum? Dolorem, ratione obcaecati.</Text>
            <Heading
            variant="PrimaryTitle"
            textAlign="right"
            >
              Importância
            </Heading>
            <Text variant="Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti cupiditate explicabo mollitia veritatis ipsa placeat aut, culpa nulla architecto dignissimos neque non debitis magni libero asperiores amet voluptatem excepturi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptates animi! Voluptate, officiis, libero deserunt quasi debitis facilis officia possimus, doloremque architecto ipsum a! Ducimus molestias in ex rem unde?</Text>
          </Box>
        </Flex>
        <Image w="lg" borderRadius="2xl" objectFit="cover" src="./public/img/DNA.png" alt="DNA.png" />
      </Flex>
    </Box>
  )
}

export default WantFatorRh;