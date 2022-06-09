import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSuperHeroes = () => {
  return request({ url: '/superheroes' });
};

const addSuperHero = (hero) => {
  return request({ url: '/superheroes', method: 'POST', data: hero });
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
    /* Não é necessário no Update Optimizado */
    // onSuccess: (data) => {      
    //   //queryClient.invalidateQueries("heroes-mutation");

    //   //evita uma requisição da internet
    //   queryClient.setQueryData("heroes-mutation", (oldData) => {
    //     return {
    //       ...oldData,
    //       data: [...oldData.data, data.data],
    //     }
    //   });
    // }

    onMutate: async (newHero) => {
      await queryClient.cancelQueries('heroes-mutation');

      //caso de errado salvamos os dados antigos
      const previousHeroData = queryClient.getQueryData('heroes-mutation');

      queryClient.setQueryData('heroes-mutation', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data, 
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        }
      });
      //retorna dados antigos caso de erro
      return {
        previousHeroData,
      }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('heroes-mutation', context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('heroes-mutation');
    },
  })
}
