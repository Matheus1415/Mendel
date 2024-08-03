import { Flex, Box, Text, Button, Image, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1); // Volta para a página anterior
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
      textAlign={{ base: "center", md: "left" }}
    >
      <Image
        src="/src/asset/404Error.gif"
        alt="404 Error"
        w={{ base: "100%", md: "50%" }}
        maxW="600px"
        mb={{ base: 4, md: 0 }}
      />
      <Box ml={{ md: 8 }}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={4}>
          Oops! Página não encontrada
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mb={8} maxW={600}>
          Parece que você se perdeu. A página que você está procurando não está disponível ou nunca existiu. 
          <Link
            href="https://storyset.com/online"
            isExternal
            color="teal.400"
            _hover={{ textDecoration: "underline" }}
            fontSize={14}
            p={2}
          >
              Ilustrações online por Storyset
          </Link>
        </Text>
        <Button
          onClick={() => navigate(-1)} 
          bg="teal.500"
          color="white"
          w={200}
          _hover={{ bg: "teal.600" }}
          mb={4}
        >
          Voltar
        </Button>

      </Box>
    </Flex>
  );
};

export default Page404;
