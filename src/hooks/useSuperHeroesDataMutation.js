import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero)
}

export const useSuperHeroesDataMutation = ( onSucess, onError ) => {
  return useQuery("heroes-mutation", fetchSuperHeroes, {
    //tratamento de erro direto na query
    onSucess: onSucess,
    onError: onError,    

    /* select: (data) => {
      const selectHeroNames = data.data.map((hero) => hero.name);
      return selectHeroNames;
    }, // function select transforma os dados recebidos da api alterando sua estrura - pode se usar filter também */
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();

  return useMutation(addSuperHero, {
    onSuccess: () => {      
      queryClient.invalidateQueries("heroes-mutation");
    }
  })
}
