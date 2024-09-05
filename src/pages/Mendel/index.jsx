import { BiographyGmendel } from "./BiographyGmendel";
import { Beginning } from "./Beginning";
import { Curiosities } from "./Curiosities" 
import { TrabsAndimportance } from "./TrabsAndimportance";
import { Contribuitions } from "./Contribuitions";
import { VideosAndBlogs } from "./VideosAndBlogs";

export function Mendel(){
    return(
            <>
                <Beginning/>
                    <BiographyGmendel/>
                <TrabsAndimportance/>
                <Contribuitions/>
                <Curiosities/>
                <VideosAndBlogs />
           </>
    )
}
