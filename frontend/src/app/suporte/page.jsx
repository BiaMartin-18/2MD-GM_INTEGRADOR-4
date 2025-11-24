// components/SuportePage.jsx
"use client";
import "./suporte.css";
// Certifique-se de que o caminho para Navbar está correto
import Navbar from "@/components/blocks/Navbar";
import React from "react";

const SuportePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Solicitação de Suporte Enviada! Entraremos em contato em breve."); // Lógica de API/backend
  };

  // Componente de Cartão de Contato (Simulando a estrutura do Axionet)
  const ContactCard = ({ city, address, phone, fax }) => (
    <div className="col-md-6 mb-4">
      <div className="contact-card-axionet p-4 rounded bg-light border">
        {/* Ícone de Prédio (Font Awesome) */}
        <i className="fas fa-building contact-icon-axionet mb-3"></i>
        <h6 className="fw-bold">{city}</h6>
        <p className="small text-muted mb-1">{address}</p>
        <p className="small text-muted mb-1">**Tel:** {phone}</p>
        <p className="small text-muted mb-3">**Fax:** {fax}</p>
        <a href="#" className="view-directions-axionet">
          Ver Localização <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="suporte-wrapper-content">
        <header className="hero-support-axionet">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="hero-title-axionet mb-3">
                  <span className="text-blue">Fale com</span>
                  <br />
                  <span className="text-accent-axionet">
                    Nossa Equipe de Suporte
                  </span>
                </h1>
                <p className="hero-lead-axionet">
                  Estamos aqui para ajudar você a maximizar a eficiência do
                  Controle PDI. Descreva o problema ou necessidade para que
                  nosso especialista no gerenciamento de defeitos e custos possa
                  auxiliar rapidamente.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Seção Principal (Connect with a Specialist / Formulário) */}
        <section className="py-5">
          <div className="container">
            {/* Título "Connect with a Specialist" */}
            <h2 className="section-title-specialist-axionet mb-5 text-center">
              Conecte-se  
              <span className="text-accent-axionet">
              </span>
            </h2>

            <div className="row">
              {/* Coluna Esquerda: Cartões de Contato (Departamentos/Localizações) - 5 Colunas */}
              <div className="col-lg-5">
                <div className="row">
                  {/* Card 1: Suporte Técnico (TI) - Simulado como "Boston" */}
                  <ContactCard
                    city="Suporte Técnico (TI)"
                    address="Acesso, Falhas no Sistema Controle PDI, Usabilidade."
                    phone="+55 (11) 9876-5432"
                    fax="+55 (11) 1234-5678"
                  />

                  {/* Card 2: Qualidade e Custos - Simulado como "Austin" */}
                  <ContactCard
                    city="Qualidade e Custos"
                    address="Ajuste de Custos, Classificação de Defeitos, Fluxos de Trabalho."
                    phone="+55 (11) 9123-4567"
                    fax="+55 (11) 9988-7766"
                  />

                  {/* Card 3: Auditoria e Dados - Simulado como "Arlington" */}
                  <ContactCard
                    city="Auditoria e Dados"
                    address="Extração de Relatórios, Dados de Performance, Requisitos de Auditoria."
                    phone="+55 (11) 9000-1111"
                    fax="+55 (11) 2222-3333"
                  />

                  {/* Card 4: Comercial - Simulado como "Tampa" */}
                  <ContactCard
                    city="Comercial"
                    address="Novos Projetos, Proposta de Serviço, Demonstração do Produto."
                    phone="+55 (11) 9456-7890"
                    fax="+55 (11) 4444-5555"
                  />
                </div>
              </div>

              {/* Coluna Direita: Formulário de Contato - 7 Colunas */}
              <div className="col-lg-7">
                <div className="form-discussion-card-axionet p-5 shadow rounded">
                  <h4 className="mb-4 fw-bold">Inicie a Conversa Conosco</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Primeira Linha: Nome e Sobrenome */}
                      <div className="col-md-6">
                        <label
                          htmlFor="firstName"
                          className="form-label small text-muted"
                        >
                          Primeiro Nome*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Seu Primeiro Nome"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="lastName"
                          className="form-label small text-muted"
                        >
                          Sobrenome*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Seu Sobrenome"
                          required
                        />
                      </div>

                      {/* Segunda Linha: E-mail e Telefone */}
                      <div className="col-md-6">
                        <label
                          htmlFor="emailAddress"
                          className="form-label small text-muted"
                        >
                          E-mail Corporativo*
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailAddress"
                          placeholder="email@gm.com"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="phone"
                          className="form-label small text-muted"
                        >
                          Telefone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="(XX) XXXX-XXXX"
                        />
                      </div>

                      {/* Terceira Linha: Área/Setor e Cargo */}
                      <div className="col-md-6">
                        <label
                          htmlFor="companyName"
                          className="form-label small text-muted"
                        >
                          Nome da Área/Setor*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          placeholder="Ex: Engenharia de Qualidade"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="jobTitle"
                          className="form-label small text-muted"
                        >
                          Cargo
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="jobTitle"
                          placeholder="Ex: Supervisor de Manutenção"
                        />
                      </div>

                      {/* Quarta Linha: Modelo de Veículo e Tipo de Solicitação (Selects) */}
                      <div className="col-md-6">
                        <label
                          htmlFor="vehicleModel"
                          className="form-label small text-muted"
                        >
                          Modelo de Veículo
                        </label>
                        <select id="vehicleModel" className="form-select">
                          <option defaultValue>Selecione o Modelo</option>
                          <option>Caminhonete K5</option>
                          <option>Sedan X10</option>
                          <option>Todos</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="issueType"
                          className="form-label small text-muted"
                        >
                          Tipo de Solicitação*
                        </label>
                        <select id="issueType" className="form-select" required>
                          <option defaultValue>Selecione o Tipo</option>
                          <option>Erro no Sistema (Bug)</option>
                          <option>Dúvida sobre Processo/Custo</option>
                          <option>Sugestão de Funcionalidade</option>
                          <option>Treinamento</option>
                        </select>
                      </div>

                      {/* Quinta Linha: Mensagem */}
                      <div className="col-12">
                        <label
                          htmlFor="message"
                          className="form-label small text-muted"
                        >
                          Mensagem
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="4"
                          placeholder="Descreva seu problema com detalhes, mencionando placas ou códigos de erro, se houver."
                          required
                        ></textarea>
                      </div>

                      {/* Sexta Linha: Checkbox e Botão */}
                      <div className="col-12 mt-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="privacyCheck"
                            required
                          />
                          <label
                            className="form-check-label small text-muted"
                            htmlFor="privacyCheck"
                          >
                            Ao enviar, concordo com o processamento dos dados
                            conforme a
                            <a
                              href="#"
                              className="text-decoration-none text-accent-axionet"
                            >
                              {" "}
                              Política de Privacidade
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          className="btn btn-lg w-100 btn-submit-axionet"
                        >
                          Enviar Solicitação
                        </button>
                      </div>
                    </div>
                  </form>
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
