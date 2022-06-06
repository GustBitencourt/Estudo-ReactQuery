import { useQuery } from "react-query";
import axios from "axios";


const fetchSuperHero = ({ queryKey }) => {
  //query key é o array do usequery selecionamos a posição 1 que é onde estará as informações do herói selecionado
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

//useQuery para informação unica
export const useSuperHeroData = ( heroId, onSucess, onError ) => {
  return useQuery(['super-hero', heroId], fetchSuperHero);
};
