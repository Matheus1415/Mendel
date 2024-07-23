import { Flex, Box, Text, useBreakpointValue, Button } from "@chakra-ui/react";
import { MenuMendel } from "../../components/Menu";
import contentHome from "../../data/contentHome.json";
import VLibras from "@djpfs/react-vlibras";

export const Home = () => {
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });
    const Wintroducao = useBreakpointValue({ base: "100%", md: "40%" });
    const WintroducaoBox = useBreakpointValue({ base: "100%", md: "60%" });
    const Hbox = useBreakpointValue({ md: "100%", lg: "1200px" });
    const HboxIntro = useBreakpointValue({ sm: "800px", md: "1000px" });
    const flexAlign = useBreakpointValue({ base: "center", md: "flex-start" });
    const bemVindofontSize = useBreakpointValue({ base: "25px", md: "50px" });
    const mendelfontSize = useBreakpointValue({ base: "60px", md: "150px" });
    const maxHBox = useBreakpointValue({ mb: "100%", lg: "1000px" });

    return (
        <>
            <Flex w="100%" bg="#02161F">
                <VLibras />
                <Flex direction="column" w="100%">
                    <MenuMendel />
                    <Box
                        bgImage="url('/pgHome/Background_s/1_Banner.jpg')" 
                        bgPosition="left center"
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
                                <Box>
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
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    
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
                            <Box 
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
                                p={20}
                            >
                                <Text fontSize={28} color="#0079879c">CONHEÇA-NOS</Text>
                                <Box fontSize={48}>
                                    MERGULHE NO UNIVERSO DA <Text as="span" color="#0079879c" fontSize={48}>GENÉTICA</Text>
                                </Box>
                                <Text fontSize={16}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Text>
                                <Button
                                    bg="Gradiente" 
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

                    <Box p={30} color="white">
                        <Flex w="100%" bg="#02161F" direction={flexDirection} justifyContent="center" gap={30}>
                            <Box w="100%" maxW={Wintroducao} p={10}>
                                <Text fontSize={40}>APRENDA COM FACILIDADE</Text>
                                <Text fontSize={16} textAlign="justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Text>
                                <Button
                                    bg="Gradiente" 
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
                                    APROFUNDE-SE
                                </Button>
                            </Box>

                            <Flex p={10} w="100%" maxW={WintroducaoBox} wrap="wrap" align="center" direction={flexDirection} align="center">
                                <Flex direction="row" wrap="wrap" justify={flexDirection} align="center" justifyContent="center">
                                    <Box maxW="50%" maxW="300px">
                                        <img src="/public/pgHome/img50.png" alt="" />
                                    </Box>
                                    <Box maxW="25%" maxW="128px">
                                        <img src="/public/pgHome/img25.png" alt="" />
                                    </Box>
                                    <Box maxW="25%" maxW="150px">
                                        <img src="/public/pgHome/img25_1.png" alt="" />
                                    </Box>
                                </Flex>

                                <Flex direction="row" wrap="wrap" justify={flexDirection} align="center" justifyContent="center">
                                    <Box maxW="25%" maxW="128px">
                                        <img src="/public/pgHome/img25_222.png" alt="" />
                                    </Box>
                                    <Box maxW="25%" maxW="150px">
                                        <img src="/public/pgHome/img25_2.png" alt="" />
                                    </Box>
                                    <Box maxW="50%" maxW="300px">
                                        <img src="/public/pgHome/img50_2.png" alt="" />
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default Home;
