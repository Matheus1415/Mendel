export const CountAlleles = (
    parents,
    setCountDominant,
    setCountRecessive,
    amountAlelo
  ) => {
    const [parent1, parent2] = parents;
  
    let combinations = [];
    let dominante1 = 0; 
    let receciva1 = 0; 
    let dominante2 = 0; 
    let receciva2 = 0; 
  
    if (amountAlelo === 4 && parent1.length === 4 && parent2.length === 4) {
      // Divide os alelos dos pais em dois grupos
      const parent1Group1 = parent1.slice(0, 2);
      const parent1Group2 = parent1.slice(2, 4);
      const parent2Group1 = parent2.slice(0, 2);
      const parent2Group2 = parent2.slice(2, 4);
  
      // Gera combinações para o primeiro grupo
      const combinationsGroup1 = [];
      for (let i = 0; i < parent1Group1.length; i++) {
        for (let j = 0; j < parent2Group1.length; j++) {
          combinationsGroup1.push(`${parent1Group1[i]}${parent2Group1[j]}`);
        }
      }
  
      // Contagem de letras maiúsculas em combinationsGroup1
      dominante1 = combinationsGroup1.reduce((count, combination) => {
        return count + (combination.match(/[A-Z]/g) || []).length;
      }, 0);
      console.log('Contagem de letras maiúsculas em combinationsGroup1:', dominante1);
  
      // Gera combinações para o segundo grupo
      const combinationsGroup2 = [];
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
  
      // Logs para depuração
      console.log('Combinations Group 1:', combinationsGroup1);
      console.log('Combinations Group 2:', combinationsGroup2);
      console.log('All Combinations:', combinations);
  
    } else {
      // Lógica para quadros de Punnett 2x2
      for (let i = 0; i < parent1.length; i++) {
        for (let j = 0; j < parent2.length; j++) {
          combinations.push(`${parent1[i]}${parent2[j]}`);
        }
      }
    }
  
    // Contagem de alelos dominantes e recessivos para a primeira característica
    dominante1 = combinations.reduce((count, combination) => {
      return count + (combination.match(/[A-Z]/g) || []).length;
    }, 0);
    receciva1 = combinations.reduce((count, combination) => {
      return count + (combination.match(/[a-z]/g) || []).length;
    }, 0);
  
    // Para a segunda característica, ajustamos conforme necessário
    // Isso é um exemplo, você pode precisar adaptar se houver uma segunda configuração de alelos
    const combinationsForDominant2 = combinations; // Substitua com a lógica específica se necessário
    const combinationsForRecessive2 = combinations; // Substitua com a lógica específica se necessário
    
    dominante2 = combinationsForDominant2.reduce((count, combination) => {
      return count + (combination.match(/[A-Z]/g) || []).length;
    }, 0);
    receciva2 = combinationsForRecessive2.reduce((count, combination) => {
      return count + (combination.match(/[a-z]/g) || []).length;
    }, 0);
  
    // Atualiza os valores no contexto
    setCountDominant([dominante1, dominante2]);
    setCountRecessive([receciva1, receciva2]);
  };
  