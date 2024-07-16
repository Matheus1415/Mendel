import { Biography } from "../Biography";
import { Curiosities } from "../Curiosities"
import { VerticalBar } from '../VerticalBar'

export function Mendel(){
    return(
        <div className="mendel">
            <Biography/>
            <Curiosities />
            <VerticalBar/>
        </div>
    )
}