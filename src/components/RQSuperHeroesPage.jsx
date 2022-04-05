import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import Preloader from "./utils/Preloader";

export default function RQSuperHeroesPage() {
  const onSuccess = () => {
    console.log("Perform side effects after data is loaded");
  };

  const onError = () => {
    console.log("Perform side effect if error is occured");
  };

  const { isLoading, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
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
        return (
          <p key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </p>
        );
      })}
      {/* {data?.map((heroName) => {
        return <p key={heroName}>{heroName}</p>;
      })} */}
    </>
  );
}
