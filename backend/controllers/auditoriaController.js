import { read } from '../config/database.js';

export async function listarAuditorias(req, res) {
    try {
        const dados = await read("auditoria");  // <-- confira o nome da tabela aqui

        return res.json({
            sucesso: true,
            dados
        });

    } catch (error) {
        console.error("🔥 ERRO DETALHADO AO LISTAR AUDITORIAS:", error);

        return res.status(500).json({
            sucesso: false,
            erro: error?.message || "Erro desconhecido",
            stack: error?.stack || "Sem stack"
        });
    }
}
