import { QueryClient, QueryClientProvider } from "react-query";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import Posts from "./components/Posts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-2">
        <Header />
        <Posts />
        <Post />
        <Comments />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
