import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Welcome = () => {
    const HboxIntro = useBreakpointValue({ sm: "800px", md: "1000px" });
    const flexAlign = useBreakpointValue({ base: "center", md: "flex-start" });
    const bemVindofontSize = useBreakpointValue({ base: "25px", md: "50px" });
    const mendelfontSize = useBreakpointValue({ base: "60px", md: "150px" });
    return(
        <Box
            bgImage="url('/pgHome/Background_s/1_Banner.jpg')" 
            bgPosition="center center"
            bgAttachment="fixed"
            bgRepeat="no-repeat"
            bgSize="cover"
            h={HboxIntro}
            width="100%"
        >
            <Flex direction="row" h="100%">
                <Flex
                    direction="column"
                    align={flexAlign}
                    justify="center"
                    color="white"
                    textAlign="left"
                    p={12}
                    w="80%"
                >
                    <MotionBox
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                    >
                        <Text 
                            fontWeight="200"
                            fontSize={bemVindofontSize}
                        >
                            SEJA BEM - VINDO(A) AO
                        </Text>
                        <Text
                            fontSize={mendelfontSize}
                            fontWeight="100"
                        >
                            MENDEL
                        </Text>
                        <Text
                            fontSize="md"
                            fontWeight="200"
                            maxW={640}
                            textAlign="justify"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eius magni ipsum dolor enim in eos officia explicabo nulla nisi. Reprehenderit quas eveniet, iure quaerat officia quasi cum perferendis harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto animi fugiat, atque, aspernatur suscipit itaque rerum repellat illum, voluptatibus minima fugit aut tempore mollitia quae id quisquam accusantium asperiores.
                        </Text>
                    </MotionBox>
                </Flex>
            </Flex>
        </Box>
    )
}