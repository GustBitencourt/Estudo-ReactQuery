import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [heroesData, setHeroesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes')
      .then(res => {
        setHeroesData(res.data)
        setIsLoading(false)
      })

  }, [])

  
  return (
    <div>
      <h1>SuperHeroes</h1>

      {
        isLoading ? (
          <div>Loading...</div>

        ) : (
          heroesData.map((hero) => (
            <div key={hero.id} >
              {hero.name}
            </div>
          ))
        )
      }
    </div>
  );
}
