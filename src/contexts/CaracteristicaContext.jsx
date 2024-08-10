import React, { createContext, useState } from 'react';

export const CaracteristicaContext = createContext();

export const CaracteristicaProvider = ({ children }) => {

    const [caracteristica, setCaracteristica] = useState(['Verde', 'Amarelo']);
    const [amountAlelo, setAmountAlelo] = useState(0);
    const [countDominant, setCountDominant] = useState(0);
    const [countRecessive, setCountRecessive] = useState(0);
    const [backgroundColorRecessive, setBackgroundColorRecessive] = useState('#007A87');
    const [backgroundColorDominant, setBackgroundColorDominant] = useState('#02242E');
    const [parentsAlelo, setParentsAlelo] = useState([[], []]); 
    
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
        }}>
            {children}
        </CaracteristicaContext.Provider>
    );
};
