import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroesData = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHero = () => {
  return useQuery("superHero", fetchHeroesData);
};
