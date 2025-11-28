import { getConnection } from "../config/database.js";

export async function listarAuditorias(req, res) {
    let conn;

    try {
        conn = await getConnection();

        const [dados] = await conn.query(`
            SELECT
                a.part_number,
                a.data_auditoria,
                a.resultado,
                a.auditor_responsavel,
                u.nome AS nome_auditor
            FROM auditoria a
            LEFT JOIN usuarios u
                ON a.auditor_responsavel = u.id_usuario
        `);

        return res.json({
            sucesso: true,
            dados
        });

    } catch (error) {
        console.error(" ERRO DETALHADO AO LISTAR AUDITORIAS:", error);

        return res.status(500).json({
            sucesso: false,
            erro: error?.message || "Erro desconhecido",
            stack: error?.stack || "Sem stack"
        });

    } finally {
        if (conn) conn.release();
    }
}
