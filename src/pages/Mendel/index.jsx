import { BiographyGmendel } from "./BiographyGmendel";
import { Beginning } from "./Beginning";
import { Curiosities } from "./Curiosities" 
import { LayoutBaseModify } from "../../layout/LayoutBaseModify";
import { TrabsAndimportance } from "./TrabsAndimportance";
import { Contribuitions } from "./Contribuitions";

export function Mendel(){
    return(
            <>
                <Beginning/>
                <LayoutBaseModify>
                    <BiographyGmendel/>
                </LayoutBaseModify>
                <TrabsAndimportance/>
                <Contribuitions/>
                <Curiosities/>
           </>
    )
}
