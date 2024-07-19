// src/components/Menu/index.jsx
import { useState } from 'react';
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { FaBars, FaHome, FaTasks, FaBook, FaQuestion, FaInfoCircle } from 'react-icons/fa';
import MenuItem from '../MenuItem'; 

export const MenuMendel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box 
            h="100%" 
            p="16px" 
            bg="#02242E" 
            w={isOpen ? "250px" : "80px"} 
            color="white"
            transition="width 0.3s ease"
        >
            <IconButton 
                icon={<FaBars />} 
                onClick={toggleMenu} 
                aria-label="Toggle Menu"
                mb={4}
                colorScheme="teal"
            />
            <Flex direction="column" align="flex-start" w="100%" gap={4}>
                <MenuItem icon={<FaHome />} label="Home" isOpen={isOpen} />
                <MenuItem icon={<FaTasks />} label="Atividades" isOpen={isOpen} />
                <MenuItem icon={<FaBook />} label="Conteúdo" isOpen={isOpen} />
                <MenuItem icon={<FaQuestion />} label="Dúvida" isOpen={isOpen} />
                <MenuItem icon={<FaInfoCircle />} label="Informação" isOpen={isOpen} />
            </Flex>
        </Box>
    );
};
