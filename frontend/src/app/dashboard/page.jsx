// Dashboard.js
"use client";
import Navbar from "@/components/blocks/Navbar";
// IMPORTAR OS NOVOS COMPONENTES DE GRÁFICO (Ajuste os caminhos se necessário)
import LineChartComponent from "@/components/charts/LineChartComponent";
import PieChartComponent from "@/components/charts/PieChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import { useEffect, useState } from "react"; // Importar useState para a data
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import FinisherParticles from "@/components/FinisherParticles";

// Função auxiliar para formatar a data (opcional, mas bom para UX)
const getFormattedDate = () => {
  const date = new Date();
  return date
    .toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .replace(/^[a-z]/, (char) => char.toUpperCase()); // Capitaliza o primeiro caractere
};

export default function Dashboard() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Variáveis Fictícias do Projeto PDI
  const today = getFormattedDate();
  const userName = "Beatriz Martin"; // Gerente de Grupo
  const metricas = {
    totalVeiculos: 432,
    auditoriasAbertas: 24,
    taxaDefeitoLinha: 8, // Porcentagem de veículos com defeito na saída da linha
    aplicantesVagas: 24, // Exemplo de KPI de RH, adaptado para PDI/Auditorias
    // Métricas PDI
    totalFTs: 18,
    defeitosCorrigidos: 91,
    defeitosEmAberto: 9,
    custoMedioAjuste: 450.5,
  };

  const pieData = [
    { name: "Graves", value: 40, color: "#060053ff" }, // Azul escuro
    { name: "Médios", value: 35, color: "#5151f0ff" }, // Azul roxo
    { name: "Moderados", value: 25, color: "#60a0ffff" }, // Azul claro
  ];

  const barData = [
    // Mês 1
    {
      mes: "Jan",
      Tracker: 10, // Auditorias do Tracker em Janeiro
      Montana: 5, // Auditorias da Montana em Janeiro
      Spin: 3, // Auditorias do Spin em Janeiro
    },
    // Mês 2
    {
      mes: "Fev",
      Tracker: 15,
      Montana: 8,
      Spin: 4,
    },
    // Mês 3
    {
      mes: "Mar",
      Tracker: 8,
      Montana: 12,
      Spin: 7,
    },
    // Mês 4
    {
      mes: "Abr",
      Tracker: 18,
      Montana: 9,
      Spin: 5,
    },
    // Mês 5
    {
      mes: "Mai",
      Tracker: 22,
      Montana: 15,
      Spin: 10,
    },
    // Mês 6
    {
      mes: "Jun",
      Tracker: 16,
      Montana: 11,
      Spin: 6,
    },
    // Mês 7
    {
      mes: "Jul",
      Tracker: 25,
      Montana: 14,
      Spin: 9,
    },
    // Mês 8
    {
      mes: "Agosto",
      Tracker: 49,
      Montana: 20,
      Spin: 12,
    },
    // Mês 9
    {
      mes: "Setembro",
      Tracker: 30,
      Montana: 18,
      Spin: 10,
    },
    // Mês 10
    {
      mes: "Outubro",
      Tracker: 35,
      Montana: 22,
      Spin: 15,
    },
    // Mês 11
    {
      mes: "Novembro",
      Tracker: 28,
      Montana: 16,
      Spin: 11,
    },
    // Mês 12
    {
      mes: "Dezembro",
      Tracker: 40,
      Montana: 25,
      Spin: 14,
    },
  ];

  const lineData = [
    { mes: "Jan", indice: 120 },
    { mes: "Fev", indice: 150 },
    { mes: "Mar", indice: 130 },
    { mes: "Abr", indice: 180 },
    { mes: "Mai", indice: 160 },
    { mes: "Jun", indice: 210 },
    { mes: "Jul", indice: 190 },
    { mes: "Ago", indice: 230 },
    { mes: "Set", indice: 200 },
    { mes: "Out", indice: 250 },
    { mes: "Nov", indice: 220 },
    { mes: "Dez", indice: 270 },
  ];

  return (
    <div className="pageWrapper">
      {/* 1. SEÇÃO SUPERIOR (Header, Navbar, Fundo Animado) - Sem alteração na estrutura base */}
      <section className="dashboardHeaderSection">
        <div className="animatedBackgroundContainer">
          <div className="finisher-canvas-wrapper">
            <FinisherParticles />
          </div>
        </div>
        <div className="navbarWrapper">
          <Navbar />
        </div>

        {/* CONTEÚDO DO HEADER (Mensagem e Navegação Secundária) */}
        <div className="container dashboard-content-overlay">
          {/* Mensagem de Saudação Dinâmica e Data */}
          <div className="greeting-container">
            <h1 className="welcome-title">Bom dia, {userName}!</h1>
            <p className="current-date">É {today}</p>
          </div>

          {/* Menu de Navegação Secundário (Removido, pois não é padrão do seu projeto e polui o header) */}
          {/* <div className="secondaryNav"> ... </div> */}
        </div>
      </section>

      {/* 2. SEÇÃO DE KPIs (Métricas Principais no Topo) */}
      <section className="container kpi-section mt-5">
        <div className="row g-4">
          {/* KPI 1: Total de Veículos em PDI */}
          <div className="col-lg-3 col-md-6">
            <div className="card p-3 shadow-sm kpi-card">
              <h5 className="kpi-title">Total de Veículos em PDI</h5>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="kpi-value">{metricas.totalVeiculos}</span>
                <span className="kpi-change text-success">+3.5%</span>
              </div>
              <p className="kpi-subtitle">Desde o mês passado</p>
            </div>
          </div>

          {/* KPI 2: Auditorias Abertas */}
          <div className="col-lg-3 col-md-6">
            <div className="card p-3 shadow-sm kpi-card">
              <h5 className="kpi-title">Auditorias Abertas</h5>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="kpi-value">{metricas.auditoriasAbertas}</span>
                <span className="kpi-change text-success">+5%</span>
              </div>
              <p className="kpi-subtitle">Desde a semana passada</p>
            </div>
          </div>

          {/* KPI 3: Taxa de Defeito de Linha (%) */}
          <div className="col-lg-3 col-md-6">
            <div className="card p-3 shadow-sm kpi-card">
              <h5 className="kpi-title">Taxa de Defeito de Linha</h5>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="kpi-value">{metricas.taxaDefeitoLinha}%</span>
                <span className="kpi-change text-danger">↓ 1%</span>
              </div>
              <p className="kpi-subtitle">Desde o mês passado</p>
            </div>
          </div>

          {/* KPI 4: Custo Médio por Ajuste (R$) */}
          <div className="col-lg-3 col-md-6">
            <div className="card p-3 shadow-sm kpi-card">
              <h5 className="kpi-title">Custo Médio por Ajuste</h5>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="kpi-value">
                  R${metricas.custoMedioAjuste.toFixed(2)}
                </span>
                <span className="kpi-change text-success">+6%</span>
              </div>
              <p className="kpi-subtitle">Desde o mês passado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gráficos e Listas seriam inseridos aqui */}
      <section className="container main-content-section mt-5">
        <div className="row g-4">
          {/* COLUNA ESQUERDA (Larga: Gráficos de Desempenho) - col-lg-8 */}
          <div className="col-lg-8">
            <div className="row g-4">
              {/* 3.1 GRÁFICO 1: Índice de Defeitos por Mês (GRÁFICO DE LINHAS) */}
              <div className="col-12">
                <div className="card p-4 shadow-sm cardLarge">
                  <h4>Índice de Defeitos Mais Ocorrentes (Mensal)</h4>
                  <p>Tendência e Projeção do Volume de Defeitos</p>
                  <div
                    className="chartLargePlaceholder"
                    style={{ height: "350px" }}
                  >
                    {/* Componente Gráfico de Linhas aqui */}
                    <LineChartComponent data={lineData} />
                  </div>
                </div>
              </div>

              {/* 3.2 GRÁFICO 2: Lista de Auditores/Defeitos (Mantido como lista/tabela) */}
              {/* ... (Seu código da lista de defeitos e responsáveis) ... */}
            </div>
          </div>

          {/* COLUNA DIREITA (Estreita: Tarefas e Status) - col-lg-4 */}
          <div className="col-lg-4">
            <div className="row g-4">
              {/* 3.3 CARD 3: Defeitos Graves, Médios e Moderados (GRÁFICO DE PIZZA) */}
              <div className="col-12">
                <div className="card p-4 shadow-sm cardBox">
                  <h4>Classificação de Defeitos</h4>
                  <p className="text-muted small">Graves, Médios e Moderados</p>
                  <div className="chartPlaceholder" style={{ height: "350px" }}>
                    {/* Componente Gráfico de Pizza aqui */}
                    <PieChartComponent data={pieData} />
                  </div>
                </div>
              </div>

              {/* 3.4 CARD 4: Modelos de Carros com Mais Auditorias (GRÁFICO DE BARRA) */}
              <div className="row g-4 mt-4">
                <div className="col-12">
                  {" "}
                  {/* <<< USE col-12 AQUI! */}
                  <div className="card p-4 shadow-sm cardLarge">
                    <h4>Modelos com Mais Auditorias (Mensal)</h4>
                    <div
                      className="chartPlaceholder"
                      style={{ height: "350px" }}
                    >
                      {/* Componente Gráfico de Barra (Agora com largura total) */}
                      <BarChartComponent data={barData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
