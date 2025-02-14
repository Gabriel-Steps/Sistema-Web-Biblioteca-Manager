import React from 'react'
import './SecaoLivro.css';
import { deleteLivro } from '../../../../services/livros';

export default function SecaoLivro(props) {
    return (<>
        <tr key={props.id}>
            <td><h2>{props.titulo}</h2></td>
            <td><h2>{props.autor}</h2></td>
            <td><h2>{props.isbn}</h2></td>
            <td><h2>{props.anoDePublicacao}</h2></td>
            <td className='linhaBotao'>{props.disponivel === true ? <button onClick={async () => {
                const confirmacao = window.confirm(`Tem certeza que deseja deletar o livro: ${props.titulo}?`);
                if (confirmacao) {
                    const mensagem = await deleteLivro(props.id);
                    alert(mensagem);
                    window.location.reload();
                }
            }} status="deletar">Deletar</button>
            : <button disabled status="indisponivel">Indisponível</button>}</td>
        </tr>
    </>)
}
