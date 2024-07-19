// Função para contar a frequência de cada tipo de alelo
export const CountAlleles = (
  parents,
  setCountDominant,
  setCountRecessive,
  amountAlelo
) => {
  const [parent1, parent2] = parents;

  let combinations = [];

  if (amountAlelo === 4 && parent1.length === 4 && parent2.length === 4) {
      // Divida os pais em dois grupos de alelos
      const parent1Group1 = parent1.slice(0, 2);
      const parent1Group2 = parent1.slice(2, 4);
      const parent2Group1 = parent2.slice(0, 2);
      const parent2Group2 = parent2.slice(2, 4);

      // Gera combinações para os dois grupos de alelos
      const combinationsGroup1 = [];
      const combinationsGroup2 = [];

      for (let i = 0; i < parent1Group1.length; i++) {
          for (let j = 0; j < parent2Group1.length; j++) {
              combinationsGroup1.push(`${parent1Group1[i]}${parent2Group1[j]}`);
          }
      }

      for (let i = 0; i < parent1Group2.length; i++) {
          for (let j = 0; j < parent2Group2.length; j++) {
              combinationsGroup2.push(`${parent1Group2[i]}${parent2Group2[j]}`);
          }
      }

      // Combina as combinações dos dois grupos
      for (let k = 0; k < combinationsGroup1.length; k++) {
          for (let l = 0; l < combinationsGroup2.length; l++) {
              combinations.push(`${combinationsGroup1[k]}${combinationsGroup2[l]}`);
          }
      }
  } else {
      // Lógica para quadros de Punnett 2x2
      for (let i = 0; i < parent1.length; i++) {
          for (let j = 0; j < parent2.length; j++) {
              combinations.push(`${parent1[i]}${parent2[j]}`);
          }
      }
  }

  let dominantCount = 0;
  let recessiveCount = 0;

  // Contagem de alelos dominantes e recessivos
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
