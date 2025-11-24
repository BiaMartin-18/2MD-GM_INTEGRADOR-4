"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/blocks/Navbar";
import "./auditor.css";

// Dados iniciais para simular um banco de dados
const initialVehicles = [
  {
    id: 1,
    placa: "ABC-1234",
    modelo: "GM Onix Plus",
    defeitos: 3,
    custo: 120.5,
  },
  { id: 2, placa: "DEF-5678", modelo: "GM Tracker", defeitos: 1, custo: 45.0 },
  { id: 3, placa: "GHI-9012", modelo: "GM Montana", defeitos: 0, custo: 0.0 },
];

// -------------------------------------------------------------
// NOVO COMPONENTE: Hero Section (Modelo Frontier Harvesters - Colunas Invertidas)
// -------------------------------------------------------------
const HeroSectionCRUD = () => (
  <section className="hero-frontier-style position-relative">
    <div className="container position-relative z-2 py-5">
      <div className="row align-items-center">
        {/* ------------------------------ */}
        {/* COLUNA DO TEXTO (ESQUERDA) */}
        {/* ------------------------------ */}
        <div className="col-lg-6 order-lg-1 text-white">
          <h1 className="hero-frontier-title fw-bold">
            Bem-vindo ao Controle PDI
          </h1>

          <p className="hero-frontier-description mb-4 p-3">
            Gerencie, audite e otimize sua frota de veículos com eficiência e
            precisão.
          </p>

          <div className="d-flex gap-3 justify-content-start">
            <button className="animated-button">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span className="text">Começar Agora</span>

              <span className="circle"></span>

              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* ------------------------------ */}
        {/* COLUNA DA IMAGEM (DIREITA) */}
        {/* ------------------------------ */}
        <div className="col-lg-6 order-lg-2 position-relative d-flex justify-content-center">
          <Image
            src="/imagens/tracker-GM.jpg"
            alt="Gerenciamento de veículos"
            width={900}
            height={680}
            className="hero-image-frontier shadow-lg"
            priority
          />

          {/* Label superior direito */}
          <div className="overlay-label-frontier top-right-label-frontier shadow-sm">
            <i className="bi bi-truck-flatbed icon-green-bg-frontier"></i>
            <p className="label-text-frontier">Gestão de Frotas</p>
          </div>

          {/* Label esquerdo do meio */}
          <div className="overlay-label-frontier middle-left-label-frontier shadow-sm">
            <i className="bi bi-wrench-adjustable icon-green-bg-frontier"></i>
            <p className="label-text-frontier">Manutenção Preditiva</p>
          </div>

          {/* Label inferior (quote) */}
          <div className="overlay-label-frontier bottom-center-label-frontier shadow-sm">
            <p className="quote-text-frontier">
              "A otimização da frota não é um custo, mas um investimento."
            </p>
            <p className="quote-author-frontier">
              <i className="bi bi-person-circle"></i> Você, CEO Controle PDI
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
// -------------------------------------------------------------

export default function VeiculosCRUD() {
  const [veiculos, setVeiculos] = useState(initialVehicles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVeiculo, setCurrentVeiculo] = useState(null);
  const [form, setForm] = useState({
    id: null,
    placa: "",
    modelo: "",
    defeitos: 0,
    custo: 0.0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = (veiculo = null) => {
    if (veiculo) {
      setCurrentVeiculo(veiculo);
      setForm(veiculo);
    } else {
      setCurrentVeiculo(null);
      setForm({ id: null, placa: "", modelo: "", defeitos: 0, custo: 0.0 });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVeiculo(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const veiculoData = {
      ...form,
      custo: parseFloat(form.custo || 0),
      defeitos: parseInt(form.defeitos || 0),
    };

    if (currentVeiculo) {
      setVeiculos((prev) =>
        prev.map((v) => (v.id === veiculoData.id ? veiculoData : v))
      );
    } else {
      const newId = Math.max(...veiculos.map((v) => v.id), 0) + 1;
      setVeiculos((prev) => [...prev, { ...veiculoData, id: newId }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja excluir este veículo?")) {
      setVeiculos((prev) => prev.filter((v) => v.id !== id));
    }
  };

  const filteredVeiculos = veiculos.filter(
    (v) =>
      v.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <HeroSectionCRUD />

      {/* A SEÇÃO DE GERENCIAMENTO CRUD VEM ABAIXO DA HERO */}
      <section className="features-section veiculos-crud-section">
        <div className="crud-container">
          <h3 className="section-subtitle">VISÃO GERAL</h3>
          <h2 className="section-title">Painel de Controle de Veículos</h2>
          <p className="section-description">
            Utilize as ferramentas abaixo para gerenciar os veículos da sua
            frota.
          </p>

          <div className="crud-actions">
            <button
              className="botao-ferramenta create-button"
              onClick={() => openModal()}
            >
              <i className="bi bi-plus-lg"></i> Novo Veículo
            </button>

            <input
              type="text"
              placeholder="Buscar por Placa ou Modelo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="cards-grid crud-grid">
            {filteredVeiculos.length > 0 ? (
              filteredVeiculos.map((veiculo) => (
                <div
                  key={veiculo.id}
                  className="feature-card veiculo-card"
                  data-status={veiculo.defeitos > 0 ? "pendente" : "ok"}
                >
                  <div className="card-header">
                    <h4 className="card-title">{veiculo.placa}</h4>
                    <i className="bi bi-car-front"></i>
                  </div>
                  <p className="card-text">**Modelo:** {veiculo.modelo}</p>
                  <p className="card-text status-text">
                    **Defeitos Pendentes:** **{veiculo.defeitos}**
                  </p>
                  <p className="card-text">
                    **Custo Estimado (R$):** {veiculo.custo.toFixed(2)}
                  </p>
                  <div className="card-actions">
                    <button
                      className="edit-btn"
                      onClick={() => openModal(veiculo)}
                    >
                      <i className="bi bi-pencil-square"></i> Editar
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(veiculo.id)}
                    >
                      <i className="bi bi-trash"></i> Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="section-description no-results">
                Nenhum veículo encontrado.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              {currentVeiculo ? "Editar Veículo" : "Novo Cadastro de Veículo"}
            </h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Placa:</label>
                <input
                  type="text"
                  name="placa"
                  value={form.placa}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Modelo:</label>
                <input
                  type="text"
                  name="modelo"
                  value={form.modelo}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Defeitos Pendentes:</label>
                <input
                  type="number"
                  name="defeitos"
                  value={form.defeitos}
                  onChange={handleChange}
                  required
                  className="form-input"
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Custo Estimado (R$):</label>
                <input
                  type="number"
                  name="custo"
                  value={form.custo}
                  onChange={handleChange}
                  required
                  className="form-input"
                  step="0.01"
                  min="0"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={closeModal}
                  className="cancel-btn"
                >
                  Cancelar
                </button>
                <button type="submit" className="save-btn">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
