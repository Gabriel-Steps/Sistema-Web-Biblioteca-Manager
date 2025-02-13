import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5015/api"
});

export const getAllLivros = async () => {
    try {
        const response = await api("/livros/getAll");
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}

export const getAllUsuarios = async () => {
    try {
        const response = await api("/usuarios/getAll");
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}

export const getAllEmprestimos = async () => {
    try {
        const response = await api("/emprestimos/getAll");
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}

export default api;