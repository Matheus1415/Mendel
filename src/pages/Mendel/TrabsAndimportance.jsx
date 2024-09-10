import { Box, Button, Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

export function TrabsAndimportance() {
    return (
        <MotionBox 
            backgroundRepeat="repeat" 
            backgroundSize="cover" 
            backgroundPosition="center" 
            backgroundImage="url(assets/3_Legado.png)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <MotionFlex
                mx="auto" 
                maxW="6xl" 
                p={8} 
                direction={["column", "column", "column", "row"]} 
                alignItems="center" 
                gap={6}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Flex direction="column" justifyContent="flex-start" gap={20}>
                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <Heading variant="PrimaryTitle">
                            Importância para biologia
                        </Heading>
                        <Text variant="p" fontSize={16} lineHeight={8} fontWeight={300} color="Primary" textAlign="justify">    
                            Gregor Mendel é crucial para a biologia por ter descoberto as leis da herança, que explicam como as características são transmitidas entre gerações. Seus experimentos com ervilhas revelaram padrões de herança, estabelecendo fundamentos para a genética moderna.
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <Heading variant="PrimaryTitle">
                            TRABALHOS CIENTÍFICOS
                        </Heading>
                        <UnorderedList spacing={4} mb={9}>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">
                                Gregor Mendel estudou a hereditariedade em ervilhas, cruzando plantas com diferentes características e observando padrões de transmissão.
                            </ListItem>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">
                                Mendel estabeleceu a Lei da Segregação, que afirma que alelos se separam na formação dos gametas.
                            </ListItem>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">
                                As descobertas de Mendel foram redescobertas no início do século XX, impactando profundamente a biologia.
                            </ListItem>
                        </UnorderedList>

                        <MotionButton
                            variant="readMore"
                            _hover={{ background: 'linear-gradient(to left, #007A87 0%, #01414C) 100%' }}
                            color="Primary"
                            lineHeight={7}
                            fontSize={20}
                            px={9}
                            py={0.5}
                            sx={{ background: 'linear-gradient(to right, #007A87 0%, #01414C) 100%' }}
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Conheça as leis de Mendel
                        </MotionButton>
                    </MotionBox>
                </Flex>

                <MotionImage 
                    w="lg" 
                    borderRadius="2xl" 
                    objectFit="cover" 
                    src="assets/estatuaMendel.png" 
                    alt="Estatua de Mendel"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                />
            </MotionFlex>
        </MotionBox>
    );
}
