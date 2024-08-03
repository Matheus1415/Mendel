// src/components/Menu/index.jsx
import { useState } from 'react';
import { useBreakpointValue } from "@chakra-ui/react";
import MenuDesktop from '../MenuDesktop';
import MenuMobile from '../MenuMobile';

export const MenuMendel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
};
