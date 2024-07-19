// src/components/MenuItem.jsx
import { Flex, Text } from "@chakra-ui/react";

const MenuItem = ({ icon, label, isOpen }) => {
    return (
        <Flex align="center" mb={4} w="100%" fontSize="16px">
            <Flex align="center" justify="center" w="40px" h="40px" fontSize="24px" cursor="pointer">
                {icon}
            </Flex>
            {isOpen && <Text ml={2} fontSize="16px">{label}</Text>}
        </Flex>
    );
};

export default MenuItem;
