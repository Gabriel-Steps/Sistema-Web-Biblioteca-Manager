import React, { useEffect, useState } from 'react'
import './ListaLivros.css';
import { getAllLivros } from '../../../services/livros';
import { getAllUsuarios } from '../../../services/usuarios';
import { getAllEmprestimos } from '../../../services/emprestimos';
import CardLivro from './CardLivro/CardLivro';

export default function ListaLivros({tipoSessao}) {
    // const [livros, setLivros] = useState([]);
    // const [usuarios, setUsuarios] = useState([]);
    // const [emprestimos, setEmprestimos] = useState([]);
    // var dados = [];
    const [dadosBd, setDadosBd] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                switch (tipoSessao) {
                    case "Livros":
                        setDadosBd(await getAllLivros());
                        break;
                    case "Usuários":
                        setDadosBd(await getAllUsuarios());
                        break;
                    case "Empréstimos":
                        setDadosBd(await getAllEmprestimos());
                        break;
                    default:
                        setDadosBd([]);
                }
            } catch (e) {
                console.error(`A requisição deu erro: ${e}`);
            }
        };
        fetchData();
    }, [tipoSessao]);

    if (tipoSessao === "Livros") {
        return (
            <div className='listaLivrosContainer'>
                {dadosBd.map((livro) => (
                    <CardLivro id={livro.id} titulo={livro.titulo} autor={livro.autor} isbn={livro.isbn} anoDePublicacao={livro.anoDePublicacao} disponivel={livro.disponivel} />
                ))}
            </div>
          )
    }
}
