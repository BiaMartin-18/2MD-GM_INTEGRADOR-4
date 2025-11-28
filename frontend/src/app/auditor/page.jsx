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
  const resp = await fetch(`http://localhost:3001/api/auditoriasveiculos/${veiculo.old_part_number}`, {
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

const HeroSectionCRUD = () => (
  <section className="hero-frontier-style position-relative">
    <div className="container position-relative z-2 py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-1 text-white">
          <h1 className="hero-frontier-title fw-bold">Bem-vindo ao Controle PDI</h1>
          <p className="hero-frontier-description mb-4 p-3">
            Gerencie, audite e otimize sua frota de veículos com eficiência e precisão.
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
        </div>
      </div>
    </div>
  </section>
);

function formatDataParaCard(isoString) {
  if (!isoString) return "—";
  const date = new Date(isoString);
  if (isNaN(date)) return isoString;

  const dia = date.getDate().toString().padStart(2, "0");
  const mes = (date.getMonth() + 1).toString().padStart(2, "0");
  const ano = date.getFullYear();
  const horas = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");

  return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
}

export default function VeiculosCRUD() {
  const [veiculos, setVeiculos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVeiculo, setCurrentVeiculo] = useState(null);

  const [form, setForm] = useState({
    id: null,
    placa: "",
    modelo: "",
    defeito: "",
    descrição: "",
    grau_defeito: "",
    status_veiculo: "",
    data_auditoria: "",
    hora_auditoria: "",
    resultado: "",
    auditor_responsavel: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  async function fetchAuditorias() {
    try {
      const resp = await fetch("http://localhost:3001/api/auditoriasveiculos");
      const data = await resp.json();

      const veiculosTransformados = data.map((item) => ({
        id: item.part_number,
        placa: item.part_number,
        modelo: item.modelo?.toLowerCase() ?? "",
        defeito: item.defeito ?? "—",
        auditoria: {
          descrição: item.descrição ?? "—",
          grau: item.grau_defeito ?? "—",
          status: item.status_veiculo ?? "—",
          data: item.data_auditoria ?? null,
          resultado: item.resultado ?? "—",
          responsavel: item.auditor_nome ?? "—",
        },
      }));

      setVeiculos(veiculosTransformados);
    } catch (err) {
      console.error("Erro ao buscar auditorias:", err);
    }
  }

  useEffect(() => {
    fetchAuditorias();
  }, []);

  const openModal = (veiculo = null) => {
    if (veiculo) {
      const dbDateTime = veiculo.auditoria?.data ?? "";
      let datePart = "";
      let timePart = "";

      if (dbDateTime) {
        const date = new Date(dbDateTime);
        if (!isNaN(date)) {
          datePart = date.toISOString().slice(0, 10);
          timePart = date.toTimeString().slice(0, 5);
        }
      }

      setCurrentVeiculo(veiculo);
      setForm({
        id: veiculo.id,
        placa: veiculo.placa,
        modelo: veiculo.modelo,
        defeito: veiculo.defeito,
        descrição: veiculo.auditoria?.descrição ?? "",
        grau_defeito: veiculo.auditoria?.grau ?? "",
        status_veiculo: veiculo.auditoria?.status ?? "",
        data_auditoria: datePart,
        hora_auditoria: timePart,
        resultado: veiculo.auditoria?.resultado ?? "",
        auditor_responsavel: veiculo.auditoria?.responsavel ?? "",
      });
    } else {
      setCurrentVeiculo(null);
      setForm({
        id: null,
        placa: "",
        modelo: "",
        defeito: "",
        descrição: "",
        grau_defeito: "",
        status_veiculo: "",
        data_auditoria: "",
        hora_auditoria: "",
        resultado: "",
        auditor_responsavel: "",
      });
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

  const handleSave = async (e) => {
    e.preventDefault();

    if (!form.placa || form.placa.length !== 8) {
    alert("A placa deve conter exatamente 8 caracteres.");
    return;
  }

    let dataAjustada = null;
    if (form.data_auditoria && form.hora_auditoria) {
      dataAjustada = `${form.data_auditoria} ${form.hora_auditoria}:00`;
    }

    const veiculoData = {
      part_number: form.placa,
      old_part_number: currentVeiculo?.placa,
      modelo: form.modelo,
      defeito: form.defeito,
      descrição: form.descrição,
      grau_defeito: form.grau_defeito,
      status_veiculo: form.status_veiculo,
      data_auditoria: dataAjustada || null,
      resultado: form.resultado || null,
      auditor_responsavel: form.auditor_responsavel || null,
    };

    try {
      if (currentVeiculo) {
        await updateVeiculo({ ...veiculoData, old_part_number: currentVeiculo.placa });
      } else {
        await createVeiculo(veiculoData);
      }

      await fetchAuditorias();
      closeModal();
    } catch (err) {
      console.error("Erro ao salvar veículo:", err);
    }
  };

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
                <div key={veiculo.id} className="feature-card veiculo-card">
                  <div className="card-header">
                    <h4 className="card-title">{veiculo.placa}</h4>
                    <i className="bi bi-car-front"></i>
                  </div>

                  <p className="card-text"><strong>Modelo:</strong> {veiculo.modelo}</p>
                  <p className="card-text"><strong>Defeito:</strong> {veiculo.defeito}</p>
                  <hr />
                  <p className="card-text"><strong>Descrição:</strong> {veiculo.auditoria?.descrição ?? "—"}</p>
                  <p className="card-text"><strong>Grau do Defeito:</strong> {veiculo.auditoria?.grau ?? "—"}</p>
                  <p className="card-text"><strong>Status:</strong> {veiculo.auditoria?.status ?? "—"}</p>
                  <p className="card-text"><strong>Data Auditoria:</strong> {formatDataParaCard(veiculo.auditoria?.data)}</p>
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
              <p className="section-description no-results">Nenhum veículo encontrado.</p>
            )}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxHeight: "90vh", overflowY: "auto" }}>
            <h3 className="modal-title">
              {currentVeiculo ? "Editar Veículo" : "Novo Cadastro de Veículo"}
            </h3>

            <form onSubmit={handleSave}>
              {/* CAMPOS OBRIGATÓRIOS */}
              {[{ label: "Placa (8 carcateres)", name: "placa" },
                { label: "Defeito", name: "defeito" },
                { label: "Descrição", name: "descrição" },
                { label: "Grau do Defeito", name: "grau_defeito" },
              ].map((field) => (
                <div className="form-group" key={field.name}>
                  <label>{field.label}:</label>
                  
                  <input
                    type="text"
                    name={field.name}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              ))}

              <div className="form-group">
  <label>Modelo:</label>
  <select
    name="modelo"
    value={form.modelo}
    onChange={handleChange}
    required
    className="form-input"
  >
    <option value="">Selecione...</option>
    <option value="spin">Spin</option>
    <option value="tracker">Tracker</option>
    <option value="montana">Montana</option>

  </select>
</div>

<div className="form-group">
  <label>Status:</label>
  <select
    name="status_veiculo"
    value={form.status_veiculo}
    onChange={handleChange}
    required
    className="form-input"
  >
    <option value="">Selecione...</option>
    <option value="manutenção">Manutenção</option>
    <option value="aguardando revisão">aguardando revisão</option>
    <option value="finalizado">finalizado</option>
  </select>
</div>


              {/* CAMPOS NÃO OBRIGATÓRIOS */}
             <div className="form-group">
  <label>Resultado:</label>
  <select
    name="resultado"
    value={form.resultado || ""}
    onChange={handleChange}
    className="form-input"
  >
    <option value="">Selecione...</option>
    <option value="Aprovado">Aprovado</option>
    <option value="Reprovado">Reprovado</option>
    <option value="Pendente">Pendente</option>
  </select>
</div>


              <div className="form-group">
                <label> * Auditor Responsável:</label>
                <input
                  type="text"
                  name="auditor_responsavel"
                  value={form.auditor_responsavel || ""}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Data da Auditoria:</label>
                <input
                  type="date"
                  name="data_auditoria"
                  value={form.data_auditoria || ""}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Hora da Auditoria:</label>
                <input
                  type="time"
                  name="hora_auditoria"
                  value={form.hora_auditoria || ""}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button type="button" onClick={closeModal} className="cancel-btn">Cancelar</button>
                <button type="submit" className="save-btn">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
