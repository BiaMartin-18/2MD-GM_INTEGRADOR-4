import { getConnection } from "../config/database.js";

// ================= Função para converter datas =================
function formatDateToMySQL(dateString) {
  if (!dateString) return null;

  const d = new Date(dateString);
  if (isNaN(d.getTime())) return null;

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

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

    // Converter data
    const dataFormatada = formatDateToMySQL(data_auditoria);

    // Inserir no veiculos
    await conn.query(`
      INSERT INTO veiculos (part_number, modelo, defeito, descrição, grau_defeito, status_veiculo)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [part_number, modelo, defeito, descrição, grau_defeito, status_veiculo]);

    // Inserir na auditoria
    await conn.query(`
      INSERT INTO auditoria (part_number, data_auditoria, resultado, auditor_responsavel)
      VALUES (?, ?, ?, ?)
    `, [part_number, dataFormatada, resultado, auditor_responsavel]);

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

    const dataFormatada = formatDateToMySQL(data_auditoria);

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
    `, [dataFormatada, resultado, auditor_responsavel, part_number]);

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
