import api from "./api";

export const getAllUsuarios = async () => {
    try {
        const response = await api("/usuarios/getAll");
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}

export const createUsuario = async (usuario) => {
    try {
        const response = await api.post(`usuarios/create`, usuario);
        if (!response.data) {
            throw new Error("Erro ao criar o usuário");
        }
        return "usuário criado com sucesso!";
    } catch (e) {
        console.error("Erro:", e);
        return "Erro ao criar o usuário";
    }
}

export const getUsuarioById = async (id) => {
    try {
        const response = await api.get(`/usuarios/${id}`);
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}