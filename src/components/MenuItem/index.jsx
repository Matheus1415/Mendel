// src/components/MenuItem.jsx
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuItem = ({ icon, label, isOpen, router }) => {
    return (
        <Flex align="center" mb={4} w="100%" fontSize="16px" cursor="pointer">
            <Flex align="center" justify="center" w="40px" h="40px" fontSize="24px" >
                <Link to={router}>
                    {icon}
                </Link>
            </Flex>
            {isOpen && <Link to={router}><Text ml={2} fontSize="16px">{label}</Text></Link>}
        </Flex>
    );
};

export default MenuItem;
