import axios from "axios";
import { useQuery } from "react-query";

const fetchPostData = (postId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export const usePostData = (postId) => {
  return useQuery(["post", postId], () => fetchPostData(postId));
};
