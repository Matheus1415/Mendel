import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Image, Text, Link } from "@chakra-ui/react";
import { FaHandBackFist } from "react-icons/fa6";
import { GiPeas } from "react-icons/gi";
import { IoIosLeaf } from "react-icons/io";
import { IoReader } from "react-icons/io5";
import { MdBiotech, MdFamilyRestroom } from "react-icons/md";
import { PiBiohazard, PiFediverseLogoFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";

export function Contribuitions () {
    return(
        <Box backgroundRepeat="repeat" backgroundSize="cover" backgroundPosition="center" backgroundImage="url(assets/4_Contribuicoes.png)">
            <Box textAlign="center" mx="auto"  p={8}>
                <Heading fontWeight={200} fontSize={40} mb={12} variant="PrimaryTitle">
                    Contribuições    
                </ Heading>
                
                <Box>
                    <Flex direction={["column","column","column", "column","row"]} gap={3} alignItems="center" justifyContent="center" >
                        
                        <Flex direction={["column","row","row","row"]} gap={3}>
                            <Flex direction="column" gap={4}  mt={[0,0,0,10,20]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoReader} h={14} w={14}  color="darkcyan"/>
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Mendel formulou as Leis da Segregação e da Distribuição Independente, que explicam como os alelos para diferentes características são transmitidos de geração para geração.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={"https://books.google.com.br/books?hl=pt-BR&lr=&id=3jM-mIbWUSwC&oi=fnd&pg=PA4&dq=Mendel,+G.+(1866).+%22Experiments+in+Plant+Hybridization.%22+Verhandlungen+des+Naturforschenden+Vereins+zu+Br%C3%BCnn.&ots=RPkZJ9LH2u&sig=Zf7AJQQwFaZbuGcxNNFpHgxFCvM#v=onepage&q&f=false"} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={GiPeas} h={14} w={14}  color="darkcyan"/>
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Mendel usou um método científico rigoroso e controlado em seus experimentos com ervilhas, estabelecendo um padrão para a pesquisa genética.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={"https://www.ncbi.nlm.nih.gov/books/NBK26854/"} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>
                            </Flex>
                            <Flex direction="column" gap={4} mt={[0,0,0,10,0]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={FaHandBackFist} h={14} w={14}  color="darkcyan"/>
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Ele demonstrou que algumas características são dominantes sobre outras, explicando como certos traços podem esconder a expressão de outros.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href="https://www.ncbi.nlm.nih.gov/books/NBK26854/" isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>

                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={VscGraphLine} h={14} w={14}  color="darkcyan"/>
                                            {/* SlGraph*/}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Aplicou métodos estatísticos para analisar e interpretar os resultados de seus cruzamentos, introduzindo uma abordagem quantitativa à biologia.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={"https://onlinelibrary.wiley.com/doi/10.1111/j.1469-1809.1936.tb02137.x"} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>

                            </Flex>
                        </Flex>
                    

                        <Flex direction={["column","row","row","row"]} gap={3}>
                            <Flex direction="column" gap={4}  mt={[0,0,0,0,20]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={MdBiotech} h={14} w={14}  color="darkcyan"/>
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Identificou padrões consistentes de herança que puderam ser descritos matematicamente, ajudando a estabelecer a genética como uma ciência.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={"https://www.tandfonline.com/doi/abs/10.1080/00033799800200111"} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={MdFamilyRestroom} h={14} w={14}  color="darkcyan"/>
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Descobriu que os alelos, ou variantes de genes, são responsáveis pelas características hereditárias, lançando as bases para a compreensão da genética molecular.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={"https://pubs.acs.org/doi/abs/10.1021/cb500651d"} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>


                            </Flex>
                            <Flex direction="column" gap={4} mt={[0,0,0,0,0]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={PiFediverseLogoFill} h={14} w={14}  color="darkcyan"/>
                                            {/* MdDiversity2 */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Escolheu características de ervilhas que eram facilmente identificáveis e analisáveis, o que facilitou a compreensão dos princípios da hereditariedade.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={'https://www.sciencedirect.com/science/article/abs/pii/S0160932703000656'} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={PiBiohazard} h={14} w={14}  color="darkcyan"/>
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Suas descobertas formaram a base da genética moderna e influenciaram profundamente a biologia, a medicina e a agricultura, permitindo avanços em várias áreas científicas.
                                        </Text>
                                        <Button
                                            _hover={{
                                                bgGradient: 'linear(to-l, #19BFCD90, #0D606790)',  // Aplica o degradê de fundo no hover
                                                color: 'white',  // Ajusta a cor do texto para visibilidade
                                            }}
                                            fontSize={16}
                                            border="1px"
                                            textTransform="uppercase"
                                            borderColor="#19BFCD"
                                            bg="none"
                                            color="#19BFCD"
                                            fontWeight={300}
                                            py={0.5}
                                            px={9}
                                            borderRadius="lg"
                                            lineHeight={6}
                                        >
                                            <Link href={"https://www.science.org/doi/abs/10.1126/science.18.456.396"} isExternal>
                                                Saiba Mais
                                            </Link>
                                        </Button>
                                </Flex>

                            </Flex>
                        </Flex>

                    </Flex>
                </Box>

            </Box>
        </Box>
    )
}