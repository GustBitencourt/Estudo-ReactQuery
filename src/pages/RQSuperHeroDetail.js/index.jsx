import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../../hooks/useSuperHeroData"

export const RQSuperHeroDetail = () => {
    //extraindo id do supero heroi selecionado para usar como parametro
    const { heroId } = useParams();

    const onSucess = (data) => {
        console.log("Efeito colateral after data fetching", data);
      };
      const onError = (error) => {
        console.log("Efeito colateral after encountering some error", error);
      };

    const { data, isFetching, isLoading, isError, error } = useSuperHeroData( heroId, onSucess, onError );

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
      }
      
      if (isError) {
        return <h2>{error.message}</h2>;
      }
  return (
    <div>
        <h1>Superhero Detail</h1>
        <h2>{data?.data.name} - {data?.data.alterEgo}</h2>
    </div>
  )
}
