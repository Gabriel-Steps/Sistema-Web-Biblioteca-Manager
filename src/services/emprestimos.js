import api from "./api";

export const getAllEmprestimos = async () => {
    try {
        const response = await api("/emprestimos/getAll");
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
        throw e;
    }
}
