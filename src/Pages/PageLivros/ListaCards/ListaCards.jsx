import React, { useEffect, useState } from 'react'
import './ListaCards.css';
import { getAllLivros } from '../../../services/livros';
import { getAllUsuarios } from '../../../services/usuarios';
import { getAllEmprestimos } from '../../../services/emprestimos';
import CardLivro from './CardLivro/CardLivro';
import Cardusuario from './CardUsuario/Cardusuario';

export default function ListaCards({tipoSessao}) {
    const [dadosBd, setDadosBd] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let data = [];
            try {
                switch (tipoSessao) {
                    case "Livros":
                        data = await getAllLivros();
                        break;
                    case "Usuários":
                        data = await getAllUsuarios();
                        break;
                    case "Empréstimos":
                        data = await getAllEmprestimos();
                        break;
                    default:
                        setDadosBd([]);
                }
                setDadosBd(data);
            } catch (e) {
                console.error(`A requisição deu erro: ${e}`);
            }
        };
        fetchData();
    }, [tipoSessao]);

    if (tipoSessao === "Livros") {
        return (
            <div className='listaCardsContainer'>
                {dadosBd.map((livro) => (
                    <CardLivro key={livro.id} id={livro.id} titulo={livro.titulo} autor={livro.autor} isbn={livro.isbn} anoDePublicacao={livro.anoDePublicacao} disponivel={livro.disponivel} />
                ))}
            </div>
          )
    }
    if (tipoSessao === "Usuários") {
        return (
            <div className='listaCardsContainer'>
                {dadosBd.map((usuario) => (
                    <Cardusuario nome={usuario.nome} email={usuario.email} />
                ))}
            </div>
          )
    }
}
