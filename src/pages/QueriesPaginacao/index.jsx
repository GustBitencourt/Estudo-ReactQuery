import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

//chamada recebe o numero da página
const fetchColors = (currentPage) => {
  return axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${currentPage}`
  );
};



export const QueriesPaginacao = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ["colors", currentPage],
    () => fetchColors(currentPage),
    {
      keepPreviousData: true,
    }
  );

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  
  const previousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>QueriesPaginacao</h1>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id} - {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button 
          onClick={previousPage} 
          disabled={currentPage === 1}
        >
          Previous Page
        </button>        
        <button 
          onClick={nextPage} 
          disabled={currentPage === 4}
        >
          Next Page
        </button>
      </div>
    </>
  );
};
