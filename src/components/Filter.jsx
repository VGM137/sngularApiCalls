import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { houseFilter, textFilter } from "../actions";
import '../assets/styles/components/Filter.css'

export const Filter = () => {

  const [house, setHouse] = useState('Howarts')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setHouse(e.target.value)
    dispatch(houseFilter(e.target.value))
  } 

  const handleInput = (e) => {
    dispatch(textFilter(e.target.value))
  } 

  return(
    <div className="filter-container">
      <div className="filter-inputs">
        <select onChange={(e) => handleChange(e)} name="HowartHouses" id="howarts" className="filter-select" value={house}>
          <option value="Howarts">Howarts</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
        <label htmlFor="HowartHouses">Filtrar por casa</label>
      </div>

      <div className="filter-inputs">
        <input type="text" onInput={handleInput} placeholder="Buscar" name="search" />
        <label htmlFor="search">Busca a tu mago</label>
      </div>
    </div>
  )
}

