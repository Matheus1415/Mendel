import { Flex, Box, Text, useBreakpointValue, Button } from "@chakra-ui/react";
import contentHome from "../../data/contentHome.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BoxImage = motion(Box);
const MotionText = motion(Text);
const AnimatedBox = motion(Box);

export const DiveUiverse = () => {
    const Hbox = useBreakpointValue({ base: "100%", lg: "1200px" });
    const maxHBox = useBreakpointValue({ base: "100%", lg: "1000px" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });
    const padding = useBreakpointValue({ base: "5", md: "20" });
    const fontSizeTitle = useBreakpointValue({ base: "24px", md: "48px" });
    const fontSizeSubtitle = useBreakpointValue({ base: "16px", md: "28px" });

    const navigate = useNavigate();

    return (
        <Box 
            h={Hbox} 
            maxH={maxHBox}
            w="100%" 
            bgImage="url('/pgHome/Background_s/2_Introducao.png')" 
            bgPosition="left center"
            bgRepeat="no-repeat"
            bgSize="cover"
            p={padding}
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
                />
                <Box 
                    w={WintroducaoBox} 
                    color="white"
                    p={padding}
                >
                    <MotionText
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        fontSize={fontSizeSubtitle} 
                        color="#0079879c"
                    >
                        CONHEÇA-NOS
                    </MotionText>
                    <MotionText
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        fontSize={fontSizeTitle}
                    >
                        MERGULHE NO UNIVERSO DA <Text as="span" color="#0079879c" fontSize={fontSizeTitle}>GENÉTICA</Text>
                    </MotionText>
                    <Text fontSize="16px">
                        A genética é uma ciência fascinante que explora como os traços e características são transmitidos de geração para geração. No Mendel, oferecemos uma oportunidade única para mergulhar nesse universo, entender os princípios fundamentais da hereditariedade e aplicar esse conhecimento em diversas áreas, desde a biologia molecular até a medicina personalizada. Junte-se a nós e descubra como a genética pode transformar a sua vida e a do mundo ao seu redor.
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
                        onClick={()=> {navigate("/mendel"); window.scrollTo(0, 0); }}
                    >
                        Saiba Mais
                    </Button>
                </Box>
            </Flex>
            <Flex w="100%" direction="column" color="white" p={padding} gap={10}>
                <Text fontSize={30} fontWeight={300} textAlign="center">POR QUE ESTUDAR COM MENDEL?</Text>
                <Flex wrap="wrap" gap={10} justify="center">
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
                            maxW={["100%", "45%"]}
                        >
                            {content.conteudo}
                        </AnimatedBox>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}
