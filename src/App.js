import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import User from "./pages/User";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-2">
        <Header />
        <User />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
