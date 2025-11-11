// src/app/dashauditoria/page.jsx

import DashboardUI from '@/components/dashboard';

// Função que simula a busca de dados (pode ser um fetch real em produção)
async function getAuditData() {
  // Dados simulados para popular o Dashboard
  const data = {
    saudacao: "Good Morning, Selena!",
    // Dados para os cards e gráficos
    relatoriosPendentes: { total: 30, noReport: 10, data: [15, 20, 18, 25] },
    tendenciaSaude: { percentual: "85%", aumento: 0.75, data: [10, 25, 40, 70] },
    checkup: {
        proximo: "22 Augustus, 2024",
        concluido: "16 Augustus, 2024"
    },
    informacaoMedica: {
        paciente: "Cameron Williamson",
        medicoPrimario: "Dr. Leslie Alexander",
        historico: "Medical inpatient care",
        medicamentos: "Herbal medicine",
        alergias: "No allergies present"
    },
    medicos: [
        { nome: "Dr. Leslie Alexander", hospital: "Hasan Sadikin Hospital", iniciais: "LA" },
        { nome: "Dr. Savannah Nguyen", hospital: "Hasan Sadikin Hospital", iniciais: "SN" },
        { nome: "Dr. Darlene Robertson", hospital: "Hasan Sadikin Hospital", iniciais: "DR" },
    ],
    // Mais dados de relatórios de saúde, etc.
  };
  return data;
}

export default async function DashAuditoriaPage() {
  // Server Component: busca os dados antes da renderização
  const dashboardData = await getAuditData();

  // O componente UI recebe todos os dados
  return (
    <DashboardUI data={dashboardData} />
  );
}