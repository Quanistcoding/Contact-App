import { useEffect, useState } from "react";
import Bulletin from "../entities/bulletin";
import bulletinService from "../services/bulletinService";

const useBulletins = () => {
  const [bulletins, setBulletins] = useState<Bulletin[]>();
  useEffect(() => {
    const data: Bulletin[] = [];
    bulletinService.findOrderByDate().then((res) => {
      if (!res.empty) {
        res.forEach((d) => {
          data.push({ id: d.id, ...d.data() } as Bulletin);
        });
      }
      setBulletins(data);
    });
  }, []);
  return { bulletins, setBulletins };
};

export default useBulletins;
