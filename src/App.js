import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RQSuperHero from "./components/RQSuperHero";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import SuperHeroesList from "./components/SuperHeroesList";
import SuperHeroesPage from "./components/SuperHeroesPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes-list" element={<SuperHeroesList />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
