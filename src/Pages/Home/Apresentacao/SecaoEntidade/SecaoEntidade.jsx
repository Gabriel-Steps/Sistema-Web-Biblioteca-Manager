import React, { useEffect, useState } from 'react'
import './SecaoEntidade.css';
import { getTopico } from '../../../../services/topicos';

export default function SecaoEntidade({itemSecao}) {
    const [topico, setTopico] = useState({});
    useEffect(() => {
        const fetchData = () => {
            try {
                const mensagem = getTopico(itemSecao);
                setTopico(mensagem);
            } catch (e) {
                console.error(`Tópico não encontrado ${e}`)
            }
        };
        fetchData();
    }, [itemSecao])
  return (
      <div className='secaoEntidadeContainer'>
          <div className='icon-container'>
              <img src={topico.imagem} alt="" />
          </div>
          <h1>{ itemSecao }</h1>
      <p>{topico.mensagem}</p>
    </div>
  )
}
