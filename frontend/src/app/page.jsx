"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/blocks/Navbar";
import FinisherParticles from "../components/FinisherParticles";

export default function Home() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <section className="hero section">
          <FinisherParticles />
          {/* Conteúdo do Hero - Deve ficar acima do FinisherParticles */}
          <div className="heroContent">
            {/* Título */}
            <h1 className="titulo text-white fw-bold">
              Otimize o input de defeitos e<br /> acelere a apuração de
              qualidade.
            </h1>

            {/* Descrição */}
            <p className="description text-white ">
              Garanta a qualidade, reduza o retrabalho e mantenha o
              monitoramento total.
            </p>

            <button className="botao-ferramenta">
              Conheça a Ferramenta
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </section>
      </div>

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
            <div className="card-header">
              <h4 className="card-title">Usabilidade</h4>
              <i className="bi bi-folder2-open"></i>
            </div>
            <p className="card-text">
              Troque a complexidade de planilhas por uma ferramenta rápida e
              visualmente clara para gestão de qualidade.
            </p>
          </div>
          <div className="feature-card">
            <div className="card-header">
              <h4 className="card-title">Automação</h4>
              <i className="bi bi-lightning-fill"></i>
            </div>
            <p className="card-text">
              {" "}
              Unifique o processo de manutenção, ajustando defeitos e falhas em
              um único sistema integrado.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-header">
              <h4 className="card-title">Segurança e Fluxo de Trabalho</h4>
              <i className=" bi bi-clipboard-data-fill"></i>
            </div>
            <p className="card-text">
              Permita acesso e controle específicos para Auditores, Engenheiros
              e FTs através de um sistema seguro de autenticação.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-header">
              <h4 className="card-title">Gestão de Custos</h4>
              <i className="bi bi-cash-coin"></i>
            </div>
            <p className="card-text">Monitore e ajuste os custos de retrabalho e peças automaticamente, oferecendo uma visão imediata do impacto financeiro de cada ajuste.</p>
          </div>

          <div className="feature-card">
            <div className="card-header">
            <h4 className="card-title">Acesso Hierárquico</h4>
           <i className="bi bi-person-vcard-fill"></i>
            </div>
            <p className="card-text">Garanta que cada usuário (Administrador, Engenheiro, Operador) veja apenas as informações e ferramentas relevantes para sua função, otimizando o foco.</p>
          </div>

          <div className="feature-card">
            <div className="card-header">
            <h4 className="card-title">Registro de Veículos</h4>
            <i className="bi bi-car-front"></i>
            </div>
            <p className="card-text">Crie, edite e exclua cadastros de veículos de forma simplificada. O sistema armazena todo o histórico de ajustes e defeitos para auditoria.</p>
          </div>
        </div>
      </section>
    </>
  );
}
