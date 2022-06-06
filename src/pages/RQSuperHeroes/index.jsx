import { useSuperHeroesData } from "../../hooks/useSuperHeroesData";


export const RQSuperHeroes = () => {
  const onSucess = (data) => {
    console.log("Efeito colateral after data fetching", data);
  };
  const onError = (error) => {
    console.log("Efeito colateral after encountering some error", error);
  };

  //desestrutra os dados do useQuery
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSucess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {/* <h1>RQSuperHeroes</h1>
      <button onClick={refetch}>Fetch</button>

      {
        //confirmar a existencia do data
        data?.data.map((hero) => (
          <div key={hero.id}>{hero.name}</div>
        ))
      } */}

      <h1>RQSuperHeroes - function select</h1>

      {
        //só é necessário um data a partir do select
        data.map((heroName) => (
          <div key={heroName}>{heroName}</div>
        ))
      }
    </div>
  );
};
