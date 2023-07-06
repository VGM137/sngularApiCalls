
import React, { useState } from "react";
import { getData } from "../utils/getData";

export const Home = () => {

  const [characters, setCharacters] = useState([])

  console.log('hola')
  let data = new getData()
  data.getHPData()
    .then(result => {
      console.log(result)
      if(characters.length === 0 ){
        setCharacters(result[0])
      }
    })
    .catch(err => {console.log(err)})

  return(
    <>
      <div>
        {characters.length < 0 
        ? characters.map(char => {
          return(
            <div>
              {char.name}
            </div>
          )
        })
        :''
        }
      </div>
    </>
  )
}