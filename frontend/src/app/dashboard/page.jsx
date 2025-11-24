"use client";

import React from "react";
import Navbar from "@/components/blocks/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css"; // Seus estilos do dashboard
import LineChartComponent from "@/components/charts/LineChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import PieChartComponent from "@/components/charts/PieChartComponent";
import OverviewLineChart from "@/components/charts/OverviewLineChart";
import FinisherParticles from "@/components/FinisherParticles";

// REMOVIDO: A constante KpiCard foi eliminada.

// --- MOCK DATA (Dados de Exemplo) ---
const mockData = {
  // Dados mantidos apenas para os GRÁFICOS e LISTAS
  lineChart: [
    { mes: "Jan", indice: 5.5 },
    { mes: "Fev", indice: 36.0 },
    { mes: "Mar", indice: 95.8 },
    { mes: "Abr", indice: 66.5 },
    { mes: "Mai", indice: 97.2 },
    { mes: "Jun", indice: 18.5 },
  ],
  barChart: [
    { mes: "Jan", Tracker: 50, Montana: 40, Spin: 30 },
    { mes: "Fev", Tracker: 60, Montana: 45, Spin: 35 },
    { mes: "Mar", Tracker: 55, Montana: 50, Spin: 40 },
    { mes: "Abr", Tracker: 70, Montana: 60, Spin: 45 },
    { mes: "Mai", Tracker: 80, Montana: 70, Spin: 50 },
    { mes: "Jun", Tracker: 90, Montana: 80, Spin: 55 },
  ],
  pieChart: [
    { name: "Falha Crítica", value: 15, color: "#2045ffff" },
    { name: "Falha Grave", value: 30, color: "#040764ff" },
    { name: "Falha Média", value: 55, color: "#597ef7" },
    { name: "Falha Leve", value: 100, color: "#033889ff" },
  ],
  topDefeitos: [
    { id: 1, nome: "Ajuste de Painel", count: 12, prioridade: "Alta" },
    { id: 2, nome: "Pintura (Micro-bolhas)", count: 9, prioridade: "Alta" },
    { id: 3, nome: "Fixação de Forro", count: 6, prioridade: "Média" },
    { id: 4, nome: "Acabamento da Porta", count: 5, prioridade: "Baixa" },
  ],
  agendamentos: [
    {
      id: 1,
      veiculo: "Tracker 2024 (VIN: 0100)",
      data: "Amanhã, 10:00h",
      status: "Pendente",
    },
    {
      id: 2,
      veiculo: "Montana 2023 (VIN: 0101)",
      data: "Amanhã, 14:30h",
      status: "Em Andamento",
    },
  ],
};

