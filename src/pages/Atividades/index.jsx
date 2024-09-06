import {AtividadesContextProvider} from '../../contexts/AtividadesContextProvider'
import { AtividadesConteiner } from "./AtividadesConteiner";
import { LayoutActivity } from '../../layout/LayoutActivity';


export function Atividades(){
    
    return(
        <>
            <AtividadesContextProvider>
                <LayoutActivity>
                    <AtividadesConteiner/>
                </LayoutActivity>
            </AtividadesContextProvider>
        </>
    )
}