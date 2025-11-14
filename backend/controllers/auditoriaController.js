import { read } from '../config/database.js';

export async function listarAuditorias(req, res) {
    try {
        const dados = await read("auditoria"); 
        // coloque aqui exatamente o nome da tabela que você criou no MySQL

        return res.json({
            sucesso: true,
            dados
        });
    } catch (error) {
        console.error("Erro ao listar auditorias:", error);
        return res.status(500).json({
            sucesso: false,
            erro: error.message
        });
    }
}
