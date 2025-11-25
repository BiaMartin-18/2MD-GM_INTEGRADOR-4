"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/blocks/Navbar";
import "./auditor.css";

// Funções para chamar o backend
async function createVeiculo(veiculo) {
  const resp = await fetch("http://localhost:3001/api/auditoriasveiculos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veiculo),
  });
  return await resp.json();
}

async function updateVeiculo(veiculo) {
  const resp = await fetch(`http://localhost:3001/api/auditoriasveiculos/${veiculo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veiculo),
  });
  return await resp.json();
}

async function deleteVeiculo(id) {
  const resp = await fetch(`http://localhost:3001/api/auditoriasveiculos/${id}`, {
    method: "DELETE",
  });
  return await resp.json();
}

// HeroSectionCRUD
const HeroSectionCRUD = () => (
  <section className="hero-frontier-style position-relative">
    <div className="container position-relative z-2 py-5">
      <div className="row align-items-center">
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
              <span className="text">Começar Agora</span>
              <span className="circle"></span>
            </button>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 position-relative d-flex justify-content-center">
          <Image
            src="/imagens/tracker-GM.jpg"
            alt="Gerenciamento de veículos"
            width={900}
            height={680}
            className="hero-image-frontier shadow-lg"
            priority
          />
          <div className="overlay-label-frontier top-right-label-frontier shadow-sm">
            <i className="bi bi-wrench icone"></i>
            <p className="label-text-frontier">Edição de Auditorias</p>
          </div>
          <div className="overlay-label-frontier middle-left-label-frontier shadow-sm">
            <i className="bi bi-wrench-adjustable icone"></i>
            <p className="label-text-frontier">Registro de Defeitos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function VeiculosCRUD() {
  const [veiculos, setVeiculos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVeiculo, setCurrentVeiculo] = useState(null);
  const [form, setForm] = useState({
    id: null,
    placa: "",
    modelo: "",
    defeito: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Buscar dados da API
  useEffect(() => {
    async function fetchAuditorias() {
      try {
        const resp = await fetch("http://localhost:3001/api/auditoriasveiculos");
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();

        const veiculosTransformados = data.map((item) => ({
          id: item.part_number ?? `${Math.random().toString(36).slice(2, 9)}`,
          placa: item.part_number ?? "—",
          modelo: item.modelo ?? "—",
          defeito: item.defeito ?? "—",
          auditoria: {
            descricao: item.descrição ?? item.descricao ?? "—",
            grau: item.grau_defeito ?? "—",
            status: item.status_veiculo ?? "—",
            data: item.data_auditoria ?? "—",
            resultado: item.resultado ?? "—",
            responsavel: item.auditor_responsavel ?? "—",
          },
        }));

        setVeiculos(veiculosTransformados);
      } catch (err) {
        console.error("Erro ao buscar auditorias:", err);
      }
    }
    fetchAuditorias();
  }, []);

  const openModal = (veiculo = null) => {
    if (veiculo) {
      setCurrentVeiculo(veiculo);
      setForm({
        id: veiculo.id ?? null,
        placa: veiculo.placa ?? "",
        modelo: veiculo.modelo ?? "",
        defeito: veiculo.defeito ?? "",
      });
    } else {
      setCurrentVeiculo(null);
      setForm({ id: null, placa: "", modelo: "", defeito: "" });
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

  // Salvar (POST ou PUT)
  const handleSave = async (e) => {
    e.preventDefault();

    const veiculoData = {
      part_number: form.placa,
      modelo: form.modelo,
      defeito: form.defeito,
      descricao: form.defeito,
      grau_defeito: "Leve",
      status_veiculo: "Pendente",
      data_auditoria: new Date().toISOString(),
      resultado: "—",
      auditor_responsavel: "—",
    };

    try {
      let savedVeiculo;
      if (currentVeiculo) {
        savedVeiculo = await updateVeiculo({ ...veiculoData, id: currentVeiculo.id });
        setVeiculos((prev) =>
          prev.map((v) => (v.id === currentVeiculo.id ? savedVeiculo : v))
        );
      } else {
        savedVeiculo = await createVeiculo(veiculoData);
        setVeiculos((prev) => [...prev, savedVeiculo]);
      }
      closeModal();
    } catch (err) {
      console.error("Erro ao salvar veículo:", err);
    }
  };

  // Deletar
  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja excluir este veículo?")) return;

    try {
      await deleteVeiculo(id);
      setVeiculos((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error("Erro ao deletar veículo:", err);
    }
  };

  const filteredVeiculos = veiculos.filter(
    (v) =>
      (v.placa && v.placa.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (v.modelo && v.modelo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <HeroSectionCRUD />

      <section className="features-section veiculos-crud-section">
        <div className="crud-container">
          <h3 className="section-subtitle">VISÃO GERAL</h3>
          <h2 className="section-title">Painel de Controle de Veículos</h2>
          <p className="section-description">
            Utilize as ferramentas abaixo para gerenciar os veículos da sua frota.
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
                  data-status={veiculo.defeito && veiculo.defeito !== "—" ? "pendente" : "ok"}
                >
                  <div className="card-header">
                    <h4 className="card-title">{veiculo.placa}</h4>
                    <i className="bi bi-car-front"></i>
                  </div>

                  <p className="card-text"><strong>Modelo:</strong> {veiculo.modelo}</p>
                  <p className="card-text"><strong>Defeito:</strong> {veiculo.defeito}</p>

                  <hr />
                  <p className="card-text"><strong>Descrição:</strong> {veiculo.auditoria?.descricao ?? "—"}</p>
                  <p className="card-text"><strong>Grau do Defeito:</strong> {veiculo.auditoria?.grau ?? "—"}</p>
                  <p className="card-text"><strong>Status:</strong> {veiculo.auditoria?.status ?? "—"}</p>
                  <p className="card-text"><strong>Data Auditoria:</strong> {veiculo.auditoria?.data ?? "—"}</p>
                  <p className="card-text"><strong>Resultado:</strong> {veiculo.auditoria?.resultado ?? "—"}</p>
                  <p className="card-text"><strong>Auditor:</strong> {veiculo.auditoria?.responsavel ?? "—"}</p>

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
              <p className="section-description no-results">
                Nenhum veículo encontrado.
              </p>
            )}
          </div>
        </div>
      </section>

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
                <label>Defeito:</label>
                <input
                  type="text"
                  name="defeito"
                  value={form.defeito}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={closeModal} className="cancel-btn">
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
