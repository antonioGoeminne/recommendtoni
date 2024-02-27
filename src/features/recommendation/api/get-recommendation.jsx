import axios from "axios";
const BASE = "https://www.abandomoviez.net/db/recomiendapelis.php";

export const getRecommendation = async ({ status }) => {
  return await axios
    .get(BASE, {
      params: {
        estado: status,
        mode: 1,
      },
    })
    .then((e) => e?.data);
};
