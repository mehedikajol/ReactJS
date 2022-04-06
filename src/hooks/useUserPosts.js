import axios from "axios";
import { useQuery } from "react-query";

const fetchUserPosts = (userId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
};

export const useUserPosts = (userId) => {
  return useQuery(["user-posts", userId], () => fetchUserPosts(userId));
};
