import React, { useEffect, useState } from 'react'
import { getAllUsuarios } from '../../../services/usuarios';
import { getAllLivros } from '../../../services/livros';
import imagemXModal from '../../../Assets/iconXModal.png';
import { createEmprestimo } from '../../../services/emprestimos';
import '../FormCriarLivro/FormCriarLivro.css';

export default function FormCriarEmprestimo() {
    const [estadoFormulario, setEstadoFormulario] = useState("hide");
    const [usuarios, setUsuarios] = useState([]);
    const [livros, setLivros] = useState([]);
    const [idUsuario, setIdUsuario] = useState(0);
    const [idLivro, setIdLivro] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setUsuarios(await getAllUsuarios());
                setLivros(await getAllLivros());
            } catch (e) {
                console.error(`Erro: ${e}`);
            }
        };
        fetchData();
    }, []);
    const emprestimo = {
        idLivro: idLivro,
        idUsuario: idUsuario
    }
    const handleSubmit = async (e) => {
            console.log(emprestimo)
            e.preventDefault();
            const mensagem = await createEmprestimo(emprestimo);
            alert(mensagem);
            window.location.reload();
        };
  return (
    <div className='formCriarContainer'>
      <button onClick={() => setEstadoFormulario(estadoFormulario === "hide" ? "flex" : "hide")}>Adicionar Empréstimo</button>
            <div status={estadoFormulario} className="foraFormContainer">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="cabecalhoModal">
                        <h1>Adicionar Livro</h1>
                        <img src={imagemXModal} style={{ width: "40px", height: "auto"}} alt="" onClick={() => setEstadoFormulario(estadoFormulario === "flex" ? "hide" : "flex")}/>
                    </div>
                  <label>Selecione o usuário:</label>
                  <select name="usuario" id="usuarios" onChange={(e) => setIdUsuario(parseInt(e.target.value, 10))}>
                      {usuarios.map((usuario) => [
                          <option value={usuario.id}>{usuario.nome}</option>
                      ])}
                  </select>

                <label>Selecione o livro:</label>
                <select name="livro" id="livros" onChange={(e) => setIdLivro(parseInt(e.target.value, 10))}>
                      {livros.map((livro) => [
                          <option value={livro.id}>{livro.titulo}</option>
                      ])}
                  </select>
                <input type="submit" value={"Enviar"} />
            </form>
            </div>
    </div>
  )
}
