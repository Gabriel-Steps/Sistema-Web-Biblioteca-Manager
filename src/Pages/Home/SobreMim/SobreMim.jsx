import React from 'react'
import './SobreMim.css';
import imagemPerfil from '../../../Assets/minhaImagemPerfil.png';

export default function SobreMim() {
    return (
    <div className='sobreMimContainer'>
              <div className='imagemDePerfil'>
                  <img src={imagemPerfil} alt="" />
              </div>
            <div className='infoSobreMim'>
                <h1>Sobre Mim</h1>
                    <p>Minha jornada na programação começou ainda no ensino médio técnico, quando tive meu primeiro contato com a área de tecnologia. Desde então, a lógica e a resolução de problemas me fascinaram, e rapidamente percebi que queria transformar essa paixão em carreira.</p>
                    <p>Atualmente, sou desenvolvedor full stack, especializado em .NET e React.js, criando aplicações escaláveis e bem estruturadas. Tenho experiência no desenvolvimento de REST APIs com C# e .NET, utilizando Entity Framework Core e bancos de dados como SQL Server e MySQL. No frontend, trabalho com React.js e JavaScript, sempre buscando performance, organização e boas práticas.</p>
                <p>Tecnologias e Ferramentas</p>
                <ul>
                    <li>C# | .NET | ASP.NET Core</li>
                    <li>React.js | Javascript</li>
                    <li>Entity Framework Core</li>
                    <li>REST APIs</li>
                    <li>Arquitetura Limpa & Design Patterns</li>
                    <li>Testes Automatizados | Unit Tests</li>
                    <li>Git | CI/CD</li>
                </ul>
            </div>
    </div>
  )
}
