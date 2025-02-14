import React from 'react'
import './CardLivro.css';
import { deleteLivro } from '../../../../services/livros'


export default function CardLivro(props) {
  return (
    <div className='cardLivroListaContainer'>
          <h2>Título: <b>{ props.titulo }</b></h2>
          <h2>Autor: <b>{ props.autor }</b></h2>
          <h2>ISBN: <b>{ props.isbn }</b></h2>
          <h2>Ano de Publicação: <b>{props.anoDePublicacao}</b></h2>
          {props.disponivel === true ? <button onClick={async () => {
                const confirmacao = window.confirm(`Tem certeza que deseja deletar o livro: ${props.titulo}?`);
                if (confirmacao) {
                    const mensagem = await deleteLivro(props.id);
                    alert(mensagem);
                    window.location.reload();
                }
            }} status="deletar">Deletar</button>
            : <button disabled status="indisponivel">Indisponível</button>}
    </div>
  )
}
