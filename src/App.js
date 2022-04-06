import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import SingleUser from "./pages/SingleUser";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<SinglePost />} />
            <Route path="/user" element={<SingleUser />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
