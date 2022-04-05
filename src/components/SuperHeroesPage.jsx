import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/SuperHeroesPage.css";
import Preloader from "./utils/Preloader";

export default function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Traditional Super Hero Page</h2>
      {data?.map((hero) => {
        return <p key={hero.id}>{hero.name}</p>;
      })}
    </>
  );
}
