<<<<<<< HEAD
import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";
import contentHome from "../../data/contentHome.json";

export const DiveUiverse = () => {
    const Hbox = useBreakpointValue({ md: "100%", lg: "1200px" });
    const maxHBox = useBreakpointValue({ mb: "100%", lg: "1000px" });
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });


    return(
=======
import { Flex, Box, Text, useBreakpointValue, Button } from "@chakra-ui/react";
import contentHome from "../../data/contentHome.json";
import { motion } from "framer-motion";

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

    return (
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
        <Box 
            h={Hbox} 
            maxH={maxHBox}
            w="100%" 
            bgImage="url('/pgHome/Background_s/2_Introducao.png')" 
            bgPosition="left center"
            bgRepeat="no-repeat"
            bgSize="cover"
<<<<<<< HEAD
            p={10}
        >
            <Flex direction={flexDirection} wrap="wrap" justify="center" align="center">
                <Box 
                    bgImage="url('/pgHome/2_Introducao.png')" 
=======
            p={padding}
        >
            <Flex direction={flexDirection} wrap="wrap" justify="center" align="center">
                <BoxImage
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    bgImage="url('/pgHome/2_Introducao.png')"
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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
<<<<<<< HEAD
                    p={20}
                >
                    <Text fontSize={28} color="#0079879c">CONHEÇA-NOS</Text>
                    <Box fontSize={48}>
                        MERGULHE NO UNIVERSO DA <Text as="span" color="#0079879c" fontSize={48}>GENÉTICA</Text>
                    </Box>
                    <Text fontSize={16}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
=======
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
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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
<<<<<<< HEAD
            <Flex w="100%" direction="column" color="white"  >
                <Text fontSize={30} fontWeight={300}>POR QUE ESTUDAR COM MENDEL?</Text>
                <Flex wrap="wrap" gap={10}>
                    {
                        contentHome.map((content, index) => 
                            <Box key={index} bg="Dark" p={3} borderRadius={10} _hover={{transform: "scale(1.05)",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                {content.conteudo}
                            </Box> 
                        )
                    }
                    <Box bg="Dark" p={3} borderRadius={10}>
                        Conteúdos de qualidade
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
=======
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
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
