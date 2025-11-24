// backend/controllers/dashboardController.js
import { getConnection } from "../config/database.js";

/**
 * Retorna dados dos gráficos (barChart, lineChart, pieChart, auditoriasMesChart)
 */
export async function getDashboardData(req, res) {
  const modelos = ["Tracker", "Montana", "Spin"]; // ajuste se tiver outros
  try {
    const conn = await getConnection();

    try {
      // 1) BAR: contagem por modelo por mês (últimos 6 meses)
      const barSql = `
        SELECT
          MONTH(a.data_auditoria) AS month_num,
          DATE_FORMAT(a.data_auditoria, '%b') AS mes,
          v.modelo AS modelo,
          COUNT(*) AS total
        FROM auditoria a
        LEFT JOIN veiculos v ON a.part_number = v.part_number
        WHERE a.data_auditoria >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        GROUP BY month_num, mes, v.modelo
        ORDER BY month_num;
      `;
      const [barRows] = await conn.query(barSql);

      const monthsMap = new Map();
      for (const r of barRows) {
        const key = r.month_num;
        if (!monthsMap.has(key)) monthsMap.set(key, r.mes);
      }
      const barData = [];
      for (const [monthNum, mes] of monthsMap.entries()) {
        const entry = { mes };
        modelos.forEach(m => (entry[m] = 0));
        for (const r of barRows) {
          if (r.month_num === monthNum && r.modelo) {
            const modelName = r.modelo;
            entry[modelName] = Number(r.total) || 0;
          }
        }
        barData.push(entry);
      }
      if (barData.length === 0) {
        const today = new Date();
        for (let i = 5; i >= 0; i--) {
          const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
          const mes = d.toLocaleString('pt-BR', { month: 'short' });
          const entry = { mes };
          modelos.forEach(m => (entry[m] = 0));
          barData.push(entry);
        }
      }

      // 2) LINE: taxa de aprovação (%) por mês (últimos 6 meses)
      const lineSql = `
        SELECT
          MONTH(data_auditoria) AS month_num,
          DATE_FORMAT(data_auditoria, '%b') AS mes,
          SUM(CASE WHEN resultado = 'Aprovado' THEN 1 ELSE 0 END) AS aprovadas,
          COUNT(*) AS total
        FROM auditoria
        WHERE data_auditoria >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        GROUP BY month_num, mes
        ORDER BY month_num;
      `;
      const [lineRows] = await conn.query(lineSql);
      const lineData = [];
      if (lineRows.length > 0) {
        for (const r of lineRows) {
          const indice = r.total > 0 ? (Number(r.aprovadas) / Number(r.total)) * 100 : 0;
          lineData.push({
            mes: r.mes,
            indice: Math.round(indice * 10) / 10
          });
        }
      } else {
        const today = new Date();
        for (let i = 5; i >= 0; i--) {
          const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
          const mes = d.toLocaleString('pt-BR', { month: 'short' });
          lineData.push({ mes, indice: 0 });
        }
      }

      // 3) PIE: distribuição por grau_defeito (na tabela veiculos)
      const pieSql = `
        SELECT grau_defeito AS name, COUNT(*) AS value
        FROM veiculos
        GROUP BY grau_defeito;
      `;
      const [pieRows] = await conn.query(pieSql);
      const pieData = (pieRows || []).map(r => ({
        name: r.name || 'Indefinido',
        value: Number(r.value) || 0
      }));

      // 4) AUDITORIAS POR MÊS (NOVO: para o último gráfico)
      const auditoriasMesSql = `
        SELECT
          MONTH(data_auditoria) AS month_num,
          DATE_FORMAT(data_auditoria, '%b') AS mes,
          COUNT(*) AS total
        FROM auditoria
        WHERE data_auditoria >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        GROUP BY month_num, mes
        ORDER BY month_num;
      `;
      const [auditoriasMesRows] = await conn.query(auditoriasMesSql);
      let auditoriasMesChart = [];
      if (auditoriasMesRows.length > 0) {
        auditoriasMesChart = auditoriasMesRows.map(r => ({
          mes: r.mes,
          total: Number(r.total) || 0
        }));
      } else {
        const today = new Date();
        for (let i = 5; i >= 0; i--) {
          const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
          const mes = d.toLocaleString('pt-BR', { month: 'short' });
          auditoriasMesChart.push({ mes, total: 0 });
        }
      }

      return res.json({
        barChart: barData,
        lineChart: lineData,
        pieChart: pieData,
        auditoriasMesChart // <-- NOVO
      });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error("Erro getDashboardData:", error);
    return res.status(500).json({ sucesso: false, erro: error.message });
  }
}

/**
 * getDashboardCards permanece como você já tem (separado)
 * ...
 */


/**
 * Retorna os 4 cards: auditoriasAprovadas, totalAuditorias, defeitosRegistrados, manutencao
 * Retornamos o objeto diretamente (sem wrapper) para o frontend usar direto.
 */
export async function getDashboardCards(req, res) {
  try {
    const conn = await getConnection();
    try {
      const [totalRows] = await conn.query(`SELECT COUNT(*) AS total FROM auditoria`);
      const totalAuditorias = Number(totalRows[0].total) || 0;

      const [aprovadasRows] = await conn.query(
        `SELECT COUNT(*) AS total FROM auditoria WHERE resultado = 'Aprovado'`
      );
      const auditoriasAprovadas = Number(aprovadasRows[0].total) || 0;

      const [defeitosRows] = await conn.query(`SELECT COUNT(*) AS total FROM veiculos`);
      const defeitosRegistrados = Number(defeitosRows[0].total) || 0;

      const [manutRows] = await conn.query(
        `SELECT COUNT(*) AS total FROM veiculos WHERE LOWER(status_veiculo) = 'manutenção' OR LOWER(status_veiculo) = 'manutenção'`
      );
      // note: your DB may use "Manutenção" with or without accent or "Manutenção" vs "Manutencao"
      // you can adapt the WHERE above if needed.
      const manutencao = Number(manutRows[0].total) || 0;

      // Return top-level object (frontend calls setCards(cardsData) directly)
      return res.json({
        auditoriasAprovadas,
        totalAuditorias,
        defeitosRegistrados,
        manutencao
      });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error("Erro getDashboardCards:", error);
    return res.status(500).json({ sucesso: false, erro: error.message });
  }
}
