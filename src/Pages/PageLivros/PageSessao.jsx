import React from 'react'
import './PageSessao.css';
import ListaLivros from './ListaLivros/ListaLivros';
import { useParams } from 'react-router-dom';
import FormCriarLivro from './FormCriarLivro/FormCriarLivro';

export default function PageSessao() {
  const { tipo } = useParams();
  return (<>
    <FormCriarLivro />
    <div className='containerPageLivros'>
      <h1>{ tipo }</h1>
      <ListaLivros tipoSessao={ tipo } />
    </div>
    </>)
}
