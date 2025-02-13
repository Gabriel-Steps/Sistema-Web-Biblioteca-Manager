import React from 'react'
import './Cabecalho.css';

export default function Cabecalho() {
  return (
      <div className='cabecalhoContainer'>
          <div className='tituloCabecalhoContainer'>
          <h1>Biblioteca <p>Manager</p></h1>
          </div>
          <div className='menuCabecalhoContainer'>
              <a href="#">Home</a>
              <a href="#">Livros</a>
              <a href="#">Empréstimos</a>
              <a href="#">Usuários</a>
        </div>
    </div>
  )
}
