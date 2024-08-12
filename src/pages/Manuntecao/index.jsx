import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MaintenancePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); 
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      minH="100vh"
      bg="white"
      p={4}
      textAlign="center"
    >
      <Box>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={4}>
          Em Manutenção
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mb={8} maxW={600}>
            Estamos trabalhando para melhorar a sua experiência. Essa página está temporariamente fora do ar para atualizações importantes. Voltaremos em breve com novidades!
        </Text>
        <Button
          onClick={() => navigate("/")} 
          bg="teal.500"
          color="white"
          _hover={{ bg: "teal.600" }}
        >
          Voltar para a Página Inicial
        </Button>
      </Box>
      <Image
        src="/src/asset/maintenance.gif" 
        alt="Manutenção"
        w="100%"
        maxW="600px"
        mb={4}
      />
    </Flex>
  );
};

export default MaintenancePage;
