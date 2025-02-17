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