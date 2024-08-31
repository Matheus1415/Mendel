import React, { createContext, useState } from 'react';

export const CaracteristicaContext = createContext();

export const CaracteristicaProvider = ({ children }) => {
    const [caracteristica, setCaracteristica] = useState(['Verde', 'Amarelo']);
    const [amountAlelo, setAmountAlelo] = useState(0);
    const [countDominant, setCountDominant] = useState(0);
    const [countRecessive, setCountRecessive] = useState(0);
    const [countDominant2, setCountDominant2] = useState(0);
    const [countDominant3, setCountDominant3] = useState(0);

    // Cores relacionadas ao azul
    const [backgroundColorRecessive, setBackgroundColorRecessive] = useState('#5DADE2'); // Azul claro
    const [backgroundColorDominant, setBackgroundColorDominant] = useState('#2E86C1'); // Azul médio
    const [backgroundColorDominant2, setBackgroundColorDominant2] = useState('#1F618D'); // Azul escuro
    const [backgroundColorDominant3, setBackgroundColorDominant3] = useState(   '#154360'); // Azul muito escuro

    const [parentsAlelo, setParentsAlelo] = useState([[], []]); 

    const resetContext = () => {
        setCaracteristica(['Verde', 'Amarelo']);
        setAmountAlelo(0);
        setCountDominant(0);
        setCountRecessive(0);
        setCountDominant2(0);
        setCountDominant3(0);
        setBackgroundColorRecessive('#5DADE2');
        setBackgroundColorDominant('#2E86C1');
        setBackgroundColorDominant2('#1F618D');
        setBackgroundColorDominant3('#154360');
        setParentsAlelo([[], []]);
    };

    return (
        <CaracteristicaContext.Provider value={{
            amountAlelo,
            setAmountAlelo,
            parentsAlelo,
            setParentsAlelo,
            caracteristica,
            setCaracteristica,
            countDominant,
            setCountDominant,
            countRecessive,
            setCountRecessive,
            backgroundColorRecessive,
            setBackgroundColorRecessive,
            backgroundColorDominant,
            setBackgroundColorDominant,
            countDominant2,
            setCountDominant2,
            countDominant3,
            setCountDominant3,
            backgroundColorDominant3,
            setBackgroundColorDominant3,
            backgroundColorDominant2,
            setBackgroundColorDominant2,
            resetContext, 
        }}>
            {children}
        </CaracteristicaContext.Provider>
    );
};
