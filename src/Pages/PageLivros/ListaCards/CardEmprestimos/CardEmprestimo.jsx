import React, { useEffect, useState } from 'react'
import { getUsuarioById } from '../../../../services/usuarios';
import { getLivroById } from '../../../../services/livros';
import { deleteEmprestimo } from '../../../../services/emprestimos';

export default function CardEmprestimo(props) {
    const [usuario, setusuario] = useState({});
    const [livro, setLivro] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dadosUsuario = await getUsuarioById(props.idUsuario);
                const dadosLivro = await getLivroById(props.idLivro);
                setusuario(dadosUsuario);
                setLivro(dadosLivro);

            } catch (e) {
                console.error(`Erro: ${e}`);
            }
        }
        fetchData();
    }, [props.idLivro, props.idUsuario])
  return (
    <div status={props.status} className='cardListaContainer cardEmprestimo'>
          <h2>Usuário: <b>{usuario.nome}</b><br />Livro: <b>{livro.titulo}</b></h2>
          <hr />
          <h2>Data do Empréstimo: <b>{ new Date(props.dataDoEmprestimo).toLocaleDateString("pt-BR") }</b></h2>
          <h2>Data da devolução: <b>{new Date(props.dataDaDevolucao).toLocaleDateString("pt-BR")}</b></h2>
          <button onClick={async () => {
                          const confirmacao = window.confirm(`Tem certeza de realizar a devolução?`);
                          if (confirmacao) {
                              const mensagem = await deleteEmprestimo(props.id);
                              alert(mensagem);
                              window.location.reload();
                          }
            }} status="deletar">Devolução</button>
    </div>
  )
}
