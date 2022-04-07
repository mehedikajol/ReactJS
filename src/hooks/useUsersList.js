import axios from "axios";
import { useQuery } from "react-query";

const fetchUsersList = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const useUsersList = () => {
  return useQuery("users-list", fetchUsersList, {
    select: (data) => {
      const users = data.data.map((user) => user.name);
      return users;
    },
  });
};
