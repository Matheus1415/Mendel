// src/components/Menu/index.jsx
import { useState } from 'react';
import MenuMobile from '../MenuMobile';

export const MenuMendel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
};
