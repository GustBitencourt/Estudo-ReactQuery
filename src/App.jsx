import { QueryClientProvider, QueryClient } from 'react-query'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SuperHeroes } from './pages/SuperHeroes'
import { RQSuperHeroes } from './pages/RQSuperHeroes'

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
        </Routes>
      </QueryClientProvider>
    </main>
  )
}

export default App
