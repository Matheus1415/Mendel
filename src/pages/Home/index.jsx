import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";
import { MenuMendel } from "../../components/Menu";
import contentHome from "../../data/contentHome.json";
import VLibras from "@djpfs/react-vlibras";
import { IoBookOutline } from 'react-icons/io5';
import { GoDatabase } from 'react-icons/go';
import { PiMicroscope } from 'react-icons/pi';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import FormHome from "../../components/FormHome";
import { Link } from "react-router-dom";
import SlideShow from "../../components/SlideShow";
import menbros from '../../data/menbros.json';

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
    const WFlexServico = useBreakpointValue({ mb: "100%", lg: "250px" });
    const HServico = useBreakpointValue({ md: "100%", lg: "300px" });
    const HContato = useBreakpointValue({ sm: "100%", mb: "900px" });
    const HContatoContainer = useBreakpointValue({ sm: "900px", mb: "600px" });
    const WContato = useBreakpointValue({ sm: "100%", mb: "50%" });


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
                                    APROFUNDE-SE
                                </Button>
                            </Box>

                            <Flex p={10} w="100%" maxW={WintroducaoBox} wrap="wrap" align="center" direction={flexDirection}>
                                <Flex direction="row" wrap="wrap" justify={flexDirection} align="center" justifyContent="center">
                                    <Image w="50%" maxW="250px" src='/public/pgHome/img50.png' alt='Fundo azul brilhante' />
                                    <Image w="25%" maxW="118px" src='/public/pgHome/img25.png' alt='Olho azul' />
                                    <Image w="25%" maxW="160px" src='/public/pgHome/img25_1.png' alt='fundo azul com genese' />
                                </Flex>

                                <Flex direction="row" wrap="wrap" justify={flexDirection} align="center" justifyContent="center">
                                    <Image w="25%" maxW="118px" src='/public/pgHome/img25_222.png' alt='Fundo azul brilhante' />
                                    <Image w="25%" maxW="178px" src='/public/pgHome/img25_2.png' alt='Olho azul' />
                                    <Image w="50%" maxW="250px" src='/public/pgHome/img50_2.png' alt='fundo azul com genese' />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box
                        bgImage="url('/pgHome/Background_s/4_Servicos.png')" 
                        w="100%" 
                        bgPosition="left center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        p={10}
                        h={HServico}
                    >
                        <Flex w="100%" direction={flexDirection} gap={5} color="white" align="center" justifyContent="space-between">
                            <Flex w="100%" maxW={WFlexServico} h={200} p={10} borderRadius={20} bg="#06384485" justifyContent="center" align="center" direction="column" textAlign="center">
                                <IoBookOutline fontSize={60}/>
                                <Text fontSize={16}>MATERIAIS DE ALTA QUALIDADE</Text>
                            </Flex>
                            <Flex w="100%" maxW={WFlexServico} h={200} p={10} borderRadius={20} bg="#06384485" justifyContent="center" align="center" direction="column">
                                <GoDatabase fontSize={60}/>
                                <Text fontSize={16}>BANCO DE DADOS DE QUESTÕES</Text>
                            </Flex>
                            <Flex w="100%" maxW={WFlexServico} h={200} p={10} borderRadius={20} bg="#06384485" justifyContent="center" align="center" direction="column">
                                <PiMicroscope fontSize={60}/>
                                <Text fontSize={16}>FERRAMENTAS INTERATIVAS</Text>
                            </Flex>
                            <Flex w="100%" maxW={WFlexServico} h={200} p={10} borderRadius={20} bg="#06384485" justifyContent="center" align="center" direction="column">
                                <MdOutlineSlowMotionVideo fontSize={60}/>
                                <Text fontSize={16}>TUTORIAIS E GUIAS DE ESTUDO</Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Flex 
                        p={30}
                        color="white"
                        textAlign="center"
                        direction="column"
                        align="center"
                        justifyContent="center"
                        gap={6}
                    >
                        <Text
                            fontSize={40}
                        >DOMINE A GENÉTICA NA <br /> PRÁTICA E  NA TEORIA</Text>
                        <Text
                            maxW={800}
                            fontSize={16}
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique sed eos fugit nostrum ducimus iure eveniet animi, vero corporis laboriosam dolore, aliquam nam voluptatem assumenda necessitatibus, sunt expedita atque.</Text>
                        <Flex wrap="wrap" direction={flexDirection} align="center" justifyContent="center" gap={10}>
                            <Box w="50%" maxW="500">
                                <img src="/pgHome/5_Atividades.png" alt="" />
                            </Box>
                            <Box w="50%" maxW="500">
                                <img src="/pgHome/6_Atividade.png" alt="" />
                            </Box>
                        </Flex>
                        <Button
                            bg="Dark" 
                            color="white"
                            marginTop={10}
                            w={260}
                            fontWeight={300}
                            _hover={{
                                bg: "#0D6067", 
                                transform: "scale(1.05)",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
                            }}
                        >
                            PRATIQUE
                        </Button>
                    </Flex>

                    <Flex
                        bgImage="url('/pgHome/Background_s/6_Contato.png')" 
                        w="100%" 
                        bgPosition="left center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        p={10}
                        h={HContato}
                        maxH={1000}
                        align="center"
                        justify="center"
                    >
                        <Flex
                            bg="#00000034"
                            p={10}
                            width="100%"
                            maxW={2000}
                            h={HContatoContainer}
                            borderRadius={20}
                            gap={10}
                            direction={flexDirection}
                            maxH={700}
                        >
                            <Box w="100%" maxW={WContato} >
                                <FormHome /> 
                            </Box>
                            <Flex 
                                bgImage="url('/pgHome/6_Contato.png')" 
                                w="100%" 
                                maxW={WContato}
                                bgPosition="left center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                p={10}
                                color="white"
                                fontSize={18}
                                align="flex-end"
                                borderRadius={10}
                                maxH={520}
                            >
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus ex asperiores alias officia excepturi distinctio adipisci quis repellat. Explicabo voluptatibus rerum et a. Nemo neque voluptas similique beatae dolore?</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* <SlideShow members={menbros}/> */}

                    <Flex direction="column" align="center" justifyContent="center" w="100%" minH="20px" p={10} color="white" gap={5}>
                        <Text fontSize={50}>LOGO</Text>
                        <Flex gap={10} direction={flexDirection}>
                            <Link to="/">Home</Link>
                            <Link>Atividade</Link>
                            <Link to="/manutencao">Conteúdo</Link>
                            <Link to="/manutencao">Duvidade</Link>
                            <Link to="/manutencao">Informação</Link>
                        </Flex>
                    </Flex>

                    <Flex direction="column" w="100%"color="white" padding={20}>
                        <Box borderTop="2px solid white" width="100%" marginBottom={4}></Box>
                        <Flex justifyContent="space-between"direction={flexDirection} gap={5}>
                        <Text fontSize={17}>email_exemplo@gmail.com</Text>
                        <Text fontSize={17}>© Mendel – Todos os direitos reservados</Text>     
                        </Flex> 
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Home;
