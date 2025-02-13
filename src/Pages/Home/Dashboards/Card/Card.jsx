import React from 'react'
import './Card.css';

export default function Card({nomeItem, imagem, quantidade}) {
  return (
    <div className='cardContainer'>
      <h1>{nomeItem}</h1>
      <img src={imagem} alt={`Imagem de ${nomeItem}`} />
      <h2>Quantidade: </h2>
      <p>{quantidade}</p>
    </div>
  )
}
