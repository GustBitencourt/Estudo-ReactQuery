import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroes = () => {
  const onSucess = (data) => {
    console.log("Efeito colateral after data fetching", data);
  
  }
  const onError = (error) => {
    console.log("Efeito colateral after encountering some error", error);
  }

  //desestrutra os dados do useQuery
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "heroes",
    fetchSuperHeroes,
    {
      // -> cacheTime: 5000, //tempo de duração da query de requisição permanecer guardada em cache após, sair da página e ir pro lixo - tempo default é de 5 minutos
      // -> staleTime: 30000, //tempo em que o data será considera "fresco" - o valor default é 0
      // -> refetchOnMount: true, //refetch data on mount of component - similar a forma tradicional
      // -> refetchOnWindowFocus: true, //refetch data on window focus - atualiza o dado quando saimos e voltamos da tela - dafault é true

      // POOLING
      // -> refetchInterval: 2000, //refetch data on interval - atualiza o dado a cada 2 segundos seu valor default é false, é desativado quando o usuário sai da janela
      // -> refetchIntervalInBackground: 2000, //refetch data on interval - atualiza o dado a cada 2 segundos seu valor default é false, funciona mesmo quando o usuário sai da janela

      // -> enabled: false, //desabilita o carregamneto do cache - pode reabilitar através da função refetch do useQuery

      //tratamento de erro direto na query
      onSucess: onSucess,
      onError: onError,


    }
  );



  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQSuperHeroes</h1>
      <button onClick={refetch}>Fetch</button>

      {
        //confirmar a existencia do data
        data?.data.map((hero) => (
          <div key={hero.id}>{hero.name}</div>
        ))
      }
    </div>
  );
};
