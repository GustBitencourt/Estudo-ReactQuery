import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')

}

export const RQSuperHeroes = () => {
  //desestrutra os dados do useQuery
  const { isLoading, data } = useQuery('heroes', fetchSuperHeroes);



  return (
    <div>
      <h1>RQSuperHeroes</h1>

      {
        isLoading ? (
          <div>Loading...</div>

        ) : (
          //confirmar a existencia do data
          data?.data.map((hero) => (
            <div key={hero.id} >
              {hero.name}
            </div>
          ))
        )
      }
    </div>
  );
}
