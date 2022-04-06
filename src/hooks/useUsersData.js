import axios from "axios";
import { useQuery } from "react-query";

const fetchUsersData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const useUsersData = () => {
  return useQuery("users", fetchUsersData);
};
