import { Flex, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ icon, label, isOpen, router }) => {
  const location = useLocation();
  const isActive = location.pathname === router;

  return (
    <Flex
      align="center"
      mb={4}
      w="100%"
      fontSize="16px"
      cursor="pointer"
      color={isActive ? "#007A87" : "inherit"}
      _hover={{ color: "blue.500" }}
    >
      <Flex
        align="center"
        justify="center"
        w="40px"
        h="40px"
        fontSize="24px"
        _hover={{ transform: "scale(1.1)" }}
        transition="transform 0.2s"
      >
        <Link to={router}>
          {icon}
        </Link>
      </Flex>
      {isOpen && (
        <Link to={router}>
          <Text ml={2} fontSize="16px">
            {label}
          </Text>
        </Link>
      )}
    </Flex>
  );
};

export default MenuItem;
