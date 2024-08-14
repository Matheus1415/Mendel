import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionButton = motion(Button);
const MotionImage = motion(Image);
const MotionBox = motion(Box);

export const Action = () => {
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const imgWidth = useBreakpointValue({ base: "100%", md: "50%" });

    return (
        <Flex 
            p={10}
            color="white"
            w="100%"
            textAlign="center"
            direction="column"
            align="center"
            justifyContent="center"
            gap={6}
        >
            <Text fontSize={{ base: 30, md: 40 }} fontWeight="bold">
                DOMINE A GENÉTICA NA <br /> PRÁTICA E NA TEORIA
            </Text>

            <Text maxW={800} fontSize={{ base: 14, md: 16 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique sed eos fugit nostrum ducimus iure eveniet animi, vero corporis laboriosam dolore, aliquam nam voluptatem assumenda necessitatibus, sunt expedita atque.
            </Text>

            <Flex wrap="wrap" direction={flexDirection} align="center" justifyContent="center" gap={10}>
                <MotionBox w={imgWidth} maxW="500px" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <MotionImage src="/pgHome/5_Atividades.png" alt="Atividades de Genética" w="100%" borderRadius={10} />
                </MotionBox>
                <MotionBox w={imgWidth} maxW="500px" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <MotionImage src="/pgHome/6_Atividade.png" alt="Mais Atividades" w="100%" borderRadius={10} />
                </MotionBox>
            </Flex>

            <MotionButton
                bg="Dark" 
                color="white"
                mt={10}
                w={260}
                fontWeight={300}
                _hover={{
                    bg: "#0D6067", 
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                PRATIQUE
            </MotionButton>
        </Flex>
    );
};
