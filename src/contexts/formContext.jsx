import React, { createContext, useState } from 'react';

export const FormHome = createContext();

export const FormProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [tel, setTel] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [message, setMessage] = useState('');

    return (
        <FormHome.Provider value={{
            nome, setNome,
            tel, setTel,
            sobrenome, setSobrenome,
            message, setMessage
        }}>
            {children}
        </FormHome.Provider>
    );
};
