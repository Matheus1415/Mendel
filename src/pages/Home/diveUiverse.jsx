import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";
import contentHome from "../../data/contentHome.json";
import { motion } from "framer-motion";

const BoxImage = motion(Box);
const MotionText = motion(Text);
const AnimatedBox = motion(Box);

export const DiveUiverse = () => {
    const Hbox = useBreakpointValue({ md: "100%", lg: "1200px" });
    const maxHBox = useBreakpointValue({ mb: "100%", lg: "1000px" });
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });

    return(
        <Box 
            h={Hbox} 
            maxH={maxHBox}
            w="100%" 
            bgImage="url('/pgHome/Background_s/2_Introducao.png')" 
            bgPosition="left center"
            bgRepeat="no-repeat"
            bgSize="cover"
            p={10}
        >
            <Flex direction={flexDirection} wrap="wrap" justify="center" align="center">
                <BoxImage
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    bgImage="url('/pgHome/2_Introducao.png')"
                    bgPosition="left center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    maxW={600}
                    w={Wintroducao}
                    h={500}
                >
                </BoxImage>
                <Box 
                    w={WintroducaoBox} 
                    color="white"
                    p={20}
                >
                    <MotionText
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        fontSize={28} 
                        color="#0079879c"
                    >
                        CONHEÇA-NOS
                    </MotionText>
                    <MotionText
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        fontSize={48}
                    >
                        MERGULHE NO UNIVERSO DA <Text as="span" color="#0079879c" fontSize={48}>GENÉTICA</Text>
                    </MotionText>
                    <Text fontSize={16}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                    <Button
                        bg="Dark" 
                        color="white"
                        marginTop={10}
                        w={160}
                        fontWeight={300}
                        _hover={{
                            bg: "#0D6067", 
                            transform: "scale(1.05)",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
                        }}
                    >
                        Saiba Mais
                    </Button>
                </Box>
            </Flex>
            <Flex w="100%" direction="column" color="white">
                <Text fontSize={30} fontWeight={300}>POR QUE ESTUDAR COM MENDEL?</Text>
                <Flex wrap="wrap" gap={10}>
                {contentHome.map((content, index) => (
                    <AnimatedBox
                        key={index}
                        bg="Dark"
                        p={3}
                        borderRadius={10}
                        whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {content.conteudo}
                    </AnimatedBox>
                ))}
            </Flex>
            </Flex>
        </Box>
    )
}
