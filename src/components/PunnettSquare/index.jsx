// src/components/PunnettSquare.js
import React from 'react';

const PunnettSquare = ({ parents }) => {
    if (!parents.length) return null; // Retorna null se não houver pais definidos

    const [parent1, parent2] = parents; // Destrutura o array de pais
    const combinations = [];

    // Gera todas as combinações possíveis de alelos entre parent1 e parent2
    for (let i = 0; i < parent1.length; i++) {
        for (let j = 0; j < parent2.length; j++) {
            combinations.push(`${parent1[i]}${parent2[j]}`);
        }
    }

    // Função para contar a frequência de cada alelo nas combinações
    const countAlleles = (arr) => {
        return arr.reduce((acc, allele) => {
            acc[allele] = (acc[allele] || 0) + 1;
            return acc;
        }, {});
    };

    const alleleCounts = countAlleles(combinations); // Objeto com a contagem de cada alelo
    const totalCombinations = combinations.length; // Número total de combinações

    return (
        <div>
            <table className="punnett-square">
                <thead>
                    <tr>
                        <th></th>
                        {parent2.split('').map((allele, idx) => (
                            <th key={idx}>{allele}</th> // Cabeçalhos da tabela com os alelos de parent2
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {parent1.split('').map((allele1, idx1) => (
                        <tr key={idx1}>
                            <th>{allele1}</th> {/* Célula com o alelo de parent1 */}
                            {parent2.split('').map((allele2, idx2) => (
                                <td key={`${idx1}-${idx2}`}>{`${allele1}${allele2}`}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <AlleleTable alleleCounts={alleleCounts} totalCombinations={totalCombinations} /> {/* Renderiza a tabela de frequência de alelos */}
        </div>
    );
};

// Componente para exibir a tabela de frequência de alelos
const AlleleTable = ({ alleleCounts, totalCombinations }) => {
    return (
        <div>
            <h3>Allele Frequencies</h3>
            <table className="allele-table">
                <thead>
                    <tr>
                        <th>Allele</th>
                        <th>Count</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(alleleCounts).map(([allele, count], idx) => (
                        <tr key={idx}>
                            <td>{allele}</td>
                            <td>{count}</td>
                            <td>{((count / totalCombinations) * 100).toFixed(2)}%</td> {/* Calcula e exibe a porcentagem de cada alelo */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PunnettSquare;
