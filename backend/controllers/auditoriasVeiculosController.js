import { getConnection } from "../config/database.js";



export async function getAuditoriasVeiculos(req, res) {
    try {
        const conn = await getConnection();
        console.log("Conexão com o banco OK"); // DEBUG

        const [rows] = await conn.query(`
            SELECT 
                v.part_number,
                v.modelo,
                v.defeito,
                v.descrição,
                v.grau_defeito,
                v.status_veiculo,
                a.data_auditoria,
                a.resultado,
                a.auditor_responsavel
            FROM veiculos v
            LEFT JOIN auditoria a ON v.part_number = a.part_number;
        `);

        console.log(rows); // DEBUG
        res.json(rows);
    } catch (err) {
        console.error("ERRO DETALHADO:", err); // DEBUG
        res.status(500).json({ message: "Erro ao buscar auditorias de veículos" });
    }
}
