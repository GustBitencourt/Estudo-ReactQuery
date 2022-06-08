import { useQuery, useQueryClient } from "react-query";
import axios from "axios";


const fetchSuperHero = ({ queryKey }) => {
  //query key é o array do usequery selecionamos a posição 1 que é onde estará as informações do herói selecionado
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

//useQuery para informação unica
export const useSuperHeroData = ( heroId, onSucess, onError ) => {
  //queryClient manipula o cache
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      //buscamos o data em 'heroes'
      //caso ele não encontre ele acessa o data e busca o id do heroi
      const hero = queryClient.getQueryData('heroes')?.data?.find((hero) => {
        hero.id === parseInt(heroId);
        //se encontrarmo o heroi retornamos um objeto com o data de heroi
        if(hero) {
          return {
            data: hero
          }

        } else {
          // react-query seta o undefined para um estado de loading evitando a quebra da aplicação
          return undefined;
        }
      })
    }
  });
};
