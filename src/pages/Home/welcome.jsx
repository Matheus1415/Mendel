import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
<<<<<<< HEAD

export const Welcome = () => {
    const HboxIntro = useBreakpointValue({ sm: "800px", md: "1000px" });
    const flexAlign = useBreakpointValue({ base: "center", md: "flex-start" });
    const bemVindofontSize = useBreakpointValue({ base: "25px", md: "50px" });
    const mendelfontSize = useBreakpointValue({ base: "60px", md: "150px" });
    return(
        <Box
            bgImage="url('/pgHome/Background_s/1_Banner.jpg')" 
            bgPosition="left center"
=======
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Welcome = () => {
    const HboxIntro = useBreakpointValue({ base: "800px", md: "1000px" });
    const flexAlign = useBreakpointValue({ base: "center", md: "flex-start" });
    const bemVindofontSize = useBreakpointValue({ base: "25px", md: "50px" });
    const mendelfontSize = useBreakpointValue({ base: "60px", md: "150px" });
    const textAlign = useBreakpointValue({ base: "center", md: "left" });
    const padding = useBreakpointValue({ base: "4", md: "12" });

    return (
        <Box
            bgImage="url('/pgHome/Background_s/1_Banner.jpg')" 
            bgPosition="center center"
            bgAttachment="fixed"
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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
<<<<<<< HEAD
                    textAlign="left"
                    p={12}
                    w="80%"
                >
                    <Box>
=======
                    textAlign={textAlign}
                    p={padding}
                    w={{ base: "100%", md: "80%" }}
                >
                    <MotionBox
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                    >
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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
<<<<<<< HEAD
                            maxW={640}
                            textAlign="justify"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eius magni ipsum dolor enim in eos officia explicabo nulla nisi. Reprehenderit quas eveniet, iure quaerat officia quasi cum perferendis harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto animi fugiat, atque, aspernatur suscipit itaque rerum repellat illum, voluptatibus minima fugit aut tempore mollitia quae id quisquam accusantium asperiores.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
=======
                            maxW={{ base: "100%", md: "640px" }}
                            textAlign="justify"
                        >
                            Bem-vindo ao Mendel, sua fonte definitiva para explorar o mundo da genética! Aqui, você encontrará uma vasta gama de recursos e ferramentas para entender os fundamentos da genética e suas aplicações modernas. Nossa missão é proporcionar uma experiência de aprendizado envolvente e acessível, ajudando você a descobrir o fascinante mundo dos genes e da hereditariedade. Navegue pelos nossos conteúdos e mergulhe em uma jornada de conhecimento e descoberta.
                        </Text>
                    </MotionBox>
                </Flex>
            </Flex>
        </Box>
    );
}
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
