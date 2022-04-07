import axios from "axios";
import { useQuery } from "react-query";

const fetchAlbum = (albumId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  );
};

export const useUserAlbum = (albumId) => {
  return useQuery(["album", albumId], () => fetchAlbum(albumId));
};
