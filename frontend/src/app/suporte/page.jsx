// components/SuportePage.jsx
"use client";
import "./suporte.css";
// Certifique-se de que o caminho para Navbar está correto
import Navbar from "@/components/blocks/Navbar";
import React from "react";

// Componente para um item de FAQ (Acordeão)
const FaqItem = ({ id, title, content, isDefaultOpen = false }) => (
  <div className="accordion-item faq-item-helpplus">
    <h2 className="accordion-header" id={`heading${id}`}>
      <button
        className={`accordion-button ${isDefaultOpen ? "" : "collapsed"}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${id}`}
        aria-expanded={isDefaultOpen}
        aria-controls={`collapse${id}`}
      >
        <span className="faq-title-helpplus">{title}</span>
        {/* O ícone +/- é tratado pelo Bootstrap no accordion-button */}
      </button>
    </h2>
    <div
      id={`collapse${id}`}
      className={`accordion-collapse collapse ${isDefaultOpen ? "show" : ""}`}
      aria-labelledby={`heading${id}`}
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body faq-body-helpplus">{content}</div>
    </div>
  </div>
);

const SuportePage = () => {
  // Dados de Exemplo para a Seção FAQ, fiel ao modelo
  const faqData = [
    {
      id: 1,
      title: "Como funciona o processo de Aquisição do Controle PDI?",
      content:
        "Gerencie, audite e otimize sua frota de veículos com eficiência e precisão. Comece agora mesmo solicitando uma demonstração do produto ou falando com nosso setor Comercial.",
    },
    {
      id: 2,
      title: "Nossas informações de Pagamento são seguras?",
      content:
        "Sim, todas as informações de pagamento são processadas por uma plataforma segura de terceiros e não armazenamos dados sensíveis diretamente em nossos servidores.",
    },
    {
      id: 3,
      title: "Como solicitar um Cartão Pré-pago para serviços?",
      content:
        "Entre em contato com o departamento financeiro pelo telefone +55 (11) 9456-7890 ou abra um ticket de suporte com o setor Comercial.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="suporte-wrapper-content">
        {/* === 1. Hero Section com Design Fiel ao HelpCenter === */}
        <header className="hero-support-axionet">
          <div className="container py-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                {/* Título Principal Fiel ao Modelo */}
                <h1 className="hero-title-helpplus mb-3">
                  <span className="text-accent-helpplus">Olá,</span> como
                  podemos ajudar?
                </h1>

                {/* Bloco de Pesquisa Estilizado Fiel ao Modelo */}
                <div className="search-block-helpplus mx-auto">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="d-flex justify-content-center"
                  >
                    <input
                      type="text"
                      className="form-control search-input-helpplus"
                      placeholder="Pergunte algo ou insira um código de erro..."
                    />
                    <button type="submit" className="btn btn-search-helpplus">
                      Buscar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Cartões de Categoria Diretamente no Hero, Fiel ao Modelo */}
          <div className="container category-cards-wrapper-helpplus">
            {/* Texto solicitado antes dos cards: "ou escolha uma das opções abaixo" */}
            <p className="hero-lead-helpplus mb-5">
              ou escolha uma das opções abaixo para encontrar rapidamente a
              ajuda que você precisa
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row justify-content-center g-3">
                  {/* Cartão 1: Getting Started */}
                  <div className="col-md-3 col-6">
                    <div className="category-card-helpplus text-center p-4 d-flex gap-3">
                      {/* Ícone de Bandeira/Flag - Font Awesome */}
                      <i className="bi bi-menu-up"></i>
                      <h6 className="fw-bold mb-0">Primeiros Passos</h6>
                    </div>
                  </div>

                  {/* Cartão 2: Pricing & Plans (Destacado - Fiel ao Laranja) */}
                  <div className="col-md-3 col-6">
                    <div className="category-card-helpplus active text-center p-4 d-dlex d-flex gap-3">
                      {/* Ícone de Câmera/Preços - Fiel ao ícone do modelo */}
                     <i className="bi bi-key"></i>
                      <h6 className="fw-bold mb-0">Acesso ao sistema</h6>
                    </div>
                  </div>

                  {/* Cartão 3: Sales Question */}
                  <div className="col-md-3 col-6">
                    <div className="category-card-helpplus text-center p-4 d-flex gap-3">
                      {/* Ícone de Dólar/Vendas - Font Awesome */}
             <i className="bi bi-box-arrow-in-right"></i>
                      <h6 className="fw-bold mb-0">Login e Cadastro</h6>
                    </div>
                  </div>

                  {/* Cartão 4: Usage Guides */}
                  <div className="col-md-3 col-6">
                    <div className="category-card-helpplus text-center p-4 d-flex gap-3">
                      {/* Ícone de Livro/Guia - Font Awesome */}
                      <i className="bi bi-stack-overflow"></i>
                      <h6 className="fw-bold mb-0">Guias de Uso</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* === 2. Seção FAQ (Perguntas Frequentes) - Fiel ao Modelo === */}
        <section className="faq-section-helpplus py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Título "Pricing Plans" Fiel ao Modelo */}
                <h2 className="faq-main-title-helpplus text-center mb-1">
                  Custos & Planos
                </h2>
                <p className="faq-main-lead-helpplus text-center mb-5">
                  Aqui você encontrará informações detalhadas sobre os custos e
                  o fluxo de trabalho.
                </p>

                {/* Acordeão de Perguntas */}
                <div className="accordion" id="faqAccordion">
                  {faqData.map((item, index) => (
                    <FaqItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      content={item.content}
                      isDefaultOpen={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SuportePage;
