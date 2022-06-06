import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = ( onSucess, onError ) => {
  return useQuery("heroes", fetchSuperHeroes, {
    //tratamento de erro direto na query
    onSucess: onSucess,
    onError: onError,

    /* select: (data) => {
      const selectHeroNames = data.data.map((hero) => hero.name);
      return selectHeroNames;
    }, // function select transforma os dados recebidos da api alterando sua estrura - pode se usar filter também */
  });
};
