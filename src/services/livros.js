import api from "./api";

export const getAllLivros = async () => {
    try {
        const response = await api("/livros/getAll");
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}

export const deleteLivro = async (id) => {
    try {
        const response = await api(`livros/delete/${id}`, { method: "DELETE" });
        if (!response.data) {
            throw new Error("Erro ao criar o livro");
        }
        return "Livro deletado com sucesso!";
    } catch (e) {
        console.error(`Erro: ${e}`);
        return "Erro ao deletar o livro";
    }
}

export const createLivro = async (livro) => {
    try {
        const response = await api.post(`livros/create`, livro);
        if (!response.data) {
            throw new Error("Erro ao criar o livro");
        }
        return "Livro criado com sucesso!";
    } catch (e) {
        console.error("Erro:", e);
        return "Erro ao criar o livro";
    }
}