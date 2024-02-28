import axios from "axios";
const BASE = "https://www.abandomoviez.net/includes/auto/autocomplete.php";

export const getFilmList = async (query) => {
  return await axios.get(BASE, { params: { q: query, limit: 10 } });
};
