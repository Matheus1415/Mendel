import { useMemo } from 'react';

export function usePunnettSquare(aleloFather = [], aleloMother= []) {
    const combinationsAlelo = useMemo(() => {
        let combinations = [];

        for (let i = 0; i < aleloFather.length; i++) {
            for (let j = 0; j < aleloMother.length; j++) {
                combinations.push(`${aleloFather[i]}${aleloMother[j]}`);
            }
        }

        return combinations;
    }, [aleloFather, aleloMother]);

    return {
        'combinationsAlelo':combinationsAlelo
    };
}
