import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CharCard } from "./CharCard";

import '../assets/styles/components/Display.css'

export const Display = ({characters}) => {

  const [renderChars, setRenderChars] = useState([])
  let currentHouse = useSelector(state => state.houseFilter)
  let search = useSelector(state => state.textFilter)

  useEffect(() => {
    filterCharacters(currentHouse, search)
  }, [currentHouse, search])

  const filterCharacters = (house, search) => {

    let charsToFilter = []

    if(search.length > 0){
      characters.forEach(char => {
        if(char.house.toLowerCase().includes(search) || char.name.toLowerCase().includes(search) || char.species.toLowerCase().includes(search)) {
          charsToFilter.push(char)
        }
      })
    }else{
      charsToFilter = characters
    }

    if(house === 'Howarts'){
      let renderArray = charsToFilter.map((char, i) => {
        return <CharCard key={char?.id}imgUrl={char?.image}charName={char?.name}house={char?.house}species={char?.species}status={char?.alive}/>
      })
      setRenderChars(renderArray)
    }else{
      let filteredChars = []
      charsToFilter.forEach(char => {
        if(char.house === house) {
          filteredChars.push(char)
        } 
      })
      let renderArray = filteredChars.map((char, i) => {
        return <CharCard key={char?.id}imgUrl={char?.image}charName={char?.name}house={char?.house}species={char?.species}status={char?.alive}/>
      }) 
      setRenderChars(renderArray)
    }
    
  }

  return(
    <div className="display-characters">
      {renderChars}
    </div>
  )
}

