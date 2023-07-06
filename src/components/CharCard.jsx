
import React, { useState, useEffect } from "react";
import '../assets/styles/components/CharCard.css'
import howarts from '../assets/static/howarts.jpg'

export const CharCard = ({imgUrl, charName, house, species, status}) => {

  return(
    <>
      <div className={`card-container ${house !== '' ? house : 'card-bg'}`}>
        <div className="card-photo">
          <img src={imgUrl ? imgUrl : howarts} alt="Foto del personaje" />
        </div>
        <div className="card-info">
          <h2>{charName}</h2>
          <h3>{house}</h3>
          <h3>{species}</h3>
          <h3>{status}</h3>
        </div>
      </div>
    </>
  )
}

