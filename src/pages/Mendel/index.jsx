import { Biography } from "../Biography";
import { Curiosities } from "../Curiosities"

export function Mendel(){
    return(
        <div className="mendel" style={{backgroundColor: 'red'}}>
            <Biography/>
            <Curiosities />
        </div>
    )
}