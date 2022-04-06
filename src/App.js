import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-2">
        <Header />
        <Users />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
