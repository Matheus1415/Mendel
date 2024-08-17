import React, { createContext, useState } from 'react';

export const CaracteristicaContext = createContext();

export const CaracteristicaProvider = ({ children }) => {
    const [caracteristica, setCaracteristica] = useState(["","","",""]);
    const [amountAlelo, setAmountAlelo] = useState(0);
    const [countDominant, setCountDominant] = useState([0, 0]); // Array para múltiplas características dominantes
    const [countRecessive, setCountRecessive] = useState([0, 0]); // Array para múltiplas características recessivas
    const [backgroundColorRecessive, setBackgroundColorRecessive] = useState(['#007A87', '#09824c']); // Array para cores recessivas
    const [backgroundColorDominant, setBackgroundColorDominant] = useState(['#02242E', '#740c65']); // Array para cores dominantes
    const [parentsAlelo, setParentsAlelo] = useState([[], []]);
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    const [labels, setLabels] = useState(['Dominante 1', 'Dominante 2', 'Recessivo 1', 'Recessivo 2']); // Rótulos das características

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
            showAdditionalInputs,
            setShowAdditionalInputs,
            labels,
            setLabels
        }}>
            {children}
        </CaracteristicaContext.Provider>
    );
};
