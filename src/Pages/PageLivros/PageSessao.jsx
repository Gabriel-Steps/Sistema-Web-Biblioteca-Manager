import React from 'react'
import './PageSessao.css';
import ListaCards from './ListaCards/ListaCards';
import { useParams } from 'react-router-dom';
import FormCriarLivro from './FormCriarLivro/FormCriarLivro';
import FormCriarUsuario from './FormCriarUsuario/FormCriarUsuario';
import FormCriarEmprestimo from './FormCriarEmprestimo/FormCriarEmprestimo';

export default function PageSessao() {
  const { tipo } = useParams();
  const handleTipoSessao = () => {
    if (tipo === "Livros") {
      return <FormCriarLivro />
    }
    if (tipo === "Usuários") {
      return <FormCriarUsuario />
    }
    if (tipo === "Empréstimos") {
      return <FormCriarEmprestimo />
    }
  }
  return (<>
    {handleTipoSessao()}
    <div className='containerPageLivros'>
      <h1>{ tipo }</h1>
      <ListaCards tipoSessao={ tipo } />
    </div>
    </>)
}
