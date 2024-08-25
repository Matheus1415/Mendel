import { useMemo } from 'react';

export function usePunnettSquareBO(aleloFather = [], aleloMother= []) {
    //fazer as verificação
    const combinationsAlelo = useMemo(() => {
        let inputs={
            'O':'i',
            'A':'Iᵃ́',
            'B':'Iᵇ',
            'R':'R',
            'r':'r',
        }
        function orderBy(alelo){
            let orderAlelo = [];
            let letters = Object.keys(inputs)
            let firstDominantAlelo = inputs[letters.indexOf(alelo[0])>=letters.indexOf(alelo[1])?alelo[0]:alelo[1]];
            let firstRecessiveAlelo = inputs[firstDominantAlelo==alelo[0]?alelo[1]:alelo[0]];
            let SecoundDominantAlelo = inputs[letters.indexOf(alelo[2])>=letters.indexOf(alelo[3])?alelo[2]:alelo[3]];
            let SecoundRecessiveAlelo = inputs[SecoundDominantAlelo==alelo[2]?alelo[3]:alelo[2]];

            return firstDominantAlelo+firstRecessiveAlelo+SecoundDominantAlelo+SecoundRecessiveAlelo
        }
        let combinations = [];
        for (let i = 0; i < aleloFather.length; i++) {
            let newArrayTemper = [];
            for (let j = 0; j < aleloMother.length; j++) {
                let indexFatherFirstAlelo = i == 0||i == 2 ? 0:1;
                let indexMotherFirstAlelo = j == 0||j == 2 ? 0:1;
                let indexFatherSecondAlelo = i < 2 ?2:3;
                let indexMotherSecondAlelo = j < 2 ?2:3;
                newArrayTemper.push(
                    orderBy([
                    aleloFather[indexFatherFirstAlelo],
                    aleloMother[indexMotherFirstAlelo],
                    aleloFather[indexFatherSecondAlelo],
                    aleloMother[indexMotherSecondAlelo]
                    ])
                );
            }
            combinations.push(newArrayTemper);
        }
        return combinations;
    }, [aleloFather, aleloMother]);
    return {
        'combinationsAlelo':combinationsAlelo
    };
}
