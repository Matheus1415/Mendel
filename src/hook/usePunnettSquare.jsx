import { useMemo } from 'react';

export function usePunnettSquare(aleloFather = [], aleloMother= []) {
    //fazer as verificação
    const combinationsAlelo = useMemo(() => {
        let combinations = [];
        for (let i = 0; i < aleloFather.length; i++) {
            let newArrayTemper = [];
            for (let j = 0; j < aleloMother.length; j++) {
                newArrayTemper.push(`${aleloFather[i]}${aleloMother[j]}`);
            }
            combinations.push(newArrayTemper);
        }
        return combinations;
    }, [aleloFather, aleloMother]);
    return {
        'combinationsAlelo':combinationsAlelo
    };
}
