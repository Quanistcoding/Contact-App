import { useEffect, useState } from "react";
import Bulletin from "../entities/bulletin";
import bulletinService from "../services/bulletinService";

const useBulletin = (id:string) => {
    const [bulletin,setBulletin] = useState<Bulletin>();
    useEffect(()=>{
        bulletinService.findOne(id).then(res => {
            if(res.exists()){
                setBulletin({id:res.id,...res.data()} as Bulletin);
            }
        })
    },[])
    return {bulletin};
}

export default useBulletin;