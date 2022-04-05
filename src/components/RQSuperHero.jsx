import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import Preloader from "./utils/Preloader";

export default function RQSuperHero() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQ Super Hero Details</h2>
      <p>
        {data?.data.name} - {data?.data.alterEgo}
      </p>
    </div>
  );
}
