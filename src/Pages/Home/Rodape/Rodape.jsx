import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import './Rodape.css';

export default function Rodape() {
    const [tema, setTema] = useState("padrao");
  return (
    <div fundoPersonalizado={tema} className='rodapeContainer'>
          <h1>Obrigado por sua atenção!</h1>
          <div className='rodapeIconesContainer'>
                <a onMouseEnter={() => setTema("github")} onMouseLeave={() => setTema("padrao")} href="https://github.com/Gabriel-Steps" target="_blank" rel="noopener noreferrer">
                <FaGithub size={60} color='#000000'/>
                </a>
                <a onMouseEnter={() => setTema("linkedin")} onMouseLeave={() => setTema("padrao")} href="https://www.linkedin.com/in/gabrielpassosfrancisco/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={60} color="#0077b5" />
                </a>
                <a onMouseEnter={() => setTema("gmail")} onMouseLeave={() => setTema("padrao")} href="https://mail.google.com/mail/?view=cm&to=gabrielpassosfrancisco@gmail.com&su=Entrando%20em%20contato&body=Olá,%20quero%20falar%20com%20você!" target="_blank" rel="noopener noreferrer">
                    <FaGoogle size={60} color="#DB4437" />
                </a>
          </div>
    </div>
  )
}
