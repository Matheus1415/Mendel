import { Flex, Heading, Text, Box, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import activities from "../../data/punnett-card.json";

export const PunnerAtv = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/punner-arastavel/${id}`);
    };

    return (
        <Flex
            justify="center"
            align="center"
            w="100vw"
            h="100vh"
            bg="red.500"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage="url('/activity_background.png')"
            position="relative"
            overflow="hidden"
        >
            {/* Fundo fosco sobre a imagem de fundo */}
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.5)"
                zIndex="1"
            />

            {/* Grid para organizar os cards */}
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // 1 coluna em telas pequenas, 3 em maiores
                gap={6}
                w="100%"
                maxW="1200px" // Largura máxima para alinhar os cards
                position="relative"
                zIndex="2"
                p={6}
            >
                {activities.map((activity) => (
                    <Flex
                        key={activity.id}
                        direction="column"
                        bg="white"
                        p={6}
                        borderRadius="md"
                        boxShadow="md"
                        cursor="pointer"
                        onClick={() => handleCardClick(activity.id)}
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }} // Efeito ao passar o mouse
                        transition="all 0.2s"
                    >
                        <Heading fontSize="xl" mb={4}>
                            {activity.title}
                        </Heading>
                        <Text textAlign="center">
                            {activity.description}
                        </Text>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    );
};
