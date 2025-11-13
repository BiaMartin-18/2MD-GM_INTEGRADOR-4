"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/blocks/Navbar";
import FinisherParticles from "../components/FinisherParticles";
import FaqSection from '../components/faqsection/index.jsx';

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
            <p className="card-text">
              Monitore e ajuste os custos de retrabalho e peças automaticamente,
              oferecendo uma visão imediata do impacto financeiro de cada
              ajuste.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-header">
              <h4 className="card-title">Acesso Hierárquico</h4>
              <i className="bi bi-person-vcard-fill"></i>
            </div>
            <p className="card-text">
              Garanta que cada usuário (Administrador, Engenheiro, Operador)
              veja apenas as informações e ferramentas relevantes para sua
              função, otimizando o foco.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-header">
              <h4 className="card-title">Registro de Veículos</h4>
              <i className="bi bi-car-front"></i>
            </div>
            <p className="card-text">
              Crie, edite e exclua cadastros de veículos de forma simplificada.
              O sistema armazena todo o histórico de ajustes e defeitos para
              auditoria.
            </p>
          </div>
        </div>
      </section>
      <section className="mission-section position-relative">
        {/* Imagem de fundo que preenche toda a seção */}
        <Image
          src="/imagens/Operadores-GM.jpg"
          alt="Carro linha GM"
          layout="fill"
          objectFit="cover"
          className="mission-bg-image"
        />
        {/* Overlay para escurecer a imagem e melhorar o contraste */}
        <div className="mission-bg-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        {/* Conteúdo do cartão da missão, posicionado sobre a imagem */}
        <div className="container position-relative z-2 h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10">
              {" "}
              {/* Colunas ajustadas para o card */}
              <div className="mission-card bg-white p-5 rounded shadow">
                <p
                  className="text-uppercase text-secondary fw-semibold mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Controle PDI
                </p>
                <h2 className="display-6 fw-bold mb-4">
                  Maximize a Margem de Lucro e
                  <span className="text-primary">
                    {" "}
                    corte os custos de retrabalho em manutenção.
                  </span>
                </h2>
                <p
                  className="text-muted lead mb-4"
                  style={{ fontSize: "1rem" }}
                >
                  Nosso Objetivo: Transformar a gestão interna, substituindo a
                  interface desatualizada e complexa do GSIP (semelhante a uma
                  planilha) por uma ferramenta rápida e intuitiva.
                </p>

                <div className="d-flex align-items-center gap-5">
                  <a
                    href="#"
                    className="text-dark text-decoration-none fw-semibold"
                  >
                    Acesse o painel de Dashboard
                  </a>
                  <div className="d-flex gap-2">
                    <button className="button-dashboard   d-flex align-items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5} // Corrigido de stroke-width
                        stroke="currentColor"
                        className="w-6 h-6" // Corrigido de class
                      >
                        <path
                          strokeLinecap="round" // Corrigido de stroke-linecap
                          strokeLinejoin="round" // Corrigido de stroke-linejoin
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        ></path>
                      </svg>

                      <div className="text">Painel Dashboard</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection/>
    </>
  );
}
