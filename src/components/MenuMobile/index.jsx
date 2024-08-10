import { useState } from 'react';
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { FaBars, FaHome, FaTasks, FaBook, FaQuestion, FaInfoCircle } from 'react-icons/fa';
import MenuItem from '../MenuItem';

const MenuMobile = ({ isOpen, toggleMenu }) => {
    const subMenuHome = [
        { label: "Subitem 1", router: "/subitem1" },
        { label: "Subitem 2", router: "/subitem2" }
    ];
    const subMenuAtividades = [
        { label: "Atividade 1", router: "/atividade1" },
        { label: "Atividade 2", router: "/atividade2" }
    ];

    return (
        <Box 
            h="100vh"
            maxH="100%" 
            p="16px"
            bg={isOpen ? "#02242E" : "transparent"}
            w={isOpen ? "250px" : "80px"}
            color="white"
            transition="all 0.3s ease"
            position="fixed"
            top={0}
            left={0}
            zIndex={10}
            borderRadius={15}
        >
            <IconButton 
                icon={<FaBars />} 
                onClick={toggleMenu} 
                aria-label="Toggle Menu"
                mb={4}
                fontSize={30}
                colorScheme="teal"
                bg="transparent"
            />
            <Flex direction="column" align="flex-start" w="100%" gap={4} display={isOpen ? "flex" : "none"}>
                <MenuItem icon={<FaHome />} label="Home" isOpen={isOpen} router="/" subMenu={subMenuHome} />
                <MenuItem icon={<FaTasks />} label="Atividades" isOpen={isOpen} router="/manutencao" subMenu={subMenuAtividades} />
                <MenuItem icon={<FaBook />} label="Conteúdo" isOpen={isOpen} router="/manutencao" />
                <MenuItem icon={<FaQuestion />} label="Dúvida" isOpen={isOpen} router="/manutencao" />
                <MenuItem icon={<FaInfoCircle />} label="Informação" isOpen={isOpen} router="/manutencao" />
            </Flex>
        </Box>
    );
};

export default MenuMobile;
