import { Flex, Box, Text } from "@chakra-ui/react";
import { MenuMendel } from "../../components/Menu";

export const Home = () => {
    return (
        <Box
            bgImage="url('/pgHome/Background_s/1_Banner.jpg')" 
            bgPosition="left center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="100vh"
            width="100%"
        >
            <Flex direction="row" h="100%">
                <MenuMendel />
                <Flex
                    direction="column"
                    align="flex-start"
                    justify="center"
                    h="100%"
                    color="white"
                    textAlign="left"
                    p={12}
                    w="80%"
                >
                    <Box>
                        <Text 
                            fontWeight="200"
                            fontSize="4xl"
                        >
                            SEJA BEM-VINDO(A) AO
                        </Text>
                        <Text
                            fontSize={120}
                            fontWeight="100"
                        >
                            MENDEL
                        </Text>
                        <Text
                            fontSize="md"
                            fontWeight="200"
                            maxW={400}
                            textAlign="justify"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eius magni ipsum dolor enim in eos officia explicabo nulla nisi. Reprehenderit quas eveniet, iure quaerat officia quasi cum perferendis harum!
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Home;
