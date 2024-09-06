import { Flex, Heading, Text } from "@chakra-ui/react";
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
            bg="red.500"
            w="100vw"
            maxW="100%"
            minH="100vh"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage="url('/activity_background.png')"
            gap={10}
            wrap="wrap"
        >
            {activities.map(activity => (
                <Flex
                    key={activity.id}
                    w={{ base: "90%", md: "400px" }}
                    height={{ base: "auto", md: "auto" }}
                    bg="#ffffff9df"
                    color="black"
                    justify="center"
                    align="center"
                    direction="column"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    backdropFilter="blur(20px)"
                    cursor="pointer" 
                    onClick={() => handleCardClick(activity.id)} 
                >
                    <Heading fontSize="xl" mb={4}>{activity.title}</Heading>
                    <Text textAlign="center">
                        {activity.description}
                    </Text>
                </Flex>
            ))}
        </Flex>
    );
};
