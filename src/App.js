import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserAlbum from "./components/UserAlbum";
import Users from "./components/Users";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import SingleUser from "./pages/SingleUser";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:userId" element={<SingleUser />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
            <Route path="/albums/:albumId" element={<UserAlbum />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
