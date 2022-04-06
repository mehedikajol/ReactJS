import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import Posts from "./components/Posts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{}}>
        <Header />
        <Container>
          <Posts />
          <Post />
        </Container>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
