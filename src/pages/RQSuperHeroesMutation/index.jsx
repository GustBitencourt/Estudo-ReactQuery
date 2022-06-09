import { useState } from "react";
import { useSuperHeroesDataMutation, useAddSuperHeroData } from "../../hooks/useSuperHeroesDataMutation";
import { Link } from 'react-router-dom'


export const RQSuperHeroesMutation = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSucess = (data) => {
    console.log("Efeito colateral after data fetching", data);
  };
  const onError = (error) => {
    console.log("Efeito colateral after encountering some error", error);
  };

  //desestrutra os dados do useQuery
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesDataMutation(onSucess, onError);

  const { mutate: addHero } = useAddSuperHeroData()

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQSuperHeroes</h1>
      <div>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input 
          type="text" 
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          placeholder="Alter Ego"
        />
        
        <button onClick={handleAddHero}>Add Hero</button>
      </div>
      {
        //confirmar a existencia do data
        data?.data.map((hero) => (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`} >{hero.name}</Link>
          </div>
        ))
      }

      {/* <h1>RQSuperHeroes - function select</h1>
      {
        //só é necessário um data a partir do select
        data.map((heroName) => (
          <div key={heroName}>{heroName}</div>
        ))
      } */}
    </div>
  );
};
