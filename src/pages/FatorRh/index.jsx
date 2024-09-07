import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import WantFatorRh from './WantFatorRh';
import BiographyFatorRh  from './BiographyFatorRh';
import { TableSection } from './TableSection';
import { ExamFactorRh } from './ExamFactorRh';


export const FatorRh = () => {

    return(
        <>
            <LayoutIntroduction query="Fator Rh">Fator Rh</LayoutIntroduction>
            <WantFatorRh/>
            <BiographyFatorRh/>
            <TableSection/>
            <ExamFactorRh/>  
        </>
       
    );
}
