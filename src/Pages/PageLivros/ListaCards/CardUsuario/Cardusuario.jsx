import React from 'react'
import '../CardLivro/CardLivro.css';

export default function Cardusuario(props) {
  return (
    <div className='cardListaContainer'>
          <h2>{props.nome}</h2>
          <hr />
          <h2>Email: <b>{ props.email }</b></h2>
    </div>
  )
}
