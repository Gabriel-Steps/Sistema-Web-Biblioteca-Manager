import React, { useEffect, useState } from 'react'
import './ListaLivros.css';
import { getAllLivros } from '../../../services/livros';
import SecaoLivro from './SecaoLivro/SecaoLivro';
import CardLivro from './CardLivro/CardLivro';

export default function ListaLivros() {
    const [livros, setLivros] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dadosLivros = await getAllLivros();
                setLivros(dadosLivros);
            } catch (e) {
                console.error(`A requisição deu erro: ${e}`);
            }
        };
        fetchData();
    }, [])
  return (
      <div className='listaLivrosContainer'>
          <table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Autor</th>
                      <th>Isbn</th>
                      <th>Ano De Publicação</th>
                  </tr>
              </thead>
              <tbody>
              {livros.map((livro) => (
              <SecaoLivro id={livro.id} titulo={livro.titulo} autor={livro.autor} isbn={livro.isbn} anoDePublicacao={livro.anoDePublicacao} disponivel={livro.disponivel} />
                ))}
              </tbody>
          </table>
          <div className="cardsLivrosContainer">
              {livros.map((livro) => (
                  <CardLivro id={livro.id} titulo={livro.titulo} autor={livro.autor} isbn={livro.isbn} anoDePublicacao={livro.anoDePublicacao} disponivel={livro.disponivel} />
              ))}
          </div>
    </div>
  )
}
