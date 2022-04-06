import axios from "axios";
import { useQuery } from "react-query";

const fetchComments = (postId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
};

export const usePostCommnets = (postId) => {
  return useQuery(["comments", postId], () => fetchComments(postId));
};
