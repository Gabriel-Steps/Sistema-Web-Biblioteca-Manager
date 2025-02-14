import React from 'react'
import './PageLivros.css';
import ListaLivros from './ListaLivros/ListaLivros';
import FormCriarLivro from './FormCriarLivro/FormCriarLivro';

export default function PageLivros() {
  return (<>
    <div className='containerPageLivros'>
          <h1>Livros</h1>
      <ListaLivros />
    </div>
    <FormCriarLivro />
    </>)
}
