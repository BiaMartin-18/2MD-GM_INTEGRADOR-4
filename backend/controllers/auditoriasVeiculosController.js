import { getConnection } from "../config/database.js";

// ================= GET =================
export async function getAuditoriasVeiculos(req, res) {
  try {
    const conn = await getConnection();

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

    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar auditorias de veículos:", err);
    res.status(500).json({ message: "Erro ao buscar auditorias de veículos" });
  }
}

// ================= POST =================
export async function createAuditoriaVeiculo(req, res) {
  const {
    part_number,
    modelo,
    defeito,
    descrição,
    grau_defeito,
    status_veiculo,
    data_auditoria,
    resultado,
    auditor_responsavel
  } = req.body;

  try {
    const conn = await getConnection();

    // Inserir no veiculos
    await conn.query(`
      INSERT INTO veiculos (part_number, modelo, defeito, descrição, grau_defeito, status_veiculo)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [part_number, modelo, defeito, descrição, grau_defeito, status_veiculo]);

    // Inserir na auditoria
    await conn.query(`
      INSERT INTO auditoria (part_number, data_auditoria, resultado, auditor_responsavel)
      VALUES (?, ?, ?, ?)
    `, [part_number, data_auditoria, resultado, auditor_responsavel]);

    res.status(201).json({ message: "Auditoria de veículo criada com sucesso" });

  } catch (err) {
    console.error("Erro ao criar auditoria de veículo:", err);
    res.status(500).json({ message: "Erro ao criar auditoria de veículo" });
  }
}

// ================= PUT =================
export async function updateAuditoriaVeiculo(req, res) {
  const { part_number } = req.params;
  const {
    modelo,
    defeito,
    descrição,
    grau_defeito,
    status_veiculo,
    data_auditoria,
    resultado,
    auditor_responsavel
  } = req.body;

  try {
    const conn = await getConnection();

    // Atualizar veiculos
    await conn.query(`
      UPDATE veiculos
      SET modelo = ?, defeito = ?, descrição = ?, grau_defeito = ?, status_veiculo = ?
      WHERE part_number = ?
    `, [modelo, defeito, descrição, grau_defeito, status_veiculo, part_number]);

    // Atualizar auditoria
    await conn.query(`
      UPDATE auditoria
      SET data_auditoria = ?, resultado = ?, auditor_responsavel = ?
      WHERE part_number = ?
    `, [data_auditoria, resultado, auditor_responsavel, part_number]);

    res.json({ message: "Auditoria de veículo atualizada com sucesso" });

  } catch (err) {
    console.error("Erro ao atualizar auditoria de veículo:", err);
    res.status(500).json({ message: "Erro ao atualizar auditoria de veículo" });
  }
}

// ================= DELETE =================
export async function deleteAuditoriaVeiculo(req, res) {
  const { part_number } = req.params;

  try {
    const conn = await getConnection();

    // Deletar auditoria primeiro
    await conn.query(`DELETE FROM auditoria WHERE part_number = ?`, [part_number]);

    // Deletar veículo
    await conn.query(`DELETE FROM veiculos WHERE part_number = ?`, [part_number]);

    res.json({ message: "Auditoria de veículo deletada com sucesso" });

  } catch (err) {
    console.error("Erro ao deletar auditoria de veículo:", err);
    res.status(500).json({ message: "Erro ao deletar auditoria de veículo" });
  }
}
