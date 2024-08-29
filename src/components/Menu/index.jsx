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
<<<<<<< HEAD
            <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
=======
            <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} setIsOpen={setIsOpen} />
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
        </>
    );
};
