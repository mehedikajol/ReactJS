import axios from "axios";
import { useQuery } from "react-query";

const fetchUserTodos = (userId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
};

export const useUserTodos = (userId) => {
  return useQuery(["user-todos", userId], () => fetchUserTodos(userId));
};
