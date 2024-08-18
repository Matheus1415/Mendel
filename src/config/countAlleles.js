// Função para contar a frequência de cada tipo de alelo
export const CountAlleles = (
  parents,
  setCountDominant,
  setCountRecessive,
  setCountDominant2,
  setCountDominant3,
  amountAlelo,
) => {
  const [parent1, parent2] = parents;
//   const parent1Group1 = parent1.slice(0, 2);
//   const parent1Group2 = parent1.slice(2, 4);
//   const parent2Group1 = parent2.slice(0, 2);
//   const parent2Group2 = parent2.slice(2, 4);

let combinations = [];
        for (let i = 0; i < parent1.length; i++) {
            let newArrayTemper = [];
            for (let j = 0; j < parent2.length; j++) {
                let indexFatherFirstAlelo = i == 0||i == 2 ? 0:1;
                let indexMotherFirstAlelo = j == 0||j == 2 ? 0:1;
                let indexFatherSecondAlelo = i < 2 ?2:3;
                let indexMotherSecondAlelo = j < 2 ?2:3;
                newArrayTemper.push([
                    [
                    parent1[indexFatherFirstAlelo],
                    parent2[indexMotherFirstAlelo]
                    ].join(''),
                    [
                    parent1[indexFatherSecondAlelo],
                    parent2[indexMotherSecondAlelo]
                    ].join('')
                ]
                );
            }
            combinations.push(newArrayTemper);
        }
console.log(combinations)
  let dominantCount = 0;
  let dominantCount2 = 0;
  let dominantCount3 = 0;
  let recessiveCount = 0;

    for(let i = 0; i < combinations.length; i++){
        for(let j = 0; j < combinations[i].length; j++){
            if(parent1.length==4){
                if(combinations[i][j][0]==combinations[i][j][0].toLowerCase()&&combinations[i][j][1]==combinations[i][j][1].toLowerCase()){
                    recessiveCount += 1;
                }else if(combinations[i][j][1]==combinations[i][j][1].toLowerCase()){
                    dominantCount2 += 1;
                }else if(combinations[i][j][0]==combinations[i][j][0].toLowerCase()){
                    dominantCount3 += 1;
                }else{
                    dominantCount += 1;
                }
            }else{
               if(combinations[i][j][0]==combinations[i][j][0].toLowerCase()){
                    recessiveCount += 1;
                }else{
                    dominantCount += 1;
                }
            }
        }
    }


  // Atualiza os valores no contexto
  setCountDominant(dominantCount);
  setCountDominant2(dominantCount2);
  setCountDominant3(dominantCount3);
  setCountRecessive(recessiveCount);
};
