import React, { createContext, useState } from 'react';

export const CaracteristicaContext = createContext();

export const CaracteristicaProvider = ({ children }) => {
    const [caracteristica, setCaracteristica] = useState(['Verde', 'Amarelo']);
    const [countDominant, setCountDominant] = useState(0);
    const [countRecessive, setCountRecessive] = useState(0);
    const [backgroundColorRecessive, setBackgroundColorRecessive] = useState('#36eb45');
    const [backgroundColorDominant, setBackgroundColorDominant] = useState('#ff0000');

    return (
        <CaracteristicaContext.Provider value={{
            caracteristica,
            setCaracteristica,
            countDominant,
            setCountDominant,
            countRecessive,
            setCountRecessive,
            backgroundColorRecessive,
            setBackgroundColorRecessive,
            backgroundColorDominant,
            setBackgroundColorDominant
        }}>
            {children}
        </CaracteristicaContext.Provider>
    );
};
