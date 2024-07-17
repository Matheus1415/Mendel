// Função para contar a frequência de cada tipo de alelo
export const CountAlleles = (
    parents,
    setCountDominant,
    setCountRecessive
  ) => {
    const [parent1, parent2] = parents;
    
    const combinations = [];
    for (let i = 0; i < parent1.length; i++) {
      for (let j = 0; j < parent2.length; j++) {
        combinations.push(`${parent1[i]}${parent2[j]}`);
      }
    }
  
    let dominantCount = 0;
    let recessiveCount = 0;
  
    combinations.forEach(combination => {
      if (/[A-Z]/.test(combination)) {
        dominantCount++;
      } else {
        recessiveCount++;
      }
    });
  
    // Atualiza os valores no contexto
    setCountDominant(dominantCount);
    setCountRecessive(recessiveCount);
  };
  