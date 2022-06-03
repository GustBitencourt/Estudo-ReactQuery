import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroes = () => {
  //desestrutra os dados do useQuery
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "heroes",
    fetchSuperHeroes,
    {
      //cacheTime: 5000, //tempo de duração da query de requisição permanecer guardada em cache após, sair da página e ir pro lixo - tempo default é de 5 minutos
      staleTime: 30000, //tempo em que o data será considera "fresco"
    }
  );



  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQSuperHeroes</h1>

      {
        //confirmar a existencia do data
        data?.data.map((hero) => (
          <div key={hero.id}>{hero.name}</div>
        ))
      }
    </div>
  );
};
