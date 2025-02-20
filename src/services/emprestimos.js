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

export const createEmprestimo = async (emprestimo) => {
    try {
        const response = await api.post(`emprestimos/create`, emprestimo);
        if (!response.data) {
            throw new Error("Erro ao criar o empréstimo");
        }
        return "empréstimo criado com sucesso!";
    } catch (e) {
        console.error("Erro:", e);
        return "Erro ao criar o empréstimo";
    }
}

export const deleteEmprestimo = async (id) => {
    try {
        await api.delete(`emprestimos/delete/${id}`);
        return "Devoluçaõ realizada com sucesso!";
    } catch (e) {
        console.error(`Erro: ${e}`);
        return "Erro ao deletar empréstimo";
    }
}