import { Biography } from "../../components/MendelPage/Biography";
import { Curiosities } from "../../components/MendelPage/Curiosities"

export function Mendel(){
    return(
        <div className="mendel">
            <Biography/>
            <Curiosities />
        </div>
    )
}