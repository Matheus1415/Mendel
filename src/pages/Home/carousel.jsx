import { Flex, Box, Text, useBreakpointValue} from "@chakra-ui/react";
import { IoBookOutline } from 'react-icons/io5';
import { GoDatabase } from 'react-icons/go';
import { PiMicroscope } from 'react-icons/pi';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';

export const Carousel = () => {
    const WFlexServico = useBreakpointValue({ mb: "100%", lg: "250px" });
    const HServico = useBreakpointValue({ md: "100%", lg: "300px" });
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });

    return(
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
    )
}