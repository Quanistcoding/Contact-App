import { useEffect, useState } from "react";
import Bulletin from "../entities/bulletin";
import bulletinService from "../services/bulletinService";

const useBulletins = () => {
    const [bulletins,setBulletins] = useState<Bulletin[]>();
    useEffect(()=>{
        const data: Bulletin[]  = [];
        bulletinService.find().then(res => {
            if(!res.empty){
                res.forEach(d=> {
                    data.push(d.data() as Bulletin)
                })
            }
            setBulletins(data);
        })
    },[])
    return {bulletins};
}

export default useBulletins;