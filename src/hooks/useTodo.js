import axios from "axios";
import { useQuery } from "react-query";

const fetchTodo = (todoId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
};

export const useTodo = (todoId) => {
  return useQuery(["todo", todoId], () => fetchTodo(todoId));
};
