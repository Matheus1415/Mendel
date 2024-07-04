import './Puner.css';
import { Quadro } from './quadro';

export const Puner = () => {
    let aleloPai = ['a', 'a'];
    let aleloMae = ['a', 'A'];

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {aleloPai.map((aleloP, index) => (
                            <th key={`pai-${index}`}>{aleloP}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {aleloMae.map((aleloM, indexM) => (
                        <tr key={`mae-${indexM}`}>
                            <th>{aleloM}</th>
                            {aleloPai.map((aleloP, indexP) => (
                                <Quadro key={`${indexM}${indexP}`} Alelo={`${aleloM}${aleloP}`}/>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
