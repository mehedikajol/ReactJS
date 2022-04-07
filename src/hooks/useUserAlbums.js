import axios from "axios";
import { useQuery } from "react-query";

const fetchUserAlbums = (userId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/albums`
  );
};

export const useUserAlbums = (userId) => {
  return useQuery(["user-albums", userId], () => fetchUserAlbums(userId));
};
