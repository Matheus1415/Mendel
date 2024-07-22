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
    /*
        Base: Até 768px
        Sm: 768px a 992px
        Md: 992px a 1280px
        Lg: 1280px a 1536px
        Xl: 1536px e acima
    */

    return (
        <>
            <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
};
