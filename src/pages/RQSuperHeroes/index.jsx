import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroe");
};

export const RQSuperHeroes = () => {
  //desestrutra os dados do useQuery
  const { isLoading, data, isError, error } = useQuery(
    "heroes",
    fetchSuperHeroes
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
