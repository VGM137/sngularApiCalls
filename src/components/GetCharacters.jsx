
import React, { useState, useEffect } from "react";
import { Display } from "./Display";
import { getData } from "../utils/getData";

export const GetCharacters = () => {

  const [characters, setCharacters] = useState([])

  console.log('hola')

  const fetchHarryPotterCharacters = () => {
    let data = new getData()
    data.getHPData()
      .then(result => {
        console.log(result)
        if(characters.length === 0 ){
          setCharacters(result)
        }
      })
      .catch(err => {console.log(err)})
  }

  useEffect(() => {
    fetchHarryPotterCharacters()
  }, [])

  return(
    <>
      {characters.length > 0 &&
        <Display characters={characters}/>
      }
    </>
  )
}