<<<<<<< HEAD
import { Flex, Box, Text, useBreakpointValue} from "@chakra-ui/react";
=======
import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
import { IoBookOutline } from 'react-icons/io5';
import { GoDatabase } from 'react-icons/go';
import { PiMicroscope } from 'react-icons/pi';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
<<<<<<< HEAD

export const Carousel = () => {
    const WFlexServico = useBreakpointValue({ mb: "100%", lg: "250px" });
    const HServico = useBreakpointValue({ md: "100%", lg: "300px" });
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });

    return(
=======
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionIcon = motion.div;

export const Carousel = () => {
    const WFlexServico = useBreakpointValue({ base: "100%", lg: "250px" });
    const HServico = useBreakpointValue({ base: "auto", lg: "300px" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });

    return (
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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
<<<<<<< HEAD
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
    )
}
=======
                <MotionFlex
                    w="100%"
                    maxW={WFlexServico}
                    h={200}
                    p={10}
                    borderRadius={20}
                    bg="#06384485"
                    justifyContent="center"
                    align="center"
                    direction="column"
                    textAlign="center"
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.3 }}
                >
                    <MotionIcon whileHover={{ rotate: 20 }} transition={{ duration: 0.3 }}>
                        <IoBookOutline fontSize={60} />
                    </MotionIcon>
                    <Text fontSize={16} mt={4}>MATERIAIS DE ALTA QUALIDADE</Text>
                </MotionFlex>

                <MotionFlex
                    w="100%"
                    maxW={WFlexServico}
                    h={200}
                    p={10}
                    borderRadius={20}
                    bg="#06384485"
                    justifyContent="center"
                    align="center"
                    direction="column"
                    textAlign="center"
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.3 }}
                >
                    <MotionIcon whileHover={{ rotate: 20 }} transition={{ duration: 0.3 }}>
                        <GoDatabase fontSize={60} />
                    </MotionIcon>
                    <Text fontSize={16} mt={4}>BANCO DE DADOS DE QUESTÕES</Text>
                </MotionFlex>

                <MotionFlex
                    w="100%"
                    maxW={WFlexServico}
                    h={200}
                    p={10}
                    borderRadius={20}
                    bg="#06384485"
                    justifyContent="center"
                    align="center"
                    direction="column"
                    textAlign="center"
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.3 }}
                >
                    <MotionIcon whileHover={{ rotate: 20 }} transition={{ duration: 0.3 }}>
                        <PiMicroscope fontSize={60} />
                    </MotionIcon>
                    <Text fontSize={16} mt={4}>FERRAMENTAS INTERATIVAS</Text>
                </MotionFlex>

                <MotionFlex
                    w="100%"
                    maxW={WFlexServico}
                    h={200}
                    p={10}
                    borderRadius={20}
                    bg="#06384485"
                    justifyContent="center"
                    align="center"
                    direction="column"
                    textAlign="center"
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.3 }}
                >
                    <MotionIcon whileHover={{ rotate: 20 }} transition={{ duration: 0.3 }}>
                        <MdOutlineSlowMotionVideo fontSize={60} />
                    </MotionIcon>
                    <Text fontSize={16} mt={4}>TUTORIAIS E GUIAS DE ESTUDO</Text>
                </MotionFlex>
            </Flex>
        </Box>
    );
};
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
