import axios from "axios";
import { useQuery } from "react-query";
import Preloader from "./utils/Preloader";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export default function RQSuperHeroesPage() {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      {data?.data.map((hero) => {
        return <p key={hero.id}>{hero.name}</p>;
      })}
    </>
  );
}
