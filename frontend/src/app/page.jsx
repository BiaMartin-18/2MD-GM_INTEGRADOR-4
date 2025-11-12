"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/blocks/Navbar";
import FinisherParticles from "../components/FinisherParticles";

export default function Home() {
  return (
    <>
      <section className="hero section">
        <Navbar/>
        <FinisherParticles />
        {/* Conteúdo do Hero - Deve ficar acima do FinisherParticles */}
        <div className="heroContent">
          {/* Título */}
          <h1 className="title text-white fw-bold">
            Otimize o input de defeitos e<br /> acelere a apuração de qualidade.
          </h1>

          {/* Descrição */}
          <p className="description text-white ">
            Garanta a qualidade, reduza o retrabalho e mantenha o monitoramento
            total.
          </p>

          <button className="botao-ferramenta">
            Conheça a Ferramenta
            <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </section>

      {/* NOVA SEÇÃO DE RECURSOS/CARDS */}
      <section className="features-section">
        {/* Título Principal */}
        <h3 className="section-subtitle">NOSSA META</h3>
        <h2 className="section-title">
          Construir soluções que impulsionam resultados reais
        </h2>
        <p className="section-description">
          Explore a interface rápida e agil que simplifica a gestão de
          qualidade, reduz erros e melhora a eficiência operacional.
        </p>

        {/* Container para os Cards */}
        <div className="cards-grid">
          {/* Exemplo de um Card (Repita para ter 6) */}
          <div className="feature-card">
            <h4 className="card-title">Usabilidade</h4>
            <span className="card-icon">*</span>
            <p className="card-text">
              Troque a complexidade de planilhas por uma ferramenta rápida e
              visualmente clara para gestão de qualidade.
            </p>
          </div>
          <div className="feature-card">
            <h4 className="card-title">Automação</h4>
            <span className="card-icon">*</span>
            <p className="card-text">
              {" "}
              Unifique o processo de manutenção, ajustando defeitos e falhas em
              um único sistema integrado.
            </p>
          </div>

          <div className="feature-card">
            <h4 className="card-title">Segurança e Fluxo de Trabalho</h4>
            <i className=" bi bi-clipboard-data-fill"></i>
            <p className="card-text">
              Permita acesso e controle específicos para Auditores, Engenheiros
              e FTs através de um sistema seguro de autenticação.
            </p>
          </div>

          <div className="feature-card">
            <h4 className="card-title">Recruitment</h4>
            <span className="card-icon">*</span>
            <p className="card-text">Boost your candidate experience</p>
          </div>

          <div className="feature-card">
            <h4 className="card-title">Real Estate</h4>
            <span className="card-icon">*</span>
            <p className="card-text">View devices making products</p>
          </div>

          <div className="feature-card">
            <h4 className="card-title">Talk to sales</h4>
            <span className="card-icon">*</span>
            <p className="card-text">Request a custom solution</p>
          </div>
        </div>
      </section>
    </>
  );
}
