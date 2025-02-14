import React from 'react'
import { Link } from 'react-router-dom';
import './Cabecalho.css';

export default function Cabecalho() {
  return (
      <div className='cabecalhoContainer'>
          <div className='tituloCabecalhoContainer'>
          <h1>Biblioteca <p>Manager</p></h1>
          </div>
          <div className='menuCabecalhoContainer'>
              <Link to="/">Home</Link>
              <Link to="/paginaLivros" >Livros</Link>
              <a href="#">Empréstimos</a>
              <a href="#">Usuários</a>
        </div>
    </div>
  )
}
