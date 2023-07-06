
import React from "react";
import { GetCharacters } from "../components/GetCharacters";
import { Filter } from "../components/Filter";

export const Home = () => {

  return(
    <div className="home">
      <Filter />
      <GetCharacters />
    </div>
  )
}