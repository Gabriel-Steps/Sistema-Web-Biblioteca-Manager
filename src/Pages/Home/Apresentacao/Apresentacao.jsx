import React from 'react'
import './Apresentacao.css';
import SecaoEntidade from './SecaoEntidade/SecaoEntidade';

export default function Apresentacao() {
  return (
    <div className='apresentacaoContainer'>
      <h1>Apresentação</h1>
      <div className='containerAprentacoesCards'>
          <SecaoEntidade itemSecao={"Livro"} />
          <SecaoEntidade itemSecao={"Usuário"} />
          <SecaoEntidade itemSecao={"Empréstimo"} />
      </div>
    </div>
  )
}
