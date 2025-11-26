"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/blocks/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import LineChartComponent from "@/components/charts/LineChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import PieChartComponent from "@/components/charts/PieChartComponent";
import OverviewLineChart from "@/components/charts/OverviewLineChart";
import FinisherParticles from "@/components/FinisherParticles";
import MonthlyAuditsChart from "@/components/charts/MonthlyAuditsChart";
import AuditsLineChart from "@/components/charts/AuditsLineChart";

export default function DashboardPage() {
  const [barData, setBarData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [pieData, setPieData] = useState([]);

  const [cards, setCards] = useState({
    auditoriasAprovadas: 0,
    totalAuditorias: 0,
    defeitosRegistrados: 0,
    manutencao: 0,
  });

  const [auditoriasMes, setAuditoriasMes] = useState([]);
  const [auditoriasMesData, setAuditoriasMesData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("pt-BR", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // GRÁFICOS
        const resCharts = await fetch(
          "http://localhost:3001/api/dashboard/dados"
        );
        if (!resCharts.ok) throw new Error("Erro ao carregar gráficos.");
        const charts = await resCharts.json();

        // charts: { barChart, lineChart, pieChart }
        setBarData(charts.barChart || []);
        setLineData(charts.lineChart || []);
        setPieData(charts.pieChart || []);
        setAuditoriasMes(charts.auditoriasMesChart || []);
        setAuditoriasMesData(charts.auditoriasMesChart || []);

        // CARDS
        const resCards = await fetch(
          "http://localhost:3001/api/dashboard/cards"
        );
        if (!resCards.ok) throw new Error("Erro ao carregar cards.");
        const cardsData = await resCards.json();

        // cardsData = { auditoriasAprovadas, totalAuditorias, defeitosRegistrados, manutencao }
        setCards(cardsData);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar o dashboard.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <div style={{ padding: 40 }}>Carregando dashboard...</div>;
  if (error) return <div style={{ padding: 40, color: "red" }}>{error}</div>;

  return (
    <div className="pageWrapper">
      <div className="dashboardHeaderSection">
        
        <div className="animatedBackgroundContainer">
          <FinisherParticles />
          <div className="finisher-canvas-wrapper" />
        </div>

        <div className="navbarWrapper">
          <Navbar />
        </div>

        <div className="container dashboard-content-overlay">
          <div className="row greeting-container">
            <div className="col-12">
              <h1 className="welcome-title">Bem-vinda, Paloma Vicente</h1>
              <p className="current-date">Relatório de {getCurrentDate()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="container kpi-section mt-4 mb-4">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card kpi-card   d-flex flex-column justify-content-center align-items-center py-4 shadow-sm">
              <div className="card-body d-flex gap-3">
                <i className="icone bi bi-calendar-check"></i>
                <h6 className="card-title ">Auditorias Aprovadas</h6>
              </div>
              <h2 className="kpi-value text-center">
                {cards.auditoriasAprovadas}
              </h2>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card kpi-card  d-flex flex-column justify-content-center align-items-center py-4  shadow-sm">
              <div className="card-body d-flex gap-3">
                <i className="icone bi bi-check-all"></i>
                <h6 className="card-title ">Total de Auditorias</h6>
              </div>
              <h2 className="kpi-value text-center">{cards.totalAuditorias}</h2>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card kpi-card  d-flex flex-column justify-content-center align-items-center py-4    shadow-sm">
              <div className="card-body d-flex gap-3">
                <i className="icone bi bi-graph-up"></i>
                <h6 className="card-title ">Defeitos Registrados</h6>
              </div>
              <h2 className="kpi-value text-center">
                {cards.defeitosRegistrados}
              </h2>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card kpi-card  d-flex flex-column justify-content-center align-items-center py-4  shadow-sm">
              <div className="card-body d-flex gap-3">
                <i className="icone bi bi-file-earmark-bar-graph"></i>
                <h6 className="card-title ">Carros em Manutenção</h6>
              </div>
              <h2 className="kpi-value text-center">{cards.manutencao}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* GRÁFICOS */}
      <div className="background-quadriculado" />
      <div className="container main-content-section">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card cardLarge h-100">
              <div className="card-body">
                <h4>Índice de Qualidade (IQ) - Últimos Meses</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <LineChartComponent data={lineData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card cardBox h-100">
              <div className="card-body">
                <h4>Severidade dos Defeitos</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <PieChartComponent data={pieData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card cardLarge h-100">
              <div className="card-body">
                <h4>Volume de Auditorias por Modelo</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <BarChartComponent data={barData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card cardLarge h-100">
              <div className="card-body">
                <h4>Total de Auditorias por Mês (Últimos 6 meses)</h4>
                <div style={{ width: "100%", height: "350px" }}>
                  <AuditsLineChart data={auditoriasMesData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
