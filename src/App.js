import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import SuperHeroesPage from "./components/SuperHeroesPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
