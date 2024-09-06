import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { IoIosLeaf } from "react-icons/io";

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
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>


                            </Flex>
                            <Flex direction="column" gap={4} mt={[0,0,0,10,0]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>

                            </Flex>
                        </Flex>
                    

                        <Flex direction={["column","row","row","row"]} gap={3}>
                            <Flex direction="column" gap={4}  mt={[0,0,0,0,20]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>


                            </Flex>
                            <Flex direction="column" gap={4} mt={[0,0,0,0,0]}>

                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
                                        </Button>
                                </Flex>

                                
                                <Flex direction="column" alignItems="center" mx="auto" w={64} minH={96} p={5}   border="1px" borderRadius="lg" borderStyle="solid" borderColor="cyan" > {/*sx={{'border-image':'linear-gradient(to left, #19BFCD, #0D6067) 1', 'box-sizing': 'border-box'}}*/}
                                        <Box pt={7} pb={14}>
                                            <Icon as={IoIosLeaf} h={14} w={14}  color="darkcyan"/>
                                            {/* <FaPeoplePulling / IoIosLeaf > */}
                                        </Box>
                                        <Text mb={10} fontWeight={200} textAlign="left"   color="#19BFCD80" fontSize={16} lineHeight={5}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus laborum enim aliquid tenetur a rem facere consectetur veritatis eius quas odio placeat, tempora sunt, nihil eum ipsum aspernatur.
                                        </Text>
                                        <Button _hover={{background:'#00000070'}} fontSize={16} border="1px" textTransform="uppercase" borderColor="cyan" bg="none" color="cyan" fontWeight={300} py={0.5} px={9} borderRadius="lg" lineHeight={6}  backgroundClip="text" backgroundImage='linear-gradient(to left, #19BFCD 0%, #0D6067 100%)' style={{'-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent'}}>
                                            Saiba Mais
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