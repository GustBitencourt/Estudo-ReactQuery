<div>
    <h1>Anotações referente ao curso de ReactQuery</h1>
    <ul>
        <li>
            data é o objeto de response no useQuey
        </li>
        <li>
            -> cacheTime: 5000, //tempo de duração da query de requisição permanecer guardada em cache após, sair da página e ir pro lixo - tempo default é de 5 minutos
        </li>
        <li>
            -> staleTime: 30000, //tempo em que o data será considera "fresco" - o valor default é 0
        </li>
        <li>
            -> refetchOnMount: true, //refetch data on mount of component - similar a forma tradicional
        </li>
        <li>
            -> refetchOnWindowFocus: true, //refetch data on window focus - atualiza o dado quando saimos e voltamos da tela - dafault é true
        </li>
        <li>
            -> isFetching função que verifica se os dados estão carregando
        </li>
        <h2>
            POOLING
        </h2>
        <li>
            Function refetching podemos utilizar para a ativação de busca de dados?
        </li>
        <li>
            -> refetchInterval: 2000, //refetch data on interval - atualiza o dado a cada 2 segundos seu valor default é false, é desativado quando o usuário sai da janela
        </li>
        <li>
            -> refetchIntervalInBackground: 2000, //refetch data on interval - atualiza o dado a cada 2 segundos seu valor default é false, funciona mesmo quando o usuário sai da janela
        </li>
        <li>
            -> enabled: false, //desabilita o carregamneto do cache - pode reabilitar através da função refetch do useQuery
        </li>
        <h2>Tratamento de erros</h2>
        <li>
            onSucess recebendo o data como argumento
        </li>
        <li>
            onError, recebendo o error como argumento, no seu retorno usamos o menssagem, error.message para saber o error
        </li>
        <li>
            -> function select transforma os dados recebidos da api alterando sua estrura - pode se usar filter também
        </li>
        <li>
            -> select é uma função que podemos selecionar uma parte do objeto data, com map ou filter, que queremos utilizar no front-end
        </li>
        <h2>Query Paralel</h2>
        <li>
            É possível fazer a chamada de dois ou mais useQuerys, porem é necessário os uso de ALIAS em seus objetos data
        </li>
        <h2>useQueries</h2>
        <li>
            Recebe dois parametros como argumento o queryKey, onde passamos a stringKey e o id num array, e como segundo parametro uma função responsavel pela fetchData
        </li>
        <li>
            Retorna um array de queries Results
        </li>
        <h3>Dependent Queries</h3>
        <li>
            Queries executadas uma após a outra
        </li>
        <li>
            Carrega três logs no useQuerisDevtool, a primeira chamada como nula, a segunda carregando o email do usuario, a terceira carregando os cursos ligados ao email, colocamos um !! na primeira chama no enabled da segunda para ela só ser chamada quando for verificada sua existencia 
        </li>
        <h2>useQuerieClient</h2>
        <li>
            Para manipular o queryClient do provider            
        </li>
        <li>
            Podemos acessar o query cache e setar um initialData evitando, avançando no fetch da aplicação, já buscando o dado de um herói em sua lista            
        </li>
        <h2>Paginação</h2>
        <li>
            Necessário um useState inicial com o numero da pagina
        </li>
        <li>
            keepPreviousData mantem o dado da pagina passada salvo para não interpretar toda mudança como uma nova query          
        </li>
        <h2>useInfiniteQueries</h2>
        <li>
            Utilizada para paginação em apis com muitos dados
        </li>
        <li>
            ao contrario do querie normal que retorna data?.data o useInfiniteQueries retorna data?.pages dando acesso ao grupo de dados e seu index e em um novo map poderemos manipular os dados - verificar InfiniteQueries em page
        </li>
        <li>
            desestrutura hasNextPage para verificar sem tem mais itens para carregar
        </li>
        <li>
            desestrutura a função fetchNextPage para avançar a pagina
        </li>
        <li>
            isFetchingNextPage verifica o carregamento do próximo grupo de dados        
        </li>
        <h2>Mutations</h2>
        <li>
            Lida com post, update, delete        
        </li>
        <li>
            mutate é a função que lida com a requisição de POST, recebdno os dados como parametro
        </li>
        <li>
            se tivermos multiplos post utilizamos alias pro mutate       
        </li>

    </ul>
</div>


