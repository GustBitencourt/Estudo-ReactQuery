import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Route, Routes } from 'react-router-dom'


import { Home } from './pages/Home'
import { SuperHeroes } from './pages/SuperHeroes'
import { RQSuperHeroes } from './pages/RQSuperHeroes'
import { RQSuperHeroDetail } from './pages/RQSuperHeroDetail.js'
import { QueriParalela } from './pages/QueriParalela'
import { DinamicParalel } from './pages/DinamicParalel'
import { DependentQueries } from './pages/DependentQueries'
import { QueriesPaginacao } from './pages/QueriesPaginacao'

import { Header } from './components/Header'

import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    <main className="App">
      <Header />
      <QueryClientProvider client={queryClient} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroDetail />} />
          <Route path="/query-paralela" element={<QueriParalela />} />
          <Route path="/dinamic-paralel" element={<DinamicParalel heroIds={[1, 3]} />} />
          <Route path="/dependent-queries" element={<DependentQueries email="example@mail.com" />} />
          <Route path="/pagination" element={<QueriesPaginacao />} />
        </Routes>
        <ReactQueryDevtools position="bottom-right"/>
      </QueryClientProvider>
    </main>
  )
}

export default App
