"use client";

import { useState } from "react";
import Image from "next/image"; // Importe Image para a Hero Section
import Navbar from "@/components/blocks/Navbar";
import "./auditor.css"; // Continua importando os estilos da página CRUD

// Dados iniciais para simular um banco de dados
const initialVehicles = [
  { id: 1, placa: "ABC-1234", modelo: "GM Onix Plus", defeitos: 3, custo: 120.50 },
  { id: 2, placa: "DEF-5678", modelo: "GM Tracker", defeitos: 1, custo: 45.00 },
  { id: 3, placa: "GHI-9012", modelo: "GM Montana", defeitos: 0, custo: 0.00 },
];

// -------------------------------------------------------------
// NOVO COMPONENTE: Hero Section para a página CRUD
// -------------------------------------------------------------
const HeroSectionCRUD = () => (
  <section className="hero-crud-section position-relative">
    {/* Imagem de fundo que preenche toda a seção */}
    <Image
      src='/imagens/Manuseio-GM.jpg' // CAMINHO DA SUA IMAGEM (mude conforme necessário)
      alt="Fundo de gerenciamento de veículos"
      layout="fill"
      objectFit="cover"
      className="hero-crud-bg-image"
      priority // Para carregar a imagem principal mais rápido
    />
    {/* Overlay para escurecer a imagem e melhorar o contraste */}
    <div className="hero-crud-bg-overlay position-absolute top-0 start-0 w-100 h-100"></div>

    {/* Conteúdo do Hero */}
    <div className="container position-relative z-2 h-100 d-flex align-items-center justify-content-center text-center">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <h1 className="hero-crud-title text-white fw-bold">
            Gerenciamento Completo de Veículos
          </h1>
          <p className="hero-crud-description text-white mt-3">
            Visualize, adicione, edite e remova veículos da sua frota com agilidade e precisão.
          </p>
          {/* Você pode adicionar um botão aqui se quiser, como "Ir para o Cadastro" */}
          {/* <button className="botao-ferramenta mt-4">
            Acessar Cadastro
            <i className="bi bi-arrow-right"></i>
          </button> */}
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
  const [form, setForm] = useState({ id: null, placa: "", modelo: "", defeitos: 0, custo: 0.00 });
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = (veiculo = null) => {
    if (veiculo) {
      setCurrentVeiculo(veiculo);
      setForm(veiculo);
    } else {
      setCurrentVeiculo(null);
      setForm({ id: null, placa: "", modelo: "", defeitos: 0, custo: 0.00 });
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
        defeitos: parseInt(form.defeitos || 0)
    };

    if (currentVeiculo) {
      setVeiculos((prev) =>
        prev.map(v => v.id === veiculoData.id ? veiculoData : v)
      );
    } else {
      const newId = Math.max(...veiculos.map(v => v.id), 0) + 1;
      setVeiculos((prev) => [
        ...prev,
        { ...veiculoData, id: newId },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja excluir este veículo?")) {
      setVeiculos((prev) => prev.filter(v => v.id !== id));
    }
  };

  const filteredVeiculos = veiculos.filter(v =>
    v.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
      </div>

      {/* RENDERIZA A NOVA HERO SECTION */}
      <HeroSectionCRUD />

      {/* A SEÇÃO DE GERENCIAMENTO CRUD VEM ABAIXO DA HERO */}
      <section className="features-section veiculos-crud-section">
        <div className="crud-container">

          {/* Os títulos da seção de CRUD podem ser mantidos ou ajustados, 
              mas a Hero Section já dá o contexto principal. 
              Vou deixá-los como estavam para não remover funcionalidades. */}
          <h3 className="section-subtitle">VISÃO GERAL</h3>
          <h2 className="section-title">
            Painel de Controle de Veículos
          </h2>
          <p className="section-description">
            Utilize as ferramentas abaixo para gerenciar os veículos da sua frota.
          </p>

          <div className="crud-actions">
            <button className="botao-ferramenta create-button" onClick={() => openModal()}>
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
                  <p className="card-text">
                    **Modelo:** {veiculo.modelo}
                  </p>
                  <p className="card-text status-text">
                    **Defeitos Pendentes:** **{veiculo.defeitos}**
                  </p>
                  <p className="card-text">
                    **Custo Estimado (R$):** {veiculo.custo.toFixed(2)}
                  </p>
                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => openModal(veiculo)}>
                      <i className="bi bi-pencil-square"></i> Editar
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(veiculo.id)}>
                      <i className="bi bi-trash"></i> Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="section-description no-results">Nenhum veículo encontrado.</p>
            )}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              {currentVeiculo ? 'Editar Veículo' : 'Novo Cadastro de Veículo'}
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
                <button
                  type="submit"
                  className="save-btn"
                >
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