export default function DashboardPage() {
  // Função para obter a data e formatar (Apenas para simulação)
  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("pt-BR", options);
  };

  return (
    <div className="pageWrapper">
      <div className="dashboardHeaderSection">
        <div className="animatedBackgroundContainer">
          <FinisherParticles />
          <div className="finisher-canvas-wrapper">
            {/* Seu canvas animado ou outra decoração de fundo aqui */}
          </div>
        </div>
        <div className="navbarWrapper">
          <Navbar /> {/* Sua Navbar fixa e responsiva */}
        </div>

        {/* Overlay de Conteúdo do Header */}
        <div className="container dashboard-content-overlay">
          <div className="row greeting-container">
            <div className="col-12">
              <h1 className="welcome-title">Bem-vinda, Paloma Vicente</h1>
              <p className="current-date">Relatório de {getCurrentDate()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEÇÃO PRINCIPAL DE KPIS (Abaixo do Header) --- */}
      <div className="container kpi-section">
        <div className="row">
            
            {/* CARD 1: Auditorias Concluídas */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card kpi-card shadow-sm h-100 position-relative">
                    <div className="card-body">
                        
                        {/* Ícone grande de fundo (kpi-background-icon) REMOVIDO aqui. */}

                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <p className="kpi-title">Auditorias Concluídas</p>
                                <h3 className="kpi-value">1.250</h3>
                            </div>
                            {/* Ícone principal, menor e colorido (MANTIDO) */}
                            <div className="kpi-icon-wrapper">
                                <i className="bi bi-check2-all"></i>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="kpi-change text-success">
                                <i className="bi bi-arrow-up-right me-1"></i>
                                +12.5%
                            </span>
                            <p className="kpi-subtitle ms-2">vs. mês anterior</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2: Defeitos Registrados */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card kpi-card shadow-sm h-100 position-relative">
                    <div className="card-body">
                        
                        {/* Ícone grande de fundo (kpi-background-icon) REMOVIDO aqui. */}

                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <p className="kpi-title">Defeitos Registrados</p>
                                <h3 className="kpi-value">48</h3>
                            </div>
                            {/* Ícone principal, menor e colorido (MANTIDO) */}
                            <div className="kpi-icon-wrapper">
                                <i className="bi bi-clipboard-check"></i>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="kpi-change text-danger">
                                <i className="bi bi-arrow-down-right me-1"></i>
                                -5.2%
                            </span>
                            <p className="kpi-subtitle ms-2">vs. semana passada</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 3: Índice de Qualidade (IQ) */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card kpi-card shadow-sm h-100 position-relative">
                    <div className="card-body">
                        
                        {/* Ícone grande de fundo (kpi-background-icon) REMOVIDO aqui. */}

                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <p className="kpi-title">Índice de Qualidade (IQ)</p>
                                <h3 className="kpi-value">98.5</h3>
                            </div>
                            {/* Ícone principal, menor e colorido (MANTIDO) */}
                            <div className="kpi-icon-wrapper">
                                <i className="bi bi-speedometer2"></i>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="kpi-change text-success">
                                <i className="bi bi-arrow-up-right me-1"></i>
                                +0.8%
                            </span>
                            <p className="kpi-subtitle ms-2">Atualizado hoje</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 4: Veículos Auditados */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card kpi-card shadow-sm h-100 position-relative">
                    <div className="card-body">
                        
                        {/* Ícone grande de fundo (kpi-background-icon) REMOVIDO aqui. */}

                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <p className="kpi-title">Veículos Auditados</p>
                                <h3 className="kpi-value">350</h3>
                            </div>
                            {/* Ícone principal, menor e colorido (MANTIDO) */}
                            <div className="kpi-icon-wrapper">
                                <i className="bi bi-car-front-fill"></i>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="kpi-change text-success">
                                <i className="bi bi-arrow-up-right me-1"></i>
                                +25.0%
                            </span>
                            <p className="kpi-subtitle ms-2">Neste mês</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>


      {/* --- SEÇÃO DE GRÁFICOS E LISTAS (Conteúdo Principal) --- */}
      <div className="container main-content-section">
        <div className="row">
          {/* 1. GRÁFICO DE LINHA (Índice de Qualidade Mensal) - 8 COLUNAS */}
          <div className="col-lg-8 mb-4">
            <div className="card cardLarge h-100">
              <div className="card-body">
                <h4>Índice de Qualidade (IQ) - Últimos 6 Meses</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <LineChartComponent data={mockData.lineChart} />
                </div>
              </div>
            </div>
          </div>

          {/* 2. GRÁFICO DE PIZZA (Distribuição de Severidade dos Defeitos) - 4 COLUNAS */}
          <div className="col-lg-4 mb-4">
            <div className="card cardBox h-100">
              <div className="card-body">
                <h4>Severidade dos Defeitos (Total)</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <PieChartComponent data={mockData.pieChart} />
                </div>
              </div>
            </div>
          </div>

          {/* 3. GRÁFICO DE BARRAS (Auditorias por Modelo) - 12 COLUNAS */}
          <div className="col-lg-12 mb-4">
            <div className="card cardLarge h-100">
              <div className="card-body">
                <h4>Volume de Auditorias por Modelo (Mensal)</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <BarChartComponent data={mockData.barChart} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid py-5"
            style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
          >
            {/* LINHA SUPERIOR: GRÁFICO DE VISÃO GERAL */}
            <div className="row mb-4">
              <div className="col-12">
                <div
                  className="card shadow border-0"
                  style={{ height: "350px" }}
                >
                  <div className="card-body p-0">
                    <OverviewLineChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. LISTA DE TOP 5 DEFEITOS - 6 COLUNAS */}
          <div className="col-lg-6 mb-4">
            <div className="card cardBox h-100">
              <div className="card-body">
                <h4 className="mb-3">Top Defeitos por Ocorrência</h4>
                <div className="input-group search-bar-list mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar defeito..."
                  />
                </div>

                <ul className="list-group list-group-flush list-placeholder">
                  {mockData.topDefeitos.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center list-item"
                    >
                      <span>{item.nome}</span>
                      <span className="badge bg-primary rounded-pill">
                        {item.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 5. CRONOGRAMA / AGENDAMENTOS - 6 COLUNAS */}
          <div className="col-lg-6 mb-4">
            <div className="card cardBox h-100">
              <div className="card-body">
                <h4 className="mb-3">Próximos Agendamentos de Auditoria</h4>
                <ul className="list-group list-group-flush schedule-placeholder">
                  {mockData.agendamentos.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center schedule-item"
                    >
                      <div>
                        <strong>{item.veiculo}</strong>
                        <br />
                        <span className="text-muted">{item.data}</span>
                      </div>
                      <span
                        className={`badge ${
                          item.status === "Pendente"
                            ? "bg-warning text-dark"
                            : "bg-info"
                        }`}
                      >
                        {item.status}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline-primary btn-sm mt-3 w-100">
                  Ver Todos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}