import {Heading, Flex, Box, useBreakpointValue, Text, Image} from '@chakra-ui/react';

const BiographyFatorRh = () => {
    const flexDirection = useBreakpointValue({ base: "column", sm: "column", md: "row" });
    const contentWidth = useBreakpointValue({  base: "100%",  sm: "100%", md: '50%'});
    const flexAlignContent = useBreakpointValue({  base: "center",  sm: "center", md: ''});

    return(
        
        <Box>
            <Flex
                mb="100px"
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
                        <Heading  variant="SecondTitle">Karl Landsteiner</Heading>
                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum facere, nobis sit libero ea voluptatem ducimus cupiditate quas vel nihil voluptatum ad, aliquid ipsa. Laborum sunt unde eius et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium sit. Ratione, quisquam? Quo asperiores beatae voluptatum? Deserunt, aliquid debitis voluptatem, quam sunt minima ipsa aperiam perspiciatis voluptas, molestias reprehenderit.
                        </Text>

                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum facere, nobis sit libero ea voluptatem ducimus cupiditate quas vel nihil voluptatum ad, aliquid ipsa. Laborum sunt unde eius et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium sit. Ratione, quisquam? Quo asperiores beatae voluptatum? Deserunt, aliquid debitis voluptatem, quam sunt minima ipsa aperiam perspiciatis voluptas, molestias reprehenderit.
                        </Text>

                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum facere, nobis sit libero ea voluptatem ducimus cupiditate quas vel nihil voluptatum ad, aliquid ipsa. Laborum sunt unde eius et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium sit. Ratione, quisquam? Quo asperiores beatae voluptatum? Deserunt, aliquid debitis voluptatem, quam sunt minima ipsa aperiam perspiciatis voluptas, molestias reprehenderit.
                        </Text>
                    </Box>
                </Flex>
                    <Image w="lg" borderRadius="2xl" objectFit="cover" src="./public/img/KarlLandsteiner.jpg" alt="KarlLandsteiner" />
            </Flex>
    
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
                        <Heading  variant="SecondTitle"> Alexander Solomon Wiener</Heading>
                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum facere, nobis sit libero ea voluptatem ducimus cupiditate quas vel nihil voluptatum ad, aliquid ipsa. Laborum sunt unde eius et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium sit. Ratione, quisquam? Quo asperiores beatae voluptatum? Deserunt, aliquid debitis voluptatem, quam sunt minima ipsa aperiam perspiciatis voluptas, molestias reprehenderit.
                        </Text>

                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum facere, nobis sit libero ea voluptatem ducimus cupiditate quas vel nihil voluptatum ad, aliquid ipsa. Laborum sunt unde eius et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium sit. Ratione, quisquam? Quo asperiores beatae voluptatum? Deserunt, aliquid debitis voluptatem, quam sunt minima ipsa aperiam perspiciatis voluptas, molestias reprehenderit.
                        </Text>

                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum facere, nobis sit libero ea voluptatem ducimus cupiditate quas vel nihil voluptatum ad, aliquid ipsa. Laborum sunt unde eius et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium sit. Ratione, quisquam? Quo asperiores beatae voluptatum? Deserunt, aliquid debitis voluptatem, quam sunt minima ipsa aperiam perspiciatis voluptas, molestias reprehenderit.
                        </Text>
                    </Box>
                </Flex>
                    <Image w="lg" borderRadius="2xl" objectFit="cover" src="./public/img/Wiener.png" alt="Wiener" />
            </Flex>




        </Box>
             
       
       
    );
}

export default BiographyFatorRh;