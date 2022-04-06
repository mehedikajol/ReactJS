import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <Header />
        <Container>
          <Posts />
        </Container>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
