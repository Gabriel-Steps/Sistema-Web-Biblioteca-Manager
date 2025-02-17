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
              <Link to="/pagina/Livros" >Livros</Link>
              <Link to="/pagina/Usuários">Usuários</Link>
              <Link to="/pagina/Empréstimos">Empréstimos</Link>
        </div>
    </div>
  )
}
