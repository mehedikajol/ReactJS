import axios from "axios";
import { useQuery } from "react-query";

const fetchUserData = (userId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const useUserData = (userId) => {
  return useQuery(["user", userId], () => fetchUserData(userId));
};
