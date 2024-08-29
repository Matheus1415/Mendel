import { useState } from 'react';
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { FaBars, FaHome, FaTasks, FaBook, FaQuestion, FaInfoCircle } from 'react-icons/fa';
<<<<<<< HEAD
import MenuItem from '../MenuItem';

=======
import { motion } from 'framer-motion';
import MenuItem from '../MenuItem';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
const MenuMobile = ({ isOpen, toggleMenu }) => {
    const subMenuConteudo = [
        { label: "Cromossomo", router: "/cromossomo" },
        { label: "Gregorio", router: "/manutencao" },
        { label: "Fundamentos", router: "/manutencao" },
        { label: "Introdução a Genética", router: "/manutencao" },
        { label: "Sistema Sanguíneo", router: "/manutencao" },
<<<<<<< HEAD
        {label: "Variações do modelo Menderiano", router: "/Alelos" }
    ];

    return (
        <Box 
=======
    ];

    return (
        <MotionBox
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
            h="100vh"
            maxH="100%" 
            p="16px"
            bg={isOpen ? "#02242E" : "transparent"}
            w={isOpen ? "250px" : "80px"}
            color="white"
<<<<<<< HEAD
            transition="all 0.3s ease"
=======
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
            position="fixed"
            top={0}
            left={0}
            zIndex={10}
            borderRadius={15}
<<<<<<< HEAD
=======
            initial={{ width: "80px" }}
            animate={{ width: isOpen ? "250px" : "80px", backgroundColor: isOpen ? "#02242E" : "transparent" }}
            transition={{ duration: 0.3 }}
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
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
<<<<<<< HEAD
            <Flex direction="column" align="flex-start" w="100%" gap={4} display={isOpen ? "flex" : "none"}>
=======
            <MotionFlex 
                direction="column" 
                align="flex-start" 
                w="100%" 
                gap={4} 
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
                <MenuItem icon={<FaHome />} label="Home" isOpen={isOpen} router="/" />
                <MenuItem icon={<FaTasks />} label="Atividades" isOpen={isOpen} router="/manutencao" />
                <MenuItem icon={<FaBook />} label="Conteúdo" isOpen={isOpen} router="/manutencao" subMenu={subMenuConteudo} />
                <MenuItem icon={<FaQuestion />} label="Dúvida" isOpen={isOpen} router="/manutencao" />
                <MenuItem icon={<FaInfoCircle />} label="Informação" isOpen={isOpen} router="/manutencao" />
<<<<<<< HEAD
            </Flex>
        </Box>
=======
            </MotionFlex>
        </MotionBox>
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
    );
};

export default MenuMobile;
