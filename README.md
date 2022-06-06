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
    </ul>
</div>


