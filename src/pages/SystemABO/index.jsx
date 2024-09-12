import React, { useState } from "react";
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import {
    Box,
    Image,
    Text,
    Flex,
    Heading,
    useBreakpointValue,
    Card,
    CardHeader,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Grid,
    ListItem,
    UnorderedList
} from "@chakra-ui/react";
import AleloCards from "../../components/AleloCards";
import transSangueAbo from '../../data/transSangueAbo.json';
import { motion } from "framer-motion";
import { PreviousNextPageNavigator } from "../../components/PreviousNextPageNavigator";

const MotionCard = motion(Card);

const BloodGroupCard = ({ group, onClick }) => (
    <MotionCard
        borderRadius="md"
        border="1px solid white"
        boxShadow="md"
        bg="transparent"
        color="white"
        minH={100}
        minW={255}
        _hover={{
            backgroundColor: "#ebebeb", 
            boxShadow: "lg", 
            cursor: "pointer", 
            color: "red.500" 
        }}
        onClick={onClick}
        p={4}
        transition={{ duration: 0.2 }} 
        whileHover={{ scale: 1.05 }} 
    >
        <CardHeader display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="30px" fontWeight="bold">
                {group.id}
            </Text>
        </CardHeader>
    </MotionCard>
);

export const SistemaAbo = () => {
    const imageWidth = useBreakpointValue({ base: "15rem", sm: "20rem", md: "25rem", lg: "30rem" });
    const imageMaxHeight = useBreakpointValue({ base: "20rem", sm: "25rem", md: "30rem", lg: "40rem" });
    const textPadding = useBreakpointValue({ base: "1rem", sm: "1.5rem", md: "2rem", lg: "4rem" });
    const textAlign = useBreakpointValue({ base: "center", md: "left" });
    const cardPadding = useBreakpointValue({ base: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" });
    const gap = useBreakpointValue({ base: "1rem", sm: "2rem", md: "3rem", lg: "4rem" });

    const bloodGroups = [
        { id: "B+", type: "Com antígeno B e Rh", antibodies: "Anti-A", antigens: "B e Rh" },
        { id: "B-",  type: "Com antígeno B", antibodies: "Anti-A e Anti-Rh", antigens: "B" },
        { id: "AB+", type: "Com antígeno A, B e Rh", antibodies: "Nenhum", antigens: "A, B e Rh" },
        { id: "AB-",  type: "Com antígeno A e B", antibodies: "Anti-Rh", antigens: "A e B" },
        { id: "O+",  type: "Sem antígeno A ou B, com Rh", antibodies: "Anti-A e Anti-B", antigens: "Rh" },
        { id: "O-",  type: "Sem antígeno A ou B e sem Rh", antibodies: "Anti-A, Anti-B e Anti-Rh", antigens: "Nenhum" },
        { id: "AB",  type: "Sem antígeno A ou B e sem Rh", antibodies: "Anti-A, Anti-B e Anti-Rh", antigens: "Nenhum" },
        { id: "-AB",  type: "Sem antígeno A ou B e sem Rh", antibodies: "Anti-A, Anti-B e Anti-Rh", antigens: "Nenhum" }
    ];
    

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (group) => {
        setSelectedGroup(group);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedGroup(null);
    };

    return (
        <>
            <LayoutIntroduction query="SISTEMA ABO">
                SISTEMA ABO
            </LayoutIntroduction>

            <Box
                as="section"
                w="100%"
                minHeight="50rem"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                px={{ base: "1rem", md: "2rem", lg: "4rem" }}
                py={{ base: "1rem", md: "2rem" }}
            >
                <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    mb={{ base: "1rem", md: "0" }}
                >
                    <Image 
                        src="/assets/hexagono.svg" 
                        alt="Hexágono" 
                        width={imageWidth}
                        maxHeight={imageMaxHeight}
                    />
                </Box>
                <Box 
                    flex="1"
                    textAlign={textAlign}
                    px={textPadding}
                    maxWidth="100%"
                >
                    <Heading variant="PrimaryTitle" mb="1rem">SURGIMENTO</Heading>
                    <Text variant="Paragraph" mb="1rem">
                        O sistema ABO foi descoberto pelo cientista Karl Landsteiner em 1901, ao estudar as reações de aglutinação entre o sangue de diferentes pessoas. Ele identificou três tipos principais de sangue: A, B e O, que posteriormente foram complementados pelo tipo AB. Esse sistema é crucial para a realização de transfusões de sangue seguras.
                    </Text>
                    <Text variant="Paragraph" mb="1rem">
                        A classificação ABO baseia-se na presença ou ausência de dois antígenos, A e B, na superfície dos glóbulos vermelhos. As pessoas com sangue tipo A têm antígenos A, as com sangue tipo B têm antígenos B, as com sangue AB têm ambos os antígenos, e as com sangue tipo O não possuem nenhum dos dois.
                    </Text>
                    <Text variant="Paragraph" mb="1rem">
                        Além dos antígenos, o plasma sanguíneo pode conter anticorpos contra os antígenos que não estão presentes nos glóbulos vermelhos. Por exemplo, uma pessoa com sangue tipo A tem anticorpos anti-B, que reagem contra o sangue tipo B.
                    </Text>
                    <Text variant="Paragraph">
                        A descoberta do sistema ABO tornou possível a prática de transfusões de sangue seguras e efetivas, evitando reações adversas potencialmente fatais.
                    </Text>
                </Box>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border="1px solid"
                borderRadius="10px"
                padding={cardPadding}
                borderColor="#0b4f6e"
                maxWidth="58%"
                mx="auto"
                my="1rem"
            >
                <Box 
                    display="flex"
                    flexDirection={{ base: "column", sm: "column", md: "row" }}
                    alignItems="center"
                    gap={gap}
                    p={4}
                >
                    <Flex  align="center" justify="center" color="white"  direction="column" flex="1" textAlign={{ base: "center", md: "left" }}>
                        <Heading variant="SecondaryTitle" mb="1rem">
                            AGLUTINOGÊNEO
                        </Heading>
                        <Image src="/img/aglutinogeneo.png" maxW={160} alt="Aglutinogêneo" />
                        <UnorderedList mb="1rem">
                            <ListItem>
                                <Text align="justify">Aglutinogênios são antígenos presentes na superfície dos glóbulos vermelhos que determinam o tipo sanguíneo ABO de uma pessoa.</Text>
                            </ListItem>
                        </UnorderedList>
                    </Flex>
                    <Flex  align="center" justify="center" color="white"  direction="column" flex="1" textAlign={{ base: "center", md: "left" }}>
                        <Heading variant="SecondaryTitle" mb="1rem">
                        AGLUTININA
                        </Heading>
                        <Image src="/img/aglutininas.png" maxW={250} alt="Aglutinogêneo" />
                        <UnorderedList mb="1rem">
                            <ListItem>
                            <Text align="justify">Aglutininas são anticorpos encontrados no plasma sanguíneo, que reagem contra os antígenos que não estão presentes no próprio sangue.</Text>
                            </ListItem>
                        </UnorderedList>
                    </Flex> 
                </Box>
            </Box>

            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                mt="7rem"
            >
                <Heading 
                    variant="PrimaryTitle" 
                    textAlign="center" 
                    mb="4rem"
                >
                    TIPOS SANGUÍNEOS
                </Heading>
                <Flex direction="column" align="center" justifyContent="center" minH={400} gap={20}>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6} maxW="1200px" mx="auto">
                        {bloodGroups.map((group) => (
                            <BloodGroupCard
                                key={group.id}
                                group={group}
                                onClick={() => handleCardClick(group)}
                            />
                        ))}
                    </Grid>
                    <Image src="/img/tiposanguineo_ilustracao.png" maxW={1100}/>
                </Flex>
                {selectedGroup && (
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{selectedGroup.id}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody p={8}>
                                <Text mt={4}><b>Tipo de Glóbulo Vermelho:</b> {selectedGroup.type}</Text>
                                <Text><b>Anticorpos:</b> {selectedGroup.antibodies}</Text>
                                <Text><b>Antígenos:</b> {selectedGroup.antigens}</Text>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </Box>

            <Box>
                <Heading
                    variant="PrimaryTitle" 
                    textAlign="center" 
                    margin="4rem"
                >
                    TRANSFUSÕES DE SANGUE
                </Heading>
                <Box 
                    display="grid" 
                    gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} 
                    gap="2rem"
                >
                    {transSangueAbo.map((props, index) => (
                        <AleloCards key={index} {...props} />
                    ))}
                </Box>
                <Text variant="Paragraph" textAlign="center" margin="4rem" fontSize="2rem">
                    RESUMINDO
                </Text>
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    mt="2rem"
                >
                    <Image
                        maxW={700}
                        src="/img/trasfusao_illustracao.png" 
                        alt="Resumo dos tipos sanguíneos" 
                    />
                </Box>
            </Box>
            <PreviousNextPageNavigator 
                previousPageRoute="/sistema-rh"
                nextPageRoute="/introducao-genetica"
            />
        </>
    );
};
