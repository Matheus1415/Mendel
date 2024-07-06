// src/components/ParentInput.js
import React, { useState } from 'react';

const ParentInput = ({ setParents }) => {
    const [parent1, setParent1] = useState('');
    const [parent2, setParent2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit do formulário
        setParents([parent1, parent2]); // Chama a função setParents do componente pai com os valores de parent1 e parent2
    };

    return (
        <form onSubmit={handleSubmit}> {/* Define o evento onSubmit para chamar a função handleSubmit */}
            <div>
                <label>Parent 1 Alleles: </label>
                <input
                    value={parent1}
                    onChange={(e) => setParent1(e.target.value)} // Atualiza o estado parent1 com o valor do input
                />
            </div>
            <div>
                <label>Parent 2 Alleles: </label>
                <input
                    value={parent2}
                    onChange={(e) => setParent2(e.target.value)} // Atualiza o estado parent2 com o valor do input
                />
            </div>
            <button type="submit">Generate Punnett Square</button> {/* Botão para submeter o formulário */}
        </form>
    );
};

export default ParentInput;
