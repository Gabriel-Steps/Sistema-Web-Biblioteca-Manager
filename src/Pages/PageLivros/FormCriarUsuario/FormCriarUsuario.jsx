import React, { useState } from 'react'
import '../FormCriarLivro/FormCriarLivro.css';
import { createUsuario } from '../../../services/usuarios';
import imagemXModal from '../../../Assets/iconXModal.png';

export default function FormCriarUsuario() {
    const [estadoFormulario, setEstadoFormulario] = useState("hide");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const usuario = {
        nome,
        email
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mensagem = await createUsuario(usuario);
        alert(mensagem);
        window.location.reload();
    };
  return (
    <div className='formCriarContainer'>
        <button onClick={() => setEstadoFormulario(estadoFormulario === "hide" ? "flex" : "hide")}>Adicionar Usuário</button>
            <div status={estadoFormulario} className="foraFormContainer">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="cabecalhoModal">
                        <h1>Adicionar Livro</h1>
                        <img src={imagemXModal} style={{ width: "40px", height: "auto"}} alt="" onClick={() => setEstadoFormulario(estadoFormulario === "flex" ? "hide" : "flex")}/>
                    </div>
                <label>Nome:</label>
                <input type="text" name='nome' onChange={(e) => setNome(e.target.value)} required />

                <label>E-mail:</label>
                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} required />
                  
                <input type="submit" value={"Enviar"} />
            </form>
            </div>
    </div>
  )
}
