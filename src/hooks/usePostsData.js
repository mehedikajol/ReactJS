import axios from "axios";
import { useQuery } from "react-query";

const fetPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const usePostsData = () => {
  return useQuery("posts", fetPosts);
};
