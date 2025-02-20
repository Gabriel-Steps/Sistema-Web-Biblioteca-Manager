import React, { useState } from 'react';
import './FormCriarLivro.css';
import { createLivro } from '../../../services/livros';
import imagemXModal from '../../../Assets/iconXModal.png';


export default function FormCriarLivro() {
    const [estadoFormulario, setEstadoFormulario] = useState("hide");
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [anoDeLancamento, setAnoDeLancamento] = useState("");

    const livro = {
        titulo,
        autor,
        isbn,
        anoDeLancamento: parseInt(anoDeLancamento, 10) || 0 
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const mensagem = await createLivro(livro);
        alert(mensagem);
        window.location.reload();
    };

    return (
        <div className='formCriarContainer'>
            <button onClick={() => setEstadoFormulario(estadoFormulario === "hide" ? "flex" : "hide")}>Adicionar Livro</button>
            <div status={estadoFormulario} className="foraFormContainer">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="cabecalhoModal">
                        <h1>Adicionar Livro</h1>
                        <img src={imagemXModal} style={{ width: "40px", height: "auto"}} alt="" onClick={() => setEstadoFormulario(estadoFormulario === "flex" ? "hide" : "flex")}/>
                    </div>
                <label>Titulo:</label>
                <input type="text" name='titulo' onChange={(e) => setTitulo(e.target.value)} required />

                <label>Autor:</label>
                <input type="text" name='autor' onChange={(e) => setAutor(e.target.value)} required />

                <label>ISBN:</label>
                <input type="text" name='isbn' maxLength={13} onChange={(e) => setIsbn(e.target.value)} required />

                <label>Ano de Publicação:</label>
                <input type="number" name='anoDeLancamento' value={anoDeLancamento} onChange={(e) => setAnoDeLancamento(e.target.value)} required/>

                <input type="submit" value={"Enviar"} />
            </form>
            </div>
        </div>
    );
}
