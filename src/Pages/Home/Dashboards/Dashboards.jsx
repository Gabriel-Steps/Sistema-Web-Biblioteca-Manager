import React, { useEffect, useState } from 'react'
import './Dashboards.css';
import Card from './Card/Card';
import livroImg from '../../../Assets/livroHome.png'
import usuarioImg from '../../../Assets/userHome.png'
import emprestimoImg from '../../../Assets/emprestimoHome.png'
import { getAllEmprestimos, getAllUsuarios } from '../../../services/api';
import { getAllLivros } from '../../../services/livros';

export default function Dashboards() {
  const [livros, setLivros] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosLivros = await getAllLivros();
        const dadosUsuarios = await getAllUsuarios();
        const daddosEmprestimos = await getAllEmprestimos();
        setLivros(dadosLivros);
        setUsuarios(dadosUsuarios);
        setEmprestimos(daddosEmprestimos);
      } catch (e) {
        console.error("Erro ao buscar os dados", e);
      }
    };
    fetchData();
  }, [])
  const dados = [
    {nome: "Livros", imagem: livroImg, quantidade: livros.length},
    {nome: "Usuários", imagem: usuarioImg, quantidade: usuarios.length },
    {nome: "Empréstimos", imagem: emprestimoImg, quantidade: emprestimos.length }
  ]


  return (
    <div className='dashboardContainer'>
          <h1>Informações</h1>
      <div className='cardsContainer'>
        {dados.map((item) => (
          <Card nomeItem={item.nome} imagem={item.imagem} quantidade={item.quantidade}/>
        ))}
          </div>
    </div>
  )
}
