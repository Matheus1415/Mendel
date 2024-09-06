import { useState, useEffect, useRef } from 'react';
import { Flex, Box, IconButton, Image } from "@chakra-ui/react";
import { FaBars, FaHome, FaTasks, FaBook, FaQuestion, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MenuItem from '../MenuItem';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const MenuMendel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const menuRef = useRef(); 

    const subMenuConteudo = [
        { label: "Gregorio", router: "/mendel" },
        { label: "Fundamentos", router: "/fundamentos" },
        { label: "Introdução a Genética", router: "/manutencao" },
        { label: "Sistema Sanguíneo", router: "/sistema-abo" },
        { label: "Variações do modelo Menderiano", router: "/variations" },
        { label: "Fator RH", router: "/sistema-rh" },
    ];
    const subMenuAtividade = [
        { label: "Atividade Dinâmica", router: "/punner-arastavel" },
        { label: "Atividade", router: "/atividades" },
        { label: "Punntt Alelos", router: "/punntt" },
        { label: "Ambiente de Aula", router: "/aula" },
    ];

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // Fecha o menu
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <MotionBox
            ref={menuRef}
            h="100vh"
            maxH="100%" 
            p="16px"
            bg={isOpen ? "#02161F" : "transparent"}
            w={isOpen ? "250px" : "80px"}
            boxShadow={isOpen ? "1px 1px 10px #ffffff22":""}
            color="white"
            position="fixed"
            top={0}
            left={0}
            zIndex={10}
            borderRadius={15}
            initial={{ width: "80px" }}
            animate={{ width: isOpen ? "250px" : "80px" }}
            transition={{ duration: 0.3 }}
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
            <MotionFlex 
                direction="column" 
                align="center" 
                w="100%" 
                gap={4} 
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <Image maxW={100} src="/logoMendel.jpeg" alt="Logo Mendel" />
                <MenuItem icon={<FaHome />} label="Home" isOpen={isOpen} router="/" />
                <MenuItem icon={<FaTasks />} label="Atividades" isOpen={isOpen} router="/" subMenu={subMenuAtividade}/>
                <MenuItem icon={<FaBook />} label="Conteúdo" isOpen={isOpen} router="/" subMenu={subMenuConteudo} />
                <MenuItem icon={<FaQuestion />} label="Dúvida" isOpen={isOpen} router="/manutencao" />
                <MenuItem icon={<FaInfoCircle />} label="Informação" isOpen={isOpen} router="/manutencao" />
            </MotionFlex>
        </MotionBox>
    );
};

export default MenuMendel;
