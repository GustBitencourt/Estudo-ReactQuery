import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Route, Routes } from 'react-router-dom'


import { Home } from './pages/Home'
import { SuperHeroes } from './pages/SuperHeroes'
import { RQSuperHeroes } from './pages/RQSuperHeroes'

import { Header } from './components/Header'

import './App.css'
import { RQSuperHeroDetail } from './pages/RQSuperHeroDetail.js'

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
        </Routes>
        <ReactQueryDevtools position="bottom-right"/>
      </QueryClientProvider>
    </main>
  )
}

export default App
