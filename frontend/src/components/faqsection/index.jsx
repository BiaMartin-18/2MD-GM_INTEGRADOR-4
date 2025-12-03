"use client";
import React from "react";
import "./faqsection.css";
// Nota: O comportamento de dropdown depende da inclusão do JavaScript do Bootstrap no seu projeto Next.js.

export default function FaqSection () {
  return (
    // Container
    <div className="container faq-section py-5">
      
      {/* Row */}
      <div className="row">
        
        {/* Coluna Esquerda: Título e Introdução (5 colunas) */}
        <div className="col-md-5 mb-5 mb-md-0">
          <h2 className="texto-faq display-4 fw-bolder mb-4">
            Alguma dúvida? <br />
            Estamos aqui para ajudar.
          </h2>
          <p className="lead text-secondary mb-4">
            Nossa missão é simplificar a gestão de qualidade e manutenção de
            veículos recém-saídos da linha. Veja como podemos transformar seu
            processo interno.
          </p>
          
        </div>

        {/* Coluna Direita: Accordion/Dropdown de Perguntas (7 colunas) */}
        <div className="col-md-7">
          
          {/* Estrutura do Accordion do Bootstrap 5 */}
          <div className="accordion" id="faqAccordion">
            
            {/* Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button 
                  className="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseOne" 
                  aria-expanded="true" 
                  aria-controls="collapseOne"
                >
                  Como o novo sistema se diferencia do GSIP?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-secondary">
                  O GSIP tem uma interface desatualizada, semelhante a uma planilha.
                  Nosso projeto oferece uma interface **rápida, intuitiva e
                  moderna** com um dashboard visual, facilitando a visualização de
                  dados e a tomada de decisão.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseTwo" 
                  aria-expanded="false" 
                  aria-controls="collapseTwo"
                >
                  Quais áreas do processo são integradas pela ferramenta?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-secondary">
                  O software integra o controle de mão de obra, ajuste de
                  custos e o gerenciamento de defeitos/falhas, centralizando a
                  preparação para o cliente final.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseThree" 
                  aria-expanded="false" 
                  aria-controls="collapseThree"
                >
                  Quem terá acesso e poderá utilizar o software?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-secondary">
                  O acesso é restrito e gerenciado por Login/Cadastro. Os
                  usuários-chave incluem Auditores, Engenheiros e FTs
                  envolvidos no processo de qualidade e pós-produção.
                </div>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseFour" 
                  aria-expanded="false" 
                  aria-controls="collapseFour"
                >
                  Quais funcionalidades principais o sistema oferece?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-secondary">
                  As principais funcionalidades são: Login/Cadastro, Cadastro
                  de Veículo (incluindo Edição e Exclusão), Visualização da
                  frota e um Dashboard Geral para monitoramento de
                  indicadores.
                </div>
              </div>
            </div>
            
            {/* Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseFive" 
                  aria-expanded="false" 
                  aria-controls="collapseFive"
                >
                  Como o sistema calcula ou rastreia os custos de manutenção?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-secondary">
                  O software permite registrar todos os gastos de mão de obra e
                  peças associados a um veículo específico. Ele agrega esses dados
                  para fornecer um custo total de manutenção, auxiliando na
                  análise de desempenho e eficiência.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};