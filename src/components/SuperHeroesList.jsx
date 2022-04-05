import React from "react";
import { useSuperHero } from "../hooks/useSuperHero";
import Preloader from "./utils/Preloader";

export default function SuperHeroesList() {
  const { data, isLoading } = useSuperHero();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <h2>Super Hero List</h2>
      {data?.data.map((hero) => {
        return <p key={hero.name}>{hero.name}</p>;
      })}
      {}
    </>
  );
}
