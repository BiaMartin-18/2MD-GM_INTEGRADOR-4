"use client ";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./faqsection.css";
// Não precisamos importar 'Accordion' ou 'Accordion.Item'

export default function  FaqSection  ()  {
  return (
    <Container className="faq-section py-5">
      <Row>
        {/* Coluna Esquerda: Título e Introdução (5 colunas) */}
        <Col md={5} className="mb-5 mb-md-0">
          <h2 className="display-4 fw-bolder mb-4">
            Alguma dúvida? <br />
            Estamos aqui para ajudar.
          </h2>
          <p className="lead text-secondary mb-4">
            Nossa missão é simplificar a gestão de qualidade e manutenção de
            veículos recém-saídos da linha. Veja como podemos transformar seu
            processo interno.
          </p>
          <a href="#" className="text-primary fw-bold text-decoration-none">
            Mais Perguntas Frequentes &rarr;
          </a>
        </Col>

        {/* Coluna Direita: Lista Estática de Perguntas (7 colunas) */}
        <Col md={7}>
          {/* Item 1 */}
          <div className="faq-static-item border-top pt-4 pb-3">
            <h5 className="faq-static-header fw-bold mb-2">
              Como o novo sistema se diferencia do GSIP?
            </h5>
            <p className="text-secondary mb-0">
              O GSIP tem uma interface desatualizada, semelhante a uma planilha.
              Nosso projeto oferece uma interface **rápida, intuitiva e
              moderna** com um dashboard visual, facilitando a visualização de
              dados e a tomada de decisão.
            </p>
          </div>

          {/* Item 2 */}
          <div className="faq-static-item border-top pt-4 pb-3">
            <h5 className="faq-static-header fw-bold mb-2">
              Quais áreas do processo são integradas pela ferramenta?
            </h5>
            <p className="text-secondary mb-0">
              O software integra o controle de **mão de obra**, **ajuste de
              custos** e o **gerenciamento de defeitos/falhas**, centralizando a
              preparação para o cliente final.
            </p>
          </div>

          {/* Item 3 */}
          <div className="faq-static-item border-top pt-4 pb-3">
            <h5 className="faq-static-header fw-bold mb-2">
              Quem terá acesso e poderá utilizar o software?
            </h5>
            <p className="text-secondary mb-0">
              O acesso é restrito e gerenciado por **Login/Cadastro**. Os
              usuários-chave incluem **Auditores**, **Engenheiros** e **FTs**
              envolvidos no processo de qualidade e pós-produção.
            </p>
          </div>

          {/* Item 4 */}
          <div className="faq-static-item border-top pt-4 pb-3">
            <h5 className="faq-static-header fw-bold mb-2">
              Quais funcionalidades principais o sistema oferece?
            </h5>
            <p className="text-secondary mb-0">
              As principais funcionalidades são: **Login/Cadastro**, **Cadastro
              de Veículo** (incluindo Edição e Exclusão), **Visualização da
              frota** e um **Dashboard Geral** para monitoramento de
              indicadores.
            </p>
          </div>

          {/* Item 5 - Último Item, precisa da linha de baixo */}
          <div className="faq-static-item border-top border-bottom pt-4 pb-3">
            <h5 className="faq-static-header fw-bold mb-2">
              Como o sistema calcula ou rastreia os custos de manutenção?
            </h5>
            <p className="text-secondary mb-0">
              O software permite registrar todos os gastos de mão de obra e
              peças associados a um veículo específico. Ele agrega esses dados
              para fornecer um **custo total de manutenção**, auxiliando na
              análise de desempenho e eficiência.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

