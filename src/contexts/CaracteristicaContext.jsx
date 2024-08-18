import React, { createContext, useState } from 'react';

export const CaracteristicaContext = createContext();

export const CaracteristicaProvider = ({ children }) => {

    const [caracteristica, setCaracteristica] = useState(['Verde', 'Amarelo']);
    const [amountAlelo, setAmountAlelo] = useState(0);
    const [countDominant, setCountDominant] = useState(0);
    const [countRecessive, setCountRecessive] = useState(0);
    const [countDominant2, setCountDominant2] = useState(0);
    const [countDominant3, setCountDominant3] = useState(0);
    const [backgroundColorRecessive, setBackgroundColorRecessive] = useState('#007A87');
    const [backgroundColorDominant, setBackgroundColorDominant] = useState('#02242E');
    const [backgroundColorDominant2, setBackgroundColorDominant2] = useState('#0000ff');
    const [backgroundColorDominant3, setBackgroundColorDominant3] = useState('#000007');
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
            countDominant2,
            setCountDominant2,
            countDominant3,
            setCountDominant3,
            backgroundColorDominant3,
            setBackgroundColorDominant3,
            backgroundColorDominant2,
            setBackgroundColorDominant2,
        }}>
            {children}
        </CaracteristicaContext.Provider>
    );
};